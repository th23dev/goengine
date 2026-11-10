import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { questions } from "../data/content";
export default function FAQ() {
  const [faq, setFaq] = useState(0);
  return (
    <section className="faq-section container">
      <div>
        <span className="eyebrow">SEM PONTAS SOLTAS</span>
        <h2>
          Boas perguntas.
          <br />
          Respostas claras.
        </h2>
        <p>Vamos tornar o próximo passo mais simples.</p>
      </div>
      <div className="faq-list">
        {questions.map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <h3>
              <button
                aria-expanded={faq === i}
                aria-controls={"answer-" + i}
                onClick={() => setFaq(faq === i ? -1 : i)}
              >
                {q}
                {faq === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={"answer-" + i} hidden={faq !== i}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
