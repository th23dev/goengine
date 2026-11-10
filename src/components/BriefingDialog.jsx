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
      className="dialog"
      aria-labelledby="brief-title"
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      <button
        autoFocus
        className="close"
        onClick={close}
        aria-label="Fechar formulário"
      >
        <X />
      </button>
      <span className="eyebrow">O PRIMEIRO PASSO</span>
      <h2 id="brief-title">Conte sua ideia.</h2>
      <p>Organize os detalhes do seu próximo projeto.</p>
      {done ? (
        <div className="success" role="status">
          <Check size={32} />
          <h3>Seu briefing está pronto.</h3>
          <p>
            O arquivo foi preparado para download. Guarde-o para compartilhar
            com a goengine. Nenhuma informação foi enviada.
          </p>
          <button className="button primary" onClick={close}>
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
          <p className="form-note">
            Você baixará um resumo. O envio de contato ainda não está
            disponível.
          </p>
          <button className="button primary" type="submit">
            Preparar meu briefing <ArrowUpRight size={18} />
          </button>
        </form>
      )}
    </dialog>
  );
}
