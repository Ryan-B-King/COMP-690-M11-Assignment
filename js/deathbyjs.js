//STEP 1


sortLetters('test');
sortLetters('console');

function sortLetters(wordToSort) {
    
    let word  = wordToSort.split('');
    let sorted = word.sort().toString();
    let sortedWord = sorted.replaceAll(',','');
    console.log(sortedWord);

}


//STEP 2

capitalizeFirstLetter('the quick brown fox');
capitalizeFirstLetter('jumps over the lazy dog');


function capitalizeFirstLetter (phrase) {

    let phraseStart = phrase;
    let firstLetter = phraseStart.slice(0,1).toUpperCase();
    let restOfPhrase = phraseStart.slice(1);
    let newPhrase = firstLetter.concat(restOfPhrase);
    console.log(newPhrase);

}


//STEP 3

//STEP 4

//STEP 5






// Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.




// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

// Sample Data and Output
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'
 












// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Sample Data and Output
// Example string: 'The quick brown fox'
// Expected Output: 5
 

// Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
 

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"