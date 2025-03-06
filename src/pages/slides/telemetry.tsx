import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Telemetry(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="telemetry"
      title="Télémesure"
      subTitle="DevOps"
    >
      <Section level={2} title="Télémesure"></Section>
    </RevealDeck>
  );
}
