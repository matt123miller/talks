import { NullRequirement } from './courseRequirement';

//  represents a class, has certain requirements to take it
export const grades = ['A', 'B', 'C', 'D', 'E', 'F'];

export default class Course {
  students = [];

  // Later add teacher

  constructor(name, requirements) {
    this.name = name;
    if (!requirements) {
      this.requirements = new NullRequirement();
    } else {
      this.requirements = requirements;
    }
  }

  enroll(student) {
    if (!this.requirements.validate(student)) {
      return false;
    }
    // Were they already enrolled?
    const existingStudent = this.students.find((s) => s.id === student.id);
    if (existingStudent) {
      return;
    }
    this.students.push(student);
  }
}
