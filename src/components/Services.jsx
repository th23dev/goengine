import "./Services.css";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Globe2,
  Smartphone,
  Monitor,
  Check,
  Bell,
  Home,
  Settings,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

const offerings = [
  {
    id: "landing",
    icon: Globe2,
    label: "Landing pages",
    title: "Uma página.\nUm próximo passo.",
    text: "Apresente sua oferta com clareza e transforme interesse em conversa. Uma experiência pensada para guiar seu cliente, do primeiro olhar ao contato.",
    tags: ["Campanhas", "Captação de leads", "Design responsivo"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Aplicativos mobile",
    title: "Seu negócio.\nNa palma da mão.",
    text: "Serviços, agendamentos e informações onde seu cliente está. Interfaces intuitivas que tornam as tarefas do dia a dia mais simples.",
    tags: ["Experiência touch", "Área do cliente", "Notificações"],
  },
  {
    id: "desktop",
    icon: Monitor,
    label: "Aplicativos de computador",
    title: "Menos tarefas.\nMais possibilidades.",
    text: "Organize processos, acompanhe informações e conecte sua equipe. Software sob medida para o jeito que sua operação funciona.",
    tags: ["Gestão", "Automações", "Integrações"],
  },
];

function Preview({ type }) {
  if (type === "landing")
    return (
      <div
        className="service-browser service-device
              [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))]
              opacity-[calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0px_22px_45px] w-[88%]
              [border:1px_solid_rgb(203,_208,_214)] rounded-[9px] overflow-hidden [background:rgb(255,_255,_255)]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
      >
        <div
          className="service-window h-[5cqw] flex items-center gap-[0.7cqw] p-[0px_2cqw] [background:rgb(233,_236,_241)]
              [&_i]:w-[1cqw] [&_i]:h-[1cqw] [&_i]:rounded-[50%] [&_i]:[background:rgb(239,_168,_155)]
              [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)]
              [&>span]:text-[1.3cqw] [&>span]:text-[rgb(116,_124,_135)] [&>span]:ml-[4cqw]"
        >
          <i />
          <i />
          <i />
          <span>goengine / sua próxima ideia</span>
        </div>
        <div
          className="landing-demo [background:rgb(248,_245,_237)] text-[rgb(36,_46,_41)] relative p-[4cqw] overflow-hidden
              [&>small]:text-[1cqw] [&>small]:tracking-[0.13cqw] [&_h4]:relative [&_h4]:z-[1] [&_h4]:text-[6cqw]
              [&_h4]:leading-[1.05] [&_h4]:tracking-[-0.3cqw] [&_h4]:m-[2.5cqw_0px] [&_h4_em]:text-[var(--accent)]
              [&_h4_em]:[font-family:Georgia,_serif] [&_h4_em]:font-normal [&_p]:text-[1.4cqw] [&_p]:leading-[1.7]
              [&_p]:text-[rgb(114,_117,_110)]"
        >
          <div
            className="demo-brand text-[2.5cqw] tracking-[-0.1cqw] [font-weight:750] flex justify-between items-center mb-[6cqw]
              [&_span]:text-[0.95cqw] [&_span]:tracking-[0.15cqw] [&_span]:font-medium"
          >
            goengine<span>ESTÚDIO DIGITAL ↗</span>
          </div>
          <small>FEITO PARA O SEU PRÓXIMO PASSO</small>
          <h4>
            Boas ideias
            <br />
            merecem <em>espaço.</em>
          </h4>
          <p>
            Uma experiência que conecta sua marca
            <br />
            às pessoas certas.
          </p>
          <span
            className="demo-cta inline-flex gap-[3cqw] items-center p-[1.8cqw_2.4cqw] mt-[3cqw] rounded-[5cqw]
              [background:var(--accent)] text-[rgb(255,_255,_255)] text-[1.3cqw] [&_svg]:w-[2cqw] [&_svg]:h-[2cqw]"
          >
            Vamos começar <ArrowUpRight />
          </span>
          <div
            className="landing-sculpture absolute w-[28cqw] h-[29cqw] right-[-2cqw] top-[14cqw]
              [transform:rotate(calc(-25deg_+_var(--scene-progress)_*_12deg))] [&_i]:absolute [&_i]:inset-[0px]
              [&_i]:[border:5cqw_solid_rgb(217,_54,_34)] [&_i]:rounded-[50%]
              [&_i]:[box-shadow:rgba(106,_19,_10,_0.4)_1cqw_1cqw_3cqw_inset,_rgba(127,_52,_25,_0.17)_2cqw_2cqw_3cqw]
              [&_i:nth-child(2)]:inset-[3cqw_-3cqw_-3cqw_3cqw] [&_i:nth-child(2)]:[border-color:rgb(237,_107,_69)]
              [&_i:nth-child(3)]:inset-[6cqw_-6cqw_-6cqw_6cqw] [&_i:nth-child(3)]:[border-color:rgb(243,_179,_149)]
              [@media(prefers-reduced-motion:_reduce)]:[transform:rotate(-13deg)]"
          >
            <i />
            <i />
            <i />
          </div>
          <div
            className="landing-demo-bottom flex justify-between items-center [border-top:1px_solid_rgb(220,_216,_208)] mt-[5cqw]
              pt-[2cqw] text-[0.95cqw] tracking-[0.1cqw] [&_svg]:w-[2cqw] [&_svg]:h-[2cqw]"
          >
            <span>ESTRATÉGIA · DESIGN · TECNOLOGIA</span>
            <ArrowDown />
          </div>
        </div>
      </div>
    );
  if (type === "mobile")
    return (
      <>
        <div
          className="service-phone service-device
              [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))]
              opacity-[calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0px_22px_45px] w-[43%]
              p-[4cqw_3cqw_2cqw] [background:rgb(248,_249,_251)] [border:1cqw_solid_rgb(41,_44,_48)] rounded-[6cqw] relative
              text-[rgb(37,_44,_54)] [&>small]:text-[1cqw] [&>small]:tracking-[0.1cqw] [&>small]:text-[rgb(119,_129,_142)]
              [&_h4]:text-[3.1cqw] [&_h4]:tracking-[-0.1cqw] [&_h4]:leading-[1.2] [&_h4]:m-[1.4cqw_0px_3cqw]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
        >
          <div className="demo-island absolute top-[1.5cqw] left-[34%] w-[32%] h-[2cqw] rounded-[3cqw] [background:rgb(32,_34,_38)]" />
          <div className="demo-status flex justify-between text-[1.2cqw] mb-[3cqw]">
            9:41 <span>••• ▰</span>
          </div>
          <div
            className="demo-mobile-head flex justify-between items-center mb-[3cqw] [&>span]:p-[1cqw_1.7cqw] [&>span]:rounded-[50%]
              [&>span]:[background:rgb(245,_222,_213)] [&>span]:text-[var(--accent)] [&>span]:font-bold [&_svg]:w-[2.5cqw]"
          >
            <span>g</span>
            <Bell />
          </div>
          <small>OLÁ, VAMOS CRIAR?</small>
          <h4>
            Seu projeto,
            <br />
            sempre perto.
          </h4>
          <div
            className="demo-mobile-card [background:rgb(255,_242,_234)] p-[2.5cqw] [border:1px_solid_rgb(236,_217,_206)]
              rounded-[2cqw] [&>span]:text-[0.9cqw] [&>span]:text-[var(--accent)] [&_h5]:text-[1.8cqw]
              [&_h5]:m-[1.7cqw_0px_1cqw] [&_p]:text-[1.2cqw] [&_p]:text-[rgb(138,_125,_115)]"
          >
            <span>EM ANDAMENTO</span>
            <h5>Site institucional</h5>
            <p>Etapa 2 de 4 · Design</p>
            <div
              className="demo-progress h-[0.7cqw] [background:rgb(232,_215,_204)] mt-[2.5cqw] rounded-[1cqw] [&_i]:block [&_i]:h-full
              [&_i]:w-[55%] [&_i]:[background:var(--accent)] [&_i]:rounded-[inherit]
              [&_i]:[transform:scaleX(var(--scene-progress))] [&_i]:[transform-origin:left_center]
              [&_i]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]
              [&_i]:[@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
            >
              <i />
            </div>
          </div>
          <div
            className="demo-task flex gap-[1.5cqw] items-center p-[2.5cqw_0px] [border-bottom:1px_solid_rgb(226,_229,_233)]
              text-[1.3cqw] [&_svg]:w-[2.3cqw] [&_svg]:text-[rgb(103,_133,_116)] [&_small]:block [&_small]:text-[1cqw]
              [&_small]:text-[rgb(138,_146,_157)] [&_small]:mt-[0.6cqw]"
          >
            <Check />
            <span>
              Briefing aprovado<small>Tudo pronto para começar</small>
            </span>
          </div>
          <div
            className="demo-task flex gap-[1.5cqw] items-center p-[2.5cqw_0px] [border-bottom:1px_solid_rgb(226,_229,_233)]
              text-[1.3cqw] [&_svg]:w-[2.3cqw] [&_svg]:text-[rgb(103,_133,_116)] [&_small]:block [&_small]:text-[1cqw]
              [&_small]:text-[rgb(138,_146,_157)] [&_small]:mt-[0.6cqw]"
          >
            <CalendarDays />
            <span>
              Próxima entrega<small>Layout das páginas</small>
            </span>
          </div>
          <div
            className="demo-mobile-nav flex justify-around p-[2.5cqw_0px] text-[rgb(136,_145,_156)] [&_svg]:w-[2.4cqw]
              [&_svg]:h-[2.4cqw] [&_svg:first-child]:text-[var(--accent)]"
          >
            <Home />
            <LayoutDashboard />
            <Settings />
          </div>
          <div className="demo-home h-[0.6cqw] w-[40%] [background:rgb(41,_44,_48)] rounded-[1cqw] m-[auto]" />
        </div>
        <div
          className="service-notification flex items-center gap-[12px] absolute bottom-[75px] right-[4%] p-[15px]
              [background:rgb(255,_255,_255)] [border:1px_solid_rgb(227,_230,_224)] rounded-[12px]
              [box-shadow:rgba(34,_34,_34,_0.133)_0px_15px_35px] text-[11px]
              [transform:translateX(calc((1_-_var(--scene-progress))_*_100px))] opacity-[var(--scene-progress)]
              [@media(width<=650px)]:bottom-[15%] [@media(width<=650px)]:right-[3%] [@media(width<=650px)]:p-[11px]
              [@media(width<=650px)]:text-[9px] [@media(651px<=width<=900px)]:right-[3%]
              [@media(651px<=width<=900px)]:p-[11px] [@media(651px<=width<=900px)]:text-[9px]
              [&>span]:text-[rgb(103,_133,_116)] [&_small]:block [&_small]:mt-[5px] [&_small]:text-[rgb(123,_133,_145)]
              [&_small]:text-[9px] [&_small]:[@media(width<=900px)]:text-[8px]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
        >
          <span>
            <Check />
          </span>
          <div>
            Você acompanha cada etapa.
            <small>Do primeiro rascunho à entrega.</small>
          </div>
        </div>
      </>
    );
  return (
    <div
      className="service-desktop service-device
              [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))]
              opacity-[calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0px_22px_45px] w-[88%]
              [border:1px_solid_rgb(203,_208,_214)] rounded-[9px] overflow-hidden [background:rgb(255,_255,_255)]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
    >
      <div
        className="service-window h-[5cqw] flex items-center gap-[0.7cqw] p-[0px_2cqw] [background:rgb(233,_236,_241)]
              [&_i]:w-[1cqw] [&_i]:h-[1cqw] [&_i]:rounded-[50%] [&_i]:[background:rgb(239,_168,_155)]
              [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)]
              [&>span]:text-[1.3cqw] [&>span]:text-[rgb(116,_124,_135)] [&>span]:ml-[4cqw]"
      >
        <i />
        <i />
        <i />
        <span>goengine — painel de trabalho</span>
      </div>
      <div
        className="desktop-demo flex min-h-[45cqw] [&_aside]:w-[11cqw] [&_aside]:shrink-0 [&_aside]:[background:rgb(36,_41,_47)]
              [&_aside]:text-[rgb(167,_175,_184)] [&_aside]:flex [&_aside]:items-center [&_aside]:flex-col
              [&_aside]:gap-[4cqw] [&_aside]:pt-[3cqw] [&_aside_b]:[background:var(--accent)]
              [&_aside_b]:text-[rgb(255,_255,_255)] [&_aside_b]:rounded-[1cqw] [&_aside_b]:p-[0.3cqw_1.4cqw]
              [&_aside_b]:text-[3cqw] [&_aside_svg]:w-[2.5cqw] [&_aside_svg]:h-[2.5cqw]"
      >
        <aside>
          <b>g</b>
          <LayoutDashboard />
          <CalendarDays />
          <Settings />
        </aside>
        <div
          className="desktop-demo-main [flex:1_1_0%] p-[3cqw] [background:rgb(247,_248,_250)] min-w-0 [&>small]:text-[1cqw]
              [&>small]:text-[rgb(138,_146,_157)] [&>small]:tracking-[0.1cqw] [&_h4]:text-[3.6cqw] [&_h4]:tracking-[-0.1cqw]
              [&_h4]:m-[1cqw_0px_3cqw]"
        >
          <small>SEU ESPAÇO DE TRABALHO</small>
          <h4>Tudo no lugar.</h4>
          <div
            className="demo-metrics grid grid-cols-[repeat(3,_1fr)] gap-[1.2cqw] [&>div]:[border:1px_solid_rgb(225,_228,_233)]
              [&>div]:[background:rgb(255,_255,_255)] [&>div]:p-[1.8cqw] [&>div]:rounded-[0.8cqw] [&>div]:text-[1.1cqw]
              [&>div]:text-[rgb(125,_135,_148)] [&_strong]:block [&_strong]:text-[3.5cqw] [&_strong]:text-[rgb(37,_44,_54)]
              [&_strong]:mt-[1cqw]"
          >
            <div>
              Projetos<strong>03</strong>
            </div>
            <div>
              Em andamento<strong>02</strong>
            </div>
            <div>
              Concluídos<strong>01</strong>
            </div>
          </div>
          <div
            className="demo-board flex justify-between m-[3cqw_0px_1cqw] text-[1.5cqw] font-semibold [&>span]:text-[1cqw]
              [&>span]:font-normal [&>span]:text-[rgb(138,_146,_157)]"
          >
            Visão dos projetos <span>Esta semana</span>
          </div>
          {["Site institucional", "Aplicativo mobile", "Painel de gestão"].map(
            (name, i) => (
              <div
                className="demo-project-row flex items-center gap-[1cqw] p-[2cqw_0px] [border-bottom:1px_solid_rgb(225,_228,_233)]
              text-[1.2cqw] [&>span:nth-child(2)]:w-[20cqw] [&>small]:text-[0.9cqw] [&>small]:text-[rgb(125,_135,_148)]
              [&>small]:ml-[auto]"
                key={name}
              >
                <span className="demo-project-dot w-[1cqw] h-[1cqw] rounded-[50%] [background:var(--accent)]" />
                <span>{name}</span>
                <div
                  className="demo-bar w-[12cqw] h-[0.7cqw] rounded-[1cqw] [background:rgb(228,_231,_235)] [&>i]:block [&>i]:h-full
              [&>i]:w-[var(--bar-width)] [&>i]:[background:var(--accent)] [&>i]:rounded-[inherit]
              [&>i]:[transform:scaleX(var(--scene-progress))] [&>i]:[transform-origin:left_center]
              [&>i]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]
              [&>i]:[@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
                >
                  <i style={{ "--bar-width": `${[65, 40, 100][i]}%` }} />
                </div>
                <small>{["Design", "Planejamento", "Concluído"][i]}</small>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function Scene({ offering, index, pinned = false }) {
  const Icon = offering.icon;
  return (
    <div className={`service-scene scene-${offering.id}`} data-active={pinned ? String(index === 0) : undefined} aria-hidden="true">
      <div className="scene-heading"><span><Icon size={16} />{offering.label}</span><span>0{index + 1} / 03</span></div>
      <div className="scene-orbit" />
      <div className="scene-preview"><Preview type={offering.id} /></div>
      <div className="scene-footer"><span><i /> Interface demonstrativa</span><span>GOENGINE</span></div>
    </div>
  );
}

export default function Services({ onStartProject }) {
  const root = useRef(null);
  useEffect(() => {
    const panels = [...root.current.querySelectorAll('.service-story')];
    const scenes = [...root.current.querySelectorAll('.service-pinned .service-scene')];
    const links = [...root.current.querySelectorAll('.service-chapters a')];
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      let active = 0;
      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= innerHeight * 0.5) active = index;
        const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight * 0.7)));
        panel.style.setProperty('--scene-progress', preference.matches ? 1 : progress);
      });
      scenes.forEach((scene, index) => {
        scene.dataset.active = String(index === active);
        scene.style.setProperty('--scene-progress', 1);
      });
      links.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
    };
  }, []);
  return (
    <section className="service-experience" id="solucoes" ref={root} aria-labelledby="services-title">
      <div className="service-heading">
        <div><span className="service-eyebrow">01 / SOLUÇÕES DIGITAIS SOB MEDIDA</span><h2 id="services-title">Sua ideia.<br /><em>Novas possibilidades.</em></h2></div>
        <p>Da primeira impressão à rotina do seu negócio. Design e tecnologia que trabalham juntos, em qualquer tela.</p>
      </div>
      <nav className="service-chapters" aria-label="Tipos de serviço">
        {offerings.map(({ id, label, icon: Icon }, i) => (
          <a key={id} href={`#servico-${id}`} aria-current={i === 0 ? 'step' : undefined}>
            <span className="chapter-icon"><Icon size={21} /></span>
            <span className="chapter-name"><small>0{i + 1}</small>{label}</span><ArrowDown size={17} />
          </a>
        ))}
      </nav>
      <div className="service-track">
        <div className="service-narrative">
          {offerings.map((offering, i) => (
            <article className="service-story" id={`servico-${offering.id}`} key={offering.id}>
              <div className="service-story-copy">
                <div className="service-story-label"><span>0{i + 1}</span>{offering.label}</div>
                <h3>{offering.title.split('\n').map((line, index) => <span key={line}>{index ? <em>{line}</em> : line}</span>)}</h3>
                <p>{offering.text}</p>
                <ul>{offering.tags.map(tag => <li key={tag}><Check size={16} />{tag}</li>)}</ul>
                <button className="service-start" onClick={onStartProject}>Vamos criar juntos <span><ArrowUpRight size={20} /></span></button>
              </div>
              <Scene offering={offering} index={i} />
            </article>
          ))}
        </div>
        <div className="service-pinned" aria-hidden="true">
          {offerings.map((offering, i) => <Scene key={offering.id} offering={offering} index={i} pinned />)}
        </div>
      </div>
      <div className="service-endnote"><span>Uma experiência consistente. Em todas as telas.</span><span>ESTRATÉGIA · DESIGN · DESENVOLVIMENTO</span></div>
    </section>
  );
}
