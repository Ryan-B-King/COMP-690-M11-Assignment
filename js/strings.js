//STEP 1

// let userName = prompt('What is your name?').length;
// alert(userName);

//STEP 2

// let userName = prompt(`What is your name?`);
// let totalChar = userName.length - 1;
// let charChoice = prompt(`Pick a number between 0 and ${totalChar}.`);
// alert(userName.charAt(charChoice));

//STEP 3

// let firstName = prompt('What is your FIRST name?') + ' ';
// let lastName = prompt('What is your LAST name?');
// alert(`Your name is: ${firstName.concat(lastName)}.`);

//STEP 4

// let story = 'The quick brown fox jumps over the lazy dog';
// alert(story.indexOf('fox'));

//STEP 5

// let story = 'The quick brown fox jumps over the lazy fox';
// alert(story.lastIndexOf('fox'));

//STEP 6

// let story = 'The quick brown fox jumped over the lazy dog';
// let fullName = prompt('What is your FULL NAME?');
// alert(story.replace('the lazy dog', fullName));

//STEP 7

// let story = 'The quick brown fox jumps over the lazy dog';
// let word = prompt('Choose a word.');
// let result = story.search(word);

// if (result == -1) {

//     alert('Word is not found.');

// } else { 

//     alert(result);
// };


//STEP 8

// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.slice(31);
// alert(new_string.toUpperCase());

//STEP 9

// let story = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
// alert(story.trim().toLowerCase())      

//STEP 10

// let story = 'the quick brown fox jumps over the lazy dog';
// let capitalThe = story.slice(0,1).toUpperCase();
// let splicedStory = story.slice(1);
// alert(capitalThe.concat(splicedStory));