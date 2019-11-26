import React, { FC, useState } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';

import Todo from './components/Todo';
import Input from './components/Input';

import './App.css';

interface ITodo {
  name: string;
}

const App: React.FC<{}> = () => {
  const [todoList, setTodos] = useState<ITodo[]>([]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(todo => [...todo, { name: e.currentTarget.value }]);
  };

  return (
    <Container maxWidth="sm">
      <Typography className="App-header">
        <p>Todo</p>
      </Typography>
      <Grid container direction="column">
        <Grid item xs spacing={2}>
          <Box>
            <Input onSubmit={onChangeText} />
          </Box>
        </Grid>
        <Grid item xs spacing={2}>
          {todoList.map(
            (t: ITodo, indx: number) => t && <Todo key={indx} name={t.name} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
