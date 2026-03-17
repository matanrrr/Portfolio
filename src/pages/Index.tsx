import { Mail, Github, MessageCircle, FolderOpen, Globe, Bot, Network } from "lucide-react";
import { Link } from "react-router-dom";

const externalLinks = [
  { label: "אימייל", href: "mailto:me@matanr.dev", icon: Mail },
  { label: "גיטהאב", href: "https://github.com/matanrrr", icon: Github },
  { label: "דיסקורד", href: "https://discord.com/users/495853112947507211", icon: MessageCircle },
];

const Index = () => {
  return (
    <div className="grain-overlay relative min-h-screen">
      <div className="radial-glow" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-24 md:py-32">
        <section className="mb-16">
          <h1 className="font-display text-4xl font-black tracking-tight text-foreground md:text-5xl" dir="ltr">
            MatanR
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            הופך רעיונות למציאות ביעילות ומהירות
          </p>
        </section>

        <section>
          <div className="flex flex-wrap gap-6">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            <Link
              to="/projects"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <FolderOpen className="h-4 w-4" />
              פרוייקטים
            </Link>
          </div>
        </section>

        <footer className="mt-24 border-t border-border pt-8" dir="ltr">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — MatanR
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
