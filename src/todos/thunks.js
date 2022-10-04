import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
} from "../actions";

export const displayAlert = (text) => () => {
  alert(`Hello from thunk ${text}`);
};
export const addTodo = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const todo = await response.json();
    console.log(todo)
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const todos = await fetch("http://localhost:8080/todos");
    const todosJson = await todos.json();

    dispatch(loadTodosSuccess(todosJson));
  } catch (error) {
    dispatch(loadTodosFailure(error));
    dispatch(displayAlert(error));
  }
};
export const deleteTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      }
    );
    const todo = await response.json();
    dispatch(markTodoAsCompleted(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
