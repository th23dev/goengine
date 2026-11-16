import { useState, useEffect, useRef } from "react";
import { X, Check, ArrowRight, ArrowUpRight } from "lucide-react";
export default function BriefingDialog({ close }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    dialog.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
      dialog.close();
      previous?.focus();
    };
  }, []);
  const [done, setDone] = useState(false);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `BRIEFING — GOENGINE\n\nNome: ${data.get("nome")}\nE-mail: ${data.get("email")}\nServiço: ${data.get("servico")}\n\nSobre o projeto:\n${data.get("ideia")}`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "briefing-goengine.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDone(true);
  }
  return (
    <dialog
      ref={dialogRef}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      className="dialog relative [border:0px] rounded-[16px] [background:rgb(251,_251,_253)] max-w-[500px] w-full p-[40px]
              m-[auto] max-h-[calc(100dvh_-_40px)] [overflow-y:auto] text-[rgb(0,_0,_0)]
              [box-shadow:rgba(0,_0,_0,_0.25)_0px_30px_100px] [@media(width<=650px)]:p-[32px_22px] [&_h2]:text-[36px]
              [&_h2]:[@media(width<=650px)]:text-[30px] [&>p]:text-[13px] [&>p]:text-[rgb(124,_130,_144)]
              [&>p]:m-[12px_0px_23px] [&_form]:grid [&_form]:gap-[15px] [&_label]:text-[11px] [&_label]:grid
              [&_label]:gap-[7px] [&_label]:font-medium [&_input]:[border:1px_solid_rgb(220,_224,_233)] [&_input]:p-[12px]
              [&_input]:rounded-[5px] [&_input]:[background:white] [&_input]:w-full [&_input]:text-[12px]
              [&_input]:text-[rgb(48,_55,_68)] [&_textarea]:[border:1px_solid_rgb(220,_224,_233)] [&_textarea]:p-[12px]
              [&_textarea]:rounded-[5px] [&_textarea]:[background:white] [&_textarea]:w-full [&_textarea]:text-[12px]
              [&_textarea]:text-[rgb(48,_55,_68)] [&_textarea]:[resize:vertical]
              [&_select]:[border:1px_solid_rgb(220,_224,_233)] [&_select]:p-[12px] [&_select]:rounded-[5px]
              [&_select]:[background:white] [&_select]:w-full [&_select]:text-[12px] [&_select]:text-[rgb(48,_55,_68)]"
      aria-labelledby="brief-title"
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      <button
        autoFocus
        className="close absolute right-[17px] top-[17px] [background:transparent] text-[rgb(101,_108,_126)]"
        onClick={close}
        aria-label="Fechar formulário"
      >
        <X />
      </button>
      <span
        className="eyebrow block text-[10px] tracking-[1.7px] text-[var(--accent)] font-semibold mb-[20px]
              [@media(width<=650px)]:mb-[16px]"
      >
        O PRIMEIRO PASSO
      </span>
      <h2 id="brief-title">Conte sua ideia.</h2>
      <p>Organize os detalhes do seu próximo projeto.</p>
      {done ? (
        <div
          className="success p-[20px_0px] [&>svg]:text-[var(--accent)] [&>svg]:mb-[15px] [&_h3]:text-[22px] [&_p]:text-[13px]
              [&_p]:text-[rgb(115,_123,_141)] [&_p]:leading-[1.8] [&_p]:m-[14px_0px_22px]"
          role="status"
        >
          <Check size={32} />
          <h3>Seu briefing está pronto.</h3>
          <p>
            O arquivo foi preparado para download. Guarde-o para compartilhar
            com a goengine. Nenhuma informação foi enviada.
          </p>
          <button
            className="button primary inline-flex items-center justify-center gap-[25px] rounded-[40px] p-[18px_24px] text-[13px]
              font-semibold [transition:transform_0.25s,_box-shadow_0.25s,_translate_0.2s] [background:var(--accent)]
              text-[white] [&:hover]:[transform:translateY(-3px)] [&:hover]:[box-shadow:rgba(0,_0,_0,_0.094)_0px_8px_25px]
              [&_svg]:[transition:transform_0.25s] [&:hover_svg]:[transform:translate(3px,_-3px)]"
            onClick={close}
          >
            Concluir <ArrowRight size={17} />
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label>
            Seu nome
            <input
              name="nome"
              required
              placeholder="Como podemos chamar você?"
              autoComplete="name"
            />
          </label>
          <label>
            E-mail
            <input
              name="email"
              type="email"
              required
              placeholder="voce@empresa.com"
              autoComplete="email"
            />
          </label>
          <label>
            O que você precisa?
            <select name="servico">
              <option>Site institucional</option>
              <option>Landing page</option>
              <option>Software sob encomenda</option>
              <option>Ainda estou descobrindo</option>
            </select>
          </label>
          <label>
            Sobre a ideia
            <textarea
              name="ideia"
              required
              rows="3"
              placeholder="Qual problema você quer resolver?"
            />
          </label>
          <p className="form-note text-[12px] leading-[1.6] text-[rgb(98,_99,_106)]">
            Você baixará um resumo. O envio de contato ainda não está
            disponível.
          </p>
          <button
            className="button primary inline-flex items-center justify-center gap-[25px] rounded-[40px] p-[18px_24px] text-[13px]
              font-semibold [transition:transform_0.25s,_box-shadow_0.25s,_translate_0.2s] [background:var(--accent)]
              text-[white] [&:hover]:[transform:translateY(-3px)] [&:hover]:[box-shadow:rgba(0,_0,_0,_0.094)_0px_8px_25px]
              [&_svg]:[transition:transform_0.25s] [&:hover_svg]:[transform:translate(3px,_-3px)]"
            type="submit"
          >
            Preparar meu briefing <ArrowUpRight size={18} />
          </button>
        </form>
      )}
    </dialog>
  );
}
