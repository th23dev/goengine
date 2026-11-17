import { ArrowUpRight, MessageSquare, PencilRuler, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Conversa e planejamento", text: "Entendemos o que sua empresa precisa. Definimos as funcionalidades, as etapas e o prazo do projeto.", detail: "Escopo e proposta" },
  { icon: PencilRuler, title: "Design das telas", text: "Criamos o layout para celular e computador. Voc\u00ea avalia as telas e aprova o visual antes do desenvolvimento.", detail: "Layout para aprova\u00e7\u00e3o" },
  { icon: Code2, title: "Desenvolvimento", text: "Programamos as telas e funcionalidades, conectamos os servi\u00e7os necess\u00e1rios e testamos os principais fluxos.", detail: "Projeto funcionando" },
  { icon: Rocket, title: "Publica\u00e7\u00e3o e entrega", text: "Colocamos o projeto no ar, mostramos como usar e combinamos o suporte e os pr\u00f3ximos passos.", detail: "Seu projeto no ar" },
];

export default function Process() {
  return (
    <section id="processo" className="process section layout-container mx-auto w-[min(1200px,calc(100%-96px))] py-[110px] max-[650px]:w-[calc(100%-40px)] max-[650px]:py-[70px]">
      <div className="section-heading mb-14 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
        <div>
          <span className="eyebrow mb-5 block text-[13px] font-semibold tracking-[1.7px] text-accent max-[650px]:mb-4">03 / COMO FUNCIONA</span>
          <h2 className="max-w-[740px] text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.055em]">Da primeira conversa<br /><span className="text-accent">ao projeto no ar.</span></h2>
        </div>
        <p className="max-w-[260px] text-lg leading-relaxed text-muted">Quatro etapas. Você acompanha e aprova cada entrega.</p>
      </div>
      <div className="steps grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[560px]:grid-cols-1">
        {steps.map(({ icon: Icon, title, text, detail }, index) => (
          <article key={title} className="group relative flex flex-col rounded-[22px] border-2 border-ink bg-[#f4e7d5] p-6 shadow-[5px_5px_0_#171719] transition-[opacity,translate,rotate,transform,box-shadow,background-color]! duration-300! hover:transform-[translateY(-8px)_rotate(-1deg)] hover:bg-[#ffe1d4] hover:shadow-[8px_10px_0_#171719] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:transform-none">
            <div className="mb-10 flex items-start justify-between"><span className="font-display text-6xl font-extrabold leading-none tracking-[-0.06em] text-accent">0{index + 1}</span><Icon size={26} strokeWidth={1.5} className="mt-1 transition-transform duration-300 group-hover:rotate-12 motion-reduce:transition-none" /></div>
            <h3 className="mb-4 text-2xl leading-tight tracking-[-0.04em]">{title}</h3>
            <p className="mb-8 text-base leading-relaxed text-[#57504a]">{text}</p>
            <div className="mt-auto flex items-center justify-between gap-2 border-t border-ink/20 pt-4 text-xs font-bold uppercase tracking-wider"><span>{detail}</span><ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
