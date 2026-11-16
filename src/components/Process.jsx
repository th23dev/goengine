export default function Process() {
  return (
    <section
      className="section layout-container process w-[min(1200px,_100%_-_96px)] m-[auto] pt-[110px] pb-[110px]
              [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:pt-[70px] [@media(width<=650px)]:pb-[70px]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]"
      id="processo"
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
            03 / DO PRIMEIRO OLÁ À ENTREGA
          </span>
          <h2>
            Um bom projeto começa
            <br />
            com uma boa conversa.
          </h2>
        </div>
        <p>
          Você participa. A gente simplifica.
          <br />
          Clareza em cada etapa do caminho.
        </p>
      </div>
      <div
        className="steps grid grid-cols-[repeat(4,_1fr)] gap-[35px] mt-[55px] [@media(width<=650px)]:grid-cols-[1fr_1fr]
              [@media(width<=650px)]:gap-[30px_22px] [@media(width<=650px)]:mt-[33px] [&_h3]:text-[20px]
              [&_h3]:tracking-[-0.5px] [&_h3]:m-[23px_0px_13px] [&_h3]:[font-weight:550]
              [&_h3]:[@media(width<=650px)]:text-[17px] [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[rgb(99,_99,_106)]
              [&_p]:[@media(width<=650px)]:text-[13px] [&_article:hover_.step-number::after]:w-full
              [&_article:hover_.step-number::after]:h-[2px] [&_article:hover_.step-number::after]:bottom-[-1px]
              [&_article:hover_.step-number::after]:rounded-none"
      >
        {[
          [
            "Entendemos",
            "Ouvimos sua ideia, seu contexto e o que você quer alcançar.",
          ],
          [
            "Desenhamos",
            "Transformamos a estratégia em uma experiência visual que você pode explorar.",
          ],
          [
            "Desenvolvemos",
            "Damos vida ao projeto com código, testes e atenção aos detalhes.",
          ],
          [
            "Colocamos no ar",
            "Preparamos a entrega e combinamos os próximos passos para sua evolução.",
          ],
        ].map(([t, p], i) => (
          <article key={t}>
            <span
              className="step-number text-[11px] text-[var(--accent)] block pb-[21px] [border-bottom:1px_solid_rgb(213,_209,_201)]
              relative [border-top-color:rgb(213,_209,_201)] [border-right-color:rgb(213,_209,_201)]
              [border-left-color:rgb(213,_209,_201)] [&:after]:[content:''] [&:after]:w-[5px] [&:after]:h-[5px]
              [&:after]:[background:var(--accent)] [&:after]:absolute [&:after]:bottom-[-3px] [&:after]:left-[0px]
              [&:after]:rounded-[50%] [&::after]:[transition:width_0.4s]"
            >
              0{i + 1}
            </span>
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
