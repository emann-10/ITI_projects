let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let jobInput = document.querySelector("job");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    var name = nameInput.value;
    var age = ageInput.value;
    var job = jobInput.value;

    if (name == "" || age == "" || job == "") {
        alert("Please fill all fields");
    } else {
        console.log(`Name is: ${name} ,Age is:${age} , Job: ${job}`);
        // console.log(`Age: ${age}`);
        // console.log(`Job: ${job}`);

        if (age < 18) {
            alert("You are under age");
        } else if (age >= 18){
            alert("Registration Completed");
        }else{
            console.log("Wrong input")
        }
    }
});