import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Test(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="test"
      title="Test automatisé"
      subTitle="DevOps"
    >
      <Section level={2} title="Test automatisé"></Section>
    </RevealDeck>
  );
}
