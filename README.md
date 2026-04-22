# Agence IA — Site web

Site marketing pour Agence IA, agence québécoise spécialisée en déploiement
d'agents IA pour PME. Site bilingue à langue principale française, optimisé
pour la performance et la conformité Loi 25.

## Stack technique

- Astro 4.x
- Tailwind CSS
- TypeScript (strict)
- React (îlots interactifs uniquement)
- Déployé via GitHub Pages

## Prérequis

- Node.js >= 20
- npm >= 10

## Développement local

```bash
npm install
npm run dev
```

Le serveur de développement démarre sur http://localhost:4321.

## Build et déploiement

```bash
npm run build
npm run preview
```

Le déploiement vers GitHub Pages se fait automatiquement à chaque push sur
`main` via GitHub Actions (`.github/workflows/deploy.yml`).
