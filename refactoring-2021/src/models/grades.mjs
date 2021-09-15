export const grades = ['A', 'B', 'C', 'D', 'E', 'F'];

export default class Grade {
  gradeBoundaries = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    E: 50,
    F: 40,
    U: 0,
  };

  constructor(score) {
    if (typeof score === 'number') {
      if (score >= this.gradeBoundaries.A) {
        this.letter = 'A';
      } else if (score >= this.gradeBoundaries.B) {
        this.letter = 'B';
      } else if (score >= this.gradeBoundaries.C) {
        this.letter = 'C';
      } else if (score >= this.gradeBoundaries.D) {
        this.letter = 'D';
      } else if (score >= this.gradeBoundaries.E) {
        this.letter = 'E';
      } else if (score >= this.gradeBoundaries.F) {
        this.letter = 'F';
      } else {
        this.letter = 'U';
      }
    } else if (typeof score === 'string') {
      this.letter = score;
    } else {
      console.error('dodgy data');
    }
  }
}
