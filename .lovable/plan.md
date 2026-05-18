# Plano — Página Bio Link SET Tecnologia

Página única, mobile-first, com a identidade da SET (roxo índigo, lavanda, roxo profundo, branco técnico) e fundo claro com detalhes sutis de grid/circuito.

## Estrutura (rota `/`)

**Topo**
- Logo SET (imagem enviada) centralizado, com leve glow roxo
- H1: `SET Tecnologia`
- Subtítulo: "Tudo que sua empresa precisa para crescer no digital, em um só lugar."
- Parágrafo curto sobre sistemas, IA, marketing e design

**CTA principal (único botão de destaque)**
- Botão grande "Fale com nosso time" → link do WhatsApp fornecido (abre em nova aba)
- Microcopy abaixo: "Clique no botão para falar com nosso time e solicitar um diagnóstico digital para sua empresa."

**Cards de serviços (3, compactos, não-clicáveis)**
1. Desenvolvimento — Sites, sistemas, aplicativos e plataformas digitais.
2. Automações com IA — Fluxos inteligentes para atendimento, vendas e processos.
3. Marketing e Design — Estratégias, conteúdos e identidade visual para sua marca crescer.

**Rodapé**
- "SET Tecnologia"
- "Tecnologia, marketing e design em um só lugar."
- Link discreto: `settecnologia.com` → https://settecnologia.com (nova aba)

> Observação: o usuário mencionou "botão pro site". Como o briefing diz "apenas um botão principal", o site fica como link de assinatura discreto no rodapé (não como botão CTA), preservando a hierarquia de um único CTA.

## Identidade visual

- Tokens em `src/styles.css` (oklch):
  - `--background`: branco técnico #F5F5F5
  - `--foreground`: roxo profundo #160A3D
  - `--primary`: roxo índigo #311B92
  - `--accent`: lavanda #CE93D8
  - Gradiente `--gradient-primary` (índigo → lavanda) para o botão
  - `--shadow-glow` roxo suave para hover do CTA
- Tipografia: Inter via Google Fonts (heading com tracking apertado, peso 700/800)
- Background decorativo: SVG sutil de grid + linhas de circuito, baixa opacidade, sem distrair

## Arquivos

- `src/assets/set-logo.png` — copiar do upload
- `src/routes/index.tsx` — substituir placeholder pela página completa + `head()` com title/description/OG
- `src/styles.css` — adicionar tokens da marca + import Inter
- `src/components/CircuitBackground.tsx` — SVG decorativo de fundo

## Detalhes técnicos

- Link WhatsApp e site com `target="_blank" rel="noopener noreferrer"`
- Sem dependências novas (sem framer-motion); micro-interações via Tailwind (`transition`, `hover:scale`, `hover:shadow`)
- SEO: title "SET Tecnologia — Tecnologia, marketing e design", description do briefing, og:image = logo
- Single H1, alt text na logo, mobile-first, viewport já configurado no root
