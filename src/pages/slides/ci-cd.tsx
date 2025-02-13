import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function CiCd(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="ci-cd"
      title="CI/CD"
      subTitle="DevOps"
    >
      <Section level={2} title="CI/CD"></Section>
    </RevealDeck>
  );
}
