// Arithmetic Operators

// var a = 3
// var b = 5
// var c = 2
// var x = (a + b) / c
// console.log(x);

// var f = 2
// var d = 5
// var g = 10
// var q = (g / f) - d
// console.log(q);

// var h = 4
// var u = 2
// var p = 8
// var m = (p - - h) / u
// console.log(m);

// var l = 4
// var r = 5
// var t = (l + r) * (r - - l)
// console.log(t);

// var k = 2
// var j = 6
// var v = (j / k) * k - - (j - k)
// console.log(v);

// var e = 10
// var i = 7
// var n = (e - i) * (i - 5)
// console.log(n);


// Q1
// const a1= 'tabeeel anwar'
// const a2 = 23
// console.log(typeof a1+a2);

// Q2

// const a1 = {
//     name:"tabeel",
//     section: 2,
//     principle: false 
// }
// a1['age'] = '23'
// a1['friend'] = 'qas'
// console.log(a1);

// const a2 = {
//     gulp: "swallow (drink or food) quickly or in large mouthfuls, often audibly.",
//     nibble: "take small bites out of.",
//     wondering: "characterized by or expressive of a desire to know something; curious.",
//     frightened: "deter someone or something from involvement or action by making them afraid.",
//     eager: "strongly wanting to do or have something."
// }
// console.log(a2);

// const hostname = {
//     mango: "Mangos were first grown in India over 5,000 years ago.",
//     apple: "An apple is a sweet, edible fruit that grows on apple trees. It's a common and popular fruit",
//     strawberry: "A strawberry is a widely cultivated hybrid fruit, enjoyed for its sweet, aromatic, and juicy taste",
//     banana: "A banana is an elongated, edible fruit"
// }
// alert(location.hostname);

// assignment operators

// Comparison Operators

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

// let a1 = 6
// let b1 = 6

// console.log('a1 == b1 ', a1 ==b1);
// console.log('a1 != b1', a1 !=b1);
// console.log('a1 === b1', a1 ===b1);
// console.log('a1 !== b1', a1 !==b1);
// console.log('a1 < b1', a1 < b1);
// console.log('a1 < b1 ', a1 < b1);


// let h1 = 7
// let t1 = 8
// console.log(!h1<1);


// let x = 6
// let y = 8

// console.log(x == 6 && y !== 8);

// let t = 6
// let u = 8

// console.log(x == 6 || y !== 8);

// let h = 6
// let f = 8

// console.log(!x < 2);


// Conditional Statements

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// let x = 17;

// if(x>18 || x==18){
//     console.log('you can drive');
// }else if(x<18){
//     console.log('you can not drive ');   
// }else{
//     console.log('kch nhi hain');
    
// }

// let h = 18;

// if(h>18 || h == 18){
//     console.log('you have access to this website');
    
// }else if(h<18){
//     console.log('you cannot access to this website');
    
// }else{
//     console.log('Welcome');
    
// }

// let t = 10; 

// if(t>10 || t == 10){
//     console.log('Aha tamatar barey mazedar');
    
// }else if(t<10){
//     console.log('lakri ki kathi, kathi pe ghora');
    
// }else{
//     console.log('chal chaiyan chaiyan chayian');
    
// }


// let x = 20

// if (x==20 || x>20) {
//     console.log('You have access to this website!');
    
// }

// else if (x<10) {
//     console.log("You don't have access to this website!");
    
// } else {
//     console.log("Welcome!");
    
// }


// let day = 'tuesday';

// switch (day) {
//     case 'monday':
//         console.log('today is monday');
//         break;

//         case 'tuesday':
//         console.log('today is tuesday');
//         break;

//     default:
//         console.log( 'kch nhi hain');       
//         break;
// }

// let pet = 'dog'

// switch (pet) {
//     case 'dog':
//         console.log('The dog name is Zorro');
//         break;

//             case 'cat':
//         console.log('The cat name is Bella');
//         break;

//     default:
//         console.log('Error');
        
//         break;
// }

// let car = 'irqeel'

// switch (car) {
//     case 'tabeel':
//         console.log('Buggati');
        
//         break;

//     case 'irqeel':
//         console.log('Mazda MK4');
        
//         break;

//     default:
//         console.log('Error');
        
//         break;
// }


// Basic Array Methods
// Array push()
// Array pop()
// Array length
// Array shift()
// Array at()
// Array join()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array slice()
// Array splice()
// Array toSpliced()


//ARRAY PUSH

// let cars = ["suzuki", "toyota","buggati"]
// let supercars = cars.push("buggati", "supra")
// console.log(cars);

//ARRAY POP

// let games = ["tekken", "pubg", "criket"]
// let outdoorgames = games.pop()
// console.log(games.length);
// console.log(outdoorgames);


//ARRAY SHIFT

// let games = ["tekken", "pubg", "criket"]
// games.shift("tabeel")
// console.log(games);

//ARRAY UNSHIFT

// let games = ["tekken", "pubg", "criket"]
// games.unshift("tabeel")
// console.log(games);

//ARRAY LENGTH
// let games = ["tekken", "pubg", "criket"]
// games.shift("tabeel")
// console.log(games.length);

//ARRAY SPLICE 

// let animals = ['dogs', 'cats', 'leapord']
// animals.splice(2,0, 'Lion')
// console.log(animals);


// ARRAY SLICE
// let animals = ['dogs', 'cats', 'leapord','lion','birds', 'snakes', 'monkey', '234']
// let discut= animals.slice(1,6)
// console.log(discut);

//ARRAY INCLUDES
// let animals = ['dogs', 'cats', 'leapord','lion','birds', 'snakes', 'monkey', '234']
// let discut= animals.includes('leapord')
// console.log(discut);


// let tabeel = prompt('please enter your name');
// localStorage.setItem('your name is', tabeel);






// Find the greater value between two numbers

// let x = prompt('enter your first value');
// let y = prompt('enter your second value');
// if (x > y ) {
//     console.log("x is greater than y")
// }
// else if (x<y) {
//     console.log("y is greater than x")
// }
// else if (x == y || y == x){
//     console.log("both values are same")
// }
// else {
//     console.log("please write something!")
// }




// Find the greater value between three numbers
// let x = prompt("Enter your first value");
// let y = prompt("Enter your second value");
// let z = prompt('Enter your third value');

// if ((x>y)&&(x>z)) {
//     console.log("X is the greater number");
// }
// else if ((y>x) && (y>z)) {
//     console.log("Y is the greater number");
// }
// else if ((z>x) && (z>y)) {
//     console.log("Z is the greater number");
    
// }
// else if ((x==y) && (x==z)) {
//     console.log("All values are same");
// }


// check whether a number is negative, positive or zero

// let x = prompt('Enter your value:');

// if ((x>0)) {
//     console.log("The number is positive!");
    
// }

// else if (x<0) {
//     console.log("The number is negative!");
    
// }
// else if (!x==0) {
//     console.log("The number is neutral!");
    
// }
// else {
//     alert("Error");
// }






// check whether a number is divisible by 5 and 11 or not

// let x = prompt("Enter your value!");

// if (x%5==0) {
//     console.log("The number is divisible by 5!");
// }
// else if (x%11==0) {
//     console.log("The number is divisible by 11!");
    
// }
// else {
//     console.log("The number is not divisible by 5 and 11!");
// }




// Check weather the number is even or odd

// let x = parseInt(prompt("Please enter your number!"));

// if (x%2==0) {
//     console.log("The number is even!");
// }

// else if (x % 1 ==0) {
//     console.log("The number is odd!");
// }

// else{
//     alert('error');
// }







// check weather the year is leap year or not

// let year = parseInt(prompt("Please enter the year!"));

// if ((year % 4 ===0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log( year, "is a leap year");
// }
// else if ((year % 4 !==0 && year % 100 === 0) || (year % 400 !== 0)){
//     console.log(year, "is not a leap year");
// }
// else {
//     alert('error');
// }




// check weather a value is alphabet or not 

// let x = prompt('Enter your value');
//  if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')) {
//     console.log("The value is aphabet");
//  }
//  else{
//     alert('this is not a alpha')
//  }







// Check weather the value the alphabet is vowel or consonant.

// let x = prompt('enter your value');

// if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' ) {
//     console.log("The alphabets are vowels");
    
// }
// else if (x >= 'a' && x <= 'z') {
//     console.log("The alphabets are consonants");
    
// }
// else {
//     console.log('Error!');
// }


//input any character and check whether it is alphabet, digit or special character

// let x = prompt('Please enter your value');

// if ((x>='a' && x<='z') || (x>='A' && x<='Z')) {
//     console.log('The value is in alphabet');
// }
// else if ((x>='1' && x<='999999999999999999999999999999999999999999+')) {
//     console.log('The value is in digits');
// }
// else {
//     console.log('The value is in special characters');
    
// }





// check whether a character is uppercase or lowercase alphabet

// var x = prompt('Please enter your value');

// if ((x>='a' && x<='z')) {
//     console.log('The value is lowercase alphabet');
        
// }
// else if ((x>='A' && x<='Z')) {
//     console.log('The value is uppecase alphabet');
    
// }
// else {
//     console.log('Error!');
    
// }







//input week number and print week day

// let weeknumber = parseInt(prompt('Enter week number between 1-7!'));

// switch (weeknumber) {
//     case 1:
//         console.log('Monday');
        
//         break;
    
//     case 2:
//         console.log('Tuesday');
        
//         break;

//     case 3:
//         console.log('Wednesday');
        
//         break;

//     case 4:
//         console.log('Thursday');
        
//         break;

//     case 5:
//         console.log('Friday');
        
//         break;

//     case 6:
//         console.log('Saturday');
        
//         break;

//     case 7:
//         console.log('Sunday');
        
//         break;

//     default:
//         console.log('Invalid week number! Please enter between 1 and 7!');
//         break;
// }








//input month number and print number of days in that month

// let monthnumber = parseInt(prompt("Enter the month number between 1-12!"));

// switch (monthnumber) {
//     case 1:
//         console.log('31 days');
        
//         break;

//     case 2:
//         console.log('28 days and 29 days in leap year');
        
//         break;
        
//     case 3:
//         console.log('31 days');
        
//         break;
        
//     case 4:
//         console.log('30 days');
        
//         break;
        
//     case 5:
//         console.log('31 days');
        
//         break;
        
//     case 6:
//         console.log('30 days');
        
//         break;
        
//     case 7:
//         console.log('31 days');
        
//         break;
        
//     case 8:
//         console.log('31 days');
        
//         break;
        
//     case 9:
//         console.log('30 days');
        
//         break;
        
//     case 10:
//         console.log('31 days');
        
//         break;
        
//     case 11:
//         console.log('30 days');
        
//         break;
        
//     case 12:
//         console.log('31 days');
        
//         break;


//     default:
//         console.log("Please enter the valid monthnumber between 1-12!");
// }



let monthnumber = parseInt(prompt("Please enter the month number between 1-12!"));

switch (monthnumber) {
    case 1:  case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("This month have 31 days");
        
        break;

    case 4:  case 6: case 9: case 11: 
        console.log("This month have 30 days");
        
        break;

    case 2: 
        console.log("This month has 28 days and 29 in Leap year");
        
        break;
    default:
        console.log("Invalid number... please enter the numbers between 1-12!");
        
}