import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Devops(props: {
  embedded?: boolean;
  chapter?: string;
}) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="devops"
      title="DevOps"
      subTitle="DevOps"
    >
      <Section level={2} title="DevOps"></Section>
    </RevealDeck>
  );
}
