import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Observability(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="observability"
      title="Observabilité"
      subTitle="DevOps"
    >
      <Section level={2} title="Observabilité"></Section>
    </RevealDeck>
  );
}
