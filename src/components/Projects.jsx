import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus } from "lucide-react";
import "./Projects.css";
const projects = [
  {
    name: "GO REGISTER",
    category: "Sistema de gestão comercial",
    description: "Vendas, caixa e estoque conectados em um sistema para organizar a rotina do comércio.",
    url: "https://goregister.com.br/",
    domain: "goregister.com.br",
    image: "projects/goregister.jpg",
    alt: "Página inicial do GO REGISTER com apresentação do sistema de vendas, caixa e estoque.",
    linkLabel: "Visitar GO REGISTER (abre em nova aba)",
  },
  {
    name: "Vem Viver Curuçá",
    category: "Portal de turismo",
    description: "Atrativos, experiências e informações para planejar uma visita a Curuçá, no litoral amazônico.",
    url: "https://vemvivercuruca.curuca.pa.gov.br/",
    domain: "vemvivercuruca.curuca.pa.gov.br",
    image: "projects/curuca.jpg",
    alt: "Portal Vem Viver Curuçá com paisagem natural e acesso ao guia turístico do município.",
    linkLabel: "Visitar Vem Viver Curuçá (abre em nova aba)",
  },
];
const invitations = [
  { category: "Sites e landing pages", text: "Uma presença digital com a identidade da sua marca." },
  { category: "Sistemas sob medida", text: "Uma solução pensada para os desafios do seu negócio." },
  { category: "Aplicativos", text: "Sua ideia conectada às pessoas, em qualquer tela." },
];
export default function Projects({ onStartProject }) {
  const track = useRef(null);
  const [position, setPosition] = useState({ start: true, end: false });
  useEffect(() => {
    const element = track.current;
    const update = () => setPosition({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, []);
  const move = (direction) => {
    const element = track.current;
    const cards = [...element.children];
    const left = element.getBoundingClientRect().left;
    const inset = parseFloat(getComputedStyle(element).paddingLeft);
    const offsets = cards.map(card => card.getBoundingClientRect().left - left + element.scrollLeft - inset);
    const target = direction > 0 ? offsets.find(offset => offset > element.scrollLeft + 2) : offsets.findLast(offset => offset < element.scrollLeft - 2);
    element.scrollTo({ left: target ?? 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <section
      className="work-section [background:rgb(32,_33,_35)] p-[100px_0px] text-[rgb(245,_240,_231)]
              [@media(width<=650px)]:pt-[65px] [@media(width<=650px)]:pb-[65px] [&_h2>span]:text-[rgb(185,_183,_181)]
              [&_.eyebrow]:text-[rgb(255,_145,_125)] [&_.section-heading>p]:text-[rgb(185,_183,_181)]"
      id="trabalho"
    >
      <div
        className="layout-container w-[min(1200px,_100%_-_96px)] m-[auto] [@media(width<=650px)]:w-[calc(100%_-_40px)]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]"
      >
        <div
          className="section-heading flex justify-between items-end gap-[25px] mb-[43px] [@media(width<=650px)]:block
              [@media(width<=650px)]:mb-[30px] [&>p]:text-[19px] [&>p]:leading-[1.8] [&>p]:text-[rgb(103,_103,_107)]
              [&>p]:mb-[3px] [&>p]:[@media(width<=650px)]:mt-[20px] [&_h2]:text-[clamp(34px,_3.6vw,_53px)]
              [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.055em] [&_h2]:[font-weight:800]
              [&_h2]:[@media(width<=650px)]:text-[36px]"
        >
          <div>
            <span
              className="eyebrow block text-[13px] tracking-[1.7px] text-[var(--accent)] font-semibold mb-[20px]
              [@media(width<=650px)]:mb-[16px]"
            >
              02 / PROJETOS DA GOENGINE
            </span>
            <h2>
              Design que chama atenção.
              <br />
              <span>Experiências que ficam.</span>
            </h2>
          </div>
          <p>
            Projetos que saíram da ideia para a realidade.
            <br />
            Conheça os sites desenvolvidos pela Goengine.
          </p>
        </div>
        <div className="portfolio-controls">
          <span>Projetos reais. O próximo pode ser o seu.</span>
          <div><button type="button" aria-label="Projetos anteriores" aria-controls="projects-carousel" disabled={position.start} onClick={() => move(-1)}><ArrowLeft size={21} /></button><button type="button" aria-label="Próximos projetos" aria-controls="projects-carousel" disabled={position.end} onClick={() => move(1)}><ArrowRight size={21} /></button></div>
        </div>
        <div className="portfolio-projects" id="projects-carousel" ref={track} role="region" aria-roledescription="carrossel" aria-label="Projetos da Goengine e possibilidades para o seu negócio" tabIndex={0}>
          {projects.map(project => (
            <article key={project.name}>
              <a className="portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.linkLabel}>
                <div className="portfolio-preview">
                  <div className="portfolio-browser" aria-hidden="true"><span><i /><i /><i /></span><span>{project.domain}</span><ArrowUpRight size={16} /></div>
                  <img src={import.meta.env.BASE_URL + project.image} alt={project.alt} width="1440" height="1000" loading="lazy" />
                </div>
                <div className="portfolio-details"><span className="portfolio-category">{project.category}</span><div className="portfolio-title"><h3>{project.name}</h3><ArrowUpRight size={25} /></div><p>{project.description}</p><span className="portfolio-visit">Visitar site <ArrowUpRight size={16} /></span></div>
              </a>
            </article>
          ))}
          {invitations.map((invitation, index) => (
            <article className={`portfolio-invitation invitation-${index}`} key={invitation.category}>
              <button className="portfolio-link" type="button" onClick={onStartProject} aria-label={`Começar meu projeto: ${invitation.category}`}>
                <div className="invitation-art"><span className="invitation-kicker">ESPAÇO PARA A SUA IDEIA</span><span className="invitation-plus" aria-hidden="true"><Plus size={44} strokeWidth={1} /></span><strong>Pode ser o<br />seu projeto<span>.</span></strong><span className="invitation-number" aria-hidden="true">0{index + 3} / GOENGINE</span></div>
                <div className="portfolio-details"><span className="portfolio-category">{invitation.category}</span><div className="portfolio-title"><h3>Vamos criar juntos?</h3><ArrowUpRight size={25} /></div><p>{invitation.text}</p><span className="portfolio-visit">Começar meu projeto <ArrowUpRight size={16} /></span></div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
