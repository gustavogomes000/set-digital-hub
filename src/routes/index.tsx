import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/set-logo.png";
import { MessageCircle, Globe, ArrowUpRight } from "lucide-react";

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
  "https://wa.me/5562994603799?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20da%20SET%20Tecnologia%20e%20quero%20falar%20com%20o%20time%20sobre%20um%20diagn%C3%B3stico%20para%20minha%20empresa.";
const SITE_URL = "https://settecnologia.com";

function Index() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Grid técnico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />
      {/* Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-accent)" }}
      />
      {/* Linhas de circuito decorativas */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-[0.08]"
        viewBox="0 0 400 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 H120 L140 60 H260 L280 80 H400"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary"
        />
        <circle cx="140" cy="60" r="2" className="fill-primary" />
        <circle cx="280" cy="80" r="2" className="fill-primary" />
      </svg>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 pb-10 pt-12">
        {/* Logo */}
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-full blur-3xl opacity-40"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={logo}
              alt="SET Tecnologia"
              className="relative h-40 w-auto object-contain"
            />
          </div>

          {/* Badge tecnológico */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Atendimento Digital
          </div>

          <h1 className="mt-5 text-balance bg-clip-text text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[2.6rem]">
            Tecnologia que faz sua{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              empresa crescer
            </span>
          </h1>

          <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Sistemas, automações com IA, marketing e design em um só lugar.
            Escolha abaixo como prefere começar.
          </p>
        </header>

        {/* Instrução */}
        <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Clique em uma das opções
        </p>

        {/* Botões */}
        <section className="mt-4 space-y-3">
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
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold leading-tight">
                Fale com nosso time
              </div>
              <div className="text-xs text-white/75">
                Solicite seu diagnóstico no WhatsApp
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Site — secundário */}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-primary/20 bg-card/80 px-5 py-4 text-left text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-card"
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
            <ArrowUpRight className="h-5 w-5 text-primary opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </section>

        {/* Rodapé */}
        <footer className="mt-auto pt-12 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className="text-sm font-semibold text-foreground">
            SET Tecnologia
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Tecnologia, marketing e design em um só lugar.
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-medium text-primary transition-colors hover:text-accent"
          >
            settecnologia.com
          </a>
        </footer>
      </div>
    </main>
  );
}
