import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/set-logo.png";
import { MessageCircle, Code2, Bot, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SET Tecnologia — Tecnologia, marketing e design" },
      {
        name: "description",
        content:
          "Sistemas, automações com IA, marketing e design para sua empresa vender mais e crescer no digital.",
      },
      { property: "og:title", content: "SET Tecnologia" },
      {
        property: "og:description",
        content:
          "Tudo que sua empresa precisa para crescer no digital, em um só lugar.",
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

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    desc: "Sites, sistemas, aplicativos e plataformas digitais.",
  },
  {
    icon: Bot,
    title: "Automações com IA",
    desc: "Fluxos inteligentes para atendimento, vendas e processos.",
  },
  {
    icon: Sparkles,
    title: "Marketing e Design",
    desc: "Estratégias, conteúdos e identidade visual para sua marca crescer.",
  },
];

function Index() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Grid de fundo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Glow superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
        {/* Topo */}
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full blur-2xl opacity-50"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={logo}
              alt="SET Tecnologia"
              className="relative h-32 w-auto object-contain drop-shadow-xl"
            />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">
            SET Tecnologia
          </h1>
          <p className="mt-3 text-base font-medium text-foreground/80">
            Tudo que sua empresa precisa para crescer no digital, em um só
            lugar.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Sistemas para melhorar processos, automações com IA, marketing e
            design para sua empresa vender mais, ganhar produtividade e se
            destacar no digital.
          </p>
        </header>

        {/* CTA */}
        <section className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <MessageCircle className="h-5 w-5" />
            Fale com nosso time
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Clique no botão para falar com nosso time e solicitar um
            diagnóstico digital para sua empresa.
          </p>
        </section>

        {/* Serviços */}
        <section className="mt-10 space-y-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/70 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h2 className="text-sm font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Rodapé */}
        <footer className="mt-auto pt-10 text-center">
          <p className="text-sm font-semibold text-foreground">
            SET Tecnologia
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Tecnologia, marketing e design em um só lugar.
          </p>
          <a
            href="https://settecnologia.com"
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

