import React from 'react';
import './TodoListItem.css';
const TodoListItem = ({ todo, onRemovePresed, onMarkAsCompletedPressed }) => (
  <div className='todo-item-container'>
    <h3>{todo.text}</h3>
    <div className='buttons-container'>
      {todo.isCompleted ? null : (
        <button
          className='completed-button'
          onClick={() => onMarkAsCompletedPressed(todo.text)}
        >
          Mark as completed
        </button>
      )}

      <button
        onClick={() => onRemovePresed(todo.text)}
        className='remove-button'
      >
        Remove
      </button>
    </div>
  </div>
);
export default TodoListItem;
