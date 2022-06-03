export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});
// To be called in the component:
//createTodo("Learn Redux");
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
