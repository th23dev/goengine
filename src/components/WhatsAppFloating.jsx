import WhatsAppIcon from "./WhatsAppIcon";
import "./WhatsAppFloating.css";

export default function WhatsAppFloating({ onClick }) {
  return (
    <button
      className="whatsapp-floating"
      type="button"
      onClick={onClick}
      aria-label="Conversar pelo WhatsApp"
      aria-haspopup="dialog"
    >
      <WhatsAppIcon size={29} />
      <span>Vamos conversar?</span>
    </button>
  );
}
