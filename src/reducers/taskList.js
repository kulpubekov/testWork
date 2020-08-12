const updateTasks = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
    }
  }

  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        ...state.taskList,
      };
    case 'ADD_TASK':
      return {
        tasks: [...state.taskList.tasks, action.payload]
      };
    case 'UPDATE_TASK':

      return {
        tasks: [
          ...state.taskList.tasks.slice(0, action.payload),
          action.obj,
          ...state.taskList.tasks.slice(action.payload + 1)
        ]
      };
    case 'DELETE_TASK':
      console.log(action.payload, 'asdsa');
      return {
        tasks: [
          ...state.taskList.tasks.slice(0, action.payload),
          ...state.taskList.tasks.slice(action.payload + 1)
        ]
      };

    default:
      return state.taskList;
  }
};

export default updateTasks;
