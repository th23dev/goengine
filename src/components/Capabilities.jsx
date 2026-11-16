import { Check } from "lucide-react";
export default function Capabilities() {
  return (
    <div
      className="capabilities layout-container w-[min(1200px,_100%_-_96px)] m-[auto] p-[32px_0px] flex justify-between
              items-center [border-bottom:1px_solid_rgb(220,_218,_212)] gap-[15px] text-[rgb(86,_86,_83)]
              [@media(width<=650px)]:w-[calc(100%_-_40px)] [@media(width<=650px)]:grid [@media(width<=650px)]:justify-center
              [@media(width<=650px)]:gap-[18px_8px] [@media(width<=650px)]:flex-wrap
              [@media(width<=650px)]:grid-cols-[1fr_1fr] [@media(651px<=width<=1000px)]:w-[calc(100%_-_56px)]
              [@media(651px<=width<=1000px)]:justify-center [@media(651px<=width<=1000px)]:gap-[25px]
              [@media(651px<=width<=1000px)]:flex-wrap [@media(1500px<=width)]:w-[min(1280px,_100%_-_160px)]
              [&>span]:text-[9px] [&>span]:leading-[1.7] [&>span]:text-[rgb(138,_142,_152)] [&>span]:tracking-[0.5px]
              [&>span]:[@media(width<=650px)]:w-full [&>span]:[@media(width<=650px)]:text-center
              [&>span]:[@media(width<=650px)]:col-[1_/_-1] [&>span]:[@media(width<=650px)]:mb-[3px]
              [&>span]:[@media(651px<=width<=1000px)]:w-full [&>span]:[@media(651px<=width<=1000px)]:text-center
              [&_strong]:text-[rgb(72,_76,_87)] [&_strong]:font-medium [&_strong]:text-[11px] [&_strong]:tracking-[0px]
              [&>div]:flex [&>div]:gap-[9px] [&>div]:items-center [&>div]:text-[11px] [&>div]:text-[rgb(98,_103,_115)]
              [&>div]:[@media(width<=650px)]:gap-[6px] [&>div]:[@media(width<=650px)]:text-[9px] [&_svg]:text-[var(--accent)]
              [&_svg]:w-[13px]"
    >
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
