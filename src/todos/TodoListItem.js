import React from "react";
import styled from "styled-components";
const TodoListItemStyle = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;
export const getBorderStyleForDate = (startDate, currentDate) =>
  startDate > new Date(currentDate) - 8640000 * 5 ? "none" : "1px solid red";

const TodoListItemWithWarning = styled(TodoListItemStyle)`
  border-bottom: ${getBorderStyleForDate(
    (props) => props.createdAt,
    new Date()
  )};
`;
const ButtonContainerStyle = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
const ButtonStyle = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;
const CompletedButtonStyle = styled(ButtonStyle)`
  display: inline-block;
  background-color: #22ee22;
`;
const RemoveButtonStyle = styled(ButtonStyle)`
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;
const TodoListItem = ({ todo, onDeleteTodo, onMarkAsCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoListItemStyle
    : TodoListItemWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>Created at &nbsp;</p>
      {new Date(todo.createdAt).toLocaleString()}
      <ButtonContainerStyle>
        {todo.isCompleted ? null : (
          <CompletedButtonStyle
            onClick={() => onMarkAsCompletedPressed(todo._id)}
          >
            Mark as completed
          </CompletedButtonStyle>
        )}

        <RemoveButtonStyle onClick={() => onDeleteTodo(todo._id)}>
          Remove
        </RemoveButtonStyle>
      </ButtonContainerStyle>
    </Container>
  );
};
export default TodoListItem;
