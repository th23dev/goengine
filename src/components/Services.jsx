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

export default function Services({ onStartProject }) {
  const root = useRef(null);
  useEffect(() => {
    const panels = [...root.current.querySelectorAll(".service-story")];
    const scenes = [
      ...root.current.querySelectorAll(".service-pinned .service-scene"),
    ];
    const items = [...root.current.querySelectorAll(".service-story-copy > *")];
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      let active = 0;
      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= innerHeight * 0.55) active = index;
        const progress = Math.max(
          0,
          Math.min(1, (innerHeight - rect.top) / (innerHeight * 0.75)),
        );
        panel.style.setProperty(
          "--scene-progress",
          preference.matches ? 1 : progress,
        );
      });
      scenes.forEach((scene, index) => {
        scene.dataset.active = String(index === active);
        scene.style.setProperty("--scene-progress", 1);
      });
      items.forEach((item) => {
        const progress = Math.max(
          0,
          Math.min(
            1,
            (innerHeight * 0.9 - item.getBoundingClientRect().top) /
              (innerHeight * 0.23),
          ),
        );
        item.style.setProperty(
          "--item-progress",
          preference.matches ? 1 : progress,
        );
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <section
      className="section layout-container service-experience w-[min(1200px,_100%_-_96px)] m-[auto] pt-[110px] pb-[110px]
              [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:pt-[70px] [@media(width<=650px)]:pb-[70px]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]
              [&:is(#solucoes)]:pt-[30px]"
      id="solucoes"
      ref={root}
    >
      <div
        className="section-heading flex justify-between items-end gap-[25px] mb-[43px] [@media(width<=650px)]:block
              [@media(width<=650px)]:mb-[30px] [&>p]:text-[14px] [&>p]:leading-[1.8] [&>p]:text-[rgb(103,_103,_107)]
              [&>p]:mb-[3px] [&>p]:[@media(width<=650px)]:mt-[20px] [&_h2]:text-[clamp(34px,_3.6vw,_53px)]
              [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.055em] [&_h2]:[font-weight:550]
              [&_h2]:[@media(width<=650px)]:text-[36px]"
      >
        <div>
          <span
            className="eyebrow block text-[10px] tracking-[1.7px] text-[var(--accent)] font-semibold mb-[20px]
              [@media(width<=650px)]:mb-[16px]"
          >
            01 / SOLUÇÕES DIGITAIS SOB MEDIDA
          </span>
          <h2>Nossos serviços.</h2>
        </div>
        <p>
          Criamos landing pages, aplicativos mobile
          <br />e aplicativos para computador.
          <br />
          Explore cada serviço abaixo.
        </p>
      </div>
      <nav
        className="service-chapters flex [border-block:1px_solid_rgb(220,_216,_208)] [@media(width<=650px)]:flex-col
              [&_a]:[flex:1_1_0%] [&_a]:flex [&_a]:items-center [&_a]:gap-[12px] [&_a]:p-[20px_15px] [&_a]:text-[12px]
              [&_a]:[@media(width<=650px)]:p-[15px_8px] [&_a+a]:[border-left:1px_solid_rgb(220,_216,_208)]
              [&_a+a]:[@media(width<=650px)]:[border-left:0px]
              [&_a+a]:[@media(width<=650px)]:[border-top:1px_solid_rgb(220,_216,_208)] [&_a>span]:text-[var(--accent)]
              [&_a>span]:text-[10px] [&_svg]:ml-[auto] [&_a:hover]:[background:var(--accent-soft)]"
        aria-label="Tipos de serviço"
      >
        {offerings.map(({ id, label }, i) => (
          <a key={id} href={`#servico-${id}`}>
            <span>0{i + 1}</span>
            {label}
            <ArrowDown size={13} />
          </a>
        ))}
      </nav>
      <div
        className="service-track grid grid-cols-[0.85fr_1.15fr] gap-[7%] relative [align-items:start] [@media(width<=650px)]:block
              [@media(651px<=width<=900px)]:gap-[4%] [&_.service-story]:flex [&_.service-story]:items-center
              [&_.service-story]:min-h-[85vh] [&_.service-story]:p-[90px_0px] [&_.service-story]:[scroll-margin-top:110px]
              [&_.service-story]:[@media(width<=650px)]:grid [&_.service-story]:[@media(width<=650px)]:min-h-0
              [&_.service-story]:[@media(width<=650px)]:pt-[45px] [&_.service-story]:[@media(width<=650px)]:pb-[45px]"
      >
        <div className="service-narrative min-w-0 [&_.service-scene]:hidden [&_.service-scene]:[@media(width<=650px)]:grid">
          {offerings.map(({ id, icon: Icon, label, title, text, tags }, i) => (
            <article
              className={
                `service-story service-story-${id}` +
                " [--scene-progress:1] grid grid-cols-[0.85fr_1.15fr] items-center gap-[7%] min-h-[650px] p-[65px_0px] [border-bottom:1px_solid_rgb(220,_216,_208)] [scroll-margin-top:100px] [@media(width<=650px)]:grid-cols-[1fr] [@media(width<=650px)]:gap-[30px] [@media(width<=650px)]:min-h-0 [@media(width<=650px)]:pt-[45px] [@media(width<=650px)]:pb-[45px] [@media(651px<=width<=900px)]:gap-[4%] [@media(651px<=width<=900px)]:min-h-[560px] [&.service-story-label]:flex [&.service-story-label]:items-center [&.service-story-label]:gap-[12px] [&.service-story-label]:text-[11px] [&.service-story-label]:text-[var(--accent)] [&.service-story-copy_h3]:text-[clamp(32px,_3.2vw,_46px)] [&.service-story-copy_h3]:leading-[1.15] [&.service-story-copy_h3]:tracking-[-1.8px] [&.service-story-copy_h3]:m-[25px_0px] [&.service-story-copy_h3]:[@media(width<=650px)]:text-[36px] [&.service-story-copy_h3]:[@media(651px<=width<=900px)]:text-[33px] [&.service-story-copy_h3>span]:block [&.service-story-copy_h3_em]:[font:italic_1.1em_Georgia,_serif] [&.service-story-copy_h3_em]:text-[var(--accent)] [&.service-story-copy>p]:text-[14px] [&.service-story-copy>p]:leading-[1.9] [&.service-story-copy>p]:text-[rgb(100,_100,_107)] [&.service-story-copy>p]:max-w-[370px] [&.service-story-copy>p]:[@media(width<=650px)]:max-w-none [&.service-story-copy_ul]:flex [&.service-story-copy_ul]:flex-wrap [&.service-story-copy_ul]:gap-[8px] [&.service-story-copy_ul]:p-[0px] [&.service-story-copy_ul]:m-[24px_0px] [&.service-story-copy_ul]:list-none [&.service-story-copy_li]:[border:1px_solid_rgb(220,_216,_208)] [&.service-story-copy_li]:rounded-[20px] [&.service-story-copy_li]:p-[7px_11px] [&.service-story-copy_li]:text-[10px] [&.service-story-copy_li]:text-[rgb(104,_100,_94)] [&.service-story-copy_.text-link]:w-full [&.service-story-copy_.text-link]:max-w-[370px] [&.service-story-mobile_.service-scene]:[background:rgb(234,_236,_231)] [&.service-story-desktop_.service-scene]:[background:rgb(232,_235,_239)] [&.service-story-copy]:w-full [&.service-story-copy>*]:[--item-progress:1] [&.service-story-copy>*]:opacity-[var(--item-progress)] [&.service-story-copy>*]:[transform:translateY(calc((1_-_var(--item-progress))_*_38px))] [&.service-story-copy>:focus-within]:opacity-[1] [&.service-story-copy>:focus-within]:[transform:none] [&.service-story-copy>:focus-visible]:opacity-[1] [&.service-story-copy>:focus-visible]:[transform:none] [&.service-story-copy>*]:[@media(prefers-reduced-motion:_reduce)]:opacity-[1] [&.service-story-copy>*]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]"
              }
              id={`servico-${id}`}
              key={id}
            >
              <div
                className="service-story-copy [&_h3]:text-[clamp(32px,_3.2vw,_46px)] [&_h3]:leading-[1.15] [&_h3]:tracking-[-1.8px]
              [&_h3]:m-[25px_0px] [&_h3]:[@media(width<=650px)]:text-[36px] [&_h3]:[@media(651px<=width<=900px)]:text-[33px]
              [&_h3>span]:block [&_h3_em]:[font:italic_1.1em_Georgia,_serif] [&_h3_em]:text-[var(--accent)] [&>p]:text-[14px]
              [&>p]:leading-[1.9] [&>p]:text-[rgb(100,_100,_107)] [&>p]:max-w-[370px] [&>p]:[@media(width<=650px)]:max-w-none
              [&_ul]:flex [&_ul]:flex-wrap [&_ul]:gap-[8px] [&_ul]:p-[0px] [&_ul]:m-[24px_0px] [&_ul]:list-none
              [&_li]:[border:1px_solid_rgb(220,_216,_208)] [&_li]:rounded-[20px] [&_li]:p-[7px_11px] [&_li]:text-[10px]
              [&_li]:text-[rgb(104,_100,_94)] [&_.text-link]:w-full [&_.text-link]:max-w-[370px] w-full
              [&>*]:[--item-progress:1] [&>*]:opacity-[var(--item-progress)]
              [&>*]:[transform:translateY(calc((1_-_var(--item-progress))_*_38px))] [&>:focus-within]:opacity-[1]
              [&>:focus-within]:[transform:none] [&>:focus-visible]:opacity-[1] [&>:focus-visible]:[transform:none]
              [&>*]:[@media(prefers-reduced-motion:_reduce)]:opacity-[1]
              [&>*]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]"
              >
                <div className="service-story-label flex items-center gap-[12px] text-[11px] text-[var(--accent)]">
                  <Icon size={19} />
                  <span>
                    0{i + 1} / {label}
                  </span>
                </div>
                <h3>
                  {title.split("\n").map((line, index) => (
                    <span key={line}>{index ? <em>{line}</em> : line}</span>
                  ))}
                </h3>
                <p>{text}</p>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <button
                  className="text-link flex items-center justify-between w-full [background:transparent] p-[25px_0px_0px] mt-[25px]
              [border-top:1px_solid_rgb(220,_216,_207)] text-[12px] text-[rgb(53,_59,_75)]
              [border-right-color:rgb(220,_216,_207)] [border-bottom-color:rgb(220,_216,_207)]
              [border-left-color:rgb(220,_216,_207)] [@media(width<=650px)]:pt-[18px] [@media(width<=650px)]:mt-[20px]
              [&_svg]:[transition:transform_0.25s] [&:hover_svg]:[transform:translate(3px,_-3px)]"
                  onClick={onStartProject}
                >
                  Vamos criar juntos <ArrowUpRight size={18} />
                </button>
              </div>
              <div
                className="service-scene [container-type:inline-size] relative grid place-items-center h-[500px]
              [background:rgb(240,_236,_229)] [border:1px_solid_rgb(230,_223,_213)] rounded-[20px] isolate overflow-hidden
              [perspective:1000px] [@media(width<=650px)]:h-auto [@media(width<=650px)]:rounded-[15px]
              [@media(width<=650px)]:aspect-[1_/_1.1] [@media(651px<=width<=900px)]:h-[430px]"
                aria-hidden="true"
              >
                <div
                  className="service-scene-halo absolute inset-[0px] z-[-1]
              [background:radial-gradient(at_50%_60%,_rgba(233,_172,_151,_0.376),_transparent_70%)]
              [transform:scale(calc(.7_+_var(--scene-progress)_*_.3))]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
                />
                <Preview type={id} />
                <span
                  className="service-demo-caption absolute bottom-[18px] text-[8px] tracking-[1.4px] text-[rgb(132,_124,_115)]
              [@media(width<=650px)]:bottom-[14px] [@media(width<=650px)]:text-[7px]"
                >
                  INTERFACE DEMONSTRATIVA / 0{i + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div
          className="service-pinned sticky top-[110px] h-[min(500px,_-140px_+_100svh)] mt-[max(35px,_-250px_+_42.5vh)]
              [@media(width<=650px)]:hidden [@media(651px<=width<=900px)]:h-[min(430px,_-140px_+_100svh)]
              [&_.service-scene]:absolute [&_.service-scene]:inset-[0px] [&_.service-scene]:h-full
              [&_.service-scene]:opacity-[0] [&_.service-scene]:invisible
              [&_.service-scene]:[transform:translateY(24px)_scale(0.97)]
              [&_.service-scene]:[transition:opacity_0.45s,_transform_0.6s_cubic-bezier(0.2,_0.7,_0.2,_1),_visibility_0.45s]
              [&_.service-scene]:pointer-events-none [&_.service-scene[data-active=true]]:opacity-[1]
              [&_.service-scene[data-active=true]]:visible [&_.service-scene[data-active=true]]:[transform:none]
              [&_.service-device]:max-h-[95%] [&_.service-notification]:[transition:opacity_0.4s_0.15s,_translate_0.5s_0.15s]
              [&_[data-active=false]_.service-notification]:opacity-[0]
              [&_[data-active=false]_.service-notification]:[translate:35px]
              [&_.service-scene]:[@media(prefers-reduced-motion:_reduce)]:[transition:none]
              [&_.service-scene]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]"
          aria-hidden="true"
        >
          {offerings.map(({ id }, i) => (
            <div
              className={
                `service-scene service-pinned-${id}` +
                " [container-type:inline-size] relative grid place-items-center h-[500px] [background:rgb(240,_236,_229)] [border:1px_solid_rgb(230,_223,_213)] rounded-[20px] isolate overflow-hidden [perspective:1000px] [@media(width<=650px)]:h-auto [@media(width<=650px)]:rounded-[15px] [@media(width<=650px)]:aspect-[1_/_1.1] [@media(651px<=width<=900px)]:h-[430px] [&.service-pinned-mobile]:[background:rgb(234,_236,_231)] [&.service-pinned-desktop]:[background:rgb(232,_235,_239)]"
              }
              data-active={i === 0 ? "true" : "false"}
              key={id}
            >
              <div
                className="service-scene-halo absolute inset-[0px] z-[-1]
              [background:radial-gradient(at_50%_60%,_rgba(233,_172,_151,_0.376),_transparent_70%)]
              [transform:scale(calc(.7_+_var(--scene-progress)_*_.3))]
              [@media(prefers-reduced-motion:_reduce)]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:opacity-[1]"
              />
              <Preview type={id} />
              <span
                className="service-demo-caption absolute bottom-[18px] text-[8px] tracking-[1.4px] text-[rgb(132,_124,_115)]
              [@media(width<=650px)]:bottom-[14px] [@media(width<=650px)]:text-[7px]"
              >
                INTERFACE DEMONSTRATIVA / 0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
