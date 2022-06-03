import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import TodoListItem from './TodoListItem';

import {
  loadTodos,
  deleteTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
const TodoList = ({
  todos = [],
  onMarkAsCompletedPressed,
  isLoading,
  startLoadingTodos,
  onDeleteTodo,
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
          onDeleteTodo={onDeleteTodo}
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
  // onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  onDeleteTodo: (id) => dispatch(deleteTodoRequest(id)),
  // onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
