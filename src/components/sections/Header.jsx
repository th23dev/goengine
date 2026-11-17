import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    <header className="site-header [--page-progress:0] [position:sticky] [top:0] [z-index:10] [height:112px] [background:#f8f7f4ed] [backdrop-filter:blur(18px)] [border-bottom:1px_solid_#deddd8] [transition:box-shadow_.3s,_background_.3s] [&[data-scrolled=true]]:[background:#f8f7f4f5] [&[data-scrolled=true]]:[box-shadow:0_8px_30px_#37231809] [@media(max-width:_1100px)]:[height:104px]" ref={header}>
      <div className="header-inner [width:min(1200px,_calc(100%_-_96px))] [height:80px] [margin:auto] [display:flex] [align-items:center] [justify-content:space-between] [gap:16px] [@media(min-width:_1500px)]:[width:min(1280px,_calc(100%_-_160px))] [@media(max-width:_1100px)]:[width:calc(100%_-_40px)] [@media(max-width:_1100px)]:[height:72px] [@media(max-width:_1100px)]:[gap:10px]">
        <a className="header-logo [display:block] [position:relative] [width:210px] [height:45px] [flex-shrink:0] [overflow:hidden] [&_img]:[display:block] [&_img]:[position:absolute] [&_img]:[width:116%] [&_img]:[max-width:none] [&_img]:[height:auto] [&_img]:[left:-7.6%] [&_img]:[top:-43%] [@media(max-width:_650px)]:[width:170px] [@media(max-width:_650px)]:[height:36px]" href="#inicio" aria-label="goengine — início" onClick={() => setMenu(false)}>
          <img src={`${import.meta.env.BASE_URL}logo-header-transparent.png`} alt="goengine" width="2172" height="724" />
        </a>
        <nav className={`nav-links [display:flex] [position:relative] [align-items:center] [gap:2px] [&_a]:[position:relative] [&_a]:[z-index:1] [&_a]:[padding:12px_11px] [&_a]:[white-space:nowrap] [&_a]:[font-size:15px] [&_a]:[color:#60616a] [&_a]:[transition:color_.25s] [&_a:hover]:[color:var(--accent)] [&_a[aria-current]]:[color:var(--accent)] [@media(max-width:_1100px)]:[display:none] [@media(max-width:_1100px)]:[&.expanded]:[display:flex] [@media(max-width:_1100px)]:[&.expanded]:[flex-direction:column] [@media(max-width:_1100px)]:[&.expanded]:[align-items:stretch] [@media(max-width:_1100px)]:[&.expanded]:[position:absolute] [@media(max-width:_1100px)]:[&.expanded]:[top:104px] [@media(max-width:_1100px)]:[&.expanded]:[left:0] [@media(max-width:_1100px)]:[&.expanded]:[right:0] [@media(max-width:_1100px)]:[&.expanded]:[padding:18px_20px] [@media(max-width:_1100px)]:[&.expanded]:[background:var(--paper)] [@media(max-width:_1100px)]:[&.expanded]:[box-shadow:0_16px_25px_#17171912] [@media(max-width:_1100px)]:[&.expanded]:[border-bottom:1px_solid_#ded8cf] [@media(max-width:_1100px)]:[&.expanded]:[max-height:calc(100dvh_-_104px)] [@media(max-width:_1100px)]:[&.expanded]:[overflow-y:auto] [@media(max-width:_1100px)]:[&_a]:[font-size:17px] [@media(max-width:_1100px)]:[&_a]:[padding:13px_16px]${menu ? " expanded" : ""}`} id="main-navigation" aria-label="Principal">
          {chapters.slice(1).map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <button className="nav-cta [display:flex] [align-items:center] [justify-content:center] [flex-shrink:0] [gap:16px] [padding:15px_20px] [border-radius:30px] [background:#171719] [color:white] [font-size:15px] [white-space:nowrap] [transition:background_.2s,_translate_.2s] [&:hover]:[background:var(--accent)] [@media(max-width:_1100px)]:[margin-left:auto] [@media(max-width:_1100px)]:[padding:12px_16px] [@media(max-width:_1100px)]:[font-size:14px] [@media(max-width:_1100px)]:[gap:10px] [@media(max-width:_440px)]:[width:44px] [@media(max-width:_440px)]:[height:44px] [@media(max-width:_440px)]:[padding:0] [@media(max-width:_440px)]:[font-size:0] [@media(max-width:_440px)]:[gap:0]" onClick={() => { setMenu(false); onStartProject(); }} aria-label="Vamos conversar">Vamos conversar <ArrowUpRight size={17} /></button>
        <button ref={toggle} className="menu-toggle [display:none] [background:transparent] [color:var(--ink)] [padding:8px] [@media(max-width:_1100px)]:[display:grid] [@media(max-width:_1100px)]:[place-items:center] [@media(max-width:_1100px)]:[min-width:44px] [@media(max-width:_1100px)]:[min-height:44px]" aria-label={menu ? "Fechar menu" : "Abrir menu"} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </div>
      <div className="header-chapter-bar [height:32px] [display:flex] [align-items:center] [gap:28px] [padding:0_max(48px,_calc((100%_-_1200px)_/_2))] [@media(max-width:_1100px)]:[padding:0_20px] [@media(max-width:_1100px)]:[gap:18px]">
        <div className="chapter-readout [display:flex] [align-items:center] [gap:8px] [flex-shrink:0] [@media(max-width:_650px)]:[gap:10px]" aria-hidden="true">
          <span className="chapter-counter [font-family:Manrope,_sans-serif] [font-size:12px] [font-weight:800] [font-variant-numeric:tabular-nums] [color:var(--accent)] [&_small]:[color:#8b8279] [&_small]:[font-size:10px] [&_small]:[font-weight:500]">0{chapters.findIndex(([, id]) => id === active) + 1}<small> / 07</small></span>
          <span className="chapter-window [display:block] [overflow:hidden] [width:108px] [height:18px] [font-size:12px] [line-height:18px] [color:#514a43] [&_>_span]:[display:block] [&_>_span]:[animation:chapter-arrive_.4s_cubic-bezier(.22,1,.36,1)_both] [@media(max-width:_650px)]:[width:95px] [@media(prefers-reduced-motion:_reduce)]:[&_>_span]:[animation:none]"><span key={active}>{chapters.find(([, id]) => id === active)?.[0]}</span></span>
        </div>
        <div className="chapter-segments [display:flex] [flex:1] [gap:5px] [height:7px] [&_i]:[position:relative] [&_i]:[flex:1] [&_i]:[overflow:hidden] [&_i]:[background:#dcd6cd] [&_i]:[transform:skewX(-25deg)] [&_i::after]:[content:''] [&_i::after]:[position:absolute] [&_i::after]:[inset:0] [&_i::after]:[background:var(--accent)] [&_i::after]:[transform-origin:left] [&_i::after]:[transform:scaleX(var(--chapter-fill,_0))] [&_i[data-active=true]]:[background:#edc5b4] [@media(max-width:_650px)]:[gap:3px] [@media(max-width:_650px)]:[height:6px]" aria-hidden="true">{chapters.map(([, id]) => <i key={id} data-active={id === active} />)}</div>
      </div>
    </header>
  );
}
