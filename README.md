# Sobre mí (React + Vite + Cloudflare Workers)

## Personalizar
- Edita `src/data.js`: nombre, bio, proyectos y enlaces.
- Pon tu foto en `public/foto.jpg` y cambia `foto: "/foto.jpg"` en `src/data.js`.

## Probar en local
    npm install
    npm run dev

## Subir a Cloudflare Workers
    npx wrangler login
    npm run deploy

El nombre del Worker se cambia en `wrangler.jsonc` (`"name"`).
