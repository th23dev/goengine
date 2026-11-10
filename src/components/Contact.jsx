import { ArrowUpRight } from "lucide-react";
export default function Contact({ onStartProject }) {
  return (
    <section className="contact container" id="contato">
      <div className="contact-orbit" />
      <span className="eyebrow">O PRÓXIMO CAPÍTULO É SEU.</span>
      <h2>
        Vamos construir
        <br />
        algo <span>incrível?</span>
      </h2>
      <p>
        Sua ideia não precisa estar pronta.
        <br />
        Só precisa de um primeiro passo.
      </p>
      <button className="button light" onClick={onStartProject}>
        Conte sua ideia <ArrowUpRight size={19} />
      </button>
      <span className="contact-bottom">DA IDEIA AO DIGITAL. COM GOENGINE.</span>
    </section>
  );
}
