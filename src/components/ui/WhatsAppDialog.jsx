import WhatsAppIcon from "./WhatsAppIcon";
import { useLayoutEffect, useRef } from "react";
import { X, ArrowUpRight, ArrowRight, Smartphone, Globe2 } from "lucide-react";
import { whatsappContacts } from "../../data/contacts";

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
      className="whatsapp-dialog [position:fixed] [inset:0] [width:min(540px,_calc(100%_-_32px))] [max-width:none] [max-height:calc(100dvh_-_32px)] [margin:auto] [padding:0] [border:1px_solid_#ffffffb3] [border-radius:26px] [background:var(--paper)] [color:var(--ink)] [box-shadow:0_32px_100px_#17171940] [overflow-y:auto] [overscroll-behavior:contain] [&::backdrop]:[background:#17171980] [&::backdrop]:[backdrop-filter:blur(9px)] [@media(max-width:_480px)]:[border-radius:20px] [@media(prefers-reduced-motion:_no-preference)]:[&[open]]:[animation:whatsapp-arrive_.3s_cubic-bezier(.22,_1,_.36,_1)_both] [@media(prefers-reduced-motion:_no-preference)]:[&[open]::backdrop]:[animation:whatsapp-dim_.25s_ease_both]"
    >
      <button ref={closeRef} type="button" onClick={close} aria-label="Fechar contatos" className="whatsapp-close [position:absolute] [top:18px] [right:18px] [z-index:1] [display:grid] [place-items:center] [width:36px] [height:36px] [border:1px_solid_#e4ddd5] [border-radius:50%] [color:var(--muted)] [background:#ffffffb3] [transition:background_.2s,_color_.2s] [&:hover]:[background:white] [&:hover]:[color:var(--accent)]"><X size={20} /></button>
      <div className="bg-[#f4e7d5] px-7 pt-8 pb-7 max-[480px]:px-5">
        <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-accent"><WhatsAppIcon size={19} /><span>Atendimento pelo WhatsApp</span></div>
        <h2 id="whatsapp-title" className="pr-7 text-[32px] leading-[1.1] tracking-[-1.3px]">Vamos tirar seu<br /><span className="text-accent">projeto do papel.</span></h2>
        <p id="whatsapp-description" className="mt-4 max-w-[390px] text-[15px] leading-relaxed text-[#62584e]">Escolha o contato para aplicativos ou sites e conte o que precisa. A conversa continua no WhatsApp.</p>
      </div>
      <div className="whatsapp-options border-t border-[#e8e0d7] px-7 pt-5 pb-6 max-[480px]:px-5">
        <div className="whatsapp-options-heading [display:flex] [justify-content:space-between] [align-items:center] [gap:12px] [margin-bottom:15px] [color:var(--muted)] [font-size:11px] [&_>_span:first-child]:[letter-spacing:1px] [&_>_span:first-child]:[font-size:10px] [&_>_span:first-child]:[font-weight:600]"><span>ESCOLHA O SEU ATENDIMENTO</span><WhatsAppIcon size={16} /></div>
        {whatsappContacts.map(({ label, number, url }, index) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-option group border-2! border-ink! rounded-[18px]! shadow-[3px_3px_0_#171719] hover:shadow-[5px_6px_0_#171719]! hover:border-ink! [display:flex] [align-items:center] [gap:16px] [border:1px_solid_#e4ded6] [border-radius:15px] [padding:18px] [background:white] [margin-top:10px] [transition:border-color_.2s,_box-shadow_.2s,_translate_.2s] [&:hover]:[border-color:#db9c87] [&:hover]:[box-shadow:0_8px_22px_#57342309] [&:hover]:[translate:0_-2px] [&:hover_.whatsapp-option-arrow]:[transform:translate(2px,_-2px)] [&:hover_.whatsapp-option-arrow]:[color:var(--accent)] [@media(max-width:_480px)]:[padding:15px_12px] [@media(max-width:_480px)]:[gap:12px]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ink/15 bg-[#f4e7d5] text-accent" aria-hidden="true">{index === 0 ? <Smartphone size={25} strokeWidth={1.5} /> : <Globe2 size={25} strokeWidth={1.5} />}</span>
            <span className="whatsapp-option-copy [flex:1] [display:grid] [gap:4px] [&_>_span]:[font-size:12px] [&_>_span]:[color:var(--muted)] [&_strong]:[font-size:18px] [&_strong]:[letter-spacing:-.4px] [&_strong]:[font-weight:650] [&_strong]:[white-space:nowrap] [&_small]:[display:flex] [&_small]:[align-items:center] [&_small]:[gap:6px] [&_small]:[font-size:11px] [&_small]:[color:var(--accent)] [&_small]:[margin-top:3px] [@media(max-width:_480px)]:[&_strong]:[font-size:16px]"><span className="font-semibold text-ink!">{label}</span><strong>{number}</strong><small className="gap-1.5! text-[#247a45]!"><WhatsAppIcon size={15} aria-hidden="true" /> Conversar no WhatsApp <ArrowRight size={12} aria-hidden="true" /></small></span>
            <span className="whatsapp-option-arrow [color:var(--muted)] [transition:transform_.2s,_color_.2s]"><ArrowUpRight size={20} aria-hidden="true" /></span>
          </a>
        ))}
        <p className="whatsapp-note [margin-top:18px] [text-align:center] [font-size:11px] [line-height:1.6] [color:var(--muted)]">A conversa abre no WhatsApp, em uma nova aba.</p>
      </div>
    </dialog>
  );
}
