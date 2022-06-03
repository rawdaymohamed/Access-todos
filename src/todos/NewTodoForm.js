import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';
import { addTodo } from './thunks';
import './NewTodoForm.css';
const NewTodoForm = ({ todos = [], onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='new-todo-form'>
      <form>
        <input
          className='new-todo-input'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            const isDuplicateText = todos.some(
              (todo) => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue('');
            }
          }}
          type='submit'
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
