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
    <div className="dashboard">
      <div className="window-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span>workspace.goengine / overview</span>
        <span>↗</span>
      </div>
      <div className="dashboard-inner">
        <aside>
          <div className="mini-logo">
            <Zap size={16} fill="currentColor" /> orbit<span>®</span>
          </div>
          <small>WORKSPACE</small>
          {[
            [LayoutDashboard, "Visão geral"],
            [BarChart3, "Relatórios"],
            [Users, "Clientes"],
            [Layers3, "Projetos"],
          ].map(([Icon, t], i) => (
            <div className={"side-item " + (!i ? "selected" : "")} key={t}>
              <Icon size={13} />
              {t}
            </div>
          ))}
          <div className="side-bottom">
            <Settings size={13} /> Configurações
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-title">
            <div>
              <small>SEU NEGÓCIO EM MOVIMENTO</small>
              <h3>
                Visão geral <span>✦</span>
              </h3>
            </div>
            <div className="dash-icons">
              <Search size={15} />
              <Bell size={15} />
              <span>G</span>
            </div>
          </div>
          <div className="metrics">
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
          <div className="chart">
            <div>
              <strong>Crescimento da receita</strong>
              <span>Últimos 6 meses ⌄</span>
            </div>
            <div className="chart-body">
              <div className="axis">
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
            <div className="months">
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
