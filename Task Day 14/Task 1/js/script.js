//-----------------------------for of--------------------//
// const fruits = ["Apple","Banana","Orange"];
// for (const fruit of fruits){
//     console.log(fruits)
// }

//-----------------------------for in--------------------//
// const fruits = ["Apple","Banana","Orange"];
// for (const index in fruits){
//     console.log(index)
// }

//-----------------------------for in--------------------//
// const fruits = ["Apple","Banana","Orange"];
// fruits.forEach((fruit, index)=>{
//     console.log(`${index} -> ${fruit}`);
// });

//-----------------------------Arrow Func--------------------//
// let sum = (a,b)=>{
//     return a+b;
// } sum(5,10);

// let sum = (a, b) => {
//     return a + b;
// };
// console.log(`sum is ${sum(5, 10)}`);

//-----------------------------Destructuring--------------------//
// const user = {
//     name:"Mostafa",
//     age:25
// };
// const {name, age} = user;
// console.log(name);
// console.log(age);

//-----------------------------Template Literal--------------------//
// console.log("Hello " + ${name});

//-----------------------------Spread Operator--------------//
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const newarr =[...arr1 ,...arr2];
// console.log(newarr);

//-----------------------------Part 6 --------------//
//-----------------------------Names --------------//
// const students = [
//     {name:"Ali", degree:70},
//     {name:"Sara", degree:95},
//     {name:"Ahmed", degree:40},
//     {name:"Mona", degree:85},
//     {name:"Omar", degree:55}
// ];
// const names = students.map((student)=>{
//     return student.name;
// });
// console.log(names);

//-----------------------------Grades --------------//
// const deg = students.find((studnt) =>{
//     return studnt.degree>90;
// });
// console.log(deg);
//-----------------------------Names  of st--------------//

// const students = [
//     {name:"Ali", degree:70},
//     {name:"Sara", degree:95},
//     {name:"Ahmed", degree:40},
//     {name:"Mona", degree:85},
//     {name:"Omar", degree:55}
// ];
// students.forEach((student)=>{
//     console.log(student.name);
// }); 

//----------------------------- Bonus --------------//
// const numbers = [5,10,15,20];
// console.log( numbers.reduce( (sum, current) => {return sum + current}, 0 ) );



