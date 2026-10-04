// selct all i need from html
let input = document.querySelector(`.input`)
let button = document.querySelector(`.btn`)
let tasks = document.querySelector(`.tasks`)
let tasksNumber = document.querySelector(`.tasks-count span `)
// console.log(tasksNumber)

// Add event when click 
button.addEventListener("click", function () {
    let taskText = input.value;
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    // Create element in html
    let task = document.createElement("div");
    task.classList.add("task");
    let text = document.createElement("span");
    text.textContent = taskText;

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    task.appendChild(text);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);
    tasks.appendChild(task);
    //clear data of inputs
    input.value = "";
    // Delete btn
    deleteBtn.addEventListener("click", function () {
        task.remove();
        //update Num of Tasks
        tasksNumber.textContent =
            document.querySelectorAll(".task").length;
    });
    // Edit btn
    editBtn.addEventListener("click", function () {
        let newText = prompt("Edit your task:", text.textContent);
        if (newText !== null && newText !== "") {
            text.textContent = newText;
        }
    });
});