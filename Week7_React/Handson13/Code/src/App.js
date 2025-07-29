// src/App.js
import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState('books');

  const books = [
    { id: 1, title: "React in Action", author: "Mark T." },
    { id: 2, title: "Learning JavaScript", author: "Kyle S." },
  ];

  const blogs = [
    { id: 1, title: "React Basics", content: "This blog explains JSX, props, and state." },
    { id: 2, title: "Advanced Hooks", content: "Covers useReducer, useCallback, etc." },
  ];

  const courses = [
    { id: 1, name: "React Fundamentals", price: 2500, active: true },
    { id: 2, name: "Advanced React", price: 4500, active: true },
    { id: 3, name: "React Native", price: 3000, active: false },
  ];

  return (
    <div>
      <h1>🧑‍💻 Blogger App</h1>
      <div>
        <button onClick={() => setSelected("books")}>Books</button>
        <button onClick={() => setSelected("blogs")}>Blogs</button>
        <button onClick={() => setSelected("courses")}>Courses</button>
      </div>

      {/* Conditional Rendering using variable */}
      {(() => {
        if (selected === "books") return <BookDetails books={books} />;
        else if (selected === "blogs") return <BlogDetails blogs={blogs} />;
        else if (selected === "courses") return <CourseDetails courses={courses} />;
        else return <p>Please select an option</p>;
      })()}

      <hr />

      {/* Ternary Operator */}
      <p>
        You are viewing: <strong>{selected === "books" ? "Book List" : selected === "blogs" ? "Blog List" : "Course List"}</strong>
      </p>

      {/* Short-circuit rendering */}
      {selected === "courses" && <p>Courses with active status are shown only.</p>}
    </div>
  );
}

export default App;
