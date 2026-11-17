import WhatsAppIcon from "../ui/WhatsAppIcon";
import { ArrowUpRight, Instagram } from "lucide-react";
import { socialContacts } from "../../data/contacts";
export default function Contact({ onStartProject }) {
  return (
    <section
      className="contact layout-container w-[min(1200px,_100%_-_96px)] m-[auto_auto_65px] bg-[linear-gradient(115deg,#e23a25_0%,#d92f1b_60%,#b92516_100%)]
              text-[white] rounded-[5px] relative overflow-hidden p-[75px] [@media(width<=650px)]:w-[calc(100%_-_40px)]
              [@media(width<=650px)]:mb-[35px] [@media(width<=650px)]:p-[40px_25px_285px]
              [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)] [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]
              [&_.eyebrow]:text-[rgb(255,_242,_232)] [&_.eyebrow]:text-[12px] [&_h2]:text-[clamp(48px,_5.5vw,_80px)]
              [&_h2]:tracking-[-0.06em] [&_h2]:relative [&_h2]:[font-weight:800] [&_h2]:[@media(width<=650px)]:text-[44px]
              [&_h2>span]:text-[rgb(255,_224,_207)] [&_h2>span]:font-display [&_h2>span]:not-italic
              [&_p]:text-[18px] [&_p]:leading-[1.8] [&_p]:text-[rgb(255,_242,_232)] [&_p]:mt-[20px] [&_p]:relative"
      id="contato"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 isolate w-[44%] overflow-hidden max-[1000px]:w-[36%] max-[650px]:inset-y-auto max-[650px]:bottom-12 max-[650px]:h-[210px] max-[650px]:w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,#ffab7930,transparent_65%)]" />
        <div className="absolute left-[8%] top-[24%] h-[16%] w-[115%] -skew-x-[25deg] rounded-l-full bg-white/[0.035]" />
        <div className="absolute -left-[18%] top-[44%] h-[12%] w-[125%] -skew-x-[25deg] rounded-l-full bg-white/[0.055]" />
        <div className="absolute left-[2%] top-[61%] h-[9%] w-[110%] -skew-x-[25deg] rounded-l-full bg-black/[0.045]" />
        <div className="absolute left-[25%] top-[18%] h-[65%] w-[65%] -skew-x-[20deg] rounded-[36px] bg-white/[0.025]" />
        <div className="absolute bottom-[16%] left-[35%] h-[6%] w-[43%] rounded-full bg-[#68180e]/10 blur-xl" />
        <img src={`${import.meta.env.BASE_URL}goengine-branco.png`} alt="" width="1280" height="1280" className="absolute left-1/2 top-1/2 w-[340px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 object-contain max-[1000px]:w-[260px] max-[650px]:w-[230px]" />
      </div>
      <span
        className="eyebrow block text-[13px] tracking-[1.7px] text-[var(--accent)] font-semibold mb-[20px]
              [@media(width<=650px)]:mb-[16px]"
      >
        O PRÓXIMO CAPÍTULO É SEU.
      </span>
      <h2>
        Vamos construir
        <br />
        algo <span>incrível?</span>
      </h2>
      <p>
        Sua ideia não precisa estar pronta.
        <br />
        Só precisa de um primeiro passo.
      </p>
      <button
        className="button light inline-flex items-center justify-center gap-[25px] rounded-[40px] p-[18px_24px] text-[16px]
              font-semibold [transition:transform_0.25s,_box-shadow_0.25s,_translate_0.2s] [background:white]
              text-[rgb(0,_0,_0)] mt-[25px] relative [&:hover]:[transform:translateY(-3px)]
              [&:hover]:[box-shadow:rgba(0,_0,_0,_0.094)_0px_8px_25px] [&_svg]:[transition:transform_0.25s]
              [&:hover_svg]:[transform:translate(3px,_-3px)]"
        onClick={onStartProject}
      >
        Conte sua ideia <ArrowUpRight size={19} />
      </button>
      <span
        className="contact-bottom absolute right-[37px] bottom-[30px] text-[12px] tracking-[1.5px] text-[rgb(255,_242,_232)]
              [@media(width<=650px)]:right-[auto] [@media(width<=650px)]:bottom-[22px] [@media(width<=650px)]:text-[12px]
              [@media(width<=650px)]:left-[27px]"
      >
        DA IDEIA AO DIGITAL. COM GOENGINE.
      </span>
      <nav className="contact-socials relative mt-[30px] flex items-center gap-3" aria-label="Redes sociais e contato">
        <a className="contact-social grid h-[52px] w-[52px] place-items-center rounded-full border border-[#ffffff60] bg-[#ffffff0d] p-0 text-white transition-all hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-accent focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[5px] motion-reduce:transition-none motion-reduce:hover:translate-y-0" href={socialContacts.instagram} aria-label="Instagram de @th23dev" title="Instagram · @th23dev" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} aria-hidden="true" />
        </a>
        <a className="contact-social grid h-[52px] w-[52px] place-items-center rounded-full border border-[#ffffff60] bg-[#ffffff0d] p-0 text-white transition-all hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-accent focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[5px] motion-reduce:transition-none motion-reduce:hover:translate-y-0" href={socialContacts.tiktok} aria-label="TikTok de @th23dev" title="TikTok · @th23dev" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 0h-4.1v16.4a3.4 3.4 0 1 1-2.9-3.36V8.88a7.5 7.5 0 1 0 7 7.48V8.1A9.8 9.8 0 0 0 22 9.7V5.6A5.6 5.6 0 0 1 16.6 0Z" /></svg>
        </a>
        <button className="contact-social grid h-[52px] w-[52px] place-items-center rounded-full border border-[#ffffff60] bg-[#ffffff0d] p-0 text-white transition-all hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-accent focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[5px] motion-reduce:transition-none motion-reduce:hover:translate-y-0" type="button" onClick={onStartProject} aria-label="Conversar pelo WhatsApp" aria-haspopup="dialog" title="WhatsApp">
          <WhatsAppIcon size={24} />
        </button>
      </nav>
    </section>
  );
}
