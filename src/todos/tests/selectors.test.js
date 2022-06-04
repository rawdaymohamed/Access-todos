import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';
describe('The getCompletedtodos selector', () => {
  it('Should return only completed', () => {
    const fakeTodos = [
      {
        text: '1',
        isCompleted: true,
      },
      {
        text: '2',
        isCompleted: false,
      },

      {
        text: '3',
        isCompleted: true,
      },
    ];
    const expected = [
      {
        text: '1',
        isCompleted: true,
      },
      {
        text: '3',
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});
