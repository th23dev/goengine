import "./PageSkeleton.css";

function Lines() {
  return <div className="skeleton-lines"><i /><i /><i /></div>;
}

export default function PageSkeleton() {
  return (
    <div className="page-skeleton" role="status" aria-label="Carregando página">
      <div aria-hidden="true">
        <div className="skeleton-header"><i /><i /><i /></div>
        <div className="skeleton-hero"><i className="skeleton-kicker" /><i className="skeleton-title" /><i className="skeleton-title short" /><Lines /><div className="skeleton-actions"><i /><i /></div><div className="skeleton-preview" /></div>
        {["about", "services", "projects", "process", "faq", "contact"].map(section => (
          <div className={`skeleton-section skeleton-${section}`} key={section}>
            <div><i className="skeleton-kicker" /><i className="skeleton-title" /><Lines /><div className="skeleton-actions"><i /></div></div>
            <div className="skeleton-preview"><Lines /><Lines /></div>
          </div>
        ))}
        <div className="skeleton-header"><i /><i /><i /></div>
      </div>
    </div>
  );
}
