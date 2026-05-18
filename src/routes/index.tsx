import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/set-logo.png";
 import { MessageCircle, ArrowUpRight, Globe, Code, Cpu, Sparkles, Zap, Bot, Laptop } from "lucide-react";

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
        className="pointer-events-none absolute -top-40 -left-32 h-[36rem] w-[36rem] blur-[110px] opacity-80 animate-blob-1 animate-hue-shift mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.7 0.22 300 / 0.55), transparent 65%)",
          borderRadius: "42% 58% 63% 37% / 47% 39% 61% 53%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 h-[34rem] w-[34rem] blur-[110px] opacity-70 animate-blob-2 animate-morph mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, oklch(0.78 0.14 320 / 0.5), transparent 65%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 blur-[110px] opacity-60 animate-blob-3 animate-morph-slow mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.18 250 / 0.45), transparent 65%)",
          borderRadius: "30% 70% 50% 50% / 50% 60% 40% 50%",
        }}
      />

       {/* SET Tech High-Energy Background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050505]">
         {/* Dynamic Nebula Clouds */}
         <div
           aria-hidden
           className="absolute -top-[10%] -left-[10%] h-[120%] w-[120%] animate-aurora-flow opacity-60"
           style={{
             background: "radial-gradient(circle at center, oklch(0.55 0.3 300 / 0.4), oklch(0.65 0.25 330 / 0.2) 30%, transparent 60%)",
           }}
         />
         <div
           aria-hidden
           className="absolute -bottom-[20%] -right-[20%] h-[100%] w-[100%] animate-aurora-flow opacity-50"
           style={{
             background: "radial-gradient(circle at center, oklch(0.5 0.3 280 / 0.4), oklch(0.6 0.25 310 / 0.2) 35%, transparent 65%)",
             animationDelay: "-8s",
           }}
         />
         
         {/* Core Energy Glow */}
         <div
           aria-hidden
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full animate-energy opacity-30 mix-blend-screen"
           style={{
             background: "radial-gradient(circle, oklch(0.6 0.3 300 / 0.6), transparent 70%)",
           }}
         />
 
         {/* Digital Grid Lines */}
         <div
           aria-hidden
           className="absolute inset-0 opacity-[0.15]"
           style={{
             backgroundImage: `linear-gradient(to right, oklch(0.5 0.25 300 / 0.2) 1px, transparent 1px), 
                               linear-gradient(to bottom, oklch(0.5 0.25 300 / 0.2) 1px, transparent 1px)`,
             backgroundSize: "40px 40px",
             maskImage: "radial-gradient(circle at center, black, transparent 80%)",
           }}
         />
       </div>
 
       {/* Refined pulsing orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-1/4 h-[18rem] w-[18rem] rounded-full blur-[90px] opacity-50 animate-orb-pulse mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.2 290 / 0.6), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-10 h-[14rem] w-[14rem] rounded-full blur-[80px] opacity-50 animate-orb-pulse mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.16 340 / 0.55), transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/4 h-[12rem] w-[12rem] rounded-full blur-[70px] opacity-60 animate-orb-pulse mix-blend-screen"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.22 280 / 0.6), transparent 70%)",
          animationDelay: "1s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/3 right-12 h-[16rem] w-[16rem] rounded-full blur-[85px] opacity-55 animate-orb-pulse mix-blend-screen"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.2 260 / 0.55), transparent 70%)",
          animationDelay: "3.5s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/3 h-[10rem] w-[10rem] rounded-full blur-[60px] opacity-55 animate-orb-pulse mix-blend-screen"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.14 320 / 0.6), transparent 70%)",
          animationDelay: "0.5s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-1/3 h-[13rem] w-[13rem] rounded-full blur-[75px] opacity-55 animate-orb-pulse mix-blend-screen"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.18 295 / 0.55), transparent 70%)",
          animationDelay: "4.2s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-2/3 left-1/2 h-[9rem] w-[9rem] rounded-full blur-[55px] opacity-60 animate-orb-pulse mix-blend-screen"
        style={{
          background: "radial-gradient(circle, oklch(0.8 0.2 310 / 0.6), transparent 70%)",
          animationDelay: "2.8s",
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

       {/* Floating Tech Icons & Particles */}
       <div aria-hidden className="pointer-events-none absolute inset-0">
         {Array.from({ length: 42 }).map((_, i) => {
           const left = (i * 37 + 7) % 100;
           const top = (i * 53 + 11) % 100;
           const delay = (i % 9) * 0.7;
           const dur = 10 + (i % 8) * 2;
           const px = ((i * 73) % 160) - 80;
           const py = ((i * 41) % 160) - 80;
           
           // Mix of dots and tech icons
           const isIcon = i % 5 === 0;
           const icons = [Code, Cpu, Sparkles, Zap, Bot, Laptop];
           const IconComponent = icons[i % icons.length];
           const size = isIcon ? 14 + (i % 6) : 2 + (i % 4);
 
           return (
             <div
               key={i}
               className="absolute flex items-center justify-center transition-all"
               style={{
                 left: `${left}%`,
                 top: `${top}%`,
                 width: size,
                 height: size,
                 color: i % 2 === 0 ? "oklch(0.6 0.22 300 / 0.4)" : "oklch(0.78 0.14 320 / 0.4)",
                 animation: `particle-drift ${dur}s ease-in-out ${delay}s infinite`,
                 ["--px" as never]: `${px}px`,
                 ["--py" as never]: `${py}px`,
               }}
             >
               {isIcon ? (
                 <IconComponent size={size} strokeWidth={1.5} className="opacity-40" />
               ) : (
                 <div 
                   className="h-full w-full rounded-full" 
                   style={{ 
                     background: "currentColor",
                     boxShadow: "0 0 12px currentColor" 
                   }} 
                 />
               )}
             </div>
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

           <div 
             className="mt-6 flex flex-col items-center gap-2 animate-rise"
             style={{ animationDelay: "0.2s" }}
           >
             <h1 className="text-balance text-[2.6rem] font-black leading-[1] tracking-[-0.06em] text-white">
               Soluções para sua empresa
             </h1>
             <div className="flex flex-wrap justify-center gap-x-3 text-[2.6rem] font-black leading-[1] tracking-[-0.06em]">
               <span className="shimmer-text">vender mais</span>
               <span className="text-white">e evoluir.</span>
             </div>
           </div>

           <p
             className="mt-4 max-w-[22rem] text-pretty text-[15px] font-normal leading-[1.5] tracking-[-0.015em] text-muted-foreground animate-rise"
             style={{ animationDelay: "0.3s" }}
           >
             Sistemas, automações com IA, marketing e design integrados para o crescimento do seu negócio.
           </p>
        </header>

        {/* Botões */}
         <section
           className="mt-8 space-y-3.5 animate-rise"
           style={{ animationDelay: "0.45s" }}
         >
          {/* WhatsApp — primário */}
           <a
             href={WHATSAPP_URL}
             target="_blank"
             rel="noopener noreferrer"
             className="group relative flex w-full items-center gap-4 overflow-hidden rounded-[2rem] px-6 py-6 text-primary-foreground transition-all duration-500 hover:-translate-y-1 active:scale-[0.98]"
             style={{
               background:
                 "linear-gradient(135deg, oklch(0.5 0.25 300), oklch(0.65 0.2 320))",
               boxShadow:
                 "0 1px 1px rgba(255,255,255,0.4) inset, 0 25px 60px -15px oklch(0.5 0.25 300 / 0.7), 0 8px 20px -5px rgba(0,0,0,0.2)",
             }}
           >
             <span
               aria-hidden
               className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full animate-glass-shine"
             />
             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
               <MessageCircle className="h-[20px] w-[20px]" strokeWidth={2.5} />
            </div>
             <div className="relative flex-1 text-left flex flex-col justify-center">
               <div className="text-[16px] font-bold leading-tight tracking-tight">
                 Iniciar Consultoria Grátis
               </div>
               <div className="text-[12px] font-medium text-white/80">
                 Fale com nossos especialistas agora
               </div>
            </div>
             <ArrowUpRight
               className="relative h-[20px] w-[20px] opacity-90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
               strokeWidth={2.5}
             />
          </a>

          {/* Site — temporariamente oculto */}
          {false && (
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <Globe className="h-[16px] w-[16px]" strokeWidth={2.2} />
              <span>Conheça a SET</span>
              <ArrowUpRight className="h-[16px] w-[16px]" strokeWidth={2.2} />
            </a>
          )}
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
