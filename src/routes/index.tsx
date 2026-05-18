import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/set-logo.png";
import { MessageCircle, Globe, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SET Tecnologia — Tecnologia, marketing e design" },
      {
        name: "description",
        content:
          "Fale com o time da SET Tecnologia pelo WhatsApp ou conheça nosso site. Sistemas, IA, marketing e design em um só lugar.",
      },
      { property: "og:title", content: "SET Tecnologia" },
      {
        property: "og:description",
        content: "Tecnologia, marketing e design em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
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
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.2 315 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.2 315 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full blur-3xl opacity-40 animate-float-orb"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 animate-float-orb"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.13 320) 0%, transparent 70%)", animationDelay: "-5s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl opacity-30 animate-pulse-glow"
        style={{ background: "var(--gradient-primary)" }}
      />
      {/* Scan line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan-line"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.2 315 / 0.8), transparent)", boxShadow: "0 0 20px oklch(0.72 0.2 315 / 0.6)" }}
      />
      {/* Animated circuit lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circ" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.72 0.2 315)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.72 0.2 315)" stopOpacity="1" />
            <stop offset="1" stopColor="oklch(0.72 0.2 315)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 120 H100 L130 90 H260 L290 120 H400" stroke="url(#circ)" strokeWidth="1" fill="none"
          strokeDasharray="6 6" className="animate-dash-flow" />
        <path d="M400 680 H300 L270 710 H140 L110 680 H0" stroke="url(#circ)" strokeWidth="1" fill="none"
          strokeDasharray="6 6" className="animate-dash-flow" style={{ animationDelay: "-2s" }} />
        <circle cx="130" cy="90" r="2.5" fill="oklch(0.82 0.13 320)" className="animate-pulse-glow" />
        <circle cx="290" cy="120" r="2.5" fill="oklch(0.82 0.13 320)" className="animate-pulse-glow" />
        <circle cx="270" cy="710" r="2.5" fill="oklch(0.82 0.13 320)" className="animate-pulse-glow" />
      </svg>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 pb-10 pt-12">
        {/* Logo */}
        <header className="flex flex-col items-center text-center">
          <div className="relative animate-fade-up">
            <div
              aria-hidden
              className="absolute inset-0 -m-10 rounded-full blur-3xl opacity-60 animate-pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={logo}
              alt="SET Tecnologia"
              className="relative h-44 w-auto object-contain animate-logo-float drop-shadow-[0_10px_30px_rgba(149,76,233,0.5)]"
            />
          </div>

          {/* Badge */}
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/90 backdrop-blur-md animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Sparkles className="h-3 w-3 text-accent" />
            Atendimento Digital
          </div>

          <h1
            className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[2.4rem] animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Criamos soluções para sua empresa{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              vender mais
            </span>{" "}
            e ganhar produtividade.
          </h1>

          <p
            className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Sistemas, automações com IA, marketing e design em um só lugar.
          </p>
        </header>

        {/* Instrução */}
        <p
          className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Escolha por onde começar
        </p>

        {/* Botões */}
        <section className="mt-4 space-y-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {/* WhatsApp — primário */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 text-left text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="relative flex-1">
              <div className="text-base font-semibold leading-tight">
                Solicite um diagnóstico
              </div>
              <div className="text-xs text-white/75">
                Fale com nosso time no WhatsApp
              </div>
            </div>
            <ArrowUpRight className="relative h-5 w-5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Site — secundário */}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-primary/25 bg-card/60 px-5 py-4 text-left text-foreground backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 hover:bg-card/80"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Globe className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold leading-tight">
                Conheça a SET
              </div>
              <div className="text-xs text-muted-foreground">
                Visite nosso site oficial
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-accent opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </section>

        {/* Rodapé */}
        <footer className="mt-auto pt-12 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className="text-sm font-semibold shimmer-text">
            SET Tecnologia
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Tecnologia, marketing e design em um só lugar.
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-medium text-accent transition-colors hover:text-primary-foreground"
          >
            settecnologia.com
          </a>
        </footer>
      </div>
    </main>
  );
}
