import { Menu, ArrowUpRight } from "lucide-react";
import Dashboard from "./Dashboard";
export default function Showcase() {
  return (
    <div
      className="showcase"
      aria-label="Conceitos demonstrativos de interfaces"
    >
      <div className="showcase-grid" />
      <div className="floating-label">
        <span className="status-dot" /> Ideias ganhando forma.
      </div>
      <div className="studio-card">
        <div className="studio-nav">
          forma<span>STUDIO®</span>
          <Menu size={13} />
        </div>
        <span className="studio-kicker">ARQUITETURA & INTERIORES</span>
        <h3>
          Espaços para
          <br />
          sentir.
        </h3>
        <div className="arch-scene">
          <div className="arch-window" />
          <div className="plinth" />
          <div className="sphere" />
        </div>
        <div className="studio-bottom">
          Conheça o estúdio <ArrowUpRight size={16} />
        </div>
      </div>
      <Dashboard />
      <div className="phone">
        <div className="phone-island" />
        <div className="phone-top">
          9:41 <span>● ▰</span>
        </div>
        <div className="phone-brand">
          nü<span>ESSENTIALS</span>
        </div>
        <div className="phone-art">
          <div className="bottle">
            <span>
              nü.
              <small>
                EVERYDAY
                <br />
                BALANCE
              </small>
            </span>
          </div>
          <span className="orbit-ring" />
        </div>
        <small>MENOS EXCESSO. MAIS VOCÊ.</small>
        <h3>
          O essencial.
          <br />
          Todos os dias.
        </h3>
        <div className="phone-button">
          Descubra sua rotina <ArrowUpRight size={11} />
        </div>
      </div>
      <span className="showcase-caption">
        EXPLORAÇÕES VISUAIS · PROJETOS DEMONSTRATIVOS
      </span>
      <span className="showcase-index">01 — 03</span>
    </div>
  );
}
