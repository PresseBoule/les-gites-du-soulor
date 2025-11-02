# Redirects pour Netlify - Les Gîtes du Soulor
# Les règles sont appliquées dans l'ordre (de haut en bas)

# Fichiers statiques - ne pas rediriger vers index.html
/sitemap.xml              /sitemap.xml              200
/robots.txt               /robots.txt               200
/manifest.json            /manifest.json            200
/favicon.svg              /favicon.svg              200
/logo-*.png               /logo-:splat.png          200
/logo-*.svg               /logo-:splat.svg          200

# SPA fallback - doit être en dernier
/*                        /index.html               200
