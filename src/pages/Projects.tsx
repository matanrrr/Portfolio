import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [];

const Projects = () => {
  return (
    <div className="grain-overlay relative min-h-screen">
      <div className="radial-glow" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-24 md:py-32">
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          חזור
        </Link>

        <h1 className="mb-10 font-display text-3xl font-black tracking-tight text-foreground md:text-4xl">
          פרוייקטים
        </h1>

        <div className="flex flex-col gap-4">
          {projects.length > 0 ? projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-dashed border-border bg-card/50 p-5 transition-all duration-300 hover:border-solid hover:border-foreground hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-base font-medium text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </a>
            )) : (
              <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 px-6 py-12 text-center">
                <h2 className="font-display text-2xl font-black text-foreground">
                  אין פה כלום עדיין
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  אני עובד על דברים חדשים, חיזרו בקרוב!
                </p>
              </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
