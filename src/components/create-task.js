import React, {useState} from 'react';
import {useStyles} from './styles'
import {TextField, Button, Grid} from '@material-ui/core';
import {addTask} from "../actions/TaskActions";
import {connect} from "react-redux";


const CreateTask = ({addTask}) => {
  const [name, setName] = useState(``);
  const [time] = useState(0);
  const [start] = useState(0);
  const [isOn] = useState(false);
  const classes = useStyles();

  const submit = () => {
    const obj = {name, time, start, isOn};
    addTask(obj);
    setName('');
  };

  return (
    <div className={classes.container} style={{margin: '30px 0'}}>
      <Grid container
            justify="center"
            direction="column"
            alignItems="center">
        <Grid item xs={12} md={8}>
          <TextField id="standard-basic"
                     label="имя задачи"
                     value={name}
                     onChange={e => setName(e.target.value)}/>
          <Button variant="contained"
                  color="primary"
                  onClick={submit}>
            Добавить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, {addTask})(CreateTask)