export default class User {
  static _latestId = 0;

  static _getNextId() {
    this._latestId += 1;
    return this._latestId;
  }

  courses = {};

  constructor(name) {
    this.id = User._getNextId();
    this.name = name;
  }

  addGrade(forCourse, withGrade) {
    this.courses[forCourse.name] = {
      course: forCourse,
      grade: withGrade,
    };
  }
}
