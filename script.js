//1
// function myFunction() {
//     let user='admin'
//     if (user==='admin') {
//         return `Welcome ${user}`
//     }
//     else {
//         return 'not correct user'
//     }
// }
// console.log(myFunction());

//2
// function myFunction(day) {
//     if (day>=1 && day<=29) {
//         return ` today is ${day} of february`
//     }
//     else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
// }
// console.log(myFunction(32));

//3
// function myFunction(arg) {
//     if (arg===50) {
//         return `${arg} is equals of 50`
//     }
//     else {
//         return `${arg} is not correct`
//     }
// }
// console.log(myFunction(50));

//4
// function myFunction(user, age) {
//     if (age>=18) {
//         return `${user} ${age} old, welcome`
//     }
//     else {
//         return `${user} ${age} old, rejected`
//     }
// }
// console.log(myFunction('Aida',19));
// console.log(myFunction('Dima',17));

//5
// function myFunction(user) {
//     if (user.length<3) {
//         return `${user} name is too short`
//     }
//     else {
//         return `${user} name is accepted`
//     }
// }
// console.log(myFunction('Lu'));
// console.log(myFunction('Elba'));

//6
// function myFunction(user) {
//     if (user.length>5) {
//         return `${user}  name is too long`
//     }
//     else {
//         return `${user} name is accepted`
//     }
// }
// console.log(myFunction('Diana'));
// console.log(myFunction('Elba'));

//7
// function myFunction(age) {
//     if (typeof age!="number") {
//         return `${age} must be a number`
//     }
//     else {
//         return `${age} age`
//     }
// }
// console.log(myFunction(5));
// console.log(myFunction('15'));

//8
// function myFunction(age) {
//     if (typeof age!="string") {
//         return `${age} must be a string`
//     }
//     else {
//         return `${age} must be older than 23`
//     }
// }
// console.log(myFunction('20'));


//9
// function myFunction(day) {
//     if (day===1) {
//         return 'Monday'
//     }
//     else if (day===2){
//         return 'Tuesday'
//     }
//     else if (day===3){
//         return 'Wednesday'
//     }
//     else if (day===4){
//         return 'Thursday'
//     }
//     else if (day===5){
//         return 'Friday'
//     }
//     else if (day===6 || day===7) {
//         return 'Weekend'
//     }
//     else {
//         return 'max days of weeks 7'
//     }
// }
// console.log(myFunction(5));

//10
// function myFunction(str) {
//     return str.trim();
// }
// console.log(myFunction('       Hello World '));

// function myFunction(str) {
//     return str.replace(/(\S+)\s+(\S+)/, "$2 $1")
// }
// console.log(myFunction('Hello World'));

//11
// function myFunction(str) {
//     let lastIndex = str.lastIndexOf("o");
//     if (lastIndex !== -1) {
//         let res = str.slice(0, lastIndex) + "a" + str.slice(lastIndex + 1);
//         return res;
//     } else {
//         return 'Строка не содержит символ о'
//     }
// }
// console.log(myFunction('Hello World'));

//12
// function myFunction(arg) {
//     if (arg.length%2===0) {
//         return `длина строки четная`
//     }
//     else {
//         return `длина строки нечетная`
//     }
// }
// console.log(myFunction('Codify Academy'));
// console.log(myFunction('Codify Academyy'));

//13
// function myFunction(str) {
//    return str.replace(/\s/g, "")
// }
// console.log(myFunction('lorem ipsum dolor sit amet'));

//14
// function myFunction(price, discount) {
//     let res=price-price/100*discount
//     return res
// }
// console.log(myFunction(100, 10));

//15
// function myFunction(str) {
//     if (typeof str==="string") {
//         return `${str} - это строка`
//     }
//     else {
//         return `${str} - это не строка`
//     }
// }
// console.log(myFunction('Codify Academy'));
// console.log(myFunction(10));

//16
// function myFunction(str) {
//     if (str.trim().length===0) {
//         return `пустая строка`
//     }
//     else {
//         return `строка не пуста`
//     }
// }
// console.log(myFunction('Codify Academy'));
// console.log(myFunction('   '));
















