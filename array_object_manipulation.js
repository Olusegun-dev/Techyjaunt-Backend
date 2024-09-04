// arrayObjectManipulation.js

// Array of objects representing students
const students = [
    { name: 'Alice', age: 18, grade: 'A' },
    { name: 'Bob', age: 20, grade: 'B' },
    { name: 'Charlie', age: 19, grade: 'A' },
    { name: 'David', age: 21, grade: 'C' },
    { name: 'Eve', age: 22, grade: 'B' },
  ];
  
  // Function to filter students by grade
  function filterByGrade(studentsArray, grade) {
    return studentsArray.filter(student => student.grade === grade);
  }
  
  // Function to calculate the average age of students
  function averageAge(studentsArray) {
    const totalAge = studentsArray.reduce((sum, student) => sum + student.age, 0);
    return totalAge / studentsArray.length;
  }
  
  // Testing the functions
  console.log(filterByGrade(students, 'A')); // Output: [ { name: 'Alice', age: 18, grade: 'A' }, { name: 'Charlie', age: 19, grade: 'A' } ]
  console.log(filterByGrade(students, 'B')); // Output: [ { name: 'Bob', age: 20, grade: 'B' }, { name: 'Eve', age: 22, grade: 'B' } ]
  console.log(averageAge(students));         // Output: 20
  