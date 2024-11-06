// Zadanie 1

const tablica = [1, 3, 5, 7, 9];
const tablicaX2 = tablica.map(wartosc => 2*wartosc);

console.log(tablica);
console.log(tablicaX2);

//Zadanie 2

const students = [
    {name: "Gosia", surname: "X" },
    {name: "Andrzej", surname: "Y"}
];

const studentsName = 
students.map(student => student.name);

console.log(students);
console.log(studentsName);