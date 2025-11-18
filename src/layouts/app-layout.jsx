export default function AppLayout({ children, breadcrumbs = [] }) {
  return (
    <div className="inertia-admin-kit-layout">
      {breadcrumbs?.length > 0 && (
        <nav className="mb-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1">
              {index > 0 && <span>/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="text-primary hover:underline">
                  {crumb.title}
                </a>
              ) : (
                <span>{crumb.title}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      {children}
    </div>
  );
}

