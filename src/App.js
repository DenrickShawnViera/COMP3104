import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  const handleAddStudent = () => {
    if (name && age && major) {
      const newStudent = { name, age, major };
      setStudents([...students, newStudent]);
      setName("");
      setAge("");
      setMajor("");
    }
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h3 className="subtitle">
        Developed By: 101426295 || Denrick Shawn Viera || DevOps
      </h3>

      <div className="form">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Major:</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />

        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.age} - {student.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
