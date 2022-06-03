import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
} from '../actions';

export const displayAlert = (text) => () => {
  alert(`Hello from thunk ${text}`);
};
export const addTodo = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
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
