import WhatsAppIcon from "./WhatsAppIcon";
import { useLayoutEffect, useRef } from "react";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
import { whatsappContacts } from "../data/contacts";
import "./WhatsAppDialog.css";

export default function WhatsAppDialog({ close }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    const position = { left: window.scrollX, top: window.scrollY, behavior: "instant" };
    const root = document.documentElement;
    const oldOverflow = root.style.overflow;
    const oldGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    dialog.showModal();
    closeRef.current.focus({ preventScroll: true });
    window.scrollTo(position);
    return () => {
      dialog.close();
      root.style.overflow = oldOverflow;
      root.style.scrollbarGutter = oldGutter;
      if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true });
      window.scrollTo(position);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}
      aria-labelledby="whatsapp-title"
      aria-describedby="whatsapp-description"
      className="whatsapp-dialog"
    >
      <button ref={closeRef} type="button" onClick={close} aria-label="Fechar contatos" className="whatsapp-close"><X size={20} /></button>
      <div className="whatsapp-intro">
        <span className="whatsapp-eyebrow"><span /> DA IDEIA AO PRIMEIRO OLÁ</span>
        <div className="whatsapp-symbol" aria-hidden="true"><WhatsAppIcon size={30} /><span>↗</span></div>
        <h2 id="whatsapp-title">Uma conversa.<br /><em>Novas possibilidades.</em></h2>
        <p id="whatsapp-description">Sua ideia não precisa estar pronta. Escolha um dos contatos e vamos pensar no próximo passo juntos.</p>
      </div>
      <div className="whatsapp-options">
        <div className="whatsapp-options-heading"><span>FALE COM A GOENGINE</span><span>via WhatsApp</span></div>
        {whatsappContacts.map(({ label, number, url }, index) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-option">
            <span className="whatsapp-option-icon" aria-hidden="true"><WhatsAppIcon size={23} /><small>0{index + 1}</small></span>
            <span className="whatsapp-option-copy"><span>{label}</span><strong>{number}</strong><small>Iniciar conversa <ArrowRight size={12} aria-hidden="true" /></small></span>
            <span className="whatsapp-option-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
          </a>
        ))}
        <p className="whatsapp-note">A conversa abre no WhatsApp, em uma nova aba.</p>
      </div>
    </dialog>
  );
}
