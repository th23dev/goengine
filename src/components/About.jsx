import { ArrowDownRight } from "lucide-react";

export default function About() {
  return (
    <section
      className="about layout-container section w-[min(1200px,_100%_-_96px)] m-[auto] pt-[110px] pb-[110px] grid
              grid-cols-[1.1fr_1fr] gap-[100px] [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:pt-[70px]
              [@media(width<=650px)]:pb-[70px] [@media(width<=650px)]:grid-cols-[1fr] [@media(width<=650px)]:gap-[40px]
              [@media(651px<=width<=760px)]:w-[calc(100%_-_56px)] [@media(651px<=width<=760px)]:grid-cols-[1fr]
              [@media(651px<=width<=760px)]:gap-[40px] [@media(761px<=width<=1000px)]:w-[calc(100%_-_56px)]
              [@media(761px<=width<=1000px)]:gap-[45px] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]
              [&_h2]:text-[clamp(34px,_3.6vw,_53px)] [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.055em]
              [&_h2]:[font-weight:550] [&_h2]:[@media(width<=650px)]:text-[36px] [&_h2_em]:[font-family:Georgia,_serif]
              [&_h2_em]:font-normal [&_h2_em]:text-[var(--accent)]"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div
        className="about-copy [&>p]:text-[rgb(100,_100,_106)] [&>p]:max-w-[425px] [&>p]:text-[15px] [&>p]:leading-[1.9]
              [&>p]:m-[26px_0px] [&>p]:[@media(width<=650px)]:text-[14px]"
      >
        <span
          className="eyebrow block text-[10px] tracking-[1.7px] text-[var(--accent)] font-semibold mb-[20px]
              [@media(width<=650px)]:mb-[16px]"
        >
          ESSÊNCIA GOENGINE / DESIGN + ENGENHARIA
        </span>
        <h2 id="about-title">
          O digital tem que
          <br />
          fazer <em>sentido.</em>
        </h2>
        <p>
          Para quem usa. Para quem gerencia. Para quem quer dar o próximo passo.
          É nesse encontro que a goengine cria sites, páginas e softwares sob
          medida.
        </p>
        <a
          href="#solucoes"
          className="about-link inline-flex items-center gap-[24px] text-[12px] [border-bottom:1px_solid_rgb(187,_183,_175)]
              pb-[10px]"
        >
          Descubra o que podemos criar <ArrowDownRight size={20} />
        </a>
      </div>
      <div
        className="about-principles [&_article]:flex [&_article]:gap-[25px] [&_article]:p-[25px_0px]
              [&_article]:[border-bottom:1px_solid_rgb(222,_219,_212)] [&_article:first-child]:pt-[0px]
              [&_article>span]:text-[var(--accent)] [&_article>span]:[font:11px_monospace] [&_article>span]:pt-[5px]
              [&_h3]:text-[19px] [&_h3]:[font-weight:550] [&_h3]:tracking-[-0.6px] [&_h3]:[@media(width<=650px)]:text-[18px]
              [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[rgb(103,_103,_107)] [&_p]:mt-[10px]"
      >
        {[
          [
            "01",
            "Seu contexto vem primeiro.",
            "O objetivo do negócio orienta as decisões de design e tecnologia.",
          ],
          [
            "02",
            "Beleza com função.",
            "Cada tela precisa comunicar com clareza e facilitar o próximo passo.",
          ],
          [
            "03",
            "Construção em conjunto.",
            "Você acompanha as etapas, entende as escolhas e valida as entregas.",
          ],
        ].map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
