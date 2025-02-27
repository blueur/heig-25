import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Deployment(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="deployment"
      title="Déploiement"
      subTitle="DevOps"
    >
      <Section level={2} title="Déploiement"></Section>
    </RevealDeck>
  );
}
