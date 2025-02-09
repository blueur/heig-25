# Outils

## Objectifs

- Estimer son travail
- Avoir un environnement de travail fonctionnel
- Utiliser GitLab et GitHub Classroom

## Rendu

- Rapport individuel en [Markdown](https://fr.wikipedia.org/wiki/Markdown) à rendre avant le prochain cours
  - GitHub Classroom : https://classroom.github.com/a/9GFgSJJf
  - Nom du fichier : `report.md` à la racine du répertoire
- Présentation individuelle à rendre sur Cyberlearn
  - Nom du fichier : `presentation-prenom-nom.pdf`
- Délai: 1 semaine

## Tâches

### Estimer son travail

- Estimer le temps nécessaire pour réaliser ce laboratoire
  - Découper le travail en tâches pour faciliter l'estimation
- Lorsque le laboratoire est terminé, comparer le temps estimé avec le temps réellement passé
- Le but n'étant pas d'estimer correctement, mais comprendre comment améliorer ses estimations

| Tâche      | Temps estimé | Temps réel | Commentaire |
| ---------- | ------------ | ---------- | ----------- |
| Estimation | 10m          | 15m        | ...         |
| ...        | ...          | ...        | ...         |
| Total      | 2h           | 1h30       | ...         |

### Environnement de travail

Installer et vérifier les outils suivants (mettre à jour si nécessaire):

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
  - Vérifier avec `git --version`
- [Docker](https://www.docker.com/)
  - Vérifier avec `docker --version`
  - Vérifier avec `docker compose version`
- [Node.js](https://nodejs.org/)
  - Au moins la dernière version LTS
  - Vérifier avec `node --version`
  - Vous pouvez utiliser [nvm](https://github.com/nvm-sh/nvm) pour gérer les versions de Node.js
- [Python](https://www.python.org/)
  - Vérifier avec `python --version`
  - Vous pouvez utiliser [pyenv](https://github.com/pyenv/pyenv) pour gérer les versions de Python
- [Poetry](https://python-poetry.org/)
  - Vérifier avec `poetry --version`
  - Utiliser les [virtualenvs en local](https://python-poetry.org/docs/configuration/#virtualenvsin-project) avec `poetry config virtualenvs.in-project true`
- [MiniKube](https://minikube.sigs.k8s.io/docs/)
  - Vérifier avec `minikube version`
- [Java](https://adoptium.net/fr/)
  - Au moins la dernière version LTS
  - Vérifier avec `java --version`
- [Maven](https://maven.apache.org/)
  - Vérifier avec `mvn --version`

:::tip[Conseils]

- Préférer les versions stables (LTS) aux versions de développement
  - Moins de bugs
- Préférer les versions officielles aux versions modifiées (p. ex. [Anaconda](https://www.anaconda.com/))
  - On n'installe que les outils nécessaires
- Préférer les gestionnaires de versions (nvm et pyenv) aux installations manuelles
  - Permet de gérer plusieurs versions en parallèle

:::

:::tip[Conseils pour Windows]

- Utiliser [Chocolatey](https://chocolatey.org/) pour installer les outils
- Utiliser [cmder](https://cmder.app/) comme terminal
  - Intégration avec [Windows Terminal](https://medium.com/talpor/windows-terminal-cmder-%EF%B8%8F-573e6890d143)
- Il est possible que vous deviez désactiver l'[alias d'exécution de Python](https://www.thewindowsclub.com/manage-app-execution-aliases-on-windows-10)

:::

### GitLab

- Créer un compte sur [GitLab](https://gitlab.com/) (si vous n'en avez pas déjà un)
  - Préférer un compte privé que vous utiliserez par la suite
- Créer un projet privé sur GitLab
  - Nom du projet : `HEIG-VD DevOps`
  - Identifiant du projet (laisser par défaut) : `heig-vd-devops`
- Ajouter `blueur` comme membre du projet
  - Trouvez le bon [rôle](https://docs.gitlab.com/ee/user/permissions.html) qui permet voir tous les merge requests (MR) sans pouvoir pousser du code
- Protéger la branche `main`
  - Personne ne doit pouvoir pousser directement sur la branche
  - Seuls les mainteneurs peuvent fusionner des MR
- Cloner le répertoire sur votre machine
  - Vérifier que vous ne pouvez pas pousser directement sur la branche `main`
- Créer une issue (ticket) dans le projet
  - Titre : `Rendu labo 01`
  - Assigner l'issue à vous-même
- Sur votre ordinateur, créer une nouvelle branche `feature/01-tools` et allez dessus
  - Créer un projet Vue 3 dans le dossier `/frontend`
    - https://vuejs.org/guide/quick-start.html#creating-a-vue-application
    - Depuis la racine du répertoire, exécutez `npm create vue@latest`
      - Project name: `frontend`
      - Add TypeScript? Yes
      - Add JSX Support? No
      - Add Vue Router for Single Page Application development? No
      - Add Pinia for state management? No
      - Add Vitest for Unit testing? No
      - Add an End-to-End Testing Solution? No
      - Add ESLint for code quality? Yes
      - Add Prettier for code formatting? Yes
    - Installer les dépendances avec `npm install`
    - Tester le serveur de développement avec `npm run dev`
  - Créer un commit avec les changements et poussez la branche sur GitLab
  - Créer un projet Poetry dans le dossier `/backend`
    - https://python-poetry.org/docs/basic-usage/#project-setup
    - Depuis la racine du répertoire, exécutez `poetry new backend`
    - Depuis le dossier `/backend`, installer [FastAPI](https://fastapi.tiangolo.com/)
      - https://fastapi.tiangolo.com/#installation
      - `poetry add fastapi uvicorn[standard]`
      - Créer un fichier `main.py` dans `/backend/backend` avec le code suivant ci-dessous
      - Tester le serveur de développement avec `poetry run uvicorn backend.main:app --reload`
      - Vous pourrez voir la documentation de l'API à l'adresse http://127.0.0.1:8000/docs
    - Ajouter un fichier `.gitignore` adapté au projet
- Créer un commit avec les changements et poussez la branche sur GitLab
- Créer une MR pour fusionner votre branche dans `main`
  - Lier d'une façon ou d'une autre la MR à l'issue `Rendu labo 01`
  - Assigner la MR à vous-même
- Essayer l'outils de suivi du temps de GitLab pour vos estimations
  - `/estimate 2h` pour estimer le temps nécessaire pour la MR
  - `/spend 1h30` pour indiquer le temps réellement passé
- Chercher quelles sont les bonnes pratiques pour un message de commit
  - Écrire quelques mots sur les bonnes pratiques que vous avez trouvé dans votre rapport

```python title="/backend/backend/main.py" showLineNumbers
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

## Configuration

- Configurer votre ordinateur pour qu'il affiche les extensions des fichiers
  - macOS : Finder > Préférences > Avancé > Cocher "Afficher toutes les extensions de fichier"
  - Windows : Explorer > Affichage > Options > Modifier les options des dossiers et de recherche > Affichage > Décocher "Masquer les extensions des fichiers dont le type est connu"
- Configurer votre ordinateur pour qu'il affiche les fichiers cachés
  - macOS : Finder > <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd>
  - Windows : Explorer > Affichage > Options > Modifier les options des dossiers et de recherche > Affichage > Cocher "Afficher les fichiers, dossiers et lecteurs cachés"

## Présentation

- Écrire une brève présentation de soi avec notamment
  - Son parcours académique
  - Ses centres d'intérêt
  - Ses compétences en informatique
  - Pourquoi avoir choisi ce cours/cette formation
  - Ses attentes pour le cours
  - &hellip;
- Rendre la présentation au format PDF nommé `presentation-prenom-nom.pdf` (avec votre prénom et nom, tout en minuscule, sans accent, sans espace avec des tirets) sur [Moodle](https://elearning.hepl.ch/mod/assign/view.php?id=176080)

### Bonus : Réécriture de Git

- Cloner le répertoire [Git Exercise](https://github.com/blueur/git-exercises)
- Faire les exercices indiqués dans le README
