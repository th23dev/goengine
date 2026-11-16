import { ArrowUpRight } from "lucide-react";
const currentYear = new Date().getFullYear();
export default function Footer({ onStartProject }) {
  return (
    <footer
      className="site-footer [background:rgb(14,_13,_12)] text-[rgb(238,_236,_232)] p-[100px_0px_28px] overflow-hidden
              [@media(width<=650px)]:pt-[45px] [@media(width<=650px)]:pb-[24px] [@media(651px<=width<=1000px)]:pt-[65px]"
    >
      <div
        className="layout-container w-[min(1200px,_100%_-_96px)] m-[auto] [@media(width<=650px)]:w-[calc(100%_-_40px)]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]"
      >
        <div
          className="footer-directory grid grid-cols-[1.5fr_repeat(4,_1fr)] gap-[36px]
              [@media(width<=650px)]:grid-cols-[repeat(2,_minmax(0px,_1fr))] [@media(width<=650px)]:gap-[28px_18px]
              [@media(651px<=width<=1000px)]:grid-cols-[repeat(4,_1fr)] [@media(651px<=width<=1000px)]:gap-[30px_20px]
              [&_h2]:block [&_h2]:[font:500_10px_/_1.5_'DM_Sans',_sans-serif] [&_h2]:tracking-[0.7px] [&_h2]:uppercase
              [&_h2]:text-[rgb(159,_154,_149)] [&_h2]:m-[0px_0px_19px] [&_h2]:[@media(width<=650px)]:mb-[12px] [&_nav]:flex
              [&_nav]:flex-col [&_nav]:items-start [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[9px] [&_a]:p-[5px_0px]
              [&_a]:text-[12px] [&_a]:leading-[1.7] [&_a]:text-[rgb(238,_236,_232)] [&_a]:[background:transparent]
              [&_a]:text-left [&_a]:[transition:color_0.2s] [&_button]:inline-flex [&_button]:items-center
              [&_button]:gap-[9px] [&_button]:p-[5px_0px] [&_button]:text-[12px] [&_button]:leading-[1.7]
              [&_button]:text-[rgb(238,_236,_232)] [&_button]:[background:transparent] [&_button]:text-left
              [&_button]:[transition:color_0.2s] [&_a:hover]:text-[rgb(255,_148,_127)]
              [&_button:hover]:text-[rgb(255,_148,_127)]"
        >
          <div
            className="footer-signature [&>span]:block [&>span]:[font:500_10px_/_1.5_'DM_Sans',_sans-serif] [&>span]:tracking-[0.7px]
              [&>span]:uppercase [&>span]:text-[rgb(159,_154,_149)] [&>span]:m-[0px_0px_19px] [&>span::before]:[content:'']
              [&>span::before]:inline-block [&>span::before]:w-[5px] [&>span::before]:h-[5px] [&>span::before]:mr-[8px]
              [&>span::before]:rounded-[50%] [&>span::before]:[background:var(--accent)]
              [&>span::before]:[vertical-align:middle] [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[rgb(194,_189,_183)]
              [@media(width<=1000px)]:col-[1_/_-1] [@media(width<=1000px)]:mb-[10px]"
          >
            <span>DA IDEIA AO DIGITAL.</span>
            <p>
              Design que inspira.
              <br />
              Tecnologia que move.
            </p>
          </div>
          <nav aria-label="Goengine no rodapé">
            <h2>Goengine</h2>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#trabalho">Projetos</a>
          </nav>
          <nav aria-label="Serviços no rodapé">
            <h2>O que fazemos</h2>
            <a href="#solucoes">Sites institucionais</a>
            <a href="#solucoes">Landing pages</a>
            <a href="#solucoes">Sistemas web</a>
          </nav>
          <nav aria-label="Informações no rodapé">
            <h2>Saiba mais</h2>
            <a href="#processo">Como funciona</a>
            <a href="#duvidas">Dúvidas frequentes</a>
          </nav>
          <div
            className="footer-contact flex flex-col items-start [&_.footer-return]:mt-[21px]
              [&_.footer-return]:text-[rgb(170,_164,_158)]"
          >
            <h2>Vamos conversar</h2>
            <button onClick={onStartProject}>
              Conte sua ideia <ArrowUpRight size={14} />
            </button>
            <a href="#contato">Comece seu projeto</a>
            <a className="footer-return" href="#inicio">
              Voltar ao topo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div
          className="footer-wordmark m-[80px_-8px_8px] [font-family:Manrope,_sans-serif] text-[clamp(70px,_18.7vw,_250px)]
              font-extrabold tracking-[-0.075em] leading-[1.2] text-center
              [background:linear-gradient(rgb(51,_48,_47)_5%,_rgb(32,_29,_28)_48%,_rgb(14,_13,_12)_96%)_text]
              text-transparent select-none [@media(width<=650px)]:m-[45px_0px_18px] [@media(width<=650px)]:text-[18.3vw]"
          aria-hidden="true"
        >
          goengine
        </div>
        <div
          className="footer-copyright text-center text-[10px] leading-[1.7] text-[rgb(159,_154,_149)]
              [@media(width<=650px)]:text-[9px]"
        >
          © {currentYear} Goengine. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
