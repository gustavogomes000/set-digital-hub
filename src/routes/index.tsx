import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/set-logo.png";
import { MessageCircle, ArrowUpRight, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SET Tecnologia — Sistemas, IA, marketing e design" },
      {
        name: "description",
        content:
          "Atendimento digital da SET Tecnologia. Solicite um diagnóstico no WhatsApp ou conheça nosso site.",
      },
      { property: "og:title", content: "SET Tecnologia" },
      {
        property: "og:description",
        content: "Sistemas, automações com IA, marketing e design em um só lugar.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5562994603799?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20da%20SET%20Tecnologia%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20digital%20para%20a%20minha%20empresa.";
const SITE_URL = "https://settecnologia.com";

function Index() {
  return (
    <main className="relative h-[100svh] overflow-hidden bg-background">
      {/* === Animated 3D mesh background === */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-[110px] opacity-70 animate-blob-1"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.7 0.22 300 / 0.55), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-[110px] opacity-60 animate-blob-2"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, oklch(0.78 0.14 320 / 0.5), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[110px] opacity-50 animate-blob-3"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.18 250 / 0.45), transparent 65%)",
        }}
      />

      {/* Aurora sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-[28rem] w-[120%] -translate-x-1/2 blur-[80px] animate-aurora-sweep"
        style={{
          background:
            "linear-gradient(100deg, transparent 10%, oklch(0.78 0.18 300 / 0.35) 35%, oklch(0.82 0.14 330 / 0.4) 55%, transparent 85%)",
        }}
      />

      {/* Subtle drifting grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.18 0.02 295 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(0.18 0.02 295 / 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => {
          const left = (i * 37 + 7) % 100;
          const top = (i * 53 + 11) % 100;
          const delay = (i % 9) * 0.7;
          const dur = 8 + (i % 6) * 2;
          const px = ((i * 73) % 120) - 60;
          const py = ((i * 41) % 120) - 60;
          const size = 2 + (i % 4);
          return (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                background:
                  i % 2 === 0
                    ? "oklch(0.6 0.22 300 / 0.7)"
                    : "oklch(0.78 0.14 320 / 0.7)",
                boxShadow: "0 0 10px currentColor",
                color: i % 2 === 0 ? "oklch(0.6 0.22 300 / 0.6)" : "oklch(0.78 0.14 320 / 0.6)",
                animation: `particle-drift ${dur}s ease-in-out ${delay}s infinite`,
                ["--px" as never]: `${px}px`,
                ["--py" as never]: `${py}px`,
              }}
            />
          );
        })}
      </div>

      <div className="relative mx-auto flex h-[100svh] max-w-md flex-col px-6 py-6">
        {/* Logo with 3D float + pulsing aura */}
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="relative animate-logo-reveal">
              <img
                src={logo}
                alt="SET Tecnologia"
                className="relative h-36 w-auto object-contain animate-float-soft"
              />
            </div>
          </div>

          <p
            className="mt-7 text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground animate-rise"
            style={{ animationDelay: "0.1s" }}
          >
            Atendimento Digital
          </p>

          <h1
            className="mt-3 text-balance text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground animate-rise"
            style={{ animationDelay: "0.2s" }}
          >
            Soluções para sua empresa{" "}
            <span className="shimmer-text">vender mais</span>{" "}
            e ganhar produtividade.
          </h1>

          <p
            className="mt-3 max-w-[20rem] text-pretty text-[14px] font-normal leading-[1.45] tracking-[-0.01em] text-muted-foreground animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Sistemas, automações com IA, marketing e design em um só lugar.
          </p>
        </header>

        {/* Botões */}
        <section
          className="mt-6 space-y-2.5 animate-rise"
          style={{ animationDelay: "0.45s" }}
        >
          {/* WhatsApp — primário */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.5 0.22 300), oklch(0.62 0.22 315))",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.25) inset, 0 18px 40px -12px oklch(0.5 0.22 300 / 0.55), 0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <MessageCircle className="h-[16px] w-[16px]" strokeWidth={2.2} />
            </div>
            <div className="relative flex-1 text-left">
              <div className="text-[14px] font-semibold leading-tight tracking-tight">
                Solicite um diagnóstico
              </div>
              <div className="text-[11px] font-normal text-white/75">
                Fale com o time no WhatsApp
              </div>
            </div>
            <ArrowUpRight
              className="relative h-[16px] w-[16px] opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.2}
            />
          </a>

          {/* Site — glass secundário */}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-primary-foreground"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.5 0.22 300), oklch(0.62 0.22 315))",
              }}
            >
              <Globe className="h-[16px] w-[16px]" strokeWidth={2.2} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[14px] font-semibold leading-tight tracking-tight">
                Conheça a SET
              </div>
              <div className="text-[11px] font-normal text-muted-foreground">
                settecnologia.com
              </div>
            </div>
            <ArrowUpRight
              className="h-[16px] w-[16px] text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              strokeWidth={2.2}
            />
          </a>
        </section>

        {/* Rodapé */}
        <footer
          className="mt-auto pt-4 text-center animate-rise"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/80">
            © {new Date().getFullYear()} SET Tecnologia
          </p>
        </footer>
      </div>
    </main>
  );
}
