# CHANGELOG — MELFIORE Landing Page

Formato: `[versão] · data · descrição`
Branch de referência: `main` = produção · `develop` = trabalho em andamento

---

## [1.1.0] · 2026-05-31

### Alterado
- Copy: "pessoas" → "fãs" na headline de social proof (mobile + desktop)
- Removido subheadline "obtenha acesso antecipado & atualizações exclusivas" do desktop
- Estrutura de pastas: `site/` agora é symlink para o repositório git (`LP | TFD`)
- Branch `develop` criada como branch padrão de trabalho

### Adicionado
- `CLAUDE.md` na raiz do working directory — regras operacionais para sessões Claude Code
- `CHANGELOG.md` no repositório — rastreamento de mudanças por versão
- `CHECKLIST_DEPLOY.md` — gate de qualidade pré-deploy
- `RETROSPECTIVA.md` — histórico completo do processo de construção

---

## [1.0.1] · 2026-05-30

### Corrigido
- Mobile layout: hierarquia de conteúdo e espaçamento (commit `dab9857`)
- Footer invisível em mobile (commit `e216d23`)
- Título pequeno demais em mobile (commit `e216d23`)

### Adicionado
- Integração Google Analytics 4 (commit `246cc68`)
- Configuração Vercel otimizada (commit `246cc68`)

### Ajustado
- Performance settings — redução de bundle (commit `7afac5a`)
- Remoção de arquivos não utilizados: `opengraph-image.tsx`, `privacidade/page.tsx` (commit `83e3d5c`)

---

## [1.0.0] · 2026-05-30

### Lançado
- Estrutura completa da landing page (Next.js 15, Tailwind CSS, Brother 1816)
- Formulário de waitlist com validação inline
- Integração Brevo para e-mail de boas-vindas (API route)
- Logo SVG com yellow glow embutido — viewBox `8674 8228 250 72`
- Red glow na headline via text-shadow
- Gradiente radial vermelho no background
- Página de privacidade
- SEO: metadados, sitemap, robots.txt, manifest
- Deploy na Vercel · domínio: melfiore.com

---

## PENDENTE

- [ ] E-mail de boas-vindas ativo (aguarda BREVO_API_KEY + BREVO_TEMPLATE_ID + DNS)
