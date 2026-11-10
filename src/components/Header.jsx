import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
export default function Header({ onStartProject }) {
  const [menu, setMenu] = useState(false);
  function open() {
    setMenu(false);
    onStartProject();
  }
  return (
    <header>
      <div className="nav container">
        <Logo />
        <nav
          className={menu ? "nav-links expanded" : "nav-links"}
          aria-label="Principal"
        >
          {[
            ["Soluções", "solucoes"],
            ["Nosso trabalho", "trabalho"],
            ["Como funciona", "processo"],
          ].map(([t, id]) => (
            <a href={"#" + id} key={id} onClick={() => setMenu(false)}>
              {t}
            </a>
          ))}
        </nav>
        <button className="nav-cta" onClick={open}>
          Vamos conversar <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
