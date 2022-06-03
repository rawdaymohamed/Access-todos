import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { removeTodo } from '../actions';
import { markTodoAsCompleted } from '../actions';
import TodoListItem from './TodoListItem';

import { loadTodos } from './thunks';
const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkAsCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading...</div>;
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompletedPressed={onMarkAsCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  // onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
