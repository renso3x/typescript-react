import React from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';

import Todo from './components/Todo';
import Input from './components/Input';

import './App.css';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography className="App-header">
        <p>Todo</p>
      </Typography>
      <Grid container direction="column">
        <Grid item xs spacing={2}>
          <Box>
            <Input />
          </Box>
        </Grid>
        <Grid item xs spacing={2}>
          <Todo name="Task 1" />
          <Todo name="Task 1" />
          <Todo name="Task 1" />
          <Todo name="Task 1" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
