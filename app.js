// var dObj = new Date();
// var d = new Date();
// var dStr = d.toString();
// var d = new Date();
// var day = d.getDay(); // Returns a number (0 for Sunday, 1 for Monday, etc.)
// var d = new Date();
// var day = d.getDay();
// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// alert(dayNames[day]);
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var date = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();
// var later = new Date(2020, 11, 31);
// var specificDate = new Date(1992, 1, 2);
// var referenceDate = new Date(1980, 0, 1); // January 1, 1980
// var millisecondsElapsed = new Date().getTime() - referenceDate.getTime();
// alert(millisecondsElapsed);
// var d = new Date();
// d.setFullYear(2025); // Changes the year to 2025
// function changeToJanuary(date) {
//     date.setMonth(0); // January is represented by index 0
//     return date;
// }

// // Usage
// var currentDate = new Date();
// var modifiedDate = changeToJanuary(currentDate);

// function displayAlert() {
// }
// function askName() {
//     var userName = prompt("Enter name");
// }
// function callTwoFunctions() {
//     function1();
//     function2();
// }
// function promptAndAlertName() {
//     var userName = prompt("Enter name");
//     alert("Your name is: " + userName);
// }
// promptAndAlertName(); // Calling the function
// function concat(param1, param2, param3) {
// }
// function concatenateParameters(param1, param2) {
//     var result = param1 + param2;
// }
// function multiplyParameters(param1, param2, param3) {
//     var result = param1 * param2 * param3;
// }
// function calculateAverage(numbers) {
//     var sum = numbers.reduce((acc, num) => acc + num, 0);
//     var average = sum / numbers.length;
//     return average;
// }
// function sumTwoParameters(param1, param2) {
//     return param1 + param2;
// }
// var result = addTwoNumbers(5, 7);
// console.log(result);

// function letterCounts(word) {
//     var counts = {};
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         counts[letter] = (counts[letter] || 0) + 1;
//     }
//     return counts;
// }
// function setYearInDateObject(date, year) {
//     date.setFullYear(year);
// }
// function calculateAge(dateOfBirth) {
//     var currentDate = new Date();
//     var birthYear = dateOfBirth.getFullYear();
//     var currentYear = currentDate.getFullYear();
//     var age = currentYear - birthYear;

//     // Adjust age if birthday hasn't occurred yet this year
//     if (currentDate < new Date(currentYear, dateOfBirth.getMonth(), dateOfBirth.getDate())) {
//         age--;
//     }

//     return age;
// }
// function checkWordPresence(word, array) {
//     return array.includes(word);
// }
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }
// function reverseArray(arr) {
//     return arr.reverse();
// }




// function demoLocalVariable() {
//     // Local variable
//     var localVar = "I am a local variable.";

//     // Accessing the local variable within the function
//     console.log(localVar);

//     // Trying to access the local variable outside the function will result in an error
// }

// // Calling the function
// demoLocalVariable();
// // Global variable
// var globalVar = "I am a global variable.";

// function accessGlobalVariable() {
//     // Accessing the global variable inside the function
//     console.log(globalVar);
// }

// // Calling the function
// accessGlobalVariable();

// var dayOfWeek = "Monday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's Monday! Time to start the week.");
//         break;
//     case "Tuesday":
//         console.log("Tuesday is here. Keep going!");
//         break;
//     case "Wednesday":
//         console.log("Halfway through the week!");
//         break;
//     case "Thursday":
//         console.log("Thursday – almost there!");
//         break;
//     case "Friday":
//         console.log("TGIF! It's Friday!");
//         break;
//     default:
//         console.log("It's the weekend or an unrecognized day.");
// }
// var dayOfWeek = new Date().getDay();
// var dayMessage;

// switch (dayOfWeek) {
//     case 0:
//         dayMessage = "It's Sunday!";
//         break;
//     case 1:
//         dayMessage = "It's Monday!";
//         break;
//     case 2:
//         dayMessage = "It's Tuesday!";
//         break;
//     case 3:
//         dayMessage = "It's Wednesday!";
//         break;
//     case 4:
//         dayMessage = "It's Thursday!";
//         break;
//     case 5:
//         dayMessage = "It's Friday!";
//         break;
//     case 6:
//         dayMessage = "It's Saturday!";
//         break;
//     default:
//         dayMessage = "Invalid day!";
// }

// console.log(dayMessage);

// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//     case "Paris":
//         alert("You entered Paris! The City of Love.");
//         break;
//     case "New York":
//         alert("You entered New York! The Big Apple.");
//         break;
//     case "Tokyo":
//         alert("You entered Tokyo! The bustling metropolis.");
//         break;
//     default:
//         alert("City not recognized. Please enter a valid city name.");
// }
// var cityName = prompt("Enter a city name:");
// var message;

// switch (cityName.toLowerCase()) {
//     case "london":
//         message = "You entered London. Welcome!";
//         break;
//     case "paris":
//         message = "You entered Paris. Bonjour!";
//         break;
//     case "tokyo":
//         message = "You entered Tokyo. こんにちは!";
//         break;
//     default:
//         message = "City not recognized. Please try again.";
// }

// alert(message);
