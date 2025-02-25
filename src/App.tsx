import { Typography, Paper, Grid } from '@material-ui/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
// import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardBottom, CardTop } from './components/user/Card';
import { Text } from './components/user/Text';
// import { Topbar } from './components/Topbar';

import { Editor, Frame, Element } from '@craftjs/core';
import { NodeTwoBlocks } from './components/user/NodeTwoBlocks';

export default function App() {
  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography variant="h5" align="center">
        Sample Layout Composer
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom ,NodeTwoBlocks}}>
        {/* <Topbar /> */}
        <Grid container spacing={3} style={{ paddingTop: '10px' }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                {/* <Card background="#fff" />
                <Button size="small" variant="outlined" color="default" text="Click Me" /> */}

                <Text fontSize="small" text="Hi world!" textAlign="left" />
                {/* <Element is={Container} padding={6} background="#999" canvas>
                  <Text fontSize="small" text="It's me again!" textAlign="left" />
                </Element> */}
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
