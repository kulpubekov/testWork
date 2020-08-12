import React  from 'react';
import {connect} from 'react-redux';
import TaskItem from "./task-item";
import {Grid, List} from "@material-ui/core";
import {useStyles} from "./styles";

const TaskList = ({tasks}) => {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{height: 'calc(100vh - 120px)', overflowY: 'auto'}}>
      <Grid container
            justify="center"
            direction="column"
            alignItems="center">
        <Grid item xs={12} md={8}>
          <div className={classes.demo}>
            <List>
              {tasks.map((el, id) => (
                  <TaskItem key={id} id={id} item={el}/>
                )
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};


const mapStateToProps = ({taskList: {tasks}}) => ({tasks});

export default connect(mapStateToProps)(TaskList)