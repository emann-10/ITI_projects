const employees = [
    {
        id: 1,
        name: "Ahmed",
        age: 22,
        salary: 6000,
        department: "IT",
        active: true
    },
    {
        id: 2,
        name: "Sara",
        age: 27,
        salary: 8500,
        department: "HR",
        active: true
    },
    {
        id: 3,
        name: "Ali",
        age: 20,
        salary: 4500,
        department: "IT",
        active: false
    },
    {
        id: 4,
        name: "Mona",
        age: 30,
        salary: 10000,
        department: "Finance",
        active: true
    },
    {
        id: 5,
        name: "Omar",
        age: 24,
        salary: 7000,
        department: "Marketing",
        active: false
    },
    {
        id: 6,
        name: "Youssef",
        age: 29,
        salary: 12000,
        department: "IT",
        active: true
    }
];

// اطبع أسماء كل الموظفين باستخدام
// - for
// for(let i=0; i<employees.length ; i++){
//     console.log(employees[i].name);
// }
// - for...of
// for(let employee of employees){
//     console.log(employee.name)
// }
// - forEach
// employees.forEach(function(employee) {
//     console.log(employee.name);
// });

//اطبع الـ Index باستخدام for...in
// for(let index in employees){
//     console.log(index);
// }

//اطبع الموظفين النشطين (active = true) فقط باستخدام Loop عادية.
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].active == true) {
//         console.log(employees[i].name);
//     }
// }

// حوّل الدالة دي لـ Arrow Function
// function welcome(name){
//    return "Welcome " + name;
// }

// let welcome = (name) =>{
//     return "Welcome " + name;
// }
// console.log(welcome(`Ahmed`));

// استخدم Destructuring
// const employee = employees[0];
// let {name,salary} = employees;
// console.log(salary);

// let employee = employees[0];
// let { name, salary } = employee;
// console.log(name);
// console.log(salary);

// اعمل نسخة جديدة من الـ employee باستخدام Spread Operator وزود فيها
// let newEmployee = {
//     ...employees,
//     country: "Egypt"
// };
// console.log(newEmployee);

// استخدم Template Literal واطبع
// for(let i=0; i<employees.length ; i++){
//     console.log(`${employees.name} works in ${employees.department} and earns ${employees.salary}`);
// }

// اعمل Array فيها أسماء الموظفين بس.
// let employeeName = employees.map(employee => {
//     return `${employee.name}`;
// });
// console.log(employeeName);

// اعمل Array فيها الرواتب فقط.
// let employeeSalary = employees.map(employee => {
//     return `${employee.salary}`;
// });
// console.log(employeeSalary);

//اعمل Array جديدة تزود مرتب كل موظف 1000 جنيه.
// let newSalaries = employees.map(employee => {
//     return employee.salary + 1000;
// });
// console.log(newSalaries);

//الموظفين اللي مرتباتهم أكبر من 7000
// let highSalary = employees.filter(employee => employee.salary > 7000);
// console.log(highSalary);

//الموظفين اللي في قسم IT.
// let itDepart = employees.filter(employee => employee.department == `IT`);
// console.log(itDepart);

//الموظفين النشطين
// let isActive = employees.filter(employee => employee.active == true);
// console.log(isActive);

// الموظفين سنهم أقل من 25
// let highAge = employees.filter(employee => employee.age>25);
// console.log(highAge);

//الموظفين اللي في قسم IT ومرتبهم أكبر من 5000.
// let inIt = employees.filter(employee => employee.department == `IT` && employee.salary>5000);
// console.log(inIt);

//أول موظف مرتبه أكبر من 9000.
// let firstHighSalary = employees.find(employee => employee.salary > 9000);
// console.log(firstHighSalary);

//أول موظف في قسم HR.
// let firstEmployeeHr = employees.find(employee => employee.department == `HR`);
// console.log(firstEmployeeHr);

//أول موظف غير نشط.
// let firstEmplyeeActive = employees.find(employee => employee.active == true);
// console.log(firstEmplyeeActive);

// جرّب تجيب موظف الـ id بتاعه 100
//Return undefined
// const employee100 = employees.find(employee => employee.id === 100);
// console.log(employee100);