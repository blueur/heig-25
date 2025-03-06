import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Sre(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="sre"
      title="Ingénierie de la fiabilité des sites"
      subTitle="DevOps"
    >
      <Section level={2} title="Ingénierie de la fiabilité des sites"></Section>
    </RevealDeck>
  );
}
