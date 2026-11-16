import { Code2, Globe2 } from "lucide-react";
import Dashboard from "./Dashboard";
export default function Projects() {
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
              02 / POSSIBILIDADES EM TELA
            </span>
            <h2>
              Design que chama atenção.
              <br />
              <span>Experiências que ficam.</span>
            </h2>
          </div>
          <p>
            Uma amostra do que podemos construir.
            <br />
            Conceitos autorais, novas possibilidades.
          </p>
        </div>
        <div
          className="projects grid grid-cols-[1.1fr_1fr] gap-[35px] [align-items:start] [@media(width<=650px)]:grid-cols-[1fr]
              [&>article:nth-child(2)]:pt-[85px] [&>article:nth-child(2)]:[@media(width<=650px)]:pt-[0px]"
        >
          <article>
            <div
              className="project-art project-orbit h-[340px] rounded-[4px] overflow-hidden relative [background:rgb(243,_185,_165)]
              [@media(width<=650px)]:h-[290px] [@media(651px<=width<=1000px)]:h-[300px]
              [&:hover_.project-dash]:[transform:rotate(-2deg)_scale(0.77)]
              [&:hover_.project-dash]:[@media(width<=650px)]:[transform:rotate(-3deg)_scale(0.62)]
              [&:hover_.architectural]:[transform:rotate(-5deg)_translateY(-10px)]
              [&:hover_.architectural]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]"
            >
              <span className="project-category absolute left-[23px] top-[21px] text-[9px] tracking-[1.5px] z-[3] text-[rgb(60,_51,_46)]">
                SOFTWARE SOB ENCOMENDA
              </span>
              <div
                className="project-dash absolute top-[65px] left-[55px] [transform:rotate(-5deg)_scale(0.74)] [transform-origin:left_top]
              [transition:transform_0.65s_cubic-bezier(0.2,_0.8,_0.2,_1)] [@media(width<=650px)]:left-[20px]
              [@media(width<=650px)]:[transform:rotate(-5deg)_scale(0.6)] [@media(651px<=width<=1000px)]:left-[25px]
              [@media(651px<=width<=1000px)]:[transform:rotate(-5deg)_scale(0.64)] [&_.dashboard]:text-[var(--ink)]"
              >
                <Dashboard />
              </div>
            </div>
            <div
              className="project-description flex justify-between items-center mt-[21px] [&_h3]:flex [&_h3]:items-center
              [&_h3]:gap-[14px] [&_h3]:text-[25px] [&_h3]:tracking-[-0.8px] [&_h3]:[@media(651px<=width<=1000px)]:block
              [&_h3>span]:[font-family:'DM_Sans'] [&_h3>span]:font-normal [&_h3>span]:text-[11px]
              [&_h3>span]:text-[rgb(188,_186,_183)] [&_h3>span]:tracking-[0px] [&_h3>span]:[@media(width<=650px)]:block
              [&_h3>span]:[@media(width<=650px)]:mt-[0px] [&_h3>span]:[@media(651px<=width<=1000px)]:block
              [&_h3>span]:[@media(651px<=width<=1000px)]:mt-[5px] [&_p]:text-[11px] [&_p]:text-[rgb(188,_186,_183)]
              [&_p]:mt-[7px] [&>svg]:text-[rgb(255,_145,_125)]"
            >
              <div>
                <h3>
                  orbit<span>Uma operação mais simples.</span>
                </h3>
                <p>Conceito demonstrativo · Sistema de gestão</p>
              </div>
              <Code2 size={22} />
            </div>
          </article>
          <article>
            <div
              className="project-art project-forma h-[340px] rounded-[4px] overflow-hidden relative [background:rgb(217,_209,_195)]
              [@media(width<=650px)]:h-[290px] [@media(651px<=width<=1000px)]:h-[300px]
              [&:hover_.project-dash]:[transform:rotate(-2deg)_scale(0.77)]
              [&:hover_.project-dash]:[@media(width<=650px)]:[transform:rotate(-3deg)_scale(0.62)]
              [&:hover_.architectural]:[transform:rotate(-5deg)_translateY(-10px)]
              [&:hover_.architectural]:[@media(prefers-reduced-motion:_reduce)]:[transform:none]"
            >
              <span className="project-category absolute left-[23px] top-[21px] text-[9px] tracking-[1.5px] z-[3] text-[rgb(60,_51,_46)]">
                SITE INSTITUCIONAL
              </span>
              <div
                className="forma-word absolute left-[30px] top-[70px] [font:64px_Georgia] z-[2] tracking-[-3px] text-[rgb(61,_57,_50)]
              [&_span]:block [&_span]:[font:9px_'DM_Sans'] [&_span]:tracking-[0px] [&_span]:mt-[10px]"
              >
                forma<span>Espaço para novas perspectivas.</span>
              </div>
              <div
                className="architectural absolute right-[-20px] bottom-[-60px] flex gap-[15px] [transform:rotate(-12deg)]
              [transition:transform_0.65s_cubic-bezier(0.2,_0.8,_0.2,_1)] [&_div]:w-[70px] [&_div]:h-[275px]
              [&_div]:[background:linear-gradient(90deg,_rgb(199,_190,_172),_rgb(235,_229,_219)_50%,_rgb(211,_203,_189))]
              [&_div]:rounded-[80px_80px_0px_0px] [&_div]:[box-shadow:rgba(138,_125,_98,_0.25)_15px_8px_25px]
              [&_div:nth-child(2)]:h-[330px] [&_div:nth-child(2)]:mt-[-20px] [&_div:nth-child(3)]:h-[360px]
              [&_div:nth-child(3)]:mt-[-40px]"
              >
                <div />
                <div />
                <div />
              </div>
            </div>
            <div
              className="project-description flex justify-between items-center mt-[21px] [&_h3]:flex [&_h3]:items-center
              [&_h3]:gap-[14px] [&_h3]:text-[25px] [&_h3]:tracking-[-0.8px] [&_h3]:[@media(651px<=width<=1000px)]:block
              [&_h3>span]:[font-family:'DM_Sans'] [&_h3>span]:font-normal [&_h3>span]:text-[11px]
              [&_h3>span]:text-[rgb(188,_186,_183)] [&_h3>span]:tracking-[0px] [&_h3>span]:[@media(width<=650px)]:block
              [&_h3>span]:[@media(width<=650px)]:mt-[0px] [&_h3>span]:[@media(651px<=width<=1000px)]:block
              [&_h3>span]:[@media(651px<=width<=1000px)]:mt-[5px] [&_p]:text-[11px] [&_p]:text-[rgb(188,_186,_183)]
              [&_p]:mt-[7px] [&>svg]:text-[rgb(255,_145,_125)]"
            >
              <div>
                <h3>
                  forma<span>Uma presença com identidade.</span>
                </h3>
                <p>Conceito demonstrativo · Arquitetura e interiores</p>
              </div>
              <Globe2 size={22} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
