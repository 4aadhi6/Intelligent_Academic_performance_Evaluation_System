import React, { useState } from "react";

function AddStudent({ addStudent }) {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rollNo && name && section) {
      addStudent(rollNo, name, section);
      setRollNo("");
      setName("");
      setSection("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
