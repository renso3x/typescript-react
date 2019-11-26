import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export interface InputProps {
  onSubmit: React.FormEventHandler;
}

const Input: React.SFC<InputProps> = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <TextField
      id="task"
      name="task"
      placeholder="Task todo..."
      className={classes.textField}
      onBlue={onSubmit}
      fullWidth
    />
  );
};

export default Input;
