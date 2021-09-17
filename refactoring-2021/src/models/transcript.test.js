import Student from './student.mjs';
import Course from './course.mjs';
import Transcript from './transcript.mjs';

test('Generate simple transcript', () => {
  const student1 = new Student('Matt');
  const courseBio = new Course('Biology 1', null);
  const courseArt = new Course('Art 1', null);
  const courseHistory = new Course('History 1', null);

  student1.addGrade(courseBio, 'C');
  student1.addGrade(courseArt, 'B');
  student1.addGrade(courseHistory, 'E');

  const transcript = new Transcript(student1);
  const trans = transcript.generate();

  expect(trans).toContain('Biology 1 - Achieved grade C');
  expect(trans).toContain('Art 1 - Achieved grade B');
  expect(trans).toContain('History 1 - Achieved grade E');
});

test.skip('Student has altered data, does it revalidate?', () => {
  const student1 = new Student('Matt');
  const courseBio1 = new Course('Biology 1', null);
  const courseBio2 = new Course('Biology 2', {
    course: courseBio1,
    grade: 'C',
  });
  const courseBio3 = new Course('Biology 3', {
    course: courseBio2,
    grade: 'B',
  });

  courseBio1.enroll(student1);
  student1.addGrade(courseBio1, 'C');
  // // student gets a C in bio 1, enough to qualify fo bio 2

  courseBio2.enroll(student1);
  student1.addGrade(courseBio2, 'C');

  // Student needed Biology 3 with grade B or more for their university requirements.
  // They then sneak in to update the data.

  student1.courses['Biology 3'] = {
    course: courseBio3,
    grade: 'B',
  };

  // Now generating the report it should exclude that falsified data.

  const transcript = new Transcript(student1);
  const trans = transcript.generate();
  expect(trans).toContain('Biology 1 - Achieved grade C');
  expect(trans).toContain('Biology 2 - Achieved grade C');
  expect(trans).not.toContain('Biology 3 - Achieved grade B');
  expect(trans).not.toContain('grade B');
});
