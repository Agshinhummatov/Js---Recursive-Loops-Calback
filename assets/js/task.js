
"use strict"


// function factorial(num) {


//     if (num == 1) {
//         return 1;
//     }

//     else {
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(5));



// 3) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.


let user1 = {
    id: 1,
    name: "Cavid",
    surname: "Beshirzade",
    age: 20,
    email: "cavid@gmail.com"
}

let user2 = {
    id: 2,
    name: "Aqsin",
    surname: "Hummatov",
    age: 18,
    email: "aqsin@gmail.com"
}

let user3 = {
    id: 3,
    name: "Elcan",
    surname: "Qurbanov",
    age: 23,
    email: "elcan@gmail.com"
}

let user4 = {
    id: 4,
    name: "Perviz",
    surname: "Rehimli",
    age: 26,
    email: "perviz@gmail.com"

}


let users = [user1, user2, user3, user4];


// let filterDatas = users.filter(m=>m.age>18 && m.age<25).length

// console.log(filterDatas);




// function shoUsersByAge(users) {

//     let count = 0;
//     for (const item of users) {
//         if (item.age > 18 && item.age < 25) {

//             count++;
//         }

//     }
//     return count;
// }

// console.log(shoUsersByAge(users));



// function getStudentsBySearch(users) {

//     let count = 0;
//     for (const user of users) {


//         if (user.email.includes(email=="c")) {
//             count++;

//         }


//     }

//     return count;

// }

// console.log(getStudentsBySearch(users));






