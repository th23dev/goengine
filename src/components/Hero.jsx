import { ArrowUpRight, ArrowDown } from "lucide-react";
import Showcase from "./Showcase";
export default function Hero({ onStartProject }) {
  return (
    <section className="hero container" id="inicio">
      <div className="availability">
        <span /> DESIGN + TECNOLOGIA + PROPÓSITO
      </div>
      <h1>
        Sua próxima ideia
        <br />
        merece{" "}
        <span>
          ir além.
          <svg
            viewBox="0 0 400 18"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M3 14Q195 -3 397 8" />
          </svg>
        </span>
      </h1>
      <p>
        Criamos sites, landing pages e softwares sob encomenda.
        <br className="desktop-break" /> Você traz a visão. A goengine coloca em
        movimento.
      </p>
      <div className="hero-actions">
        <button className="button primary" onClick={onStartProject}>
          Tire sua ideia do papel <ArrowUpRight size={18} />
        </button>
        <a className="button secondary" href="#trabalho">
          Explore nosso trabalho <ArrowDown size={16} />
        </a>
      </div>
      <div className="hero-foot">
        <span>ESTRATÉGIA NO INÍCIO. CUIDADO EM CADA PIXEL.</span>
        <span>
          FEITO PARA O SEU PRÓXIMO PASSO <ArrowDown size={12} />
        </span>
      </div>
      <Showcase />
    </section>
  );
}
