
// recursive function



// function getNumbers(num){

//     console.log(num);
//     let number = num-1;

//     if(number>0){
//         getNumbers(number)
//     }


// }


// getNumbers(5);



// function sumOfNums(n){
//     let sum = 0;
//     for (let i = 0; i <=n; i++) {

//         sum+=i;
//     }
//     console.log(sum)
// }

// sumOfNums(5)

// function SumOfNums(num) {
//     if (num==1) {
//         return num;
//     }else{
//         return num+SumOfNums(num-1)
//     }

// }

// console.log(SumOfNums(5));


// let numbers = [11,4,5,9]


// numbers .forEach((element,index) => {

//     console.log(element + "-index" + index);
// });


// numbers .forEach((element,index) => {

//     numbers.index = element*2
// });

// console.log(numbers);

// let numbers = [11,4,5,9]

// for (const item of numbers) {
//     console.log(item);
// }



// let user1 = {
//     id: 1,
//     name: "Mirze",
//     surname: "Beshirzade"
// }

// let user2 = {
//     id: 2,
//     name: "Mirze",
//     surname: "Hummatov"
// }

// let user3 = {
//     id: 3,
//     name: "Cinare",
//     surname: "Ibadova"
// }



// for (const key in user1) {
//     // console.log(key +"-"+ user1[key]);
//     if (key == "name") {
//         console.log(user1[key]);

//     }
// }

// let users = [user1, user2, user3]

// for (const user of users) {
//     for (const key in user) {
//         // console.log(`key : ${key},Value: ${user[key]}`)

//         if (key == "name") {

//             if (user[key] == "Mirze")
//                 count++;
//         }
//     }
// }

// console.log(count);


// for (const user of users) {
//     if (user.name == "Mirze" && user.surname == "Beshirzade") {

//         count++;

//     }

// }

// console.log(count);



// let nums1 =[1,4,6,8,9,10]

// console.log(nums1)
// let nums2 =nums1;

// nums2[0]=100;

// console.log(nums1);

// let newArr = nums1.map(m=>{
//     return m* 2;
// })

// console.log(newArr);





// let nums=[1,2,4,5,7]

// function numsOfOdd(num){
//     return num % 2!=0
// }

// function numsEvven(num){
//     return num % 2 ==0
// }

// function calculateNums(arr,callback){
//     let sum= 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i])) {
//             sum+=arr[i]
//         }
//     }

//     console.log(sum);
// }


// function calculateNums1(arr,callback){
//     let sum= 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i])) {
//             sum+=arr[i]
//         }
//     }

//     console.log(sum);
// }



// function sumOfGraterThanFive(arr){
//     let sum= 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > 5) {
//             sum+=arr[i]
//         }
//     }

//     console.log(sum);
// }

// sumOfOdd(nums);
// sumOfEven(nums);
// sumOfGraterThanFive(nums)

// calculateNums1(nums,m=>m%2 !=0)
// calculateNums1(nums,m=>m%2 ==0)
// calculateNums(nums,numsEvven)




// let user1 = {
//     id: 1,
//     name: "Mirze",
//     surname: "Beshirzade",
//     age: 26
// }

// let user2 = {
//     id: 2,
//     name: "Aqsin",
//     surname: "Hummatov",
//     age: 27
// }

// let user3 = {
//     id: 3,
//     name: "Cinare",
//     surname: "Ibadova",
//     age: 20
// }

// let user4 = {
//     id: 3,
//     name: "Jale",
//     surname: "Abdullayeva",
//     age: 18
// }

// let users = [user1, user2, user3, user4];

// function shoUsersByAge(people, callback) {

//     for (const item of people) {

//         if(callback(item.age)){
//             console.log(item.name + " " + item.surname)
//         }
        
//     }

// }

// shoUsersByAge(users,m=>m>20)



// let filterDatas = users.filter(m=>m.age>20)

// for (const item of filterDatas) {
//     let sumIfAge =0;
//     console.log(item.name);
// }


// const getSumOfAgesFromFilteredDatas = datas =>{


//     let sumOfAge = 0;

//     for (const item of datas) {
//         sumOfAge += item.age
//     }
//     console.log(sumOfAge);
// }

// getSumOfAgesFromFilteredDatas(filterDatas)

// let nums = [1,2,3,4,5];

// let sum = nums.reduce((total,current)=> total+current);
// console.log(sum);