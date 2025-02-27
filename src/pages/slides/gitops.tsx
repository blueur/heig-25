import { Section } from "@site/src/components/Deck";
import RevealDeck from "@site/src/components/RevealDeck";

export default function Gitops(props: { embedded?: boolean }) {
  return (
    <RevealDeck
      embedded={props.embedded}
      name="gitops"
      title="GitOps"
      subTitle="DevOps"
    >
      <Section level={2} title="GitOps"></Section>
    </RevealDeck>
  );
}
