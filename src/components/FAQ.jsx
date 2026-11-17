import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { questions } from "../data/content";
import "./FAQ.css";
export default function FAQ() {
  const [faq, setFaq] = useState(0);
  return (
    <section
      className="faq-section layout-container w-[min(1200px,calc(100%-96px))] m-auto grid grid-cols-[1fr_1.3fr] gap-17.5
              pb-27.5 pt-2.5 [@media(width<=650px)]:w-[calc(100%-40px)] [@media(width<=650px)]:grid-cols-[1fr]
              [@media(width<=650px)]:gap-7.5 [@media(width<=650px)]:pb-16.25 [@media(width<=650px)]:pr-0
              [@media(width<=650px)]:pl-0 [@media(651px<=width<=1000px)]:w-[calc(100%-56px)]
              [@media(651px<=width<=1000px)]:gap-8.75 [@media(1500px<=width)]:w-[min(1280px,calc(100%-160px))]
              [&_h2]:text-[38px] [&_h2]:font-extrabold [&_h2]:[@media(width<=650px)]:text-[34px] [&>div>p]:text-[19px]
              [&>div>p]:text-[rgb(98,99,106)] [&>div>p]:mt-4.5"
      id="duvidas"
    >
      <div>
        <span
          className="eyebrow block text-[13px] tracking-[1.7px] text-(--accent) font-semibold mb-5
              [@media(width<=650px)]:mb-4"
        >
          SEM PONTAS SOLTAS
        </span>
        <h2>
          Boas perguntas.
          <br />
          Respostas claras.
        </h2>
        <p>Do primeiro orçamento à entrega: entenda como escolher uma solução, planejar o investimento e acompanhar seu projeto.</p>
        <a className="faq-contact" href="#contato">Quer conversar sobre sua ideia? <ArrowUpRight size={18} /></a>
      </div>
      <div className="faq-list">
        {questions.map(([q, a, summary, details], i) => (
          <div
            className="faq-item"
            data-open={faq === i}
            key={q}
          >
            <h3>
              <button
                type="button"
                id={"question-" + i}
                aria-expanded={faq === i}
                aria-controls={"answer-" + i}
                onClick={() => setFaq(faq === i ? -1 : i)}
              >
                <span className="faq-number" aria-hidden="true">0{i + 1}</span>
                <span className="faq-question-copy"><span>{q}</span><small>{summary}</small></span>
                <span className="faq-toggle" aria-hidden="true"><Plus size={18} /></span>
              </button>
            </h3>
            <div className="faq-answer" id={"answer-" + i} role="region" aria-labelledby={"question-" + i} aria-hidden={faq !== i} inert={faq !== i}>
              <div className="faq-answer-clip"><div className="faq-answer-content">
                <p>{a}</p>
                <ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
