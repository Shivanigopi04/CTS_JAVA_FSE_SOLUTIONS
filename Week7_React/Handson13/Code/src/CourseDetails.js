// src/CourseDetails.js
import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <>
      <h2>🎓 Course List</h2>
      {courses.map(course =>
        course.active ? (
          <p key={course.id}>{course.name} - ₹{course.price}</p>
        ) : null
      )}
    </>
  );
};

export default CourseDetails;
