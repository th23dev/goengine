export default function Process() {
  return (
    <section className="section container process" id="processo">
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / DO PRIMEIRO OLÁ À ENTREGA</span>
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
      <div className="steps">
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
            <span className="step-number">0{i + 1}</span>
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
