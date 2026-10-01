// let sum = (a,b)=>{
//     return a+b;
// } sum(5,10);

// let sum = (a, b) => {
//     return a + b;
// };
// console.log(`sum is ${sum(5, 10)}`);

// const user = {
//     name:"Mostafa",
//     age:25
// };
// const {name, age} = user;
// console.log(name);
// console.log(age);
// console.log("Hello " + ${name});
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const newarr =[...arr1 ,...arr2];
// console.log(newarr);

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
// const deg = students.find((studnt) =>{
//     return studnt.degree>90;
// });
// console.log(deg);




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
// const numbers = [5,10,15,20];
// console.log( numbers.reduce( (sum, current) => {return sum + current}, 0 ) );


// const fruits = ["Apple","Banana","Orange"];
// for (const fruit of fruits){
//     console.log(fruits)
// }


const fruits = ["Apple","Banana","Orange"];
fruits.forEach((fruit, index)=>{
    console.log(`${index} -> ${fruit}`);
});

// let nums = [10, 20, 30, 40, 50, 60, 70];
// nums.forEach( num => console.log(num) );


