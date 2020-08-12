import updateTasks from './taskList';


const reducer = (state, action) => {
  return {
    taskList: updateTasks(state, action),
  }
};

export default reducer;
