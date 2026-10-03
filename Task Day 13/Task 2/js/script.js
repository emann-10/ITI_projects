let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];
// console.log(students);
// Num Of Students
// console.log(students.length);

// Name Of first Student
// console.log(students[0].name);

// Name Of Last Student
// console.log(students[students.length-1].name);

// Names of Students
// for(let i=0 ;i<students.length; i++){
//     console.log(students[i].name)
// }


// Object.entries(students).forEach(([Key,value]) =>console.log(`${Key},${value}`));

// Age>18
// for(let i=0 ;i<students.length; i++){
//     if(students[i].age >18){
//         console.log(students[i].name);
//     }
// }

// Grade>90
// for(let i=0 ;i<students.length; i++){
//     if(students[i].grade >90){
//         console.log(students[i].name);
//     }
// }

// is Graduated
// for(let i=0 ;i<students.length; i++){
//     if(students[i].isGraduated==true){
//         console.log(students[i].name);
//     }
// }

// is underGraduated
// for(let i=0 ;i<students.length; i++){
//     if(students[i].isGraduated==false){
//         console.log(students[i].name);
//     }
// }

// Sum of grades
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//     sum = sum + students[i].grade;
// }
// console.log(`sum of Grades: ${sum}`);

// Avg of grades
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < students.length; i++) {
//     sum = sum + students[i].grade;
//     avg = sum/ students.length
// }
// console.log(`avg of Grades: ${avg}`);

// Upper Case
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name.toUpperCase());
// }

// Lower Case
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name.toLowerCase());
// }

// includes
// for (let i = 0; i < students.length; i++) {
//     if (students[i].name.includes("Ali")) {
//         console.log(students[i].name);
//     }
// }

