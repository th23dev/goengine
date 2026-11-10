import { ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
export default function Services({ onStartProject }) {
  return (
    <section className="section container" id="solucoes">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / O QUE FAZEMOS</span>
          <h2>
            Seu desafio.
            <br />
            Nossa próxima criação.
          </h2>
        </div>
        <p>
          Do primeiro clique à operação do dia a dia.
          <br />
          Tecnologia que faz sentido para o seu negócio.
        </p>
      </div>
      <div className="services">
        {services.map(({ icon: Icon, number, name, text, tags }) => (
          <article className="service" key={number}>
            <div className="service-top">
              <Icon size={26} />
              <span>{number}</span>
            </div>
            <h3>{name}</h3>
            <p>{text}</p>
            <div className="tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <button onClick={onStartProject} className="text-link">
              Vamos criar juntos <ArrowUpRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
