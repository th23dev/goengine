import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
export default function Header({ onStartProject }) {
  const [menu, setMenu] = useState(false);
  function open() {
    setMenu(false);
    onStartProject();
  }
  return (
    <header
      className="site-header [&:is(header)]:h-[84px] [&:is(header)]:[background:rgba(248,_247,_244,_0.93)]
              [&:is(header)]:[border-bottom:1px_solid_rgb(222,_221,_216)] [&:is(header)]:sticky [&:is(header)]:z-[10]
              [&:is(header)]:top-[0px] [&:is(header)]:[backdrop-filter:blur(18px)]
              [&:is(header)]:[border-top-color:rgb(222,_221,_216)] [&:is(header)]:[border-right-color:rgb(222,_221,_216)]
              [&:is(header)]:[border-left-color:rgb(222,_221,_216)] [&:is(header)]:[@media(width<=650px)]:h-[76px]"
    >
      <div
        className="nav layout-container w-[min(1200px,_100%_-_96px)] m-[auto] h-full flex items-center justify-between
              [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)]
              [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]"
      >
        <Logo />
        <nav
          className={
            menu
              ? "nav-links expanded"
              : "nav-links" +
                " flex gap-[26px] text-[13px] text-[rgb(96,_97,_106)] [@media(width<=650px)]:hidden [@media(width<=650px)]:gap-[12px] [@media(651px<=width<=760px)]:gap-[12px] [@media(761px<=width<=1000px)]:gap-[16px] [&_a:hover]:text-[var(--accent)] [&.expanded]:[@media(width<=650px)]:absolute [&.expanded]:[@media(width<=650px)]:left-[0px] [&.expanded]:[@media(width<=650px)]:right-[0px] [&.expanded]:[@media(width<=650px)]:top-[75px] [&.expanded]:[@media(width<=650px)]:p-[24px] [&.expanded]:[@media(width<=650px)]:flex [&.expanded]:[@media(width<=650px)]:flex-col [&.expanded]:[@media(width<=650px)]:[border-bottom:1px_solid_rgb(228,_230,_238)] [&.expanded]:[@media(width<=650px)]:[box-shadow:rgba(17,_17,_17,_0.03)_0px_12px_20px] [&_a]:relative [&_a]:p-[12px_0px] [&_a]:[@media(width<=760px)]:text-[11px] [&_a::after]:[content:''] [&_a::after]:absolute [&_a::after]:h-[1px] [&_a::after]:[background:var(--accent)] [&_a::after]:bottom-[5px] [&_a::after]:left-[0px] [&_a::after]:right-[0px] [&_a::after]:[transform:scaleX(0)] [&_a::after]:[transform-origin:left_center] [&_a::after]:[transition:transform_0.25s] [&_a:hover::after]:[transform:scaleX(1)] [&.expanded_a]:[@media(width<=650px)]:text-[15px] [&.expanded_a]:[@media(width<=650px)]:p-[10px_0px]"
          }
          aria-label="Principal"
          id="main-navigation"
        >
          {[
            ["Sobre", "sobre"],
            ["Serviços", "solucoes"],
            ["Como funciona", "processo"],
            ["Dúvidas", "duvidas"],
          ].map(([t, id]) => (
            <a href={"#" + id} key={id} onClick={() => setMenu(false)}>
              {t}
            </a>
          ))}
        </nav>
        <button
          className="nav-cta [background:rgb(0,_0,_0)] text-[white] p-[15px_22px] rounded-[30px] flex items-center gap-[24px]
              text-[12px] [transition:translate_0.2s,_background_0.2s] [@media(width<=380px)]:p-[0px]
              [@media(width<=380px)]:gap-[0px] [@media(width<=380px)]:text-[0px] [@media(width<=380px)]:ml-[auto]
              [@media(width<=380px)]:w-[44px] [@media(width<=380px)]:h-[44px] [@media(width<=380px)]:justify-center
              [@media(width<=380px)]:shrink-0 [@media(381px<=width<=650px)]:p-[12px] [@media(381px<=width<=650px)]:gap-[14px]
              [@media(381px<=width<=650px)]:text-[10px] [@media(381px<=width<=650px)]:ml-[auto]
              [@media(651px<=width<=760px)]:p-[13px_17px] [@media(651px<=width<=760px)]:gap-[14px]
              [@media(651px<=width<=760px)]:text-[11px] [@media(761px<=width<=1000px)]:p-[13px_17px]
              [@media(761px<=width<=1000px)]:gap-[14px] [&:hover]:[background:var(--accent)]"
          onClick={open}
        >
          Vamos conversar <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle hidden [@media(width<=650px)]:flex [@media(width<=650px)]:[background:transparent]
              [@media(width<=650px)]:ml-[10px] [@media(width<=650px)]:p-[4px] [@media(width<=650px)]:min-w-[40px]
              [@media(width<=650px)]:min-h-[44px] [@media(width<=650px)]:items-center [@media(width<=650px)]:justify-center"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          aria-controls="main-navigation"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
