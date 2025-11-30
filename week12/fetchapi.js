// POST : Create a new student
async function createStudent() {
  const newStudent = {
    name: "Poonyawat Khansuwan",
    year: 3
  };

  const res = await fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStudent),
  });

  const data = await res.json();
  console.log("POST student:", data);
}
createStudent();

// PUT : Update existing student
async function updateStudent() {
  const updatedData = {
    name: "Poon Updated",
    year: 4
  };

  const res = await fetch("http://localhost:3000/api/students/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  const data = await res.json();
  console.log("PUT student:", data);
}
updateStudent();

// DELETE : Remove student
async function deleteStudent() {
  const res = await fetch("http://localhost:3000/api/students/1", {
    method: "DELETE",
  });

  console.log("DELETE status:", res.status);
}
deleteStudent();

// GET : Display all students on DOM
async function loadStudents() {
  const res = await fetch("http://localhost:3000/api/students");
  const students = await res.json();

  const list = document.getElementById("studentList");
  if (list) {
    list.innerHTML = students
      .map(s => `<li>${s.name} (Year ${s.year})</li>`)
      .join("");
  }
}

loadStudents();

// POST : Add course to student
async function addCourseToStudent() {
  const studentId = 1;
  const courseId = 2;

  const res = await fetch(
    `http://localhost:3000/api/students/${studentId}/courses/${courseId}`,
    {
      method: "POST",
    }
  );

  const data = await res.json();
  console.log("Add Course -> Student:", data);
}
addCourseToStudent();
