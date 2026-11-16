import { ArrowUpRight, ArrowDown } from "lucide-react";
import PlatformShowcase from "./PlatformShowcase";

export default function Hero({ onStartProject }) {
  return (
    <div
      className="hero-backdrop relative isolate overflow-clip [&::after]:[content:''] [&::after]:absolute [&::after]:inset-[0px]
              [&::after]:z-[-1] [&::after]:pointer-events-none [&::after]:opacity-[0.075]
              [&::after]:[background-image:url('/noise.svg')] [&::after]:[background-size:180px_180px]
              [&::after]:[mask-image:linear-gradient(transparent_15%,_rgb(0,_0,_0)_45%,_rgb(0,_0,_0)_75%,_transparent)]"
    >
      <div
        className="hero-waves absolute inset-[0px] z-[-1] pointer-events-none overflow-hidden
              [mask-image:linear-gradient(transparent_8%,_rgb(0,_0,_0)_38%,_rgb(0,_0,_0)_65%,_transparent_100%)]
              [&::before]:[content:''] [&::before]:absolute [&::before]:inset-[0px] [&::before]:z-[-1]
              [&::before]:pointer-events-none
              [&::before]:[background:radial-gradient(ellipse_at_8%_66%,_color-mix(in_srgb,_var(--accent)_48%,_transparent),_transparent_53%),_radial-gradient(ellipse_at_94%_57%,_color-mix(in_srgb,_var(--accent)_42%,_transparent),_transparent_50%),_radial-gradient(ellipse_at_48%_73%,_color-mix(in_srgb,_var(--accent)_22%,_transparent),_transparent_58%)]
              [&::before]:[@media(prefers-reduced-motion:_no-preference)]:inset-[-8%_-12%]
              [&::before]:[@media(prefers-reduced-motion:_no-preference)]:[background-image:radial-gradient(ellipse_at_18%_60%,_color-mix(in_srgb,_var(--accent)_62%,_transparent),_transparent_44%),_radial-gradient(ellipse_at_82%_60%,_color-mix(in_srgb,_var(--accent)_56%,_transparent),_transparent_44%),_radial-gradient(ellipse_at_50%_70%,_color-mix(in_srgb,_var(--accent)_30%,_transparent),_transparent_50%)]
              [&::before]:[@media(prefers-reduced-motion:_no-preference)]:[background-size:100%_100%]
              [&::before]:[@media(prefers-reduced-motion:_no-preference)]:[background-repeat:no-repeat]
              [&::before]:[@media(prefers-reduced-motion:_no-preference)]:[animation:7s_ease-in-out_0s_infinite_normal_none_running_hero-red-waves]"
        aria-hidden="true"
      />
      <section
        className="hero platform-hero layout-container w-[min(1200px,_100%_-_96px)] m-[auto] text-center pt-[58px]
              [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:pt-[42px]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]
              [&_h1]:text-[clamp(48px,_5.5vw,_80px)] [&_h1]:leading-[1.13] [&_h1]:tracking-[-0.065em]
              [&_h1]:[font-weight:800] [&_h1]:m-[24px_0px] [&_h1]:[animation:0.7s_ease_0s_1_normal_both_running_enter]
              [&_h1]:[@media(width<=650px)]:text-[clamp(36px,_8.7vw,_56px)] [&_h1]:[@media(width<=650px)]:tracking-[-0.06em]
              [&_h1]:[@media(width<=650px)]:mt-[23px] [&_h1]:[@media(width<=650px)]:mb-[20px]
              [&_h1>span]:text-[var(--accent)] [&_h1>span]:relative [&_h1>span]:inline-block [&_h1_svg]:absolute
              [&_h1_svg]:bottom-[-9px] [&_h1_svg]:left-[0px] [&_h1_svg]:w-full [&_h1_svg]:h-[15px] [&_h1_svg]:[fill:none]
              [&_h1_svg]:[stroke:var(--accent)] [&_h1_svg]:[stroke-width:2] [&>p]:text-[rgb(115,_118,_127)] [&>p]:text-[20px]
              [&>p]:leading-[1.8] [&>p]:mt-[30px] [&>p]:[animation:0.7s_ease_0.1s_1_normal_both_running_enter]
              [&>p]:[@media(width<=650px)]:text-[18px] [&>p]:[@media(width<=650px)]:leading-[1.9]
              [&>p]:[@media(width<=650px)]:mt-[28px] [&>p]:[@media(width<=650px)]:max-w-[340px]
              [&>p]:[@media(width<=650px)]:ml-[auto] [&>p]:[@media(width<=650px)]:mr-[auto]
              [&_h1_.hero-period]:[font-family:Arial,_sans-serif] [&_h1_.hero-period]:text-[0.72em]
              [&_h1_.hero-period]:ml-[20px] [&_h1_.hero-period]:font-normal [&_h1_.hero-period]:[vertical-align:8%]"
        id="inicio"
      >
        <div
          className="platform-intro m-[auto] max-w-[850px] [&>p]:text-[21px] [&>p]:leading-[1.8] [&>p]:text-[rgb(98,_99,_106)]
              [&>p]:[@media(width<=650px)]:text-[19px] [&>p]:[@media(width<=650px)]:max-w-[340px]
              [&>p]:[@media(width<=650px)]:m-[auto]"
        >
          <span
            className="platform-kicker text-[var(--accent)] text-[14px] [font-weight:650] tracking-[0.6px]
              [@media(width<=650px)]:text-[12px] [@media(width<=650px)]:tracking-[0.4px]"
          >
            GOENGINE · DESENVOLVIMENTO SOB MEDIDA
          </span>
          <h1>
            Sites e sistemas.
            <br />
            <span>Do celular ao PC.</span>
          </h1>
          <p>
            Sites institucionais, landing pages e sistemas web.
            <br className="desktop-break [@media(width<=650px)]:hidden" />{" "}
            Desenvolvidos para o seu negócio, em qualquer tela.
          </p>
          <div
            className="platform-actions flex justify-center gap-[16px] mt-[29px] [@media(width<=650px)]:gap-[10px]
              [@media(width<=650px)]:mt-[24px] [@media(width<=650px)]:flex-wrap [&_.button]:p-[17px_25px]
              [&_.button]:gap-[20px] [&_.button]:[@media(width<=650px)]:p-[15px_17px]
              [&_.button]:[@media(width<=650px)]:gap-[10px] [&_.button]:[@media(width<=650px)]:text-[14px]"
          >
            <button
              className="button primary inline-flex items-center justify-center gap-[25px] rounded-[40px] p-[18px_24px] text-[16px]
              font-semibold [transition:transform_0.25s,_box-shadow_0.25s,_translate_0.2s] [background:var(--accent)]
              text-[white] [&:hover]:[transform:translateY(-3px)] [&:hover]:[box-shadow:rgba(0,_0,_0,_0.094)_0px_8px_25px]
              [&_svg]:[transition:transform_0.25s] [&:hover_svg]:[transform:translate(3px,_-3px)]"
              onClick={onStartProject}
            >
              Solicitar orçamento <ArrowUpRight size={17} />
            </button>
            <a
              className="button secondary inline-flex items-center justify-center gap-[25px] rounded-[40px] p-[18px_24px] text-[16px]
              font-semibold [transition:transform_0.25s,_box-shadow_0.25s,_translate_0.2s]
              [border:1px_solid_rgb(222,_223,_231)] [background:white] [&:hover]:[transform:translateY(-3px)]
              [&:hover]:[box-shadow:rgba(0,_0,_0,_0.094)_0px_8px_25px] [&_svg]:[transition:transform_0.25s]
              [&:hover_svg]:[transform:translate(3px,_-3px)]"
              href="#solucoes"
            >
              Conhecer os serviços <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <PlatformShowcase />
      </section>
    </div>
  );
}
