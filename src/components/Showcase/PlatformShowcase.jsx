import BrandLogo from "../ui/BrandLogo";
import {
  Search,
  Bell,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
  Signal,
  Wifi,
  BatteryFull,
  Plus,
  ChevronRight,
  Home,
  CalendarDays,
  Check,
} from "lucide-react";

// Illustrative interfaces, not customer projects or live product controls.
export default function PlatformShowcase() {
  return (
    <figure
      className="platform-showcase m-[56px_0px_0px] [@media(width<=650px)]:mt-9.5 [&_figcaption]:mt-1.5
              [&_figcaption]:text-[10px] [&_figcaption]:tracking-[0.4px] [&_figcaption]:text-[rgb(113,117,123)]
              [&_figcaption]:text-center [&_figcaption]:[@media(width<=650px)]:m-[12px_0px_20px]
              [&_figcaption]:[@media(width<=650px)]:text-[8px]"
      aria-label="Exemplos de um site no navegador, um sistema em computador e uma interface para celular"
    >
      <div
        className="platform-stage [container-type:inline-size] relative aspect-2/1 text-left isolate
              [@media(width<=650px)]:aspect-[1.65/1] [&_:where(svg)]:w-[1.2cqw] [&_:where(svg)]:h-[1.2cqw]
              [&_:where(svg)]:shrink-0"
        aria-hidden="true"
      >
        <div
          className="platform-shadow absolute w-[85%] left-[8%] bottom-[5%] h-[7%] [background:rgba(34,35,35,0.082)]
              filter-[blur(18px)] rounded-[50%]"
        />
        <div
          className="device-monitor absolute w-[66%] left-[20%] top-0 [@media(width<=650px)]:w-[76%]
              [@media(width<=650px)]:left-[12%]"
        >
          <div
            className="monitor-frame [background:linear-gradient(135deg,rgb(84,86,90),rgb(32,34,38)_45%,rgb(63,65,68))]
              p-[1.65cqw_0.85cqw_0.85cqw] [border:0.15cqw_solid_rgb(101,103,107)] rounded-[1.5cqw_1.5cqw_0px_0px] relative
              [box-shadow:rgba(33,36,42,0.098)_0px_1.5cqw_5cqw]"
          >
            <i
              className="monitor-camera absolute top-[0.6cqw] left-[50%] w-[0.4cqw] h-[0.4cqw] rounded-[50%]
              [background:rgb(11,16,24)] [box-shadow:rgb(118,_138,_171)_0px_0px_0.1cqw_inset]"
            />
            <div
              className="monitor-screen flex h-[32cqw] [background:rgb(247,_248,_250)] rounded-[0.3cqw] overflow-hidden
              text-[rgb(34,_41,_51)] [@media(width<=650px)]:h-[37cqw]"
            >
              <aside
                className="system-sidebar w-[23%] [background:rgb(32,_37,_44)] p-[2cqw_1.2cqw] text-[rgb(192,_198,_208)] relative
              [&>strong]:text-[rgb(255,_255,_255)] [&>strong]:flex [&>strong]:items-center [&>strong]:gap-[0.6cqw]
              [&>strong]:text-[1.45cqw] [&>strong]:tracking-[-0.08cqw] [&_strong_span]:[background:var(--accent)]
              [&_strong_span]:rounded-[0.4cqw] [&_strong_span]:p-[0.15cqw_0.5cqw] [&>small]:block [&>small]:text-[0.5cqw]
              [&>small]:tracking-[0.1cqw] [&>small]:m-[2.7cqw_0px_1cqw] [&>small]:text-[rgb(146,_157,_170)] [&>div]:flex
              [&>div]:gap-[0.6cqw] [&>div]:items-center [&>div]:text-[0.65cqw] [&>div]:p-[0.8cqw_0.7cqw] [&>div]:mb-[0.4cqw]
              [&>div]:rounded-[0.3cqw] [&_.active]:[background:rgba(255,_255,_255,_0.07)]
              [&_.active]:text-[rgb(255,_255,_255)] [&_.active_svg]:text-[rgb(255,_140,_121)] [&_.system-settings]:absolute
              [&_.system-settings]:bottom-[1cqw]"
              >
                <strong>
                  <BrandLogo light className="h-[3cqw] w-[11cqw]" />
                </strong>
                <small>GESTÃO</small>
                <div className="active">
                  <LayoutDashboard /> Visão geral
                </div>
                <div>
                  <ShoppingBag /> Pedidos
                </div>
                <div>
                  <Package /> Produtos
                </div>
                <div>
                  <Users /> Clientes
                </div>
                <div className="system-settings">
                  <Settings /> Configurações
                </div>
              </aside>
              <div className="system-main [flex:1_1_0%] p-[0px_1.6cqw]">
                <div
                  className="system-toolbar flex justify-between items-center h-[4cqw] [border-bottom:1px_solid_rgb(225,_228,_233)]
              text-[0.65cqw] [&>div]:flex [&>div]:items-center [&>div]:gap-[1cqw] [&>div]:text-[rgb(119,_129,_142)]
              [&_i]:not-italic [&_i]:[background:rgb(247,_225,_220)] [&_i]:rounded-[50%] [&_i]:p-[0.5cqw]
              [&_i]:text-[rgb(155,_57,_40)]"
                >
                  <span>Visão geral</span>
                  <div>
                    <Search />
                    <Bell />
                    <i>G</i>
                  </div>
                </div>
                <div
                  className="system-heading m-[2cqw_0px_1.5cqw] flex [align-items:end] justify-between [&_small]:text-[0.5cqw]
              [&_small]:text-[rgb(125,_133,_143)] [&_small]:tracking-[0.09cqw] [&_h3]:text-[1.5cqw]
              [&_h3]:tracking-[-0.04cqw] [&_h3]:mt-[0.5cqw] [&>span]:text-[0.6cqw] [&>span]:p-[0.5cqw_0.7cqw]
              [&>span]:[border:1px_solid_rgb(224,_228,_232)] [&>span]:rounded-[0.4cqw] [&>span]:[background:white]"
                >
                  <div>
                    <small>PAINEL</small>
                    <h3>Resumo da operação</h3>
                  </div>
                  <span>Este mês⌄</span>
                </div>
                <div
                  className="system-metrics grid grid-cols-[repeat(3,_1fr)] gap-[0.7cqw] [&>div]:[background:white]
              [&>div]:[border:1px_solid_rgb(227,_230,_235)] [&>div]:rounded-[0.4cqw] [&>div]:p-[1cqw] [&_span]:text-[0.65cqw]
              [&_span]:text-[rgb(104,_113,_125)] [&_span]:block [&_strong]:text-[1.65cqw] [&_strong]:block
              [&_strong]:m-[0.8cqw_0px] [&_strong]:tracking-[-0.05cqw] [&_small]:text-[0.45cqw]
              [&_small]:text-[rgb(124,_133,_145)]"
                >
                  <div>
                    <span>Pedidos</span>
                    <strong>0</strong>
                    <small>Nenhum pedido recebido</small>
                  </div>
                  <div>
                    <span>Faturamento</span>
                    <strong>R$ 0,00</strong>
                    <small>Período atual</small>
                  </div>
                  <div>
                    <span>Produtos</span>
                    <strong>0</strong>
                    <small>Itens cadastrados</small>
                  </div>
                </div>
                <div
                  className="system-table [background:rgb(255,_255,_255)] mt-[1.5cqw] [border:1px_solid_rgb(227,_230,_235)] rounded-[0.4cqw]
              [&>div:first-child]:flex [&>div:first-child]:justify-between [&>div:first-child]:p-[1.2cqw]
              [&>div:first-child]:text-[0.7cqw] [&>div:first-child_span]:text-[0.55cqw]
              [&>div:first-child_span]:text-[rgb(104,_113,_125)]"
                >
                  <div>
                    <strong>Pedidos recentes</strong>
                    <span>Ver todos ↗</span>
                  </div>
                  <div
                    className="table-head flex justify-between text-[0.5cqw] [background:rgb(250,_251,_252)]
              [border-block:1px_solid_rgb(238,_240,_242)] p-[0.7cqw_1.2cqw] text-[rgb(117,_128,_140)]"
                  >
                    <span>Pedido</span>
                    <span>Cliente</span>
                    <span>Status</span>
                    <span>Total</span>
                  </div>
                  <div
                    className="table-empty grid place-content-center justify-items-center gap-[0.6cqw] h-[6.5cqw] text-[0.55cqw]
              text-[rgb(136,_145,_156)]"
                  >
                    <ShoppingBag />
                    <span>Os pedidos aparecerão aqui.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="monitor-chin h-[3.2cqw] rounded-[0px_0px_1.3cqw_1.3cqw]
              [background:linear-gradient(110deg,_rgb(182,_185,_187),_rgb(225,_227,_228)_48%,_rgb(184,_187,_190))] grid
              place-items-center text-[rgb(105,_108,_112)] text-[0.7cqw] [font-weight:650] tracking-[-0.04cqw]"
          >
            <BrandLogo className="h-[1.4cqw] w-[5cqw]" />
          </div>
          <div
            className="monitor-neck w-[16%] h-[6cqw] m-[auto] [background:linear-gradient(rgb(145,_148,_151),_rgb(216,_218,_221)_82%)]
              [clip-path:polygon(15%_0px,_85%_0px,_100%_100%,_0px_100%)]"
          />
          <div
            className="monitor-foot w-[30%] h-[0.8cqw] m-[auto] [background:linear-gradient(rgb(229,_231,_233),_rgb(160,_163,_167))]
              rounded-[50%_50%_0.4cqw_0.4cqw] [box-shadow:rgba(0,_0,_0,_0.133)_0px_0.35cqw_0.7cqw]"
          />
        </div>
        <div
          className="device-browser absolute w-[42%] left-[0px] top-[24%] [background:rgb(245,_245,_243)]
              [border:0.12cqw_solid_rgb(184,_190,_200)] rounded-[1cqw] overflow-hidden
              [box-shadow:rgba(53,_56,_62,_0.14)_0px_1.5cqw_4cqw] [transform:perspective(1000px)_rotateY(4deg)] isolate
              [contain:paint] [@media(width<=650px)]:w-[49%] [@media(width<=650px)]:top-[34%]
              [@media(hover:_hover)_and_(prefers-reduced-motion:_no-preference)]:[transition:translate_0.5s]
              [&:hover]:[@media(hover:_hover)_and_(prefers-reduced-motion:_no-preference)]:[translate:0px_-7px]"
        >
          <div
            className="browser-chrome flex items-center gap-[1.2cqw] h-[2.6cqw] p-[0.6cqw_1cqw_0px] [background:rgb(233,_236,_241)]
              [&>svg]:w-[0.9cqw] [&>svg]:text-[rgb(125,_135,_151)] [&>svg]:mb-[0.5cqw]"
          >
            <span
              className="browser-dots flex gap-[0.35cqw] pb-[0.6cqw] [&_i]:w-[0.55cqw] [&_i]:h-[0.55cqw] [&_i]:rounded-[50%]
              [&_i]:[background:rgb(247,_173,_165)] [&_i:nth-child(2)]:[background:rgb(232,_203,_134)]
              [&_i:nth-child(3)]:[background:rgb(149,_201,_179)]"
            >
              <i />
              <i />
              <i />
            </span>
            <span
              className="browser-tab text-[0.65cqw] [background:rgb(250,_251,_253)] rounded-[0.6cqw_0.6cqw_0px_0px] p-[0.6cqw_1cqw]
              w-[17cqw] flex justify-between"
            >
              goengine · meus projetos <span>×</span>
            </span>
            <Plus />
          </div>
          <div
            className="browser-address h-[2.5cqw] flex gap-[1cqw] items-center p-[0px_1cqw] [background:rgb(250,_251,_253)]
              text-[0.7cqw] text-[rgb(114,_128,_150)] [&>span:nth-child(2)]:[background:rgb(238,_241,_245)]
              [&>span:nth-child(2)]:rounded-[0.4cqw] [&>span:nth-child(2)]:[flex:1_1_0%]
              [&>span:nth-child(2)]:p-[0.3cqw_0.8cqw] [&>span:nth-child(2)]:text-[0.55cqw]"
          >
            <span>← &nbsp; → &nbsp; ⟳</span>
            <span>goengine / projetos</span>
            <span>⋮</span>
          </div>
          <div
            className="website-screen [background:rgb(247,_248,_250)] h-[25cqw] relative overflow-hidden text-[rgb(37,_44,_54)]
              [clip-path:inset(0px)] [@media(width<=650px)]:h-[29cqw]"
          >
            <div
              className="portal-nav flex items-center gap-[1.4cqw] h-[4cqw] p-[0px_1.6cqw] [border-bottom:1px_solid_rgb(225,_228,_233)]
              [background:rgb(255,_255,_255)] text-[0.6cqw] text-[rgb(123,_133,_145)] [&>strong]:flex [&>strong]:items-center
              [&>strong]:gap-[0.45cqw] [&>strong]:mr-[auto] [&>strong]:text-[1.3cqw] [&>strong]:tracking-[-0.06cqw]
              [&>strong]:text-[rgb(37,_44,_54)] [&_strong>span]:[background:var(--accent)]
              [&_strong>span]:text-[rgb(255,_255,_255)] [&_strong>span]:p-[0.1cqw_0.45cqw] [&_strong>span]:rounded-[0.3cqw]
              [&_.portal-active]:text-[var(--accent)] [&_.portal-active]:h-full [&_.portal-active]:flex
              [&_.portal-active]:items-center [&_.portal-active]:[border-bottom:.15cqw_solid_var(--accent)] [&>i]:not-italic
              [&>i]:p-[0.5cqw_0.65cqw] [&>i]:rounded-[50%] [&>i]:[background:rgb(247,_225,_220)]
              [&>i]:text-[rgb(155,_57,_40)] [&>svg]:w-[1cqw] [&>svg]:h-[1cqw]"
            >
              <strong>
                <BrandLogo className="h-[2.4cqw] w-[8cqw]" />
              </strong>
              <span className="portal-active">Meus projetos</span>
              <span>Arquivos</span>
              <Bell />
              <i>G</i>
            </div>
            <div className="portal-content p-[1.8cqw_1.6cqw]">
              <div
                className="portal-heading flex items-center justify-between [&_small]:text-[0.45cqw] [&_small]:text-[rgb(125,_135,_148)]
              [&_small]:tracking-[0.08cqw] [&_h3]:text-[1.65cqw] [&_h3]:tracking-[-0.06cqw] [&_h3]:m-[0.45cqw_0px]
              [&_p]:text-[0.6cqw] [&_p]:text-[rgb(125,_135,_148)] [&>span]:flex [&>span]:items-center [&>span]:gap-[0.6cqw]
              [&>span]:w-[10cqw] [&>span]:p-[0.75cqw] [&>span]:[border:1px_solid_rgb(225,_228,_233)]
              [&>span]:rounded-[0.4cqw] [&>span]:[background:rgb(255,_255,_255)] [&>span]:text-[0.55cqw]
              [&>span]:text-[rgb(136,_145,_156)] [&>span_svg]:w-[0.85cqw] [&>span_svg]:h-[0.85cqw]"
              >
                <div>
                  <small>ÁREA DO CLIENTE</small>
                  <h3>Meus projetos</h3>
                  <p>Acompanhe cada etapa do seu projeto.</p>
                </div>
                <span>
                  <Search /> Buscar projeto
                </span>
              </div>
              <div className="portal-layout grid grid-cols-[1.55fr_1fr] gap-[1cqw] mt-[1.6cqw]">
                <div
                  className="portal-project [border:1px_solid_rgb(234,_218,_211)] rounded-[0.6cqw] [background:rgb(255,_245,_239)]
              p-[1.2cqw] [&_h4]:m-[1cqw_0px_0.5cqw] [&_h4]:text-[1.15cqw] [&>p]:text-[0.55cqw]
              [&>p]:text-[rgb(127,_112,_104)]"
                >
                  <div className="portal-project-top flex justify-between text-[0.45cqw] text-[rgb(169,_82,_60)] tracking-[0.025cqw]">
                    <span>EM ANDAMENTO</span>
                    <span>Etapa 2 de 4</span>
                  </div>
                  <h4>Site institucional</h4>
                  <p>Design e experiência em todas as telas</p>
                  <div
                    className="portal-progress h-[0.3cqw] [background:rgb(232,_216,_204)] rounded-[1cqw] m-[1.3cqw_0px_0.7cqw] [&>span]:block
              [&>span]:w-[50%] [&>span]:h-full [&>span]:rounded-[inherit] [&>span]:[background:var(--accent)]"
                  >
                    <span />
                  </div>
                  <div
                    className="portal-steps flex justify-between gap-[0.3cqw] text-[0.4cqw] text-[rgb(140,_133,_128)] [&>span]:flex
              [&>span]:items-center [&>span]:gap-[0.2cqw] [&_svg]:w-[0.6cqw] [&_svg]:h-[0.6cqw]
              [&_svg]:text-[rgb(92,_125,_107)] [&_.current]:text-[var(--accent)]"
                  >
                    <span>
                      <Check /> Briefing
                    </span>
                    <span className="current">02 Design</span>
                    <span>03 Desenvolvimento</span>
                    <span>04 Entrega</span>
                  </div>
                  <div
                    className="portal-project-footer flex justify-between items-center [border-top:1px_solid_rgb(234,_218,_211)] mt-[1.4cqw]
              pt-[1cqw] text-[0.5cqw] text-[rgb(127,_112,_104)] [&_strong]:block [&_strong]:mt-[0.3cqw]
              [&_strong]:text-[rgb(37,_44,_54)] [&_strong]:text-[0.6cqw] [&>span:last-child]:flex
              [&>span:last-child]:items-center [&>span:last-child]:gap-[0.4cqw] [&>span:last-child]:text-[rgb(37,_44,_54)]
              [&_svg]:w-[0.8cqw] [&_svg]:h-[0.8cqw]"
                  >
                    <span>
                      Próxima entrega <strong>Layout das páginas</strong>
                    </span>
                    <span>
                      Ver projeto <ChevronRight />
                    </span>
                  </div>
                </div>
                <div
                  className="portal-activity p-[1.1cqw] [border:1px_solid_rgb(225,_228,_233)] rounded-[0.6cqw]
              [background:rgb(255,_255,_255)] [&_h4]:m-[0px_0px_0.7cqw] [&_h4]:text-[0.7cqw] [&>div]:flex
              [&>div]:items-center [&>div]:gap-[0.6cqw] [&>div]:p-[0.8cqw_0px]
              [&>div+div]:[border-top:1px_solid_rgb(237,_240,_242)] [&>div>span]:grid [&>div>span]:place-items-center
              [&>div>span]:[background:rgb(236,_240,_238)] [&>div>span]:text-[rgb(92,_125,_107)]
              [&>div>span]:rounded-[0.4cqw] [&>div>span]:p-[0.45cqw] [&_svg]:w-[0.9cqw] [&_svg]:h-[0.9cqw] [&_strong]:block
              [&_strong]:text-[0.53cqw] [&_small]:block [&_small]:mt-[0.3cqw] [&_small]:text-[0.43cqw]
              [&_small]:text-[rgb(125,_135,_148)]"
                >
                  <h4>Últimas atualizações</h4>
                  <div>
                    <span>
                      <Check />
                    </span>
                    <p>
                      <strong>Briefing aprovado</strong>
                      <small>Etapa concluída</small>
                    </p>
                  </div>
                  <div>
                    <span>
                      <LayoutDashboard />
                    </span>
                    <p>
                      <strong>Design em andamento</strong>
                      <small>Estamos criando suas páginas</small>
                    </p>
                  </div>
                  <div>
                    <span>
                      <CalendarDays />
                    </span>
                    <p>
                      <strong>Próxima etapa</strong>
                      <small>Desenvolvimento do site</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="device-mobile absolute w-[18%] right-[2%] top-[11%] p-[0.55cqw] [border:0.15cqw_solid_rgb(118,_120,_124)]
              rounded-[3.2cqw] [background:linear-gradient(120deg,_rgb(82,_84,_89),_rgb(27,_29,_33)_45%,_rgb(65,_67,_71))]
              [box-shadow:rgba(34,_37,_43,_0.145)_0.7cqw_1.5cqw_3cqw,_rgb(23,_25,_29)_0px_0px_0px_0.2cqw_inset]
              [transform:scale(0.9)] [transform-origin:right_top] [@media(width<=650px)]:w-[20%]
              [@media(width<=650px)]:right-[0px] [@media(width<=650px)]:top-[23%]
              [@media(hover:_hover)_and_(prefers-reduced-motion:_no-preference)]:[transition:translate_0.5s]
              [&:hover]:[@media(hover:_hover)_and_(prefers-reduced-motion:_no-preference)]:[translate:0px_-7px]"
        >
          <div
            className="mobile-screen [background:rgb(248,_249,_251)] rounded-[2.55cqw] min-h-0 overflow-hidden relative p-[0px_1.2cqw]
              text-[rgb(37,_44,_54)] h-[39cqw] px-[1cqw] [@media(width<=650px)]:h-[41cqw] [&>h3]:text-[1.45cqw]
              [&>h3]:tracking-[-0.07cqw] [&>h3]:m-[0.5cqw_0px_1.2cqw]"
          >
            <div
              className="mobile-status h-[2.8cqw] flex items-center justify-between text-[0.6cqw] [&>span]:flex [&>span]:gap-[0.25cqw]
              [&_svg]:w-[0.8cqw] [&_svg]:h-[0.8cqw]"
            >
              <strong>9:41</strong>
              <span>
                <Signal />
                <Wifi />
                <BatteryFull />
              </span>
            </div>
            <div
              className="mobile-island w-[5cqw] h-[1.35cqw] [background:rgb(27,_29,_33)] rounded-[1cqw] absolute top-[0.6cqw] left-[50%]
              [transform:translateX(-50%)]"
            />
            <div className="mobile-heading flex justify-between items-center p-[0.7cqw_0px_1cqw]">
              <span
                className="mobile-avatar w-[2.5cqw] h-[2.5cqw] rounded-[50%] [background:rgb(242,_220,_213)] grid place-items-center
              text-[rgb(166,_76,_56)] text-[1cqw]"
              >
                G
              </span>
              <Bell />
            </div>
            <small className="mobile-date text-[0.5cqw] text-[rgb(125,_135,_148)] tracking-[0.05cqw]">
              MINHA CONTA
            </small>
            <h3>Meus projetos</h3>
            <div
              className="mobile-search text-[0.7cqw] text-[rgb(138,_146,_157)] flex items-center gap-[0.6cqw] p-[0.85cqw]
              [border:1px_solid_rgb(228,_231,_235)] rounded-[0.6cqw] [background:rgb(255,_255,_255)]"
            >
              <Search /> Buscar projeto
            </div>
            <div
              className="mobile-project mt-[1.1cqw] p-[1cqw_0.8cqw] [border:1px_solid_rgb(234,_218,_211)] rounded-[0.8cqw]
              [background:rgb(255,_245,_239)] [&_h4]:text-[0.9cqw] [&_h4]:m-[0.8cqw_0px_0.6cqw] [&_p]:text-[0.6cqw]
              [&_p]:text-[rgb(127,_112,_104)]"
            >
              <span className="mobile-tag text-[0.43cqw] tracking-[0.06cqw] text-[rgb(169,_82,_60)]">
                EM ANDAMENTO
              </span>
              <h4>Site institucional</h4>
              <p>Etapa 2 de 4 · Design</p>
              <div
                className="mobile-progress h-[0.35cqw] [background:rgb(232,_216,_204)] rounded-[1cqw] mt-[1.3cqw] [&>span]:block
              [&>span]:w-[50%] [&>span]:h-full [&>span]:[background:var(--accent)] [&>span]:rounded-[inherit]"
              >
                <span />
              </div>
              <div className="mobile-project-bottom flex items-center justify-between mt-[1.2cqw] text-[0.6cqw]">
                <span>Ver detalhes</span>
                <ChevronRight />
              </div>
            </div>
            <div
              className="mobile-task flex gap-[0.7cqw] items-center p-[0.9cqw_0px] [border-bottom:1px_solid_rgb(228,_231,_235)]
              [&>span]:p-[0.6cqw] [&>span]:[background:rgb(236,_240,_238)] [&>span]:rounded-[0.5cqw]
              [&>span]:text-[rgb(92,_125,_107)] [&_strong]:text-[0.6cqw] [&_strong]:block [&_small]:text-[0.55cqw]
              [&_small]:block [&_small]:mt-[0.4cqw] [&_small]:text-[rgb(123,_133,_145)]"
            >
              <span>
                <Check />
              </span>
              <div>
                <strong>Briefing aprovado</strong>
                <small>Etapa concluída</small>
              </div>
            </div>
            <div
              className="mobile-task flex gap-[0.7cqw] items-center p-[0.9cqw_0px] [border-bottom:1px_solid_rgb(228,_231,_235)]
              [&>span]:p-[0.6cqw] [&>span]:[background:rgb(236,_240,_238)] [&>span]:rounded-[0.5cqw]
              [&>span]:text-[rgb(92,_125,_107)] [&_strong]:text-[0.6cqw] [&_strong]:block [&_small]:text-[0.55cqw]
              [&_small]:block [&_small]:mt-[0.4cqw] [&_small]:text-[rgb(123,_133,_145)]"
            >
              <span>
                <CalendarDays />
              </span>
              <div>
                <strong>Próxima entrega</strong>
                <small>Layout das páginas</small>
              </div>
            </div>
            <div
              className="mobile-nav flex justify-between p-[1cqw_0.8cqw] text-[rgb(135,_144,_155)] absolute bottom-[1cqw] left-[1cqw]
              right-[1cqw] [background:rgb(248,_249,_251)] [&>svg:first-child]:text-[var(--accent)]"
            >
              <Home />
              <Package />
              <Settings />
            </div>
            <div className="mobile-home absolute bottom-[0.5cqw] left-[32%] w-[36%] h-[0.3cqw] rounded-[1cqw] [background:rgb(48,_52,_59)]" />
          </div>
        </div>
      </div>
    </figure>
  );
}
