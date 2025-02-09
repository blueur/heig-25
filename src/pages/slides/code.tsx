import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Code(props: { embedded?: boolean; chapter?: string }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="code"
      title="Code"
      subTitle="DevOps"
    >
      <Section level={2} title="Code"></Section>
    </RevealDeck>
  );
}
