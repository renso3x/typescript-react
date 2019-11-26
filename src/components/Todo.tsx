import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey[800]
  }
}));

export interface TodoProps {
  name: string;
}

const Todo: React.SFC<TodoProps> = ({ name }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.item} button>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default Todo;
