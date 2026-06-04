# ComproAutosYa — Next.js 14

## Stack
- **Next.js 14** App Router + SSR
- **TypeScript**
- **Tailwind CSS**
- **Despliegue recomendado:** Vercel (gratis)

## Estructura
```
src/
├── app/
│   ├── layout.tsx        ← Metadata global + Schema markup
│   ├── page.tsx          ← Página principal
│   ├── globals.css
│   ├── sitemap.ts        ← /sitemap.xml automático
│   └── robots.ts         ← /robots.txt automático
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Steps.tsx
│   │   ├── Trust.tsx
│   │   ├── TasacionForm.tsx
│   │   └── FAQ.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── WhatsAppFab.tsx
└── lib/
    └── constants.ts      ← Número de WA, textos, datos
```

## Inicio rápido
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Despliegue en Vercel (recomendado)
1. Subí el proyecto a GitHub
2. Importalo en vercel.com/new
3. Deploy automático en cada push

## Despliegue manual (Hostinger VPS o similar)
```bash
npm run build
npm start          # puerto 3000
```
Usar PM2 para mantenerlo corriendo:
```bash
npm install -g pm2
pm2 start npm --name "comproautosya" -- start
pm2 save
```

## Actualizar número de WhatsApp
Editá `src/lib/constants.ts` → campo `whatsapp`
