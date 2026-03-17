import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grain-overlay relative min-h-screen">
      <div className="radial-glow" />

      <main className="relative z-10 flex min-h-screen flex-col mx-auto max-w-2xl px-6 py-24 md:py-32">
        <div className="flex-1">
          <section className="mb-12">
            <h1 className="font-display text-7xl font-black tracking-tight text-foreground md:text-9xl">
              404
            </h1>
            <h2 className="font-bold mt-4 text-xl font-medium text-foreground">
              העמוד לא נמצא
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              העמוד שחיפשת לא נמצא, או שאולי הוא עבר דירה.
            </p>
          </section>

          <section>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-lg border border-dashed border-border bg-card/50 px-5 py-3 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-solid hover:border-foreground hover:bg-card hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              חזור לבית
            </Link>
          </section>
        </div>

        <footer className="mt-24 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — MatanR
          </p>
        </footer>
      </main>
    </div>
  );
};

export default NotFound;