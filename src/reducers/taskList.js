const updateTasks = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
    }
  }
  switch (action.type) {
    case 'ADD_TASK':
      return {
        // tasks: [action.payload, ...state.taskList.tasks] по идее все должно работать правильно, но происходит какая-то магия,
        // запись добавляется правильно, но корректные данные отображаются только после перезагрузки страницы иначе дублируется
        // название задания
        tasks: [...state.taskList.tasks, action.payload, ]
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
