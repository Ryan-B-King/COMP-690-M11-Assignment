//STEP 1


// sortLetters('test');
// sortLetters('console');

// function sortLetters(wordToSort) {
    
//     let word  = wordToSort.split('');
//     let sorted = word.sort().toString();
//     let sortedWord = sorted.replaceAll(',','');
//     console.log(sortedWord);

// }


//STEP 2


// capitalizeFirstLetter('the quick brown fox');
// capitalizeFirstLetter('jumps over the lazy dog');

// function capitalizeFirstLetter (phrase) {

//     let phraseStart = phrase;
//     let newPhrase = phraseStart.replace(/\b\w/g, first => first.toUpperCase());
//     console.log(newPhrase);

// };


//STEP 3


// vowelCount('The quick brown fox');
// vowelCount('Mississippi');

// function vowelCount(phrase) {

//     let vowelSearch = phrase.match(/[aeiou]/gi).length;
//     console.log(vowelSearch);

// }


//STEP 4


// let lengthRequest = parseInt(prompt('Enter character amount for ID Generation.'));

// generateId(lengthRequest);

// function generateId(length) {

//     let result = '';
//     let allowedChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let charLength = allowedChar.length;
//     let counter = 0;
//     while (counter < length) {
//       result += allowedChar.charAt(Math.floor(Math.random() * charLength));
//       counter += 1;
//     }
//     console.log(result);
//     return result;
// }


//STEP 5

// function longestName (countryList) {

//     return countryList.reduce (

//         function (name, country) {

//             return name.length > country.length ? name: country;

//         }, "");
   
// }

// console.log(longestName(["Australia", "Germany", "United States of America"]));
// console.log(longestName(["India", "Greece", "Nigeria", "Philippines"]));