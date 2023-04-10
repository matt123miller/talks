import Student from './student.mjs';
import Course from './course.mjs';

test('adding previous courses taken', () => {
  const student1 = new Student('Matt');
  student1.addGrade(new Course('Biology 1'), 'c');
  expect(Object.keys(student1.courses).length).toBe(1);
  student1.addGrade(new Course('Art 1'), 'c');
  student1.addGrade(new Course('English Lit 1'), 'c');
  expect(Object.keys(student1.courses).length).toBe(3);
});

test('adding an existing course overwrites the old one', () => {
  const student1 = new Student('Matt');
  student1.addGrade(new Course('Biology 1'), 'c');

  expect(student1.courses).toHaveProperty('Biology 1');
  expect(Object.keys(student1.courses).length).toBe(1);

  student1.addGrade(new Course('Biology 1'), 'b');
  student1.addGrade(new Course('English Lit 1'), 'c');

  expect(student1.courses).toHaveProperty('Biology 1');
  expect(student1.courses['Biology 1'].grade).toBe('b');
  expect(student1.courses).toHaveProperty('English Lit 1');
  expect(Object.keys(student1.courses).length).toBe(2);
});
