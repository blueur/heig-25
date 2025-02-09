import { List, Section, Text } from "@site/src/components/Deck";
import Mermaid from "@site/src/components/Mermaid";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Introduction(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="introduction"
      title="DevOps"
      subTitle="David Tang"
    >
      <Section level={2} title="Parcours">
        <Mermaid>
          {`
          timeline
            Gymnase d'Yverdon
            EPFL : BSc & MSc en Informatique
            Ingénieur informaticien : ELCA (CFF, transN, TPF, BCV) : EPFL
            Enseignant : Gymnase Provence : HEIG-VD : Gymnase pour Adultes : HEP Vaud
          `}
        </Mermaid>
      </Section>
      <Section level={2} title="Évaluation">
        <List
          items={[
            "1 **examen** écrit : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _50%_",
            "2 **tests** continus : &nbsp;&nbsp;&nbsp; _30%_",
            "3 **laboratoires** notés : _20%_",
          ]}
        />
      </Section>
      <Section level={2} title="Prise de notes">
        <List
          items={[
            "**Supports** mis à disposition",
            "Prendre des notes pour **compléter** les diapositives",
          ]}
        />
      </Section>
      <Section level={2} title="Contenu">
        <Text>
          [Fiche
          d'unité](https://gaps.heig-vd.ch/public/fiches/uv/uv.php?id=7181)
        </Text>
        <List
          fragment
          items={[
            "Définition et principes",
            "Développement & Git workflows",
            "Intégration, build & packaging (Docker)",
            "CI / CD (GitLab)",
            "Tests automatisés",
            "Kubernetes - objets, stratégies de déploiement",
            "Packaging k8s avec Helm",
            "GitOps et déploiement avec ArgoCD",
            "Observabilité & OpenTelemetry",
          ]}
        />
      </Section>
      <Section level={2} title="Liens">
        <List
          items={[
            [
              "[heig.davidtang.ch](https://heig.davidtang.ch)",
              ["**Calendrier**", "**Supports** de cours"],
            ],
            [
              "[Cyberlearn](https://cyberlearn.hes-so.ch/course/view.php?id=30801)",
              ["DevOps 2024-2025 printemps"],
            ],
          ]}
        />
      </Section>
    </RevealDeck>
  );
}
