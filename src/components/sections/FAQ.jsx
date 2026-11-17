import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { questions } from "../../data/content";
export default function FAQ() {
  const [faq, setFaq] = useState(0);
  return (
    <section
      className="faq-section [@media(max-width:_650px)]:[&_>_div_>_p]:[line-height:1.7] layout-container w-[min(1200px,calc(100%-96px))] m-auto grid grid-cols-[1fr_1.3fr] gap-17.5
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
          className="eyebrow mb-5 block text-[13px] font-semibold tracking-[1.7px] text-accent max-[650px]:mb-4"
        >
          SEM PONTAS SOLTAS
        </span>
        <h2>
          Boas perguntas.
          <br />
          <span className="text-accent">Respostas claras.</span>
        </h2>
        <p>Do primeiro orçamento à entrega: entenda como escolher uma solução, planejar o investimento e acompanhar seu projeto.</p>
        <a className="faq-contact group mt-[26px] inline-flex items-center gap-3 border-b border-accent/30 pb-2 text-[15px] font-semibold text-accent transition-colors hover:border-accent [&>svg]:rounded-full [&>svg]:border [&>svg]:border-accent/30 [&>svg]:box-content [&>svg]:p-1.5 [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-0.5 hover:[&>svg]:-translate-y-0.5 motion-reduce:[&>svg]:transition-none motion-reduce:hover:[&>svg]:translate-x-0 motion-reduce:hover:[&>svg]:translate-y-0" href="#contato">Quer conversar sobre sua ideia? <ArrowUpRight size={18} /></a>
      </div>
      <div className="faq-list [display:grid] [align-content:start] [gap:12px]">
        {questions.map(([q, a, summary, details], i) => (
          <div
            className="faq-item [border:1px_solid_#e1dcd4] [border-radius:16px] [background:#ffffff38] [overflow:clip] [&[data-open='true']]:[background:#fffaf5] [&[data-open='true']]:[border-color:#e5c3b6] [&_h3]:[font-family:inherit] [&_h3]:[font-weight:600] [&_h3_button]:[display:flex] [&_h3_button]:[align-items:center] [&_h3_button]:[gap:15px] [&_h3_button]:[width:100%] [&_h3_button]:[padding:23px] [&_h3_button]:[text-align:left] [&_h3_button]:[background:transparent] [&_h3_button]:[color:var(--ink)] [&_h3_button:focus-visible]:[outline-offset:-5px] [&_h3_button:focus-visible]:[border-radius:15px] [&_h3_button:hover_.faq-toggle]:[background:#f8e4db] [&[data-open='true']_.faq-toggle]:[background:var(--accent)] [&[data-open='true']_.faq-toggle]:[border-color:var(--accent)] [&[data-open='true']_.faq-toggle]:[color:white] [&[data-open='true']_.faq-toggle]:[transform:rotate(45deg)] [&[data-open='true']_.faq-answer]:[grid-template-rows:1fr] [&[data-open='true']_.faq-answer]:[opacity:1] [&[data-open='true']_.faq-answer]:[visibility:visible] [&[data-open='true']_.faq-answer]:[transition-delay:0s] [&[data-open='true']_.faq-answer-content]:[translate:0_0] [@media(max-width:_650px)]:[&_h3_button]:[padding:20px_16px] [@media(max-width:_650px)]:[&_h3_button]:[gap:10px]"
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
                <span className="faq-number [align-self:flex-start] [padding-top:3px] [font-size:12px] [font-weight:500] [color:var(--accent)]" aria-hidden="true">0{i + 1}</span>
                <span className="faq-question-copy [flex:1] [&_>_span]:[display:block] [&_>_span]:[font-size:17px] [&_>_span]:[line-height:1.45] [&_small]:[display:block] [&_small]:[margin-top:7px] [&_small]:[font-size:13px] [&_small]:[line-height:1.6] [&_small]:[font-weight:400] [&_small]:[color:var(--muted)] [@media(max-width:_650px)]:[&_>_span]:[font-size:16px]"><span>{q}</span><small>{summary}</small></span>
                <span className="faq-toggle [display:grid] [place-items:center] [width:32px] [height:32px] [flex-shrink:0] [border:1px_solid_#e5d8ce] [border-radius:50%] [color:var(--accent)] [transition:background_.25s,_color_.25s,_transform_.4s] [@media(prefers-reduced-motion:_reduce)]:[transition:none]" aria-hidden="true"><Plus size={18} /></span>
              </button>
            </h3>
            <div className="faq-answer [display:grid] [grid-template-rows:0fr] [opacity:0] [visibility:hidden] [transition:grid-template-rows_.45s_cubic-bezier(.22,_1,_.36,_1),_opacity_.3s_ease,_visibility_0s_.45s] [@media(prefers-reduced-motion:_reduce)]:[transition:none]" id={"answer-" + i} role="region" aria-labelledby={"question-" + i} aria-hidden={faq !== i} inert={faq !== i}>
              <div className="faq-answer-clip [min-height:0] [overflow:hidden]"><div className="faq-answer-content [margin:0_23px_0_53px] [padding:20px_0_25px] [border-top:1px_solid_#eaddd2] [translate:0_-8px] [transition:translate_.45s_ease] [&_p]:[font-size:16px] [&_p]:[line-height:1.8] [&_p]:[color:var(--muted)] [&_li]:[font-size:16px] [&_li]:[line-height:1.8] [&_li]:[color:var(--muted)] [&_ul]:[display:grid] [&_ul]:[gap:12px] [&_ul]:[list-style:none] [&_ul]:[padding:0] [&_ul]:[margin:18px_0_0] [&_li]:[position:relative] [&_li]:[padding-left:16px] [&_li::before]:[content:''] [&_li::before]:[position:absolute] [&_li::before]:[top:11px] [&_li::before]:[left:0] [&_li::before]:[width:5px] [&_li::before]:[height:5px] [&_li::before]:[border-radius:50%] [&_li::before]:[background:var(--accent)] [@media(max-width:_650px)]:[margin:0_16px] [@media(prefers-reduced-motion:_reduce)]:[transition:none]">
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
