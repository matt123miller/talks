import CourseRequirement from './courseRequirement.mjs';
import Course from './course.mjs';
import Student from './student.mjs';
import Grade from './grades.mjs';

test('constructor arguments', () => {
  const reqs = new CourseRequirement(7, null, null);
  const student = new Student('Matt', 7);

  expect(reqs.validate(student)).toBe(true);
});

test('no requirements, should accept any student', () => {
  const reqs = new CourseRequirement();

  expect(reqs.validate(new Student('Matt', 7))).toBe(true);
  expect(reqs.validate(new Student())).toBe(true);
  expect(reqs.validate()).toBe(false); // can't validate nothing after all
  expect(reqs.validate(new Student('0x111111', Number.MIN_VALUE))).toBe(true);
  expect(reqs.validate(new Student('0x111111', Number.MAX_VALUE))).toBe(true);
});

test('required year group validation', () => {
  for (const yearGroup of [7, 8, 9, 10, 11]) {
    const yearlyReq = new CourseRequirement(yearGroup, null, null);
    const yearlyStudent = new Student('Matt', yearGroup);

    expect(yearlyReq.validate(yearlyStudent)).toBe(true);
  }

  const reqs = new CourseRequirement(10, null, null);

  expect(reqs.validate(new Student('', 7))).toBe(false);
  expect(reqs.validate(new Student('', 8))).toBe(false);
  expect(reqs.validate(new Student('', 9))).toBe(false);
  expect(reqs.validate(new Student('', 10))).toBe(true);
  expect(reqs.validate(new Student('', 11))).toBe(false);
  expect(reqs.validate(new Student('', -1))).toBe(false);
  expect(reqs.validate(new Student('', 0))).toBe(false);
});

test('required course validation', () => {
  const cs1 = new Course('CS 1');
  const reqs = new CourseRequirement(null, cs1, null);
  const cs2 = new Course('CS 2', reqs);

  const student = new Student('', 7);

  expect(reqs.validate(student)).toBe(false);

  student.addGrade(cs1, null);

  expect(reqs.validate(student)).toBe(true);

  student.courses = {};

  expect(reqs.validate(student)).toBe(false);
});

test('required course and grade validation', () => {
  const cs1 = new Course('CS 1');
  // erquiring CS12 and a C grade
  const reqs = new CourseRequirement(null, cs1, new Grade(70));
  const cs2 = new Course('CS 2', reqs);
  const student = new Student('', 7);

  student.addGrade(cs1, new Grade(72));
  expect(reqs.validate(student)).toBe(true);

  student.courses = {};
  student.addGrade(cs1, new Grade(70));
  expect(reqs.validate(student)).toBe(true);

  student.courses = {};
  student.addGrade(cs1, new Grade(60));
  expect(reqs.validate(student)).toBe(false);

  // What happens when we add other courses? Will it still validate for the ones it cares about?

  student.courses = {};
  student.addGrade(cs1, new Grade(100));
  student.addGrade(cs2, new Grade(100));
  student.addGrade(new Course(), new Grade(80));
  // Student has still done CS1 with a passing grade so this should pass
  expect(reqs.validate(student)).toBe(true);
});

test('required year group, course and grade', () => {
  const cs1 = new Course('CS 1');
  const reqs1 = new CourseRequirement(7, cs1, new Grade(60));
  const cs2 = new Course('CS 2', reqs1);

  const student1 = new Student('Matt', 7);

  student1.addGrade(cs1, new Grade(70));
  expect(reqs1.validate(student1)).toBe(true);

  student1.courses = {};
  student1.addGrade(cs1, new Grade(20));
  expect(reqs1.validate(student1)).toBe(false);

  // construct a big example of many courses and linked requirements
  // another time...
});
