
function renderStudents(students) {
    let studentsHTML = students.map(student => {
        return `
            <div style="background-color: ${student.isPresent ? "#80dd80" : "red"}; padding: 1rem; margin-bottom: 2rem">
              <h1>${student.name}</h1>
              <h2>${student.isPresent ? "Present" : "Absent"}</h2>
            </div>
        `;
    });

    return `
        <div style="text-align: center; width: 27%; align-items: center; margin: 0 auto;">
            <h1>Roll Call!</h1>
            ${studentsHTML.join('')}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}