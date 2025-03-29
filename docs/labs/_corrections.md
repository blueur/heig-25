# 01 Tools

## GitLab

- Préférer les messages de commit en anglais.
- Commencer les messages de commit par un verbe à l'impératif.
- Séparer l'ajout du backend et du frontend dans des commits distincts.
- Ne pas versionner pycache.
- Ne pas versionner node_modules.
- Mettre le fichier main.py dans le dossier backend déjà existant (ne pas le créer).
- Il manque la pull request sur GitLab.

## Rapport

- Regarder https://www.conventionalcommits.org/fr/v1.0.0/
- Il manque le total du temps de travail estimé et/ou réel.
- Il manque le rapport sur GitHub Classroom.

# 02 Docker

- Les dépendances de l'application ne doivent être qu'à un seul endroit (pour les futurs mise à jour).
- Dockerignore ?
- Fixer les versions mineurs des images Docker.
- Pas besoin de Poetry dans l'image finale.
- Il ne faut pas lancer en mode dev pour la prod.
- Constance dans les messages de commit.
- Dépendance entre les services Docker ?

# 03 Compose

- Le Makefile doit être juste un raccourci des commandes.
- Les variables d'environnements sont à mettre dans un fichier .env.
- Les données de connection à la base de données ne doivent pas être en dur dans le back

# 04 CI/CD

- Les dernières pipelines ne passent pas.
- Le rapport des unit tests ne sont pas envoyés à GitLab.
- Les stages utilisés par les `include` doivent être présents dans le fichier principal (soit par défaut, soit explicite). Par exemple :
  - Dependency Scanning utilise `test` : https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Dependency-Scanning.gitlab-ci.yml
  - SAST utilise `test` : https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/SAST.gitlab-ci.yml
- Les `include` de GitLab se trouvent sur https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Jobs

# 05 Kubernetes

- Le frontend n'arrive pas à se connecter au backend (vérifier le chemin du backend).

# 06 CI/CD Java

# 07 Helm

# 08 Logs

# 09 Métriques

# 10 Traces

# 11 Observabilité
