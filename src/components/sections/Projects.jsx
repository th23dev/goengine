import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus } from "lucide-react";
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
  {
    name: "Terminal de Navegação Turística",
    category: "Totem turístico interativo",
    description: "Uma experiência de navegação criada para o totem da Secretaria de Turismo de Curuçá, apresentando atrações e informações úteis aos visitantes.",
    url: "https://th23dev.github.io/sec-turismo-curuca/",
    domain: "th23dev.github.io/sec-turismo-curuca",
    image: "projects/totem-curuca.jpg",
    alt: "Tela inicial do Terminal de Navegação Turística de Curuçá, desenvolvido para uso em totem da Secretaria de Turismo.",
    linkLabel: "Visitar Terminal de Navegação Turística de Curuçá (abre em nova aba)",
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
      className="work-section [overflow:clip] [background:rgb(32,_33,_35)] p-[100px_0px] text-[rgb(245,_240,_231)]
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
              className="eyebrow mb-5 block text-[13px] font-semibold tracking-[1.7px] text-accent max-[650px]:mb-4"
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
        <div className="portfolio-controls [&_button]:border-2! [&_button]:border-[#f4e7d5]! [&_button]:shadow-[3px_3px_0_#0e0d0c] [&_button]:transition-[background-color,box-shadow,translate]! [&_button:hover:not(:disabled)]:-translate-y-0.5 [&_button:hover:not(:disabled)]:shadow-[4px_5px_0_#0e0d0c] motion-reduce:[&_button]:transition-none [display:flex] [align-items:center] [justify-content:space-between] [gap:20px] [margin-bottom:20px] [&_>_span]:[color:#bcbab7] [&_>_span]:[font-size:16px] [&_>_span]:[line-height:1.5] [&_>_div]:[display:flex] [&_>_div]:[gap:10px] [&_button]:[display:grid] [&_button]:[place-items:center] [&_button]:[width:46px] [&_button]:[height:46px] [&_button]:[border-radius:50%] [&_button]:[background:transparent] [&_button]:[border:1px_solid_#ffffff40] [&_button]:[color:#fff] [&_button]:[transition:background_.2s] [&_button:hover:not(:disabled)]:[background:var(--accent)] [&_button:disabled]:[opacity:.3] [&_button:disabled]:[cursor:default] [@media(max-width:_650px)]:[&_>_span]:[font-size:14px]">
          <span>Projetos reais. O próximo pode ser o seu.</span>
          <div><button type="button" aria-label="Projetos anteriores" aria-controls="projects-carousel" disabled={position.start} onClick={() => move(-1)}><ArrowLeft size={21} /></button><button type="button" aria-label="Próximos projetos" aria-controls="projects-carousel" disabled={position.end} onClick={() => move(1)}><ArrowRight size={21} /></button></div>
        </div>
        <div className="portfolio-projects [--carousel-inset:max(48px,_calc((100vw_-_1200px)_/_2))] [display:flex] [gap:28px] [width:100vw] [margin-left:calc((100%_-_100vw)_/_2)] [overflow-x:auto] [overflow-y:hidden] [scroll-snap-type:x_mandatory] [scroll-padding-inline:var(--carousel-inset)] [overscroll-behavior-x:contain] [padding:8px_var(--carousel-inset)_25px] [scrollbar-width:none] [mask-image:linear-gradient(to_right,_transparent,_black_6%,_black_94%,_transparent)] [&::-webkit-scrollbar]:[display:none] [&_>_article]:[flex:0_0_clamp(300px,_39vw,_530px)] [&_>_article]:[min-width:0] [&_>_article]:[scroll-snap-align:start] [&_.portfolio-link:focus-visible]:[outline-offset:-4px] [@media(min-width:_1500px)]:[--carousel-inset:max(80px,_calc((100vw_-_1280px)_/_2))] [@media(min-width:_651px)_and_(max-width:_1000px)]:[--carousel-inset:28px] [@media(max-width:_650px)]:[--carousel-inset:20px] [@media(max-width:_650px)]:[gap:18px] [@media(max-width:_650px)]:[mask-image:linear-gradient(to_right,_transparent,_black_5%,_black_95%,_transparent)] [@media(max-width:_650px)]:[&_>_article]:[flex-basis:82vw]" id="projects-carousel" ref={track} role="region" aria-roledescription="carrossel" aria-label="Projetos da Goengine e possibilidades para o seu negócio" tabIndex={0}>
          {projects.map(project => (
            <article key={project.name}>
              <a className="portfolio-link group [display:flex] [flex-direction:column] [height:100%] [border-radius:12px] [&:hover_img]:[transform:scale(1.025)] [&:hover_.portfolio-title_>_svg]:[transform:translate(3px,_-3px)] [@media(prefers-reduced-motion:_reduce)]:[&:hover_img]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:[&:hover_.portfolio-title_>_svg]:[transform:none]" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.linkLabel}>
                <div className="portfolio-preview border-2! border-ink! rounded-[18px]! shadow-[5px_5px_0_#0e0d0c] transition-[box-shadow,translate] duration-300 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_#0e0d0c] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 [display:grid] [grid-template-rows:42px_minmax(0,_1fr)] [aspect-ratio:1.3] [flex-shrink:0] [overflow:hidden] [border:1px_solid_#ffffff20] [border-radius:12px] [background:#f5f6fa] [&_img]:[display:block] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[min-height:0] [&_img]:[object-fit:cover] [&_img]:[object-position:top] [&_img]:[transition:transform_.5s_ease]">
                  <div className="portfolio-browser bg-[#f4e7d5]! text-[#57504a]! border-b-2 border-ink [display:flex] [justify-content:space-between] [align-items:center] [gap:12px] [padding:13px_16px] [background:#e9ebf0] [color:#5e6470] [font-size:12px] [&_>_span:first-child]:[display:flex] [&_>_span:first-child]:[gap:5px] [&_>_span:first-child]:[flex-shrink:0] [&_>_span:nth-child(2)]:[overflow:hidden] [&_>_span:nth-child(2)]:[text-overflow:ellipsis] [&_>_span:nth-child(2)]:[white-space:nowrap] [&_i]:[width:7px] [&_i]:[height:7px] [&_i]:[border-radius:50%] [&_i]:[background:#b1b6c1] [&_>_svg]:[flex-shrink:0] [@media(max-width:_650px)]:[padding:12px] [@media(max-width:_650px)]:[font-size:11px] [@media(max-width:_650px)]:[gap:8px]" aria-hidden="true"><span><i /><i /><i /></span><span>{project.domain}</span><ArrowUpRight size={16} /></div>
                  <img src={import.meta.env.BASE_URL + project.image} alt={project.alt} width="1440" height="1000" loading="lazy" />
                </div>
                <div className="portfolio-details [display:flex] [flex-direction:column] [flex:1] [padding-top:23px] [&_p]:[font-size:19px] [&_p]:[line-height:1.7] [&_p]:[color:#bcbab7] [&_p]:[max-width:480px] [&_p]:[margin-bottom:20px]"><span className="portfolio-category self-start rounded-full border border-[#ff917d]/40 bg-[#ff917d]/10 px-3 py-1 [font-size:13px] [color:#ff917d] [letter-spacing:.7px]">{project.category}</span><div className="portfolio-title [display:flex] [align-items:center] [justify-content:space-between] [gap:18px] [margin:12px_0] [&_h3]:[font-size:clamp(25px,_2.3vw,_32px)] [&_h3]:[letter-spacing:-1px] [&_>_svg]:[flex-shrink:0] [&_>_svg]:[color:#ff917d] [&_>_svg]:[transition:transform_.2s]"><h3>{project.name}</h3><ArrowUpRight size={25} /></div><p>{project.description}</p><span className="portfolio-visit [display:inline-flex] [align-items:center] [gap:10px] [margin-top:auto] [align-self:flex-start] [font-size:15px] [color:#f5f0e7] [border-bottom:1px_solid_#ffffff35] [padding-bottom:7px]">Visitar site <ArrowUpRight size={16} /></span></div>
              </a>
            </article>
          ))}
          {invitations.map((invitation, index) => (
            <article className={`portfolio-invitation [&_button]:[width:100%] [&_button]:[padding:0] [&_button]:[text-align:left] [&_button]:[background:transparent] [&_button]:[color:inherit] [&_button:hover_.invitation-plus]:[transform:rotate(90deg)] [@media(prefers-reduced-motion:_reduce)]:[&_button:hover_.invitation-plus]:[transform:none] invitation-${index}`} key={invitation.category}>
              <button className="portfolio-link group [display:flex] [flex-direction:column] [height:100%] [border-radius:12px] [&:hover_img]:[transform:scale(1.025)] [&:hover_.portfolio-title_>_svg]:[transform:translate(3px,_-3px)] [@media(prefers-reduced-motion:_reduce)]:[&:hover_img]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:[&:hover_.portfolio-title_>_svg]:[transform:none]" type="button" onClick={onStartProject} aria-label={`Começar meu projeto: ${invitation.category}`}>
                <div className="invitation-art border-2! border-ink! rounded-[18px]! shadow-[5px_5px_0_#0e0d0c] transition-[box-shadow,translate] duration-300 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_#0e0d0c] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 [position:relative] [display:flex] [flex-direction:column] [justify-content:space-between] [min-height:0] [aspect-ratio:1.3] [padding:30px] [margin-top:0] [flex-shrink:0] [border-radius:12px] [border:1px_solid_#edb399] [background:radial-gradient(circle_at_100%_0,_#ffe4c5,_transparent_65%),_#efb59f] [color:#332c29] [overflow:hidden] [&_strong]:[position:relative] [&_strong]:[font-family:Manrope,_sans-serif] [&_strong]:[font-size:clamp(28px,_3.4vw,_48px)] [&_strong]:[font-weight:800] [&_strong]:[letter-spacing:-.055em] [&_strong]:[line-height:1.12] [&_strong_>_span]:[color:var(--accent)] [@media(max-width:_650px)]:[padding:20px]"><span className="invitation-kicker [font-size:12px] [letter-spacing:1.4px] [@media(max-width:_650px)]:[font-size:10px] [@media(max-width:_650px)]:[letter-spacing:.7px]">ESPAÇO PARA A SUA IDEIA</span><span className="invitation-plus [position:absolute] [right:25px] [top:65px] [display:grid] [place-items:center] [width:80px] [height:80px] [border:1px_solid_#332c2925] [border-radius:50%] [transition:transform_.35s] [@media(max-width:_650px)]:[width:48px] [@media(max-width:_650px)]:[height:48px] [@media(max-width:_650px)]:[top:42px] [@media(max-width:_650px)]:[right:18px] [@media(max-width:_650px)]:[&_svg]:[width:28px]" aria-hidden="true"><Plus size={44} strokeWidth={1} /></span><strong>Pode ser o<br />seu projeto<span>.</span></strong><span className="invitation-number [font-size:12px] [letter-spacing:1.4px] [@media(max-width:_650px)]:[font-size:10px] [@media(max-width:_650px)]:[letter-spacing:.7px]" aria-hidden="true">0{index + 3} / GOENGINE</span></div>
                <div className="portfolio-details [display:flex] [flex-direction:column] [flex:1] [padding-top:23px] [&_p]:[font-size:19px] [&_p]:[line-height:1.7] [&_p]:[color:#bcbab7] [&_p]:[max-width:480px] [&_p]:[margin-bottom:20px]"><span className="portfolio-category self-start rounded-full border border-[#ff917d]/40 bg-[#ff917d]/10 px-3 py-1 [font-size:13px] [color:#ff917d] [letter-spacing:.7px]">{invitation.category}</span><div className="portfolio-title [display:flex] [align-items:center] [justify-content:space-between] [gap:18px] [margin:12px_0] [&_h3]:[font-size:clamp(25px,_2.3vw,_32px)] [&_h3]:[letter-spacing:-1px] [&_>_svg]:[flex-shrink:0] [&_>_svg]:[color:#ff917d] [&_>_svg]:[transition:transform_.2s]"><h3>Vamos criar juntos?</h3><ArrowUpRight size={25} /></div><p>{invitation.text}</p><span className="portfolio-visit [display:inline-flex] [align-items:center] [gap:10px] [margin-top:auto] [align-self:flex-start] [font-size:15px] [color:#f5f0e7] [border-bottom:1px_solid_#ffffff35] [padding-bottom:7px]">Começar meu projeto <ArrowUpRight size={16} /></span></div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
