import Student from './student.mjs';
import Course from './course.mjs';
import Grade from './grades.mjs';

test('Can enroll a student on a course', () => {
  const student1 = new Student('Matt');
  const student2 = new Student('Charlotte');
  const student3 = new Student('Scott');

  const courseBio = new Course('Biology 1', null);

  expect(courseBio.students).toHaveProperty('length', 0);
  courseBio.enroll(student1);
  courseBio.enroll(student2);
  courseBio.enroll(student3);
  expect(courseBio.students).toHaveProperty('length', 3);

  const courseArt = new Course('Art 1', null);

  expect(courseArt.students).toHaveProperty('length', 0);
  courseArt.enroll(student1);
  courseArt.enroll(student2);
  expect(courseArt.students).toHaveProperty('length', 2);
});

test('Can only enroll a student once a course', () => {
  const student1 = new Student('Matt');
  const student2 = new Student('Charlotte');
  const student3 = new Student('Scott');

  const courseBio = new Course('Biology 1', null);

  expect(courseBio.students).toHaveProperty('length', 0);
  courseBio.enroll(student1);
  courseBio.enroll(student1);
  courseBio.enroll(student1);
  expect(courseBio.students).toHaveProperty('length', 1);

  const courseArt = new Course('Art 1', null);

  expect(courseArt.students).toHaveProperty('length', 0);
  courseArt.enroll(student1);
  courseArt.enroll(student2);
  courseArt.enroll(student3);
  courseArt.enroll(student2);
  courseArt.enroll(student1);
  expect(courseArt.students).toHaveProperty('length', 3);
});

test('Courses with no requirements accept any student', () => {
  const student1 = new Student('Matt');
  const student2 = new Student('Charlotte');
  const student3 = new Student('Scott');
  const courseBio1 = new Course('Biology 1', null);

  courseBio1.enroll(student1);
  courseBio1.enroll(student2);
  courseBio1.enroll(student3);
  expect(courseBio1.students).toHaveProperty('length', 3);

  // Should still enforce double enrollment behaviour
  courseBio1.enroll(student2);
  courseBio1.enroll(student3);
  expect(courseBio1.students).toHaveProperty('length', 3);
});

test('enforce grade requirements', () => {
  const student1 = new Student('Matt');
  const student2 = new Student('Charlotte');
  const student3 = new Student('Scott');

  const courseBio1 = new Course('Biology 1', null);
  const courseBio2 = new Course('Biology 2', courseBio1, new Grade(70));

  student1.addGrade(courseBio1, new Grade(82));
  student2.addGrade(courseBio1, new Grade(74));
  student3.addGrade(courseBio1, new Grade(58));

  courseBio2.enroll(student1);

  expect(courseBio2.students).toHaveProperty('length', 1);

  courseBio2.enroll(student2);

  expect(courseBio2.students).toHaveProperty('length', 2);

  courseBio2.enroll(student3);
  // student 3 doesn't have at least a C grade in the bio 1 course
  expect(courseBio2.students).toHaveProperty('length', 2);
});
