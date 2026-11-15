import { ArrowUpRight, ArrowDown } from "lucide-react";
import Showcase from "./Showcase";

export default function Hero({ onStartProject }) {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="availability"><span /> DESIGN + TECNOLOGIA + PROPÓSITO</div>
          <h1>Sua próxima<br />ideia merece<br /><span>ir além.</span><span className="hero-period" aria-hidden="true">↗</span></h1>
          <p>Criamos sites, landing pages e softwares sob encomenda. Você traz a visão. A goengine coloca em movimento.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={onStartProject}>Tire sua ideia do papel <ArrowUpRight size={19} /></button>
            <a className="hero-explore" href="#solucoes" aria-label="Explore nossas soluções"><ArrowDown size={20} /></a>
          </div>
          <span className="hero-note">ESTRATÉGIA NO INÍCIO. CUIDADO EM CADA PIXEL.</span>
        </div>
        <div className="engine-art" aria-hidden="true">
          <div className="engine-grid" />
          <span className="engine-coordinate">GO / ENGINE<br />IDEIAS EM MOVIMENTO</span>
          <span className="engine-cross">+</span>
          <div className="engine-object"><div className="engine-ring ring-one" /><div className="engine-ring ring-two" /><div className="engine-ring ring-three" /><div className="engine-core">g<span>↗</span></div></div>
          <div className="engine-label label-design">01 <span>Design com intenção</span></div>
          <div className="engine-label label-code">02 <span>Código sob medida</span></div>
          <div className="engine-bottom"><span>DA VISÃO À EXPERIÊNCIA.</span><span className="engine-signal"><i /><i /><i /><i /><i /></span></div>
        </div>
      </div>
      <div className="hero-foot"><span>UMA IDEIA. MUITAS POSSIBILIDADES.</span><a href="#trabalho">EXPLORE NOSSO UNIVERSO <ArrowDown size={13} /></a></div>
      <Showcase />
    </section>
  );
}
