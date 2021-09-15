import Grade from './grades.mjs';

test('Constructing a grade', () => {
  expect(new Grade(92)).toHaveProperty('letter', 'A');
  expect(new Grade(90)).toHaveProperty('letter', 'A');
  expect(new Grade(89)).toHaveProperty('letter', 'B');
  expect(new Grade(65)).toHaveProperty('letter', 'D');
  expect(new Grade(-1)).toHaveProperty('letter', 'U');
  expect(new Grade(35)).toHaveProperty('letter', 'U');
});
