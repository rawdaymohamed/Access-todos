import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from '../actions';

export const displayAlert = (text) => () => {
  alert(`Hello from thunk ${text}`);
};
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const todos = await fetch('http://localhost:8080/todos');
    const todosJson = await todos.json();
    dispatch(loadTodosSuccess(todosJson));
  } catch (error) {
    dispatch(loadTodosFailure(error));
    dispatch(displayAlert(error));
  }
};
