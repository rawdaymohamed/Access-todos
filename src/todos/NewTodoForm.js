import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './thunks';
import { getTodos } from './selectors';
import styled from 'styled-components';

const NewInputFormStyle = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;
const NewInputStyle = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;
const NewTodoButtonStyle = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;
const NewTodoForm = ({ todos = [], onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <NewInputFormStyle>
      <form>
        <NewInputStyle
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <NewTodoButtonStyle
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
        </NewTodoButtonStyle>
      </form>
    </NewInputFormStyle>
  );
};
const mapStateToProps = (state) => ({
  todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
