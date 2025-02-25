import { useEditor, Element } from '@craftjs/core';
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';
import { Container } from './user/Container';
import { NodeTwoBlocks } from './user/NodeTwoBlocks';
import { Button } from './user/Button';
import { Text } from './user/Text';
import { Card } from './user/Card';

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            variant="contained"
            ref={(ref) => connectors.create(ref, <Card />)}
          >
            Card
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
            <MaterialButton
                variant="contained"
                ref={(ref) => connectors.create(ref, <NodeTwoBlocks />)}
            >
                NodeTwoBlocks
            </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
