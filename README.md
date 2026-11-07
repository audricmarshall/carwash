# Carwash mobile

Site vitrine d'un lavage auto à domicile à Toulouse. Rails 8.1, PostgreSQL, React via Inertia et Vite, rendu côté serveur.

## Démarrer

    bin/setup

Ou à la main :

    bundle install
    npm install
    cp .env.example .env
    bin/rails db:prepare db:seed
    bin/dev

Le site tourne sur http://localhost:3000. `bin/dev` lance Rails et le serveur Vite, qui rend aussi les pages côté serveur en développement.

## Vérifier

    bin/rspec
    bin/rubocop
    npm run lint
    npm run format:check

## Où sont les choses

| Quoi | Où |
|---|---|
| Identité du site, contact, mentions légales | `config/brand.yml`, variables dans `.env` |
| Formules, prestations, zone couverte | `db/seeds.rb`, tables `packages`, `services`, `service_areas` |
| Demandes de réservation et de devis | tables `booking_requests`, `quote_requests`, mails dans `app/mailers` |
| Pages React | `app/frontend/pages`, mise en page dans `app/frontend/layouts` |
| Styles | `app/frontend/styles`, variables dans `_tokens.scss` |

En développement, les mails sont écrits dans `tmp/mails`.

## Déployer sur Render

Le fichier `render.yaml` décrit le service web et la base PostgreSQL (région Francfort). Dans le tableau de bord Render : New, Blueprint, choisir le dépôt, renseigner les variables demandées, Apply. Le script `bin/render-build.sh` installe les gems et les paquets, construit les bundles client et SSR, migre et charge les seeds à chaque déploiement.

La base gratuite expire 30 jours après sa création : passer en Basic avant l'échéance pour garder les demandes reçues.
