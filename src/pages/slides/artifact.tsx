import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Artifact(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="artifact"
      title="Artefact"
      subTitle="DevOps"
    >
      <Section level={2} title="Artefact"></Section>
    </RevealDeck>
  );
}
