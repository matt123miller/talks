/* eslint-disable no-continue */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
// Represents a record of a students overall academic performance
// This would likely be generated at run time on request, all the data already exists elsewhere.

// I don't see this as a DB object, more of a report that pretty prints the students history
export default class Transcript {
  constructor(student) {
    this.student = student;
  }

  generate() {
    const { courses } = this.student;
    const results = [];

    for (const key in courses) {
      if (courses.hasOwnProperty(key)) {
        const { course, grade } = courses[key];

        if (course.requiredCourse || course.requiredGrade) {
          const studentsCourse = courses[course.requiredCourse.name];
          if (!studentsCourse) {
            continue;
          }

          if (studentsCourse.grade > course.requiredGrade) {
            continue;
          }
        }

        // Presumably student was allowed to take the course so lets make the report.
        results.push(`${course.name} - Achieved grade ${grade}`);
      }
    }
    return results.join('\n');
  }
}

/**
 * There's a history of students sneaking in to doctor their grades
 * so we need to revalidate the data when generating the transcript.
 * Does the student meet the requirements of each course?
 */
