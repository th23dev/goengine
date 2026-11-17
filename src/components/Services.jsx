import "./Services.css";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Globe2,
  Smartphone,
  Monitor,
  Check,
  Bell,
  Home,
  Settings,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

const offerings = [
  {
    id: "landing",
    icon: Globe2,
    label: "Landing pages",
    title: "Uma página.\nUm próximo passo.",
    text: "Apresente sua oferta com clareza e transforme interesse em conversa. Uma experiência pensada para guiar seu cliente, do primeiro olhar ao contato.",
    tags: ["Campanhas", "Captação de leads", "Design responsivo"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Aplicativos mobile",
    title: "Seu negócio.\nNa palma da mão.",
    text: "Serviços, agendamentos e informações onde seu cliente está. Interfaces intuitivas que tornam as tarefas do dia a dia mais simples.",
    tags: ["Experiência touch", "Área do cliente", "Notificações"],
  },
  {
    id: "desktop",
    icon: Monitor,
    label: "Aplicativos de computador",
    title: "Menos tarefas.\nMais possibilidades.",
    text: "Organize processos, acompanhe informações e conecte sua equipe. Software sob medida para o jeito que sua operação funciona.",
    tags: ["Gestão", "Automações", "Integrações"],
  },
];

function Preview({ type }) {
  if (type === "landing")
    return (
      <div className="service-browser service-device preview-landing">
        <div className="service-window landing-window">
          <i />
          <i />
          <i />
          <span>goengine / sua próxima ideia</span>
        </div>
        <div className="landing-demo">
          <div className="demo-brand">
            goengine<span>ESTÚDIO DIGITAL ↗</span>
          </div>
          <small>FEITO PARA O SEU PRÓXIMO PASSO</small>
          <h4>
            Boas ideias
            <br />
            merecem <em>espaço.</em>
          </h4>
          <p>
            Uma experiência que conecta sua marca
            <br />
            às pessoas certas.
          </p>
          <span className="demo-cta">
            Vamos começar <ArrowUpRight />
          </span>
          <div className="landing-sculpture">
            <i />
            <i />
            <i />
          </div>
          <div className="landing-demo-bottom">
            <span>ESTRATÉGIA · DESIGN · TECNOLOGIA</span>
            <ArrowDown />
          </div>
        </div>
      </div>
    );
  if (type === "mobile")
    return (
      <>
        <div className="service-phone service-device preview-mobile">
          <div className="demo-island" />
          <div className="demo-status">
            9:41 <span>••• ▰</span>
          </div>
          <div className="demo-mobile-head">
            <span>g</span>
            <Bell />
          </div>
          <small>OLÁ, VAMOS CRIAR?</small>
          <h4>
            Seu projeto,
            <br />
            sempre perto.
          </h4>
          <div className="demo-mobile-card">
            <span>EM ANDAMENTO</span>
            <h5>Site institucional</h5>
            <p>Etapa 2 de 4 · Design</p>
            <div className="demo-progress">
              <i />
            </div>
          </div>
          <div className="demo-task">
            <Check />
            <span>
              Briefing aprovado<small>Tudo pronto para começar</small>
            </span>
          </div>
          <div className="demo-task">
            <CalendarDays />
            <span>
              Próxima entrega<small>Layout das páginas</small>
            </span>
          </div>
          <div className="demo-mobile-nav">
            <Home />
            <LayoutDashboard />
            <Settings />
          </div>
          <div className="demo-home" />
        </div>
        <div className="service-notification">
          <span>
            <Check />
          </span>
          <div>
            Você acompanha cada etapa.
            <small>Do primeiro rascunho à entrega.</small>
          </div>
        </div>
      </>
    );
  return (
    <div className="service-desktop service-device preview-desktop">
      <div className="service-window desktop-window">
        <i />
        <i />
        <i />
        <span>goengine — painel de trabalho</span>
      </div>
      <div className="desktop-demo">
        <aside>
          <b>g</b>
          <LayoutDashboard />
          <CalendarDays />
          <Settings />
        </aside>
        <div className="desktop-demo-main">
          <small>SEU ESPAÇO DE TRABALHO</small>
          <h4>Tudo no lugar.</h4>
          <div className="demo-metrics">
            <div>
              Projetos<strong>03</strong>
            </div>
            <div>
              Em andamento<strong>02</strong>
            </div>
            <div>
              Concluídos<strong>01</strong>
            </div>
          </div>
          <div className="demo-board">
            Visão dos projetos <span>Esta semana</span>
          </div>
          {["Site institucional", "Aplicativo mobile", "Painel de gestão"].map(
            (name, i) => (
              <div className="demo-project-row" key={name}>
                <span className="demo-project-dot" />
                <span>{name}</span>
                <div className="demo-bar">
                  <i style={{ "--bar-width": `${[65, 40, 100][i]}%` }} />
                </div>
                <small>{["Design", "Planejamento", "Concluído"][i]}</small>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function Scene({ offering, index, pinned = false }) {
  const Icon = offering.icon;
  return (
    <div className={`service-scene scene-${offering.id}`} data-active={pinned ? String(index === 0) : undefined} aria-hidden="true">
      <div className="scene-heading"><span><Icon size={16} />{offering.label}</span><span>0{index + 1} / 03</span></div>
      <div className="scene-orbit" />
      <div className="scene-preview"><Preview type={offering.id} /></div>
      <div className="scene-footer"><span><i /> Interface demonstrativa</span><span>GOENGINE</span></div>
    </div>
  );
}

export default function Services({ onStartProject }) {
  const root = useRef(null);
  useEffect(() => {
    const panels = [...root.current.querySelectorAll('.service-story')];
    const scenes = [...root.current.querySelectorAll('.service-pinned .service-scene')];
    const links = [...root.current.querySelectorAll('.service-chapters a')];
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      let active = 0;
      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= innerHeight * 0.5) active = index;
        const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight * 0.7)));
        panel.style.setProperty('--scene-progress', preference.matches ? 1 : progress);
      });
      scenes.forEach((scene, index) => {
        scene.dataset.active = String(index === active);
        scene.style.setProperty('--scene-progress', 1);
      });
      links.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
    };
  }, []);
  return (
    <section className="service-experience" id="solucoes" ref={root} aria-labelledby="services-title">
      <div className="service-heading">
        <div><span className="service-eyebrow">01 / SOLUÇÕES DIGITAIS SOB MEDIDA</span><h2 id="services-title">Sua ideia.<br /><em>Novas possibilidades.</em></h2></div>
        <p>Da primeira impressão à rotina do seu negócio. Design e tecnologia que trabalham juntos, em qualquer tela.</p>
      </div>
      <nav className="service-chapters" aria-label="Tipos de serviço">
        {offerings.map(({ id, label, icon: Icon }, i) => (
          <a key={id} href={`#servico-${id}`} aria-current={i === 0 ? 'step' : undefined}>
            <span className="chapter-icon"><Icon size={21} /></span>
            <span className="chapter-name"><small>0{i + 1}</small>{label}</span><ArrowDown size={17} />
          </a>
        ))}
      </nav>
      <div className="service-track">
        <div className="service-narrative">
          {offerings.map((offering, i) => (
            <article className="service-story" id={`servico-${offering.id}`} key={offering.id}>
              <div className="service-story-copy">
                <div className="service-story-label"><span>0{i + 1}</span>{offering.label}</div>
                <h3>{offering.title.split('\n').map((line, index) => <span key={line}>{index ? <em>{line}</em> : line}</span>)}</h3>
                <p>{offering.text}</p>
                <ul>{offering.tags.map(tag => <li key={tag}><Check size={16} />{tag}</li>)}</ul>
                <button className="service-start" onClick={onStartProject}>Vamos criar juntos <span><ArrowUpRight size={20} /></span></button>
              </div>
              <Scene offering={offering} index={i} />
            </article>
          ))}
        </div>
        <div className="service-pinned" aria-hidden="true">
          {offerings.map((offering, i) => <Scene key={offering.id} offering={offering} index={i} pinned />)}
        </div>
      </div>
    </section>
  );
}
