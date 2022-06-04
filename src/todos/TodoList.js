import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  getInCompletedTodos,
  getIsLoading,
  getCompletedTodos,
} from './selectors';
import {
  loadTodos,
  deleteTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks';
const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;
const TodoList = ({
  compltedTodos = [],
  inCompletedTodos = [],
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
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete</h3>
      {inCompletedTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onMarkAsCompletedPressed={onMarkAsCompletedPressed}
        />
      ))}
      <h3>Completed</h3>
      {compltedTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onMarkAsCompletedPressed={onMarkAsCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};
const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  compltedTodos: getCompletedTodos(state),
  inCompletedTodos: getInCompletedTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  // onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  onDeleteTodo: (id) => dispatch(deleteTodoRequest(id)),
  // onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
