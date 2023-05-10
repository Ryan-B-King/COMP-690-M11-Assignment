//STEP 1


// let month = prompt('Give a MONTH to know how many days it has.').toLowerCase();
// let year = parseInt(prompt('Give a YEAR cooreleating to the MONTH previouly given.'));

// switch(month) {

//     case 'january':  
//         month = 1;
//         break;
//     case 'february':  
//         month = 2;
//         break;
//     case 'march':  
//         month = 3;
//         break;
//     case 'april':  
//         month = 4;
//         break;
//     case 'may':  
//         month = 5;
//         break;
//     case 'june':  
//         month = 6;
//         break;
//     case 'july':  
//         month = 7;
//         break;
//     case 'august':  
//         month = 8;
//         break;
//     case 'september':  
//         month = 9;
//         break;
//     case 'october': 
//         month = 10;
//         break;
//     case 'november':  
//         month = 11;
//         break;
//     case 'december':  
//         month = 12;
//         break;
//     default:
//         console.log('month entered is invalid');

// }

// let d = new Date(year, month, 0);
// console.log(`There are a total of ${d.getDate()} days in this month.`);


//STEP 2


// let fullDate = prompt('Provide a date in the following format: MM/DD/YYYY');
// let splitDate = fullDate.split('/');
// let d = new Date(splitDate[2], splitDate[0], splitDate[1]);
// let month = d.getMonth() - 1;

// switch(month) {

//     case 0:  
//         console.log('This date falls in the month of January.');
//         break;
//     case 1:  
//         console.log('This date falls in the month of February.');
//         break;
//     case 2:  
//         console.log('This date falls in the month of March.');
//         break;
//     case 3:  
//         console.log('This date falls in the month of April.');
//         break;
//     case 4:  
//         console.log('This date falls in the month of May.');
//         break;
//     case 5:  
//         console.log('This date falls in the month of June.');
//         break;
//     case 6:  
//         console.log('This date falls in the month of July.');
//         break;
//     case 7:  
//         console.log('This date falls in the month of August.');
//         break;
//     case 8:  
//         console.log('This date falls in the month of September.');
//         break;
//     case 9: 
//         console.log('This date falls in the month of October.');
//         break;
//     case 10:  
//         console.log('This date falls in the month of November.');
//         break;
//     case -1:  
//         console.log('This date falls in the month of December.');
//         break;
//     default:
//         console.log('date entered is invalid');

// }


//STEP 3


// let userDate = prompt('Provide a date in the following format: MM/DD/YYYY');
// let splitDate = userDate.split('/');
// let d = new Date(splitDate[2], splitDate[0], splitDate[1]);
// let month = d.getMonth() - 1;
// let _d = new Date(splitDate[2], month, splitDate[1])
// let dayOfWeek = _d.getDay();

// if (dayOfWeek === 6 || dayOfWeek === 0){
//     console.log('This date falls on a weekend.');
// } else {
//     console.log('This date falls on a weekday.');
// };


//STEP 4


// let userDate = prompt('Provide a date in the following format: MM/DD/YYYY');
// let splitDate = userDate.split('/');
// let d = new Date(splitDate[2], splitDate[0], splitDate[1]);
// let month = d.getMonth() - 1;
// let _d = new Date(splitDate[2], month, splitDate[1]);
// let dayOfWeek = _d.getDay();

// switch (dayOfWeek) {
//     case 0:
//         console.log("The day before was Saturday.");
//         break;
//     case 1:
//         console.log("The day before was Sunday.");
//         break;
//     case 2:
//         console.log("The day before was Monday.");
//         break;
//     case 3:
//         console.log("The day before was Tuesday.");
//         break;
//     case 4:
//         console.log("The day before was Wednesday.");
//         break;
//     case 5:
//         console.log("YesThe day before was Thursday.");
//         break;
//     case 6:
//         console.log("The day before was Friday.");
//         break;
// };


//STEP 5


// let userDate = prompt('Provide a date in the following format: MM/DD/YYYY');
// let splitDate = userDate.split('/');
// let d = new Date(splitDate[2], splitDate[0], splitDate[1]);
// let month = d.getMonth() - 1;
// let _d = new Date(splitDate[2], month, splitDate[1]).toDateString();
// let firstLetterOfDay = _d.slice(0,1);

// console.log(_d)
// console.log(firstLetterOfDay);