import React from 'react';
import {connect} from 'react-redux';
import TaskItem from "./task-item";

const TaskItems = ({tasks}) => {

  return (
    <div>
      {tasks.map((el, id) => (
          <div key={id}>
            <TaskItem id={id} item={el}/>
          </div>
        )
      )}
    </div>
  );
};


const mapStateToProps = ({taskList: {tasks}}) => ({tasks});

export default connect(mapStateToProps)(TaskItems)