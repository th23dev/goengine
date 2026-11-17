import { ArrowUpRight, Compass, Layers, MessagesSquare } from "lucide-react";

const principles = [
  { icon: Compass, label: "ESTRATÉGIA", title: "Entender antes de criar.", text: "Conhecemos seu negócio, seu público e o problema que você quer resolver. Isso orienta as funcionalidades e o planejamento do projeto.", detail: "Seu objetivo como ponto de partida" },
  { icon: Layers, label: "DESIGN E TECNOLOGIA", title: "Visual que funciona.", text: "Criamos interfaces claras e adaptadas ao celular e ao computador. Cada tela é pensada para facilitar o uso e apresentar bem sua empresa.", detail: "Clareza em todas as telas" },
  { icon: MessagesSquare, label: "PARCERIA", title: "Você acompanha tudo.", text: "Apresentamos as etapas, explicamos as escolhas e validamos as entregas com você. Assim, o projeto avança com alinhamento e transparência.", detail: "Contato direto em cada etapa" },
];

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="about section layout-container mx-auto w-[min(1200px,calc(100%-96px))] py-[110px] max-[650px]:w-[calc(100%-40px)] max-[650px]:py-[70px]">
      <div className="about-copy mb-14 flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <span className="eyebrow mb-5 block text-[13px] font-semibold tracking-[1.7px] text-accent max-[650px]:mb-4">SOBRE / ESSÊNCIA GOENGINE</span>
          <h2 id="about-title" className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.055em]">Design e tecnologia.<br /><span className="text-accent">Para o seu negócio.</span></h2>
        </div>
        <p className="max-w-[320px] text-lg leading-relaxed text-muted">Criamos sites, landing pages e sistemas sob medida, com atenção ao visual e às necessidades de quem vai usar.</p>
      </div>
      <div className="about-principles grid grid-cols-3 gap-6 max-[850px]:grid-cols-1">
        {principles.map(({ icon: Icon, label, title, text, detail }, index) => (
          <article key={label} className="group relative flex flex-col rounded-[22px] border-2 border-ink bg-[#f4e7d5] p-7 shadow-[5px_5px_0_#171719] transition-[translate,rotate,box-shadow,background-color] duration-300 hover:-translate-y-2 hover:-rotate-1 hover:bg-[#ffe1d4] hover:shadow-[8px_10px_0_#171719] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0">
            <div className="mb-10 flex items-start justify-between"><span aria-hidden="true" className="font-display text-6xl font-extrabold leading-none tracking-[-0.06em] text-accent">0{index + 1}</span><Icon size={26} strokeWidth={1.5} className="mt-1 transition-transform duration-300 group-hover:rotate-12 motion-reduce:transition-none" /></div>
            <span className="mb-3 text-[11px] font-bold tracking-[0.12em] text-[#776655]">{label}</span>
            <h3 className="mb-4 text-2xl leading-tight tracking-[-0.04em]">{title}</h3>
            <p className="mb-8 text-base leading-relaxed text-[#57504a]">{text}</p>
            <div className="mt-auto border-t border-ink/20 pt-4 text-[11px] font-bold uppercase tracking-wider">{detail}</div>
          </article>
        ))}
      </div>
      <a href="#solucoes" className="mt-10 inline-flex items-center gap-4 rounded-full border-2 border-ink bg-ink px-6 py-4 text-sm font-semibold text-paper transition-colors hover:border-accent hover:bg-accent focus-visible:outline-offset-4">Conheça nossos serviços <ArrowUpRight size={19} /></a>
    </section>
  );
}
