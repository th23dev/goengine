import { ArrowDownRight, Compass, Layers, MessagesSquare } from "lucide-react";
import "./About.css";

const principles = [
  { icon: Compass, label: "ESTRATÉGIA", title: "Seu contexto vem primeiro.", text: "O objetivo do negócio orienta as decisões de design e tecnologia." },
  { icon: Layers, label: "DESIGN", title: "Beleza com função.", text: "Cada tela precisa comunicar com clareza e facilitar o próximo passo." },
  { icon: MessagesSquare, label: "PARCERIA", title: "Construção em conjunto.", text: "Você acompanha as etapas, entende as escolhas e valida as entregas." },
];

export default function About() {
  return (
    <section
      className="about section layout-container w-[min(1200px,_100%_-_96px)] m-auto py-[110px]
        [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:py-[70px]
        [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)]
        [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <span className="about-eyebrow"><i aria-hidden="true" /> ESSÊNCIA GOENGINE</span>
        <h2 id="about-title">O digital<br />tem que fazer<br /><em>sentido.</em></h2>
        <p>Para quem usa. Para quem gerencia. Para quem quer dar o próximo passo. É nesse encontro que a goengine cria sites, páginas e softwares sob medida.</p>
        <a href="#solucoes" className="about-link">Descubra o que podemos criar <span><ArrowDownRight size={22} /></span></a>
      </div>
      <div className="about-principles">
        <div className="about-principles-heading"><span>DESIGN + ENGENHARIA</span><span>Uma ideia. Trabalho em conjunto.</span></div>
        {principles.map(({ icon: Icon, label, title, text }, index) => (
          <article key={label}>
            <div className="about-principle-icon" aria-hidden="true"><Icon size={25} strokeWidth={1.5} /></div>
            <div className="about-principle-content">
              <div className="about-principle-label"><span>{label}</span><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
