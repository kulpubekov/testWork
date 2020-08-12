import {createStore} from 'redux';
import reducer from './reducers';

const persistedState = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : {}


const store = createStore(
  reducer,
  // persistedState
);

const update = () => {

  localStorage.setItem('tasks', JSON.stringify(store.getState().taskList.tasks))
};


store.subscribe(update);


export default store;