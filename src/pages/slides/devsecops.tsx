import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Devsecops(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="devsecops"
      title="DevSecOps"
      subTitle="DevOps"
    >
      <Section level={2} title="DevSecOps"></Section>
    </RevealDeck>
  );
}
