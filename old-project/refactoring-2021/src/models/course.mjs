//  represents a class, has certain requirements to take it
export const grades = ['A', 'B', 'C', 'D', 'E', 'F'];

export default class Course {
  students = [];

  constructor(name, requiredCourse, requiredGrade) {
    this.name = name;
    this.requiredCourse = requiredCourse;
    this.requiredGrade = requiredGrade;
  }

  enroll(student) {
    // Does student meet requirements?

    // Are there even requirements for this course?
    if (this.requiredCourse || this.requiredGrade) {
      const studentsCourse = student.courses[this.requiredCourse.name];
      if (!studentsCourse) {
        return;
      }

      if (studentsCourse.grade > this.requiredGrade) {
        return;
      }
    }
    // Were they already enrolled?
    const existingStudent = this.students.find((s) => s.id === student.id);
    if (existingStudent) {
      return;
    }
    this.students.push(student);
  }
}
