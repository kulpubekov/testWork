const updateTasks = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
    }
  }
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [ action.payload,...state.taskList.tasks, ]
      };
    case 'UPDATE_TASK':
      return {
        tasks: [
          ...state.taskList.tasks.slice(0, action.payload),
          action.obj,
          ...state.taskList.tasks.slice(action.payload + 1),
        ]
      };
    case 'DELETE_TASK':
      return {
        tasks: [
          ...state.taskList.tasks.slice(0, action.payload),
          ...state.taskList.tasks.slice(action.payload + 1),
        ]
      };

    default:
      return state.taskList;
  }
};

export default updateTasks;
