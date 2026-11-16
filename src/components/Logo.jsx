import { Zap } from "lucide-react";
export default function Logo() {
  return (
    <a
      className="logo font-[Manrope,sans-serif] text-[28px] font-extrabold tracking-[-1.6px] inline-flex items-center
              gap-2 [@media(width<=650px)]:text-[25px]"
      href="#inicio"
      aria-label="goengine — início"
    >
      <span
        className="logo-symbol grid place-items-center [background:var(--accent)] text-[white] rounded-[9px] w-8 h-8.5
              transform-[skew(-5deg)] [@media(width<=650px)]:w-7 [@media(width<=650px)]:h-7.5"
      >
        <Zap size={21} fill="currentColor" />
      </span>
      goengine
      <span className="logo-dot font-[Arial] text-[11px] self-start mt-1.25 tracking-normal">
        ®
      </span>
    </a>
  );
}
