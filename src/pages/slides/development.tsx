import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Development(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="development"
      title="Développement"
      subTitle="DevOps"
    >
      <Section level={2} title="Développement"></Section>
    </RevealDeck>
  );
}
