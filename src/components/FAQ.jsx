import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { questions } from "../data/content";
export default function FAQ() {
  const [faq, setFaq] = useState(0);
  return (
    <section
      className="faq-section layout-container w-[min(1200px,calc(100%-96px))] m-auto grid grid-cols-[1fr_1.3fr] gap-17.5
              pb-27.5 pt-2.5 [@media(width<=650px)]:w-[calc(100%-40px)] [@media(width<=650px)]:grid-cols-[1fr]
              [@media(width<=650px)]:gap-7.5 [@media(width<=650px)]:pb-16.25 [@media(width<=650px)]:pr-0
              [@media(width<=650px)]:pl-0 [@media(651px<=width<=1000px)]:w-[calc(100%-56px)]
              [@media(651px<=width<=1000px)]:gap-8.75 [@media(1500px<=width)]:w-[min(1280px,calc(100%-160px))]
              [&_h2]:text-[38px] [&_h2]:font-[550] [&_h2]:[@media(width<=650px)]:text-[34px] [&>div>p]:text-[14px]
              [&>div>p]:text-[rgb(98,99,106)] [&>div>p]:mt-4.5"
      id="duvidas"
    >
      <div>
        <span
          className="eyebrow block text-[10px] tracking-[1.7px] text-(--accent) font-semibold mb-5
              [@media(width<=650px)]:mb-4"
        >
          SEM PONTAS SOLTAS
        </span>
        <h2>
          Boas perguntas.
          <br />
          Respostas claras.
        </h2>
        <p>Vamos tornar o próximo passo mais simples.</p>
      </div>
      <div className="faq-list">
        {questions.map(([q, a], i) => (
          <div
            className="faq-item [border-bottom:1px_solid_rgb(217,214,206)] border-t-[rgb(217,214,206)]
              border-r-[rgb(217,214,206)] border-l-[rgb(217,214,206)]
              first:[border-top:1px_solid_rgb(226,229,236)] [&_h3_button]:[background:transparent]
              [&_h3_button]:flex [&_h3_button]:w-full [&_h3_button]:justify-between [&_h3_button]:text-left
              [&_h3_button]:gap-5 [&_h3_button]:items-center [&_h3_button]:p-[25px_0px] [&_h3_button]:text-[14px]
              [&_h3_button]:font-medium [&_h3_button]:text-[rgb(51,57,70)] [&_h3_svg]:shrink-0
              [&_h3_svg]:text-(--accent) [&_p]:text-[14px] [&_p]:leading-[1.9] [&_p]:text-[rgb(98,99,106)]
              [&_p]:p-[0px_25px_23px_0px]"
            key={q}
          >
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
