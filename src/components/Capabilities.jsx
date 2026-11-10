import { Check } from "lucide-react";
export default function Capabilities() {
  return (
    <div className="capabilities container">
      <span>
        BOAS IDEIAS MERECEM
        <br />
        <strong>uma boa execução.</strong>
      </span>
      {[
        "Design com intenção",
        "Código sob medida",
        "Experiência em cada tela",
        "Pronto para evoluir",
      ].map((t) => (
        <div key={t}>
          <Check size={16} />
          {t}
        </div>
      ))}
    </div>
  );
}
