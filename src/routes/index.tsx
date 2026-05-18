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
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Aurora glow — único, sutil, premium */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full blur-[120px] opacity-60 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 300 / 0.55) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px] opacity-40 animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.13 320 / 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Noise sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 py-14">
        {/* Logo */}
        <header className="flex flex-col items-center text-center">
          <div className="animate-rise">
            <img
              src={logo}
              alt="SET Tecnologia"
              className="h-32 w-auto object-contain animate-float-soft"
            />
          </div>

          <p
            className="mt-10 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground animate-rise"
            style={{ animationDelay: "0.1s" }}
          >
            Atendimento Digital
          </p>

          <h1
            className="mt-4 text-balance text-[2.1rem] font-semibold leading-[1.08] text-foreground sm:text-[2.5rem] animate-rise"
            style={{ animationDelay: "0.2s" }}
          >
            Soluções para sua empresa{" "}
            <span className="shimmer-text">vender mais</span>{" "}
            e ganhar produtividade.
          </h1>

          <p
            className="mt-5 max-w-sm text-pretty text-[15px] font-light leading-relaxed text-muted-foreground animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Sistemas, automações com IA, marketing e design em um só lugar.
          </p>
        </header>

        {/* Botões */}
        <section
          className="mt-14 space-y-3 animate-rise"
          style={{ animationDelay: "0.45s" }}
        >
          {/* WhatsApp — primário */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-foreground px-5 py-[18px] text-background transition-all duration-300 hover:scale-[1.015] active:scale-[0.99]"
            style={{ boxShadow: "0 10px 40px -10px oklch(1 0 0 / 0.18)" }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/10">
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-semibold leading-tight tracking-tight">
                Solicite um diagnóstico
              </div>
              <div className="text-[12px] font-light text-background/60">
                Fale com o time no WhatsApp
              </div>
            </div>
            <ArrowUpRight
              className="h-[18px] w-[18px] opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              strokeWidth={2.2}
            />
          </a>

          {/* Site — secundário */}
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/60 px-5 py-[18px] text-foreground backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] hover:bg-card/80 hover:border-primary/40 active:scale-[0.99]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06]">
              <Globe className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[15px] font-semibold leading-tight tracking-tight">
                Conheça a SET
              </div>
              <div className="text-[12px] font-light text-muted-foreground">
                settecnologia.com
              </div>
            </div>
            <ArrowUpRight
              className="h-[18px] w-[18px] text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              strokeWidth={2.2}
            />
          </a>
        </section>

        {/* Rodapé */}
        <footer
          className="mt-auto pt-16 text-center animate-rise"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[11px] font-light uppercase tracking-[0.3em] text-muted-foreground/70">
            © {new Date().getFullYear()} SET Tecnologia
          </p>
        </footer>
      </div>
    </main>
  );
}
