export const fetchTasks = (data) => {
  return {
    type: 'FETCH_TASKS',
    payload: data
  }
};

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
};
export const updateTask = (index, task) => {
  return {
    type: 'UPDATE_TASK',
    payload: index,
    obj: task
  };
};

export const deleteTask = (task) => {
  return {
    type: 'DELETE_TASK',
    payload: task
  };
};
