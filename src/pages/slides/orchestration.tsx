import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Orchestration(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="orchestration"
      title="Orchestration"
      subTitle="DevOps"
    >
      <Section level={2} title="Orchestration"></Section>
    </RevealDeck>
  );
}
