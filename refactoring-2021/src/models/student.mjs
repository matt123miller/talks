export default class User {
  static _latestId = 0;

  static _getNextId() {
    this._latestId += 1;
    return this._latestId;
  }

  courses = {};

  constructor(name, yearGroup) {
    this.id = User._getNextId();

    this.name = name;
    this.yearGroup = yearGroup;
  }

  addGrade(forCourse, withGrade) {
    this.courses[forCourse.name] = {
      course: forCourse,
      grade: withGrade,
    };
  }
}
