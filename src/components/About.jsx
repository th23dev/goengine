import { ArrowDownRight } from "lucide-react";

export default function About() {
  return (
    <section className="about container section" id="sobre" aria-labelledby="about-title">
      <div className="about-copy">
        <span className="eyebrow">ESSÊNCIA GOENGINE / DESIGN + ENGENHARIA</span>
        <h2 id="about-title">O digital tem que<br />fazer <em>sentido.</em></h2>
        <p>Para quem usa. Para quem gerencia. Para quem quer dar o próximo passo. É nesse encontro que a goengine cria sites, páginas e softwares sob medida.</p>
        <a href="#solucoes" className="about-link">Descubra o que podemos criar <ArrowDownRight size={20} /></a>
      </div>
      <div className="about-principles">
        {[
          ["01", "Seu contexto vem primeiro.", "O objetivo do negócio orienta as decisões de design e tecnologia."],
          ["02", "Beleza com função.", "Cada tela precisa comunicar com clareza e facilitar o próximo passo."],
          ["03", "Construção em conjunto.", "Você acompanha as etapas, entende as escolhas e valida as entregas."],
        ].map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>
  );
}
