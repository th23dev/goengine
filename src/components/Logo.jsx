import { Zap } from "lucide-react";
export default function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="goengine — início">
      <span className="logo-symbol">
        <Zap size={21} fill="currentColor" />
      </span>
      goengine<span className="logo-dot">®</span>
    </a>
  );
}
