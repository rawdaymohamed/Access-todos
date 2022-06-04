import React from 'react';
import styled from 'styled-components';
import TodoList from './todos/TodoList';
const AppStyle = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
`;
const App = () => {
  return (
    <AppStyle>
      <TodoList />
    </AppStyle>
  );
};

export default App;
