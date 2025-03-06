import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Chaos(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="chaos"
      title="Ingénierie du chaos"
      subTitle="DevOps"
    >
      <Section level={2} title="Ingénierie du chaos"></Section>
    </RevealDeck>
  );
}
