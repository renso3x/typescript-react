import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export interface TodoProps {
  name: string;
}

const Todo: React.SFC<TodoProps> = ({ name }) => {
  return (
    <ListItem button>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default Todo;
