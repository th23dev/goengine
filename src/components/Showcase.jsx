import { Menu, ArrowUpRight } from "lucide-react";
import Dashboard from "./Dashboard";
export default function Showcase() {
  return (
    <div
      className="showcase h-[400px] [background:rgb(238,_234,_226)] [border:1px_solid_rgb(226,_221,_210)] rounded-[5px] relative
              overflow-hidden [perspective:1500px] [@media(width<=650px)]:h-[310px] [&>.dashboard]:absolute
              [&>.dashboard]:top-[61px] [&>.dashboard]:left-[50%] [&>.dashboard]:[transform:translateX(-50%)_rotate(-3deg)]
              [&>.dashboard]:z-[2] [&>.dashboard]:[@media(width<=650px)]:top-[63px]
              [&>.dashboard]:[@media(width<=650px)]:[transform:translateX(-50%)_rotate(-3deg)_scale(0.61)]
              [&>.dashboard]:[@media(width<=650px)]:w-[570px]
              [&>.dashboard]:[@media(width<=650px)]:[transform-origin:center_top]
              [&>.dashboard]:[@media(651px<=width<=1000px)]:w-[600px] [&>.dashboard]:[@media(1500px<=width)]:top-[80px]
              [&>.dashboard]:[@media(1500px<=width)]:w-[750px] [&>.dashboard]:[@media(1500px<=width)]:h-[350px]"
      aria-label="Conceitos demonstrativos de interfaces"
    >
      <div
        className="showcase-grid absolute inset-[0px]
              [background-image:linear-gradient(rgba(200,_192,_181,_0.196)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(200,_192,_181,_0.196)_1px,_transparent_1px)]
              [background-size:42px_42px] [mask-image:linear-gradient(black,_transparent)]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-duration:auto]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-timing-function:linear]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-delay:0s]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-iteration-count:1]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-direction:normal]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-fill-mode:both]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-play-state:running]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-name:grid-drift]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-timeline:view()]
              [@supports(animation-timeline:_view())]:[@media(1001px<=width)]:[animation-range:normal]"
      />
      <div
        className="floating-label absolute top-[27px] left-[28px] text-[9px] flex gap-[8px] items-center [background:white]
              p-[10px_13px] rounded-[20px] [box-shadow:rgba(0,_0,_0,_0.024)_0px_3px_10px] [@media(width<=650px)]:top-[15px]
              [@media(width<=650px)]:left-[15px] [@media(width<=650px)]:text-[7px] [@media(width<=650px)]:p-[8px_10px]"
      >
        <span
          className="status-dot w-[6px] h-[6px] [background:var(--accent)] rounded-[50%]
              [box-shadow:rgba(255,_66,_42,_0.043)_0px_0px_0px_4px]"
        />{" "}
        Ideias ganhando forma.
      </div>
      <div
        className="studio-card absolute z-[3] left-[26px] top-[103px] w-[237px] h-[287px] [background:rgb(230,_226,_217)]
              [transform:rotate(-9deg)] [border:5px_solid_white] rounded-[6px] text-left
              [box-shadow:rgba(45,_52,_69,_0.14)_0px_15px_40px] p-[13px] overflow-hidden [@media(width<=650px)]:left-[-60px]
              [@media(width<=650px)]:top-[80px] [@media(width<=650px)]:[transform:rotate(-9deg)_scale(0.56)]
              [@media(width<=650px)]:[transform-origin:left_center] [@media(651px<=width<=1000px)]:left-[-50px]
              [@media(651px<=width<=1000px)]:top-[130px] [@media(651px<=width<=1000px)]:[transform:rotate(-9deg)_scale(0.9)]
              [@media(1500px<=width)]:left-[45px] [@media(1500px<=width)]:top-[110px] [&_h3]:[font-family:Georgia]
              [&_h3]:font-normal [&_h3]:text-[31px] [&_h3]:leading-[1.02] [&_h3]:relative [&_h3]:z-[2] [&_h3]:mt-[8px]"
      >
        <div
          className="studio-nav flex items-center [font-family:Georgia] text-[23px] gap-[6px] [&_span]:[font:5px_sans-serif]
              [&_span]:tracking-[1px] [&_svg]:ml-[auto]"
        >
          forma<span>STUDIO®</span>
          <Menu size={13} />
        </div>
        <span className="studio-kicker text-[5px] tracking-[1px] mt-[24px] block">
          ARQUITETURA & INTERIORES
        </span>
        <h3>
          Espaços para
          <br />
          sentir.
        </h3>
        <div
          className="arch-scene h-[165px] absolute bottom-[0px] left-[0px] right-[0px]
              [background:linear-gradient(130deg,_rgb(212,_207,_193),_rgb(232,_227,_217)_65%,_rgb(199,_189,_173))]"
        >
          <div
            className="arch-window w-[95px] h-[165px] rounded-[70px_70px_0px_0px]
              [background:linear-gradient(120deg,_rgb(165,_158,_142),_rgb(89,_95,_85))] absolute right-[22px] top-[-17px]
              [box-shadow:rgba(68,_75,_73,_0.25)_12px_0px_12px_inset,_rgb(197,_188,_173)_12px_10px_0px]"
          />
          <div
            className="plinth w-[100px] h-[37px] [background:linear-gradient(100deg,_rgb(208,_198,_181),_rgb(241,_236,_226))] absolute
              bottom-[22px] left-[40px] [transform:skewY(-5deg)] [box-shadow:rgba(103,_94,_76,_0.267)_15px_15px_20px]"
          />
          <div
            className="sphere absolute bottom-[59px] left-[65px] w-[46px] h-[46px] rounded-[50%]
              [background:radial-gradient(circle_at_30%_25%,_rgb(238,_232,_221),_rgb(150,_138,_119))]
              [box-shadow:rgba(100,_89,_68,_0.2)_10px_8px_14px]"
          />
        </div>
        <div className="studio-bottom absolute bottom-[11px] left-[12px] right-[12px] text-[7px] flex justify-between">
          Conheça o estúdio <ArrowUpRight size={16} />
        </div>
      </div>
      <Dashboard />
      <div
        className="phone absolute right-[35px] top-[43px] w-[165px] h-[335px] [border:5px_solid_rgb(40,_44,_53)]
              [outline:rgb(120,_128,_140)_solid_1px] rounded-[26px] [background:rgb(242,_240,_232)] [transform:rotate(10deg)]
              z-[4] p-[11px_12px] [box-shadow:rgba(29,_41,_53,_0.2)_15px_18px_30px] text-left overflow-hidden
              [@media(width<=650px)]:right-[-19px] [@media(width<=650px)]:top-[61px]
              [@media(width<=650px)]:[transform:rotate(10deg)_scale(0.62)]
              [@media(width<=650px)]:[transform-origin:right_top] [@media(651px<=width<=1000px)]:right-[-10px]
              [@media(651px<=width<=1000px)]:[transform:rotate(10deg)_scale(0.9)] [@media(1500px<=width)]:right-[60px]
              [@media(1500px<=width)]:top-[60px] [&>small]:text-[5px] [&>small]:tracking-[1px] [&_h3]:[font-family:Georgia]
              [&_h3]:text-[23px] [&_h3]:font-normal [&_h3]:leading-[1.05] [&_h3]:mt-[8px]"
      >
        <div
          className="phone-island absolute top-[5px] left-[50%] [transform:translateX(-50%)] w-[48px] h-[13px]
              [background:rgb(39,_42,_48)] rounded-[20px]"
        />
        <div className="phone-top text-[7px] flex justify-between">
          9:41 <span>● ▰</span>
        </div>
        <div
          className="phone-brand flex justify-between items-center text-[25px] tracking-[-2px] [font-weight:bold] mt-[17px]
              [&>span]:text-[5px] [&>span]:tracking-[1.3px]"
        >
          nü<span>ESSENTIALS</span>
        </div>
        <div className="phone-art h-[143px] relative [background:radial-gradient(rgb(221,_223,_189),_transparent_70%)]">
          <div
            className="bottle absolute z-[2] top-[19px] left-[37px] w-[57px] h-[108px] rounded-[10px_10px_16px_16px]
              [background:linear-gradient(100deg,_rgb(133,_142,_65),_rgb(179,_184,_116)_50%,_rgb(124,_133,_62))]
              [transform:rotate(-12deg)] [box-shadow:rgba(91,_96,_60,_0.19)_12px_14px_15px] [&:before]:[content:'']
              [&:before]:absolute [&:before]:top-[-12px] [&:before]:left-[8px] [&:before]:right-[8px] [&:before]:h-[19px]
              [&:before]:rounded-[4px]
              [&:before]:[background:repeating-linear-gradient(90deg,_rgb(221,_216,_202),_rgb(221,_216,_202)_2px,_rgb(188,_184,_170)_3px)]
              [&>span]:absolute [&>span]:top-[30px] [&>span]:left-[8px] [&>span]:text-[rgb(244,_240,_217)]
              [&>span]:text-[28px] [&>span]:font-medium [&>span]:tracking-[-2px] [&_small]:block [&_small]:text-[5px]
              [&_small]:tracking-[1px] [&_small]:leading-[1.7] [&_small]:mt-[5px]"
          >
            <span>
              nü.
              <small>
                EVERYDAY
                <br />
                BALANCE
              </small>
            </span>
          </div>
          <span
            className="orbit-ring absolute left-[3px] top-[55px] w-[130px] h-[42px] [border:1px_solid_rgb(146,_153,_104)]
              rounded-[50%] [transform:rotate(-30deg)]"
          />
        </div>
        <small>MENOS EXCESSO. MAIS VOCÊ.</small>
        <h3>
          O essencial.
          <br />
          Todos os dias.
        </h3>
        <div
          className="phone-button flex justify-between [background:rgb(53,_60,_38)] text-[rgb(246,_245,_233)] p-[10px_8px]
              rounded-[3px] text-[6px] mt-[15px]"
        >
          Descubra sua rotina <ArrowUpRight size={11} />
        </div>
      </div>
      <span
        className="showcase-caption absolute bottom-[14px] text-[7px] tracking-[1.4px] text-[rgb(127,_137,_157)] left-[25px]
              [@media(width<=650px)]:text-[5px] [@media(width<=650px)]:tracking-[0.7px] [@media(width<=650px)]:left-[13px]"
      >
        EXPLORAÇÕES VISUAIS · PROJETOS DEMONSTRATIVOS
      </span>
      <span
        className="showcase-index absolute bottom-[14px] text-[7px] tracking-[1.4px] text-[rgb(127,_137,_157)] right-[25px]
              [@media(width<=650px)]:text-[6px] [@media(width<=650px)]:right-[13px]"
      >
        01 — 03
      </span>
    </div>
  );
}
