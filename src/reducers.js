import { CREATE_TODO, REMOVE_TODO } from './actions';
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const newTodo = {
        text: payload.text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    case REMOVE_TODO:
      return state.filter((todo) => todo !== payload.text);
    default:
      return state;
  }
};
