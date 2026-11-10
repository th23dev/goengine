import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-top">
        <Logo />
        <span>Design que inspira. Tecnologia que move.</span>
        <a href="#inicio">
          De volta ao topo <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {currentYear} goengine. Todos os direitos reservados.
        </span>
        <span>
          Feito com intenção, do primeiro ao último pixel.{" "}
          <span className="blue">✦</span>
        </span>
      </div>
    </footer>
  );
}
