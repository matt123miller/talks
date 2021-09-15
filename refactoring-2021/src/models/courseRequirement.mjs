/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
export class NullRequirement {
  constructor(yearGroup, previousCourse, attainedGrade) {}

  validate(student) {
    return true;
  }
}

export default class CourseRequirement {
  constructor(yearGroup, previousCourse, attainedGrade) {
    this.yearGroup = yearGroup;
    this.previousCourse = previousCourse;
    this.attainedGrade = attainedGrade;
  }

  validate(student) {
    if (!student) {
      return false;
    }

    if (this.yearGroup) {
      if (student.yearGroup !== this.yearGroup) {
        return false;
      }
    }
    // Did you do the required course, if there is one? If not the attainedGrade is useless.
    if (this.previousCourse) {
      const studentsPreviousCourse = student.courses[this.previousCourse.name];

      if (!studentsPreviousCourse) {
        return false;
      }
      // Did you get the required grade, if there is one?

      if (
        this.attainedGrade &&
        this.attainedGrade.letter < studentsPreviousCourse.grade.letter
      ) {
        return false;
      }
    }

    return true;
  }
}
