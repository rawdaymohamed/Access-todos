import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';
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

    case MARK_TODO_AS_COMPLETED:
      return state.map((todo) => {
        if (todo.text === payload.text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    default:
      return state;
  }
};
