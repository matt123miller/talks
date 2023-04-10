# Refatoring towards more maintainable JavaScript

## Stage 0 Requirements

students should be able to enroll in courses
courses have requirements
generate a transcript of students history

New domain objects

- student
- course
- student transcript of overall course history

## Stage 1 Requirements

There's a history of students sneaking in to doctor their gradesso we need to revalidate the data when generating the transcript. Does the student meet the requirements of each course?

Transcript should revalidate course requirements to stop cheaters.

## Stage 2 Requirements

Grades having a score backing them and courses now have a student year requirement

New domain objects

- grade
- requirement
