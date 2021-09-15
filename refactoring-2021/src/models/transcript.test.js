import Student from './student.mjs';
import Course from './course.mjs';
import CourseRequirement from './courseRequirement.mjs';
import Transcript from './transcript.mjs';
import Grade from './grades.mjs';

test('Generate simple transcript', () => {
  const student1 = new Student('Matt');
  const courseBio = new Course('Biology 1', null);
  const courseArt = new Course('Art 1', null);
  const courseHistory = new Course('History 1', null);

  student1.addGrade(courseBio, new Grade(70));
  student1.addGrade(courseArt, new Grade(80));
  student1.addGrade(courseHistory, new Grade(55));

  const transcript = new Transcript(student1);
  const trans = transcript.generate();

  expect(trans).toContain('Biology 1 - Achieved grade C');
  expect(trans).toContain('Art 1 - Achieved grade B');
  expect(trans).toContain('History 1 - Achieved grade E');
});

test('Student has altered data, does it revalidate?', () => {
  const student1 = new Student('Matt', 10);
  const bio1 = new Course('Biology 1');
  const bio2reqs = new CourseRequirement(10, bio1, new Grade(70)); // C
  const bio2 = new Course('Biology 2', bio2reqs);
  const bio3reqs = new CourseRequirement(10, bio2, new Grade(80)); // B
  const bio3 = new Course('Biology 3', bio3reqs);

  student1.addGrade(bio1, new Grade(85));
  // student gets a B in bio1, enough to qualify for bio 2!

  student1.addGrade(bio2, new Grade(71));
  // Student gets a C in bio2 which isn't enough to qualify for bio3
  // Student needed Biology 3 for their university requirements.
  // They then sneak in to update the data.

  student1.courses['Biology 3'] = {
    course: bio3,
    grade: new Grade(81),
  };

  // Now generating the report it should exclude that falsified data.

  const transcript = new Transcript(student1);
  const trans = transcript.generate();
  expect(trans).toContain('Biology 1 - Achieved grade B');
  expect(trans).toContain('Biology 2 - Achieved grade C');
  expect(trans).not.toContain('Biology 3 - Achieved grade B');
  expect(trans).not.toContain('Biology 3');
});
