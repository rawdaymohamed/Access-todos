import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './actions';
const initialState = {
  data: [],
  isLoading: false,
};
export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        data: state.data.concat(payload.todo),
      };
    case REMOVE_TODO:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== payload.todo.id),
      };

    case MARK_TODO_AS_COMPLETED:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === payload.todo.id) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        }),
      };
    case LOAD_TODOS_SUCCESS: {
      return { ...state, isLoading: false, data: payload.todos };
    }
    case LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };
    case LOAD_TODOS_PROGRESS:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
