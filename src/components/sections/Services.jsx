import BrandLogo from "../ui/BrandLogo";
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
    title: "Páginas para divulgar.\nE receber contatos.",
    text: "Criamos uma página para apresentar seu produto ou serviço, explicar os benefícios e facilitar o contato pelo WhatsApp ou formulário. O layout se adapta ao celular e ao computador.",
    tags: ["Campanhas", "Captação de leads", "Design responsivo"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Aplicativos mobile",
    title: "Aplicativos para\nseus clientes.",
    text: "Desenvolvemos aplicativos para celular com as funções que seu negócio precisa, como agendamento de serviços, consulta de informações e acompanhamento de pedidos.",
    tags: ["Experiência touch", "Área do cliente", "Notificações"],
  },
  {
    id: "desktop",
    icon: Monitor,
    label: "Aplicativos de computador",
    title: "Sistemas para\norganizar sua empresa.",
    text: "Criamos sistemas para cadastrar clientes, controlar pedidos, acompanhar tarefas e consultar relatórios. As funcionalidades são definidas de acordo com os processos da sua empresa.",
    tags: ["Gestão", "Automações", "Integrações"],
  },
];

function Preview({ type }) {
  if (type === "landing")
    return (
      <div className="service-browser [position:relative] [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))] [opacity:calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0_22px_45px] [overflow:hidden] [border:1px_solid_rgb(203,_208,_214)] [border-radius:9px] [background:rgb(255,_255,_255)] [@media(prefers-reduced-motion:_reduce)]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[opacity:1]! service-device preview-landing [width:88%] [&_.service-window]:[height:5cqw] [&_.service-window]:[display:flex] [&_.service-window]:[align-items:center] [&_.service-window]:[gap:.7cqw] [&_.service-window]:[padding:0_2cqw] [&_.service-window]:[background:rgb(233,_236,_241)] [&_.landing-demo]:[background:rgb(248,_245,_237)] [&_.landing-demo]:[color:rgb(36,_46,_41)] [&_.landing-demo]:[position:relative] [&_.landing-demo]:[padding:4cqw] [&_.landing-demo]:[overflow:hidden] [&_.landing-demo_>_small]:[display:block] [&_.landing-demo_>_small]:[font-size:1cqw] [&_.landing-demo_>_small]:[letter-spacing:.13cqw] [&_.landing-demo_h4]:[position:relative] [&_.landing-demo_h4]:[z-index:1] [&_.landing-demo_h4]:[font-size:6cqw] [&_.landing-demo_h4]:[line-height:1.05] [&_.landing-demo_h4]:[letter-spacing:-.3cqw] [&_.landing-demo_h4]:[margin:2.5cqw_0] [&_.landing-demo_h4_em]:[color:var(--accent)] [&_.landing-demo_h4_em]:[font-family:Georgia,_serif] [&_.landing-demo_h4_em]:[font-style:normal] [&_.landing-demo_h4_em]:[font-weight:400] [&_.landing-demo_p]:[font-size:1.4cqw] [&_.landing-demo_p]:[line-height:1.7] [&_.landing-demo_p]:[color:rgb(114,_117,_110)] [&_.demo-brand]:[display:flex] [&_.demo-brand]:[justify-content:space-between] [&_.demo-brand]:[align-items:center] [&_.demo-brand]:[margin-bottom:6cqw] [&_.demo-brand]:[font-size:2.5cqw] [&_.demo-brand]:[letter-spacing:-.1cqw] [&_.demo-brand]:[font-weight:750] [&_.demo-brand_span]:[font-size:.95cqw] [&_.demo-brand_span]:[letter-spacing:.15cqw] [&_.demo-brand_span]:[font-weight:500] [&_.demo-cta]:[display:inline-flex] [&_.demo-cta]:[align-items:center] [&_.demo-cta]:[gap:3cqw] [&_.demo-cta]:[padding:1.8cqw_2.4cqw] [&_.demo-cta]:[margin-top:3cqw] [&_.demo-cta]:[border-radius:5cqw] [&_.demo-cta]:[background:var(--accent)] [&_.demo-cta]:[color:rgb(255,_255,_255)] [&_.demo-cta]:[font-size:1.3cqw] [&_.demo-cta_svg]:[width:2cqw] [&_.demo-cta_svg]:[height:2cqw] [&_.landing-sculpture]:[position:absolute] [&_.landing-sculpture]:[width:28cqw] [&_.landing-sculpture]:[height:29cqw] [&_.landing-sculpture]:[right:-2cqw] [&_.landing-sculpture]:[top:14cqw] [&_.landing-sculpture]:[transform:rotate(calc(-25deg_+_var(--scene-progress)_*_12deg))] [&_.landing-sculpture_i]:[position:absolute] [&_.landing-sculpture_i]:[inset:0] [&_.landing-sculpture_i]:[border:5cqw_solid_rgb(217,_54,_34)] [&_.landing-sculpture_i]:[border-radius:50%] [&_.landing-sculpture_i]:[box-shadow:rgba(106,_19,_10,_0.4)_1cqw_1cqw_3cqw_inset,_rgba(127,_52,_25,_0.17)_2cqw_2cqw_3cqw] [&_.landing-sculpture_i:nth-child(2)]:[inset:3cqw_-3cqw_-3cqw_3cqw] [&_.landing-sculpture_i:nth-child(2)]:[border-color:rgb(237,_107,_69)] [&_.landing-sculpture_i:nth-child(3)]:[inset:6cqw_-6cqw_-6cqw_6cqw] [&_.landing-sculpture_i:nth-child(3)]:[border-color:rgb(243,_179,_149)] [&_.landing-demo-bottom]:[display:flex] [&_.landing-demo-bottom]:[justify-content:space-between] [&_.landing-demo-bottom]:[align-items:center] [&_.landing-demo-bottom]:[margin-top:5cqw] [&_.landing-demo-bottom]:[padding-top:2cqw] [&_.landing-demo-bottom]:[border-top:1px_solid_rgb(220,_216,_208)] [&_.landing-demo-bottom]:[font-size:.95cqw] [&_.landing-demo-bottom]:[letter-spacing:.1cqw] [&_.landing-demo-bottom_svg]:[width:2cqw] [&_.landing-demo-bottom_svg]:[height:2cqw]">
        <div className="service-window [&_i]:[width:1cqw] [&_i]:[height:1cqw] [&_i]:[border-radius:50%] [&_i]:[background:rgb(239,_168,_155)] [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)] [&_span]:[font-size:1.3cqw] [&_span]:[color:rgb(116,_124,_135)] [&_span]:[margin-left:4cqw] landing-window [height:5cqw] [display:flex] [align-items:center] [gap:.7cqw] [padding:0_2cqw] [background:rgb(233,_236,_241)] [&_i]:[width:1cqw] [&_i]:[height:1cqw] [&_i]:[border-radius:50%] [&_i]:[background:rgb(239,_168,_155)] [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)] [&_span]:[font-size:1.3cqw] [&_span]:[color:rgb(116,_124,_135)] [&_span]:[margin-left:4cqw]">
          <i />
          <i />
          <i />
          <span>goengine / sua próxima ideia</span>
        </div>
        <div className="landing-demo">
          <div className="demo-brand">
            <BrandLogo className="h-[5cqw] w-[18cqw]" /><span>ESTÚDIO DIGITAL ↗</span>
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
          <span className="demo-cta">
            Vamos começar <ArrowUpRight />
          </span>
          <div className="landing-sculpture [@media(prefers-reduced-motion:_reduce)]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[opacity:1]!">
            <i />
            <i />
            <i />
          </div>
          <div className="landing-demo-bottom">
            <span>ESTRATÉGIA · DESIGN · TECNOLOGIA</span>
            <ArrowDown />
          </div>
        </div>
      </div>
    );
  if (type === "mobile")
    return (
      <>
        <div className="service-phone [position:relative] [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))] [opacity:calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0_22px_45px] [overflow:hidden] [border:1px_solid_rgb(203,_208,_214)] [border-radius:9px] [background:rgb(255,_255,_255)] [@media(prefers-reduced-motion:_reduce)]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[opacity:1]! service-device preview-mobile [width:43%] [padding:4cqw_3cqw_2cqw] [background:rgb(248,_249,_251)] [border:1cqw_solid_rgb(41,_44,_48)] [border-radius:6cqw] [color:rgb(37,_44,_54)] [&_>_small]:[display:block] [&_>_small]:[font-size:1cqw] [&_>_small]:[letter-spacing:.1cqw] [&_>_small]:[color:rgb(119,_129,_142)] [&_h4]:[font-size:3.1cqw] [&_h4]:[letter-spacing:-.1cqw] [&_h4]:[line-height:1.2] [&_h4]:[margin:1.4cqw_0_3cqw] [&_.demo-island]:[position:absolute] [&_.demo-island]:[top:1.5cqw] [&_.demo-island]:[left:34%] [&_.demo-island]:[width:32%] [&_.demo-island]:[height:2cqw] [&_.demo-island]:[border-radius:3cqw] [&_.demo-island]:[background:rgb(32,_34,_38)] [&_.demo-status]:[display:flex] [&_.demo-status]:[justify-content:space-between] [&_.demo-status]:[font-size:1.2cqw] [&_.demo-status]:[margin-bottom:3cqw] [&_.demo-mobile-head]:[display:flex] [&_.demo-mobile-head]:[justify-content:space-between] [&_.demo-mobile-head]:[align-items:center] [&_.demo-mobile-head]:[margin-bottom:3cqw] [&_.demo-mobile-head_span]:[display:inline-flex] [&_.demo-mobile-head_span]:[padding:1cqw_1.7cqw] [&_.demo-mobile-head_span]:[border-radius:50%] [&_.demo-mobile-head_span]:[background:rgb(245,_222,_213)] [&_.demo-mobile-head_span]:[color:var(--accent)] [&_.demo-mobile-head_span]:[font-weight:700] [&_.demo-mobile-head_svg]:[width:2.5cqw] [&_.demo-mobile-card]:[background:rgb(255,_242,_234)] [&_.demo-mobile-card]:[padding:2.5cqw] [&_.demo-mobile-card]:[border:1px_solid_rgb(236,_217,_206)] [&_.demo-mobile-card]:[border-radius:2cqw] [&_.demo-mobile-card_span]:[display:block] [&_.demo-mobile-card_span]:[font-size:.9cqw] [&_.demo-mobile-card_span]:[color:var(--accent)] [&_.demo-mobile-card_h5]:[font-size:1.8cqw] [&_.demo-mobile-card_h5]:[margin:1.7cqw_0_1cqw] [&_.demo-mobile-card_p]:[font-size:1.2cqw] [&_.demo-mobile-card_p]:[color:rgb(138,_125,_115)] [&_.demo-progress]:[height:.7cqw] [&_.demo-progress]:[background:rgb(232,_215,_204)] [&_.demo-progress]:[margin-top:2.5cqw] [&_.demo-progress]:[border-radius:1cqw] [&_.demo-progress_i]:[display:block] [&_.demo-progress_i]:[height:100%] [&_.demo-progress_i]:[width:55%] [&_.demo-progress_i]:[background:var(--accent)] [&_.demo-progress_i]:[border-radius:inherit] [&_.demo-progress_i]:[transform:scaleX(var(--scene-progress))] [&_.demo-progress_i]:[transform-origin:left_center] [&_.demo-task]:[display:flex] [&_.demo-task]:[align-items:center] [&_.demo-task]:[gap:1.5cqw] [&_.demo-task]:[padding:2.5cqw_0] [&_.demo-task]:[border-bottom:1px_solid_rgb(226,_229,_233)] [&_.demo-task]:[font-size:1.3cqw] [&_.demo-task_svg]:[width:2.3cqw] [&_.demo-task_svg]:[color:rgb(103,_133,_116)] [&_.demo-task_small]:[display:block] [&_.demo-task_small]:[margin-top:.6cqw] [&_.demo-task_small]:[font-size:1cqw] [&_.demo-task_small]:[color:rgb(138,_146,_157)] [&_.demo-mobile-nav]:[display:flex] [&_.demo-mobile-nav]:[justify-content:space-around] [&_.demo-mobile-nav]:[padding:2.5cqw_0] [&_.demo-mobile-nav]:[color:rgb(136,_145,_156)] [&_.demo-mobile-nav_svg]:[width:2.4cqw] [&_.demo-mobile-nav_svg]:[height:2.4cqw] [&_.demo-mobile-nav_svg:first-child]:[color:var(--accent)] [&_.demo-home]:[width:40%] [&_.demo-home]:[height:.6cqw] [&_.demo-home]:[background:rgb(41,_44,_48)] [&_.demo-home]:[border-radius:1cqw] [&_.demo-home]:[margin:auto]">
          <div className="demo-island" />
          <div className="demo-status">
            9:41 <span>••• ▰</span>
          </div>
          <div className="demo-mobile-head">
            <BrandLogo className="h-[4cqw] w-[12cqw]" />
            <Bell />
          </div>
          <small>OLÁ, VAMOS CRIAR?</small>
          <h4>
            Seu projeto,
            <br />
            sempre perto.
          </h4>
          <div className="demo-mobile-card">
            <span>EM ANDAMENTO</span>
            <h5>Site institucional</h5>
            <p>Etapa 2 de 4 · Design</p>
            <div className="demo-progress [@media(prefers-reduced-motion:_reduce)]:[&_i]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[&_i]:[opacity:1]!">
              <i />
            </div>
          </div>
          <div className="demo-task">
            <Check />
            <span>
              Briefing aprovado<small>Tudo pronto para começar</small>
            </span>
          </div>
          <div className="demo-task">
            <CalendarDays />
            <span>
              Próxima entrega<small>Layout das páginas</small>
            </span>
          </div>
          <div className="demo-mobile-nav">
            <Home />
            <LayoutDashboard />
            <Settings />
          </div>
          <div className="demo-home" />
        </div>
        <div className="service-notification [display:flex] [align-items:center] [gap:12px] [position:absolute] [right:4%] [bottom:75px] [padding:15px] [background:rgb(255,_255,_255)] [border:1px_solid_rgb(227,_230,_224)] [border-radius:12px] [box-shadow:rgba(34,_34,_34,_0.133)_0_15px_35px] [font-size:11px] [transform:translateX(calc((1_-_var(--scene-progress))_*_100px))] [opacity:var(--scene-progress)] [&_>_span]:[display:inline-flex] [&_>_span]:[color:rgb(103,_133,_116)] [&_small]:[display:block] [&_small]:[margin-top:5px] [&_small]:[color:rgb(123,_133,_145)] [&_small]:[font-size:9px] [@media(max-width:_650px)]:[bottom:15%] [@media(max-width:_650px)]:[right:3%] [@media(max-width:_650px)]:[padding:11px] [@media(max-width:_650px)]:[font-size:9px] [@media(min-width:_651px)_and_(max-width:_900px)]:[right:3%] [@media(min-width:_651px)_and_(max-width:_900px)]:[padding:11px] [@media(min-width:_651px)_and_(max-width:_900px)]:[font-size:9px] [@media(max-width:_900px)]:[&_small]:[font-size:8px] [@media(prefers-reduced-motion:_reduce)]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[opacity:1]!">
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
    <div className="service-desktop [position:relative] [transform:translateY(calc((1_-_var(--scene-progress))_*_65px))_rotateX(calc((1_-_var(--scene-progress))_*_12deg))] [opacity:calc(.3_+_var(--scene-progress)_*_.7)] [box-shadow:rgba(41,_34,_25,_0.133)_0_22px_45px] [overflow:hidden] [border:1px_solid_rgb(203,_208,_214)] [border-radius:9px] [background:rgb(255,_255,_255)] [@media(prefers-reduced-motion:_reduce)]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[opacity:1]! service-device preview-desktop [width:88%] [&_.service-window]:[height:5cqw] [&_.service-window]:[display:flex] [&_.service-window]:[align-items:center] [&_.service-window]:[gap:.7cqw] [&_.service-window]:[padding:0_2cqw] [&_.service-window]:[background:rgb(233,_236,_241)] [border:1px_solid_rgb(203,_208,_214)] [&_.desktop-demo]:[display:flex] [&_.desktop-demo]:[min-height:45cqw] [&_.desktop-demo_aside]:[width:11cqw] [&_.desktop-demo_aside]:[flex-shrink:0] [&_.desktop-demo_aside]:[display:flex] [&_.desktop-demo_aside]:[align-items:center] [&_.desktop-demo_aside]:[flex-direction:column] [&_.desktop-demo_aside]:[gap:4cqw] [&_.desktop-demo_aside]:[padding-top:3cqw] [&_.desktop-demo_aside]:[background:rgb(36,_41,_47)] [&_.desktop-demo_aside]:[color:rgb(167,_175,_184)] [&_.desktop-demo_aside_b]:[display:block] [&_.desktop-demo_aside_b]:[background:var(--accent)] [&_.desktop-demo_aside_b]:[color:rgb(255,_255,_255)] [&_.desktop-demo_aside_b]:[border-radius:1cqw] [&_.desktop-demo_aside_b]:[padding:.3cqw_1.4cqw] [&_.desktop-demo_aside_b]:[font-size:3cqw] [&_.desktop-demo_aside_svg]:[width:2.5cqw] [&_.desktop-demo_aside_svg]:[height:2.5cqw] [&_.desktop-demo-main]:[flex:1_1_0%] [&_.desktop-demo-main]:[padding:3cqw] [&_.desktop-demo-main]:[background:rgb(247,_248,_250)] [&_.desktop-demo-main]:[min-width:0] [&_.desktop-demo-main_>_small]:[display:block] [&_.desktop-demo-main_>_small]:[font-size:1cqw] [&_.desktop-demo-main_>_small]:[color:rgb(138,_146,_157)] [&_.desktop-demo-main_>_small]:[letter-spacing:.1cqw] [&_.desktop-demo-main_h4]:[font-size:3.6cqw] [&_.desktop-demo-main_h4]:[letter-spacing:-.1cqw] [&_.desktop-demo-main_h4]:[margin:1cqw_0_3cqw] [&_.demo-metrics]:[display:grid] [&_.demo-metrics]:[grid-template-columns:repeat(3,_1fr)] [&_.demo-metrics]:[gap:1.2cqw] [&_.demo-metrics_>_div]:[border:1px_solid_rgb(225,_228,_233)] [&_.demo-metrics_>_div]:[background:rgb(255,_255,_255)] [&_.demo-metrics_>_div]:[padding:1.8cqw] [&_.demo-metrics_>_div]:[border-radius:.8cqw] [&_.demo-metrics_>_div]:[font-size:1.1cqw] [&_.demo-metrics_>_div]:[color:rgb(125,_135,_148)] [&_.demo-metrics_strong]:[display:block] [&_.demo-metrics_strong]:[font-size:3.5cqw] [&_.demo-metrics_strong]:[color:rgb(37,_44,_54)] [&_.demo-metrics_strong]:[margin-top:1cqw] [&_.demo-board]:[display:flex] [&_.demo-board]:[justify-content:space-between] [&_.demo-board]:[margin:3cqw_0_1cqw] [&_.demo-board]:[font-size:1.5cqw] [&_.demo-board]:[font-weight:600] [&_.demo-board_span]:[font-size:1cqw] [&_.demo-board_span]:[color:rgb(138,_146,_157)] [&_.demo-board_span]:[font-weight:400] [&_.demo-project-row]:[display:flex] [&_.demo-project-row]:[align-items:center] [&_.demo-project-row]:[gap:1cqw] [&_.demo-project-row]:[padding:2cqw_0] [&_.demo-project-row]:[border-bottom:1px_solid_rgb(225,_228,_233)] [&_.demo-project-row]:[font-size:1.2cqw] [&_.demo-project-row_>_span:nth-child(2)]:[width:20cqw] [&_.demo-project-dot]:[display:inline-block] [&_.demo-project-dot]:[width:1cqw] [&_.demo-project-dot]:[height:1cqw] [&_.demo-project-dot]:[border-radius:50%] [&_.demo-project-dot]:[background:var(--accent)] [&_.demo-bar]:[width:12cqw] [&_.demo-bar]:[height:.7cqw] [&_.demo-bar]:[border-radius:1cqw] [&_.demo-bar]:[background:rgb(228,_231,_235)] [&_.demo-bar_i]:[display:block] [&_.demo-bar_i]:[height:100%] [&_.demo-bar_i]:[width:var(--bar-width)] [&_.demo-bar_i]:[background:var(--accent)] [&_.demo-bar_i]:[border-radius:inherit] [&_.demo-bar_i]:[transform:scaleX(var(--scene-progress))] [&_.demo-bar_i]:[transform-origin:left_center] [&_.demo-project-row_small]:[margin-left:auto] [&_.demo-project-row_small]:[font-size:.9cqw] [&_.demo-project-row_small]:[color:rgb(125,_135,_148)]">
      <div className="service-window [&_i]:[width:1cqw] [&_i]:[height:1cqw] [&_i]:[border-radius:50%] [&_i]:[background:rgb(239,_168,_155)] [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)] [&_span]:[font-size:1.3cqw] [&_span]:[color:rgb(116,_124,_135)] [&_span]:[margin-left:4cqw] desktop-window [height:5cqw] [display:flex] [align-items:center] [gap:.7cqw] [padding:0_2cqw] [background:rgb(233,_236,_241)] [&_i]:[width:1cqw] [&_i]:[height:1cqw] [&_i]:[border-radius:50%] [&_i]:[background:rgb(239,_168,_155)] [&_i:nth-child(2)]:[background:rgb(225,_196,_135)] [&_i:nth-child(3)]:[background:rgb(153,_187,_164)] [&_span]:[font-size:1.3cqw] [&_span]:[color:rgb(116,_124,_135)] [&_span]:[margin-left:4cqw]">
        <i />
        <i />
        <i />
        <span>goengine — painel de trabalho</span>
      </div>
      <div className="desktop-demo">
        <aside>
          <BrandLogo light className="h-[4cqw] w-[9cqw]" />
          <LayoutDashboard />
          <CalendarDays />
          <Settings />
        </aside>
        <div className="desktop-demo-main">
          <small>SEU ESPAÇO DE TRABALHO</small>
          <h4>Tudo no lugar.</h4>
          <div className="demo-metrics">
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
          <div className="demo-board">
            Visão dos projetos <span>Esta semana</span>
          </div>
          {["Site institucional", "Aplicativo mobile", "Painel de gestão"].map(
            (name, i) => (
              <div className="demo-project-row" key={name}>
                <span className="demo-project-dot" />
                <span>{name}</span>
                <div className="demo-bar [@media(prefers-reduced-motion:_reduce)]:[&_i]:[transform:none]! [@media(prefers-reduced-motion:_reduce)]:[&_i]:[opacity:1]!">
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
    <div className={`service-scene [container-type:inline-size] [position:relative] [isolation:isolate] [overflow:hidden] [border:1px_solid_#e0d5c6] [border-radius:24px] [background:radial-gradient(ellipse_at_55%_40%,_#fffaf2,_transparent_70%),_#e9dfd1] [height:570px] [--scene-progress:1] scene-${offering.id}`} data-active={pinned ? String(index === 0) : undefined} aria-hidden="true">
      <div className="scene-heading [position:absolute] [left:24px] [right:24px] [display:flex] [justify-content:space-between] [align-items:center] [gap:12px] [color:#625e57] [z-index:2] [font-size:12px] [top:23px] [&_>_span:first-child]:[display:flex] [&_>_span:first-child]:[align-items:center] [&_>_span:first-child]:[gap:8px] [&_>_span:last-child]:[font-variant-numeric:tabular-nums] [&_>_span:last-child]:[white-space:nowrap] [@media(max-width:_760px)]:[left:16px] [@media(max-width:_760px)]:[right:16px] [@media(max-width:_760px)]:[font-size:11px] [@media(max-width:_760px)]:[top:18px]"><span><Icon size={16} />{offering.label}</span><span>0{index + 1} / 03</span></div>
      <div className="scene-orbit [position:absolute] [width:78%] [aspect-ratio:1] [border:1px_solid_#ffffffa6] [border-radius:50%] [left:11%] [top:14%] [box-shadow:0_0_0_40px_#ffffff20,_0_0_0_80px_#ffffff18] [z-index:-1]" />
      <div className="scene-preview [position:absolute] [inset:65px_0_70px] [display:grid] [place-items:center] [perspective:1000px] [&_.service-device]:[box-shadow:0_30px_45px_-22px_#352b3155,_0_3px_6px_#352b3110] [&_.service-phone]:[width:43%] [&_.service-notification]:[bottom:8%] [&_.service-notification]:[right:5%] [&_.service-notification]:[font-size:13px] [&_.service-notification]:[padding:14px] [&_.service-notification_small]:[font-size:11px] [@media(max-width:_760px)]:[inset:48px_0_55px] [@media(max-width:_760px)]:[&_.service-notification]:[font-size:11px] [@media(max-width:_760px)]:[&_.service-notification]:[padding:10px] [@media(max-width:_760px)]:[&_.service-notification]:[right:3%] [@media(max-width:_760px)]:[&_.service-notification]:[bottom:5%] [@media(max-width:_760px)]:[&_.service-notification_small]:[font-size:10px]"><Preview type={offering.id} /></div>
      <div className="scene-footer [position:absolute] [left:24px] [right:24px] [display:flex] [justify-content:space-between] [align-items:center] [gap:12px] [color:#625e57] [z-index:2] [font-size:12px] [bottom:23px] [border-top:1px_solid_#51483b22] [padding-top:16px] [&_>_span:first-child]:[display:flex] [&_>_span:first-child]:[align-items:center] [&_>_span:first-child]:[gap:8px] [&_i]:[width:6px] [&_i]:[height:6px] [&_i]:[border-radius:50%] [&_i]:[background:var(--accent)] [&_>_span:last-child]:[letter-spacing:1.5px] [&_>_span:last-child]:[font-size:10px] [@media(max-width:_760px)]:[left:16px] [@media(max-width:_760px)]:[right:16px] [@media(max-width:_760px)]:[font-size:11px] [@media(max-width:_760px)]:[bottom:16px] [@media(max-width:_760px)]:[padding-top:12px]"><span><i /> Interface demonstrativa</span><span>GOENGINE</span></div>
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
    <section className="service-experience [width:min(1200px,_calc(100%_-_96px))] [margin:auto] [padding:50px_0_90px] [@media(max-width:_1000px)]:[width:calc(100%_-_56px)] [@media(max-width:_760px)]:[width:calc(100%_-_40px)] [@media(max-width:_760px)]:[padding:35px_0_60px] [@media(prefers-reduced-motion:_reduce)]:[&_*]:[transition:none]! [@media(prefers-reduced-motion:_reduce)]:[&_*::before]:[transition:none]! [@media(prefers-reduced-motion:_reduce)]:[&_*::after]:[transition:none]!" id="solucoes" ref={root} aria-labelledby="services-title">
      <div className="service-heading mb-14 flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <span className="service-eyebrow mb-5 block text-[13px] font-semibold tracking-[1.7px] text-accent max-[650px]:mb-4">01 / SOLUÇÕES SOB MEDIDA</span>
          <h2 id="services-title" className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.055em]">Sites e aplicativos.<br /><span className="text-accent">Para o que você precisa.</span></h2>
        </div>
        <p className="max-w-[320px] text-lg leading-relaxed text-muted">Da divulgação da sua empresa à organização do trabalho. Escolha uma solução e conheça o que podemos desenvolver.</p>
      </div>
      <nav className="service-chapters mb-4 grid grid-cols-3 gap-6 max-[760px]:grid-cols-1" aria-label="Tipos de serviço">
        {offerings.map(({ id, label, icon: Icon }, i) => (
          <a key={id} href={`#servico-${id}`} aria-current={i === 0 ? 'step' : undefined} className="group flex min-h-[205px] flex-col rounded-[22px] border-2 border-ink bg-[#f4e7d5] p-6 shadow-[5px_5px_0_#171719] transition-[translate,rotate,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-[8px_8px_0_#171719] aria-current:bg-[#ffe1d4] focus-visible:outline-offset-8 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 max-[760px]:min-h-0">
            <span className="mb-7 flex w-full items-start justify-between"><span className="font-display text-5xl font-extrabold leading-none tracking-[-0.06em] text-accent">0{i + 1}</span><Icon size={26} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-12 motion-reduce:transition-none" /></span>
            <span className="mt-auto flex w-full items-center justify-between gap-4 border-t border-ink/20 pt-4"><span className="text-lg font-bold tracking-[-0.03em]">{label}</span><ArrowDown size={20} className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transition-none" /></span>
          </a>
        ))}
      </nav>
      <div className="service-track [display:grid] [grid-template-columns:minmax(0,_.85fr)_minmax(0,_1.15fr)] [gap:6%] [position:relative] [align-items:start] [@media(max-width:_1000px)]:[gap:4%] [@media(max-width:_760px)]:[display:block]">
        <div className="service-narrative [&_.service-scene]:[display:none] [@media(max-width:_760px)]:[&_.service-scene]:[display:block] [@media(max-width:_760px)]:[&_.service-scene]:[width:100%] [@media(max-width:_760px)]:[&_.service-scene]:[height:auto] [@media(max-width:_760px)]:[&_.service-scene]:[aspect-ratio:1_/_1.12]">
          {offerings.map((offering, i) => (
            <article className="service-story [min-height:max(690px,_90svh)] [display:flex] [align-items:center] [padding:70px_0] [scroll-margin-top:110px] [border-bottom:1px_solid_#e3ded6] [--scene-progress:1] [&:last-child]:[border-bottom:0] [&_h3]:[font-family:'Manrope',_sans-serif] [&_h3]:[font-size:clamp(40px,_4vw,_58px)] [&_h3]:[letter-spacing:-.055em] [&_h3]:[line-height:1.08] [&_h3]:[font-weight:800] [&_h3]:[margin:28px_0] [&_h3]:[text-wrap:balance] [&_h3_>_span]:[display:block] [&_h3_em]:[font-family:inherit] [&_h3_em]:[font-style:normal] [&_h3_em]:[font-weight:inherit] [&_h3_em]:[color:var(--accent)] [&_ul]:[display:flex] [&_ul]:[flex-wrap:wrap] [&_ul]:[gap:10px] [&_ul]:[list-style:none] [&_ul]:[padding:0] [&_ul]:[margin:28px_0_32px] [&_li]:[display:flex] [&_li]:[align-items:center] [&_li]:[gap:7px] [&_li]:[font-size:15px] [&_li]:[padding:9px_12px] [&_li]:[border:1px_solid_#e2ddd4] [&_li]:[background:#f0eee8] [&_li]:[border-radius:8px] [&_li]:[color:#56544f] [&_li_svg]:[color:var(--accent)] [&_li_svg]:[flex-shrink:0] [@media(max-width:_1000px)]:[&_h3]:[font-size:clamp(36px,_4vw,_46px)] [@media(max-width:_760px)]:[display:grid] [@media(max-width:_760px)]:[gap:35px] [@media(max-width:_760px)]:[min-height:0] [@media(max-width:_760px)]:[padding:48px_0] [@media(max-width:_760px)]:[&_h3]:[font-size:clamp(38px,_9vw,_56px)]" id={`servico-${offering.id}`} key={offering.id}>
              <div className="service-story-copy w-full [&>p]:max-w-[460px] [&>p]:text-[18px] [&>p]:leading-[1.8] [&>p]:text-muted [&_h3]:text-[clamp(32px,3.6vw,52px)]! [&_h3]:my-7! [&_ul]:gap-2! [&_li]:rounded-full! [&_li]:border-ink/20! [&_li]:bg-transparent! [&_li]:text-sm!">
                <div className="service-story-label inline-flex items-center gap-3 text-sm font-semibold text-accent [&>span]:tabular-nums [&>span]:text-xs [&>span]:text-muted"><span>0{i + 1}</span>{offering.label}</div>
                <h3>{offering.title.split('\n').map((line, index) => <span key={line}>{index ? <em>{line}</em> : line}</span>)}</h3>
                <p>{offering.text}</p>
                <ul>{offering.tags.map(tag => <li key={tag}><Check size={16} />{tag}</li>)}</ul>
                <button className="service-start group inline-flex items-center gap-5 rounded-full border-2 border-ink bg-ink px-5 py-3 text-sm font-bold text-paper shadow-[3px_3px_0_#d93622] transition-[background-color,box-shadow] duration-300 hover:bg-accent hover:shadow-[5px_5px_0_#171719] motion-reduce:transition-none [&>span]:grid [&>span]:h-8 [&>span]:w-8 [&>span]:place-items-center [&>span]:rounded-full [&>span]:bg-paper [&>span]:text-ink [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:rotate-45 motion-reduce:[&_svg]:transition-none" onClick={onStartProject}>Vamos criar juntos <span><ArrowUpRight size={20} /></span></button>
              </div>
              <Scene offering={offering} index={i} />
            </article>
          ))}
        </div>
        <div className="service-pinned [--card-height:min(570px,_calc(100svh_-_140px))] [position:sticky] [top:calc(112px_+_(100svh_-_112px_-_var(--card-height))_/_2)] [height:var(--card-height)] [margin-top:max(60px,_calc(45svh_-_285px))] [&_.service-scene]:[position:absolute] [&_.service-scene]:[inset:0] [&_.service-scene]:[height:100%] [&_.service-scene]:[opacity:0] [&_.service-scene]:[visibility:hidden] [&_.service-scene]:[transform:translateY(18px)_scale(.98)] [&_.service-scene]:[transition:opacity_.5s,_transform_.65s_cubic-bezier(.22,_1,_.36,_1),_visibility_.5s] [&_.service-scene]:[pointer-events:none] [&_.service-scene[data-active=true]]:[opacity:1] [&_.service-scene[data-active=true]]:[visibility:visible] [&_.service-scene[data-active=true]]:[transform:none] [&_.scene-preview]:[transition:transform_.8s_cubic-bezier(.22,_1,_.36,_1)] [&_.scene-preview]:[transform:translateY(35px)_rotate(-2deg)_scale(.95)] [&_[data-active=true]_.scene-preview]:[transform:none] [@media(max-width:_760px)]:[display:none] [@media(prefers-reduced-motion:_reduce)]:[&_.service-scene]:[transform:none] [@media(prefers-reduced-motion:_reduce)]:[&_.scene-preview]:[transform:none]" aria-hidden="true">
          {offerings.map((offering, i) => <Scene key={offering.id} offering={offering} index={i} pinned />)}
        </div>
      </div>
    </section>
  );
}
