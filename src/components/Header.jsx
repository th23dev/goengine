import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const chapters = [
  ["Início", "inicio"], ["Sobre", "sobre"], ["Serviços", "solucoes"],
  ["Projetos", "trabalho"], ["Como funciona", "processo"], ["Dúvidas", "duvidas"], ["Contato", "contato"],
];

export default function Header({ onStartProject }) {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("inicio");
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = Math.max(0, document.documentElement.scrollHeight - innerHeight);
      const progress = range ? Math.max(0, Math.min(1, scrollY / range)) : 0;
      header.current.style.setProperty("--page-progress", progress);
      header.current.dataset.scrolled = String(scrollY > 24);
      let current = "inicio";
      chapters.forEach(([, id], index) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= header.current.offsetHeight + innerHeight * .22) current = id;
        const next = document.getElementById(chapters[index + 1]?.[1]);
        const start = rect.top + scrollY - header.current.offsetHeight;
        const end = next ? next.getBoundingClientRect().top + scrollY - header.current.offsetHeight : range;
        const amount = Math.max(0, Math.min(1, (scrollY - start) / Math.max(1, end - start)));
        header.current.querySelectorAll('.chapter-segments i')[index].style.setProperty('--chapter-fill', amount);
      });
      if (progress >= .999 && range > 0) current = "contato";
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);

  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = event => { if (event.key === "Escape") { setMenu(false); toggle.current.focus(); } };
    const closeOutside = event => { if (!header.current.contains(event.target)) setMenu(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => { document.removeEventListener("keydown", closeOnEscape); document.removeEventListener("pointerdown", closeOutside); };
  }, [menu]);

  return (
    <header className="site-header" ref={header}>
      <div className="header-inner">
        <a className="header-logo" href="#inicio" aria-label="goengine — início" onClick={() => setMenu(false)}>
          <img src={`${import.meta.env.BASE_URL}logo-header-transparent.png`} alt="goengine" width="2172" height="724" />
        </a>
        <nav className={`nav-links${menu ? " expanded" : ""}`} id="main-navigation" aria-label="Principal">
          {chapters.slice(1).map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <button className="nav-cta" onClick={() => { setMenu(false); onStartProject(); }} aria-label="Vamos conversar">Vamos conversar <ArrowUpRight size={17} /></button>
        <button ref={toggle} className="menu-toggle" aria-label={menu ? "Fechar menu" : "Abrir menu"} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </div>
      <div className="header-chapter-bar">
        <div className="chapter-readout" aria-hidden="true">
          <span className="chapter-counter">0{chapters.findIndex(([, id]) => id === active) + 1}<small> / 07</small></span>
          <span className="chapter-window"><span key={active}>{chapters.find(([, id]) => id === active)?.[0]}</span></span>
        </div>
        <div className="chapter-segments" aria-hidden="true">{chapters.map(([, id]) => <i key={id} data-active={id === active} />)}</div>
      </div>
    </header>
  );
}
