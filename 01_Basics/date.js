// Dates

let myDate = new Date()
console.log(Date.now())
// console.log(myDate.toString());// Sat May 25 2024 19:52:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); // 2024-05-25T19:52:14.128Z
// console.log(myDate.toJSON());// 2024-05-25T19:52:14.128Z
// console.log(myDate.toLocaleDateString()); //5/25/2024
// console.log(myDate.toLocaleString()); // 5/25/2024, 7:53:45 PM
// console.log(myDate.toTimeString()); // 19:54:44 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()) // Sat, 25 May 2024 19:55:20 GMT
// console.log(myDate.getTimezoneOffset()) // 0


// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})