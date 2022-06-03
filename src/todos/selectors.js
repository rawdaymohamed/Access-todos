// createSelector is used for memoization
import { createSelector } from 'reselect';

export const getTodos = (state) => state.todos.data;
export const getIsLoading = (state) => state.todos.isLoading;

export const getInCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
