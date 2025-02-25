import { Text } from './Text';
import { Button } from './Button';
import {
  Container,
  ContainerDefaultProps,
  ContainerSettings,
} from './Container';
import { useNode, Element } from '@craftjs/core';

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element is={CardTop} id="text" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element is={CardBottom} id="buttons" canvas>
        <Button
          size="small"
          variant="contained"
          color="primary"
          text="Learn More"
        />
      </Element>
    </Container>
  );
};

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
