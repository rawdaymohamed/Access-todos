import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { removeTodo } from '../actions';
import { markTodoAsCompleted } from '../actions';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkAsCompletedPressed,
}) => (
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
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
