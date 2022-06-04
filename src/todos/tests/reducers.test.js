import { expect } from 'chai';
import { todos } from '../../reducers';
describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is recieved', () => {
    const fakeTodo = { id: 1, text: 'Learn Redux', completed: false };
    const fakeAction = { type: 'CREATE_TODO', payload: { todo: fakeTodo } };
    const original = { isLoading: false, data: [] };
    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(original, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
