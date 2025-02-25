import {
    Box,
    Chip,
    Grid,
    Typography,
    Button as MaterialButton,
  } from '@material-ui/core';
  import { useEditor } from '@craftjs/core';
  import React from 'react';
  
  export const SettingsPanel = () => {
    const { selected, actions } = useEditor((state, query) => {
      const [currentNodeId] = state.events.selected;
      let selected;
  
      if (currentNodeId) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings:
            state.nodes[currentNodeId].related &&
            state.nodes[currentNodeId].related.settings,
          isDeletable: query.node(currentNodeId).isDeletable(),
        };
      }
  
      return {
        selected,
      };
    });
  
    if (!selected) return null;
  
    return (
      <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
        <Grid container direction="column" spacing={0}>
          <Grid item>
            <Box pb={2}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography variant="subtitle1">Selected</Typography>
                </Grid>
                <Grid item>
                  <Chip size="small" color="primary" label="Selected" />
                </Grid>
              </Grid>
            </Box>
            {selected.isDeletable ? (
              <MaterialButton
                variant="contained"
                color="default"
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </MaterialButton>
            ) : null}
          </Grid>
  
          {selected.settings && React.createElement(selected.settings)}
        </Grid>
      </Box>
    );
  };
  