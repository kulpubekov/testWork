import React, {useState} from 'react';
import {useStyles} from './styles'
import {TextField, Button} from '@material-ui/core';
import {addTask} from "../actions/TaskActions";
import {connect} from "react-redux";

const CreateTask = ({addTask}) => {
  const classes = useStyles();
  const [name, setName] = useState(``)
  const [time] = useState(0)
  const [start] = useState(0)
  const [isOn] = useState(false)


  const submit = () => {
    const obj = {
      name,
      time,
      start,
      isOn,
    };

    addTask(obj);
    setName('')
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"
                 label="имя задачи"
                 value={name}
                 onChange={e => setName(e.target.value)}/>
      <Button variant="contained"
              color="primary"
              onClick={submit}>
        add
      </Button>
    </form>
  );
};

export default connect(null, {addTask})(CreateTask)