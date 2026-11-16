import { useId } from "react";
import {
  Zap,
  LayoutDashboard,
  BarChart3,
  Users,
  Layers3,
  Settings,
  Search,
  Bell,
} from "lucide-react";

export default function Dashboard() {
  const gradientId = useId();

  return (
    <div
      className="dashboard w-172.5 h-84.5 bg-white rounded-[9px] overflow-hidden
              [box-shadow:rgba(0,0,0,0.125)_0px_18px_60px] text-left [border:1px_solid_rgb(223,227,236)]
              [&_aside]:w-33.75 [&_aside]:shrink-0 [&_aside]:[border-right:1px_solid_rgb(237,240,246)]
              [&_aside]:p-[19px_12px] [&_aside]:relative [&_aside>small]:text-[6px] [&_aside>small]:tracking-[1px]
              [&_aside>small]:text-[rgb(150,156,167)]"
    >
      <div
        className="window-bar h-7.5 flex items-center justify-between [background:rgb(249,250,252)]
              [border-bottom:1px_solid_rgb(232,235,241)] p-[0px_12px] text-[7px] text-[rgb(150,153,163)]"
      >
        <span
          className="dots flex gap-1 [&_i]:w-1.25 [&_i]:h-1.25 [&_i]:rounded-[50%] [&_i]:[background:rgb(219,222,231)]
              [&_i:first-child]:[background:rgb(240,177,171)] [&_i:nth-child(2)]:[background:rgb(234,209,149)]
              [&_i:nth-child(3)]:[background:rgb(167,207,184)]"
        >
          <i />
          <i />
          <i />
        </span>
        <span>workspace.goengine / overview</span>
        <span>↗</span>
      </div>
      <div className="dashboard-inner flex h-[calc(100%-30px)]">
        <aside>
          <div
            className="mini-logo text-[20px] tracking-[-1px] font-[750] flex items-center gap-1 mb-6
              [&_svg]:text-(--accent) [&_span]:text-[8px]"
          >
            <Zap size={16} fill="currentColor" /> orbit<span>®</span>
          </div>
          <small>WORKSPACE</small>
          {[
            [LayoutDashboard, "Visão geral"],
            [BarChart3, "Relatórios"],
            [Users, "Clientes"],
            [Layers3, "Projetos"],
          ].map(([Icon, t], i) => (
            <div
              className={
                "side-item " +
                (!i ? "selected" : "") +
                " flex gap-2 items-center p-[9px_7px] text-[7px] text-[rgb(125,130,144)] mt-1 [&.selected]:[background:var(--accent-soft)] [&.selected]:rounded-[5px] [&.selected]:text-(--accent)"
              }
              key={t}
            >
              <Icon size={13} />
              {t}
            </div>
          ))}
          <div className="side-bottom absolute bottom-4.25 flex gap-1.75 items-center text-[7px] text-[rgb(139,144,156)]">
            <Settings size={13} /> Configurações
          </div>
        </aside>
        <div className="dash-main p-5 flex-[1_1_0%] min-w-0">
          <div
            className="dash-title flex justify-between items-center [&_small]:text-[6px] [&_small]:tracking-[1px]
              [&_small]:text-[rgb(146,151,164)] [&_h3]:text-[19px] [&_h3]:tracking-[-0.8px] [&_h3]:mt-1.5
              [&_h3_span]:text-[rgb(220,183,126)] [&_h3_span]:text-[17px]"
          >
            <div>
              <small>SEU NEGÓCIO EM MOVIMENTO</small>
              <h3>
                Visão geral <span>✦</span>
              </h3>
            </div>
            <div
              className="dash-icons flex items-center gap-3.25 text-[rgb(140,145,160)] [&>span]:grid [&>span]:place-items-center
              [&>span]:[background:var(--accent-soft)] [&>span]:text-(--accent) [&>span]:rounded-[50%] [&>span]:w-5.5
              [&>span]:h-5.5 [&>span]:text-[8px]"
            >
              <Search size={15} />
              <Bell size={15} />
              <span>G</span>
            </div>
          </div>
          <div
            className="metrics grid grid-cols-[1.3fr_1fr_1fr] gap-2.5 m-[17px_0px] [&>div]:p-[12px_9px]
              [&>div]:[border:1px_solid_rgb(233,237,243)] [&>div]:rounded-[5px] [&_small]:text-[7px]
              [&_small]:text-[rgb(144,149,162)] [&_strong]:block [&_strong]:text-[19px] [&_strong]:m-[7px_0px]
              [&_strong]:tracking-[-0.6px] [&_strong>span]:text-[13px] [&_strong>span]:text-[rgb(156,158,171)]
              [&_em]:text-[6px] [&_em]:not-italic [&_em]:text-[rgb(52,151,125)] [&_em>span]:text-[rgb(143,149,164)]
              [&_em>span]:ml-1"
          >
            <div>
              <small>Receita total</small>
              <strong>
                R$ 48.250<span>,00</span>
              </strong>
              <em>
                ↗ 18,6% <span>neste mês</span>
              </em>
            </div>
            <div>
              <small>Projetos ativos</small>
              <strong>24</strong>
              <em>
                ↗ 4 novos <span>neste mês</span>
              </em>
            </div>
            <div>
              <small>Novos clientes</small>
              <strong>128</strong>
              <em>
                ↗ 12,8% <span>neste mês</span>
              </em>
            </div>
          </div>
          <div
            className="chart [border:1px_solid_rgb(233,237,243)] rounded-[5px] p-3 [&>div:first-child]:flex
              [&>div:first-child]:justify-between [&>div:first-child]:text-[7px]
              [&>div:first-child>span]:text-[rgb(144,149,162)] [&>div:first-child>span]:text-[6px] [&_svg]:w-full
              [&_svg]:h-22.5
              [&_svg]:[background:repeating-linear-gradient(transparent_0px,transparent_29px,rgb(240,241,246)_30px)]"
          >
            <div>
              <strong>Crescimento da receita</strong>
              <span>Últimos 6 meses ⌄</span>
            </div>
            <div className="chart-body h-22.5 flex mt-3.25">
              <div className="axis flex flex-col justify-between text-[5px] text-[rgb(173,177,190)] w-5.75 shrink-0">
                <span>50 mil</span>
                <span>25 mil</span>
                <span>0</span>
              </div>
              <svg
                viewBox="0 0 600 150"
                preserveAspectRatio="none"
                aria-label="Gráfico ilustrativo de crescimento"
                role="img"
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#FF422A" stopOpacity=".22" />
                    <stop offset="1" stopColor="#FF422A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 130 C40 130 50 95 100 105 S160 118 200 80 S260 100 300 65 S360 80 400 43 S465 62 500 28 S560 40 600 4 L600 150H0Z"
                  fill={`url(#${gradientId})`}
                />
                <path
                  d="M0 130 C40 130 50 95 100 105 S160 118 200 80 S260 100 300 65 S360 80 400 43 S465 62 500 28 S560 40 600 4"
                  stroke="#FF422A"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div className="months flex justify-between text-[5px] text-[rgb(144,149,162)] m-[5px_0px_0px_23px]">
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
