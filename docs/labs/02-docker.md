# Docker

## Objectifs

- Estimer son travail
- Dockeriser une application
- Créer un Docker Compose
- Appliquer les bonnes pratiques

## Rendu

- Rapport individuel en Markdown à rendre avant le prochain cours
  - GitHub Classroom : https://classroom.github.com/a/TuhrFmh4
  - Nom du fichier : `report.md` à la racine du répertoire
- Délai: 1 semaine
- **Laboratoire noté**

## Tâches

### Estimer son travail

- Estimer le temps nécessaire pour réaliser ce travail.
  - Découper le travail en tâches pour faciliter l'estimation.
- Une fois terminé, comparer le temps estimé avec le temps réellement passé.

| Tâche      | Temps estimé | Temps passé | Commentaire |
| ---------- | ------------ | ----------- | ----------- |
| Estimation | 10m          | 15m         | ...         |
| ...        | ...          | ...         | ...         |
| Total      | 2h           | 1h30        | ...         |

### Git

- Reprendre son projet sur GitLab du laboratoire précédent (HEIG-VD DevOps)
- Mettre tout son travail sur une branche `feature/02-docker` et faites une merge request (MR) sur `main`
- Séparer son travail en commits cohérents avec des messages de commit clairs et concis

### Docker

- Dockeriser les deux applications `frontend` et `backend` du précédent laboratoire
  - On doit pouvoir construire et démarrer les deux applications depuis leur dossier respectif
  - Regarder dans les documentations officielles des frameworks pour trouver des exemples de Dockerfile
  - Suivre les bonnes pratiques pour les Dockerfiles
    - Frontend
      - Utiliser [nginx](https://nginx.org/) comme serveur web
      - `docker build -t frontend . && docker run -p 80:80 frontend`
    - Backend
      - `docker build -t backend . && docker run -p 8080:80 backend`
  - Ne pas oublier les [`.dockerignore`](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
- Dans le rapport, justifier ses choix des Dockerfiles

### Docker Compose

- Créer un `compose.yml` pour démarrer les deux applications
  - Depuis la racine du projet, on doit pouvoir
    - construire les deux applications avec `docker compose build`
    - démarrer les deux applications avec `docker compose up`
    - accéder à l'application frontend sur le port 80
    - accéder à l'application backend sur le port 8080
    - arrêter les deux applications avec `docker compose down`
- Ajouter un service `database`
  - Utiliser une base de données PostgreSQL
  - Utiliser les crédentials suivants:
    - user: postgres
    - password: postgres
    - database: postgres
  - Exposer le port 5432
  - Ajouter un volume pour persister les données (on doit pouvoir supprimer le conteneur `docker compose rm` et le recréer sans perdre les données)
  - Vous pouvez utiliser [DBeaver](https://dbeaver.io/) pour visualiser les données
- Indiquer les dépendances entre les services
- Dans le rapport, justifier ses choix pour le docker compose et la database

## Evaluation

### Critères de réussite

Pour atteindre le 4 :

- Le rapport est complet
- Le rendu sur GitLab est correct et dans les temps
- Le Docker Compose fonctionne (on peut démarrer les deux applications et la base de données)

### Critères d'amélioration

Pour atteindre le 6 :

- Bonne justification des choix techniques (utilisation des bonnes pratiques)
- Lisibilité du code
- Les commits sont cohérents et bien organisés
- Persistance des données, dockerignore, dépendances des services, ...
- Rédaction du rapport (concis, clair, bien structuré, ...)
