import { Code2, Globe2 } from "lucide-react";
import Dashboard from "./Dashboard";
export default function Projects() {
  return (
    <section className="work-section" id="trabalho">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / POSSIBILIDADES EM TELA</span>
            <h2>
              Design que chama atenção.
              <br />
              <span>Experiências que ficam.</span>
            </h2>
          </div>
          <p>
            Uma amostra do que podemos construir.
            <br />
            Conceitos autorais, novas possibilidades.
          </p>
        </div>
        <div className="projects">
          <article>
            <div className="project-art project-orbit">
              <span className="project-category">SOFTWARE SOB ENCOMENDA</span>
              <div className="project-dash">
                <Dashboard />
              </div>
            </div>
            <div className="project-description">
              <div>
                <h3>
                  orbit<span>Uma operação mais simples.</span>
                </h3>
                <p>Conceito demonstrativo · Sistema de gestão</p>
              </div>
              <Code2 size={22} />
            </div>
          </article>
          <article>
            <div className="project-art project-forma">
              <span className="project-category">SITE INSTITUCIONAL</span>
              <div className="forma-word">
                forma<span>Espaço para novas perspectivas.</span>
              </div>
              <div className="architectural">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="project-description">
              <div>
                <h3>
                  forma<span>Uma presença com identidade.</span>
                </h3>
                <p>Conceito demonstrativo · Arquitetura e interiores</p>
              </div>
              <Globe2 size={22} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
