import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function WhatsAppFloating({ onClick }) {
  return (
    <button
      className="whatsapp-floating group fixed right-[max(24px,env(safe-area-inset-right))] bottom-[max(24px,env(safe-area-inset-bottom))] z-30 grid h-[58px] w-[58px] place-items-center rounded-full border border-[#ffffff50] bg-accent text-white shadow-[0_6px_22px_#d9362230] transition-all hover:-translate-y-[3px] hover:bg-[#bf301e] hover:shadow-[0_10px_26px_#d9362240] max-[650px]:h-[54px] max-[650px]:w-[54px] max-[650px]:right-[max(16px,env(safe-area-inset-right))] max-[650px]:bottom-[max(16px,env(safe-area-inset-bottom))] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      type="button"
      onClick={onClick}
      aria-label="Conversar pelo WhatsApp"
      aria-haspopup="dialog"
    >
      <WhatsAppIcon size={29} />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] translate-x-[5px] whitespace-nowrap rounded-xl border border-[#e4ded6] bg-paper px-[14px] py-[10px] text-[13px] text-ink opacity-0 transition-all group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none">Vamos conversar?</span>
    </button>
  );
}
