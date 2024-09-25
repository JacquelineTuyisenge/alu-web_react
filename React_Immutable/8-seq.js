const { Map, Seq } = require('immutable');

export function printBestStudents(grades) {
    Seq(grades)
        .filter(student => student.score >= 70) 
        .forEach(student => {
            const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
            const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
            console.log(`${firstName} ${lastName}`);
        });
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
};

printBestStudents(grades);
