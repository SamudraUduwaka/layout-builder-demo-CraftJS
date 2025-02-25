import { useNode } from '@craftjs/core';
import { FormControl, FormLabel, Slider } from '@material-ui/core';
import ContentEditable from 'react-contenteditable';

export const Text = ({ text, fontSize, textAlign }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  // const [editable, setEditable] = useState(false);

  // useEffect(() => {
  //   console.log('hasSelectedNode', hasSelectedNode);
  //   !hasSelectedNode && setEditable(false);
  // }, [hasSelectedNode]);

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ContentEditable
        html={text}
        // disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ''))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: 'Hi',
    fontSize: 20,
  },
  related: {
    settings: TextSettings,
  },
};
