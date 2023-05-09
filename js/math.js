//STEP 1

// let userNumber = prompt('Choose a number.');
// console.log(Math.abs(userNumber));

//STEP 2

// let userFloat = prompt('Choose a floating point value (decimal).');
// console.log(Math.ceil(userFloat));

//STEP 3

// let userFloat = prompt('Choose a floating point value (decimal).');
// console.log(Math.floor(userFloat));

//STEP 4

let userNumbers = prompt('Choose five numbers and separate them with a comma. No spaces.');

let numberMatch = userNumbers.match(/\d/g);


console.log(typeof(numberMatch), numberMatch );
console.log(Math.max(numberMatch));
console.log(Math.min(numberMatch));



//STEP 5






// Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.



// Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.