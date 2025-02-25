import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { Container } from "./Container"; // Your existing Container component

interface NodeTwoBlocksProps {
  children: React.ReactNode;
}

interface CustomNodeTwoBlocks extends React.FC<NodeTwoBlocksProps> {
  craft: {
    displayName: string;
    props: {
      style: React.CSSProperties;
    };
  };
}

export const NodeTwoBlocks: CustomNodeTwoBlocks = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        flexWrap: "wrap", // Allows wrapping if needed
      }}
      ref={(ref) => connect(drag(ref))}
    >
      <div style={{ flex: 1, minWidth: "200px" }}> {/* Each takes equal space */}
        <Element canvas is={Container} id="first-block" background="white">
          {children}
        </Element>
      </div>
      <div style={{ flex: 1, minWidth: "200px" }}>
        <Element canvas is={Container} id="second-block" background="white">
          {children}
        </Element>
      </div>
    </div>
  );
};

NodeTwoBlocks.craft = {
  displayName: "Two Column Container",
  props: {
    style: { display: "flex", gap: "10px", width: "100%" },
  },
};
