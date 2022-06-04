import { expect } from 'chai';
import { getBorderStyleForDate } from '../TodoListItem';
describe('The getBorderStyleForDate selector', () => {
  it('Should return none when date is less than five days ago', () => {
    const startDate = new Date(Date.now());
    const currentDate = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000);
    const expected = 'none';
    const actual = getBorderStyleForDate(startDate, currentDate);
    expect(actual).to.equal(expected);
  });
  it("should return '1px solid red' when date is more than five days ago", () => {
    const startDate = new Date('2019-01-01');
    const currentDate = new Date('2019-01-08');
    const expected = '1px solid red';
    const actual = getBorderStyleForDate(startDate, currentDate);
    expect(actual).to.equal(expected);
  });
});
