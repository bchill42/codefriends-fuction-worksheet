let prompt = require('prompt-sync')();

/*
 * PROBLEM `checkData`
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
// function checkData(inputString) {
//     if (inputString.length === 3){
//         return true
//     } else{
//         return false
//     }
//   }
// let userString = prompt('Enter a word: ');
// if (!checkData(userString)){
//     console.log('Invalid Input');
// }

// Similar to above but as anynomous function 
// (() => {
//     let inputString = prompt('Enter a word: ');
//     if (inputString.length === 3){
//         return console.log('true');
//     }else{
//         return console.log('false');
//     }
// })();
  
  /*
   * PROBLEM `concatenateArrays`
   * Write a function that, given two arrays of integers a and b, returns an array
   * that is formed by the elements of a followed by the elements of b.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function concatenateArrays(a, b) {
//     if ((typeof(a) !== 'object') || (typeof(b) !== 'object')) {
//         throw new Error('Invalid Input');
//     }
//     let c = [];
//     c = a;
//     for (let i=0; i<b.length; i++){
//         c.push(b[i]);
//     }
//     return c;
//   }

//   let a=[1,2,3];
//   let b=[4,5,6];
//   console.log(concatenateArrays(a,b));
  
  /*
   * PROBLEM `fixProperNoun`
   * Proper nouns always begin with a capital letter, followed by small letters.
   * Write a function called `fixProperNoun` that takes a potentially improperly
   * capitalized proper noun and returns the same noun with the proper
   * capitalization.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function fixProperNoun(noun) {
//     if (typeof(name) !== 'string'){
//         throw new Error('Invalid Input');
//     }
//     let firstLetter = noun.slice(0,1).toUpperCase();
//     let restLetters = noun.slice(1,noun.length).toLowerCase();
//     return console.log(firstLetter+restLetters);
//   }

//   let name = prompt('Enter a name: ');
//   fixProperNoun(name);


// Examples of different way to write functions
// function hello1(){
//     return ('hello world 1');
// }

// let hello2 = () => {return "Hello World!"};

// let sum = (a,b) => console.log(a+b);
// sum(1,2);

// function hello() {
//     return "hello world";
// } 

// (() => {
//     return console.log('hi');
// })();

// anynomous function running instantly
// (() => {
//     return "Hello World!";
// })();


  /*
   * PROBLEM `sortLetters`
   * Write a function called `sortLetters` that returns a string that sorts all
   * the letters from a given string in the alphabetical order.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function sortLetters(inputString) {
//     let stringArray = [];
//     for (let i=0; i<inputString.length; i++){
//         stringArray.push(inputString.charAt(i));
//         stringArray.sort();
//     }
//     let sortedString = '';
//     for (let i=0; i<stringArray.length; i++){
//         sortedString = sortedString + stringArray[i];
//     }
//     return console.log(sortedString);      
//   }

//   let userInput = prompt('Enter any number of letters: ');
//   sortLetters(userInput);
  
  /*
   * PROBLEM `absVal`
   * Write a function called `absVal` that return the absolute value of a given
   * integer. Don't use Math.abs(...)
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function absVal(integer) {
//     if (integer.charAt(0) === '-'){
//         let abs = integer.slice(1,integer.lenght);
//         return console.log(abs);
//     } else {
//         return console.log(integer);
//     }
//   }

//   let userNumber = prompt('Enter a positive or negative number: ');
//   absVal(userNumber);
  
  /*
   * PROBLEM `myMin`
   * Write a function called `myMin` that takes two integers and returns the
   * smaller of the two numbers.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function myMin(a,b){
//     if (a>b){
//         return console.log(b);
//     }else{
//         return console.log(a);
//     }
//   }
//   console.log('This function returns the smaller of two numbers!');
//   const a = prompt('Enter first number: ');
//   const b = prompt('Enter second number: ');
//   myMin(a,b);
  /*
   * PROBLEM `myMax` - Actual Interview Question
   * Write a function called `myMax` that takes an array of integers ans returns
   * the largest.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   *
   * Insane mode: do this without using a for loop.
   */
//method one with function and for loop
//   function myMax(a){
//     let max = 0;
//     for (i=0; i<numArray.length; i++){
//         if(typeof(a[i]) != 'number'){
//             throw new Error("value in array isn't a numbers");
//         }
//         if(max<a[i]){
//             max=a[i];
//         }
//     }
//     return console.log(max);
//   }
//   let numArray = [1,4,2,2,53,3];
//   myMax(numArray);

//method two without for loop
//   function myMax2(a){
//     a.sort().reverse();
//     return(a[0]);
//   }
//   let numArray2 = [1,4,2,2,53,3];
//   myMax2(numArray2);

//method three without for loops
//   let numArray3 = [1,4,2,423,34,75];
//   console.log(Math.max(...numArray3));
  
  /*
   * PROBLEM `getMonth`
   * Write a function called `getMonth` that maps a given integer to a month.
   *
   * For example:
   * getMonth(1) == 'January'
   * getMonth(3) == 'March'
   * etc.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function getMonth(num){
//     return console.log(monthArray[num-1]);
//   }
//   let monthArray=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
//   let userMonth = parseInt(prompt('Enter a number of a month (1-12): '));
//   getMonth(userMonth);
  
  /*
   * PROBLEM `randomElement`
   * Create a function called `randomElement` that takes an array of values and
   * returns one randomly selected value from that array.
   */
//Example of anynomous function and minimal lines
// let randomArray = ['a',4,5,'test',65,'fish'];
// ((a) => console.log(a[Math.floor(Math.random() * Math.floor(a.length))]))(randomArray);

// //standard function 
// function randomElement(a){
//     return console.log(a[Math.floor(Math.random() * Math.floor(a.length))]);
// }
// let anotherRandomArray = ['asdf',4,1,9,'jyhdfg'];
// randomElement(anotherRandomArray);



  /*
   * PROBLEM `studentPairs`
   * Create a javascript function called `studentPairs` that takes an array of
   * student names and returns an array of randomly selected pairs of students
   * (array of arrays).
   */
//   function studentPairs(a){
//     let pairArray = [];
//     for(i=0; i<(arrayLength/2); i++){
//         let random1 = (a.splice(Math.floor(Math.random() * Math.floor(a.length)),1))[0];
//         let random2 = (a.splice(Math.floor(Math.random() * Math.floor(a.length)),1))[0];
//         pairArray.push([random1,random2]);
//     }
//     return console.log(pairArray);

//   }
//   let studentArray = ['Alice','Bob','Fred','Sally','Jimmy','Luna','Sunny','Ginny','Kian','Brandon'];
//   let arrayLength = studentArray.length;
//   console.log(studentArray);
//   studentPairs(studentArray);

  /*
   * PROBLEM `sumSquares`
   * Write a function called `sumSquares` that returns the sum of squares of all
   * integers from 1 up to and including a given positive, non-zero integer N.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function sumSquares(num){
//       let sum = 0;
//       for (let i=0; i<=num; i++){
//         sum = sum + i*i;
//       }
//       return console.log(`The sum of sqaures between the numbers 1 and ${num} is ${sum}!`);
//   }
//   let userInt = prompt('Enter an integer: ');
//   sumSquares(userInt);
  
  /*
   * PROBLEM `findMaxDiff`
   * Given an array of integers, write a function called `findMaxDiff` that finds
   * the maximal difference between any two adjacent elements.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function findMaxDiff(a){
//       let maxDiff = 0;
//       for (let i=0; i<a.length; i++){
//           if (maxDiff<Math.abs((a[i]-a[i+1]))){
//               maxDiff = Math.abs(a[i]-a[i+1])
//           }
//       }
//       return console.log(`The max diff between adjacent elements in the array [${a}] is ${maxDiff}!`);
//   }
//   let intArray = [1,5,3,5,6,7,18,2,4,8];
//   findMaxDiff(intArray);
  
  /*
   * PROBLEM `insertDashes`
   * Write a function called `insertDashes` that transforms a given sentence into
   * a new one with dashes between each two consecutive letters.
   * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function insertDashes(a){
//     let insertSentence = [];
//     for (let i=0; i<a.length; i++){
//         insertSentence = a.split('');
//     }
//     for (let i=0; i<insertSentence.length-1; i++){
//         if (insertSentence[i] !== '-'){
//             if (insertSentence[i] !== ' ' && insertSentence[i+1] !== ' '){
//                 insertSentence.splice(i+1,0,'-');
//             }
//         }
//     }
//     return console.log(insertSentence.join(''));
//   }
//   let userSentence = prompt('Enter a sentence: ');
//   insertDashes(userSentence);
  
  /*
   * PROBLEM `mySubstring`mySubstring
   * Implement a function called `mySubstring` that can output the substring of
   * the given string within specified bounds.
   *
   * For example: mySubstring('abcde', 2, 3) === 'cd'
   *
   * Don't use String.substring in your solution.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
//   function mySubstring(string, a, b){
//     let stringArray = string.split('');
//     let sub = [];
//     for (let i=a; i<b+1; i++){
//         sub.push(stringArray[i]);     
//     }
//     return console.log(sub.join(''));

//   }
//   let userString = prompt('Enter a string: ');
//   mySubstring(userString, 2, 3);
  
  /*
   * PROBLEM `splitSwap`
   * Write a function called `splitSwap` that swaps two halves of a given array.
   * If the array has an odd number of elements the array should be split in half
   * by rounding down the number of elements divided by two.
   *
   * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
   *
   * If the input is invalid throw an 'Invalid Input' exception.
    */
//   function splitSwap(a){
//     let half = Math.floor(a.length/2);
//     for (let i=0; i<half; i++){
//         a.push(a[i]);   
//     }
//     for (let i=0; i<half; i++){
//         a.shift(i);
//     }
//     console.log(a);
//   }
//   let givenArray = [1,2,3,4,5];
//   splitSwap(givenArray)
  
  /*
   * PROBLEM `smallMultiples`
   * For given n and k write a function called `smallMultiples` that returns the
   * count of the number of multiples of k that are not greater than n.
   *
   * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
   * greater than 4.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
// function smallMultiples(a,b){
//     let count=0;
//     let i=b;
//     let done = false;
//     while (!done){
//         if((b*i)<a){
//             count++;
//             i++;
//         }else{
//             done=true;
//         }
//     }
//     return console.log(count);
// }
// let n=4;
// let k=1;
// smallMultiples(n,k);
  
  /*
   * PROBLEM `rot13`
   * Create a function called `rot13` that takes an unencrypted string and returns
   * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
   *
   * The input should only contain lower-case alphabetic characters. If the input
   * is invalid throw an 'Invalid Input' exception.
   */

//my original version of rotX
// function rotX(i) {
//     const rotNum = 13;
//     // findIndex sends each userString letter to the checkLetter function.  If it exists in the alphaArray then it return
//     // the True/False which findIndex uses to return the index number. If it doesn't exist then -1 is the default
//     // value that is returned. 
//     let index = alphaArray.findIndex(function checkLetter(item) {
//       return item === userStringArray[i]; //this returns true/false
//     }); // item passed in from alphaArray
//     if (index === -1){
//       throw new Error('Invalid Input');
//     }
//     else if (index === 27){
//       encrypted.push(' ');
//     } else{
//       let rotated = index+rotNum;
//       if (rotated>25){
//           rotated=rotated-26;
//       }
//       encrypted.push(alphaArray[rotated]);
//     }
//   }  
//   const alpha='abcdefghijklmnopqrstuvwxyz ';
//   const alphaArray = alpha.split('');
//   const userString = prompt('Enter a string: ');
//   const userStringArray = userString.split('');
//   let encrypted = [];
//   for (let i=0; i<userStringArray.length; i++){
//     rotX(i); //nothing passed in alphaArray and userStringArray are global variables
//   }
//   console.log(`The original string was: ${userString}`);
//   console.log(`The encrypted string is: ${encrypted.join('')}`);

// brandon = oenaqba
// //Gin helped me to use map instead of my for loop
// function rotX(i) {
//     const rotNum = 13;
//     let index = alphaArray.findIndex(function checkLetter(item) {
//       return item === userStringArray[i]; 
//     });
//     let rotated = index+rotNum;
//     if (index === -1){
//       throw new Error('Invalid Input');
//     }
//     else if (index === 26){
//       return ' ';
//     } else{
//       if (rotated > 25){
//           rotated=rotated-26;
//       }
//       return alphaArray[rotated];
//     }
//   } 
//   const alpha='abcdefghijklmnopqrstuvwxyz ';
//   const alphaArray = alpha.split('');
//   const userString = prompt('Enter a string: ');
//   const userStringArray = userString.split('');
//   // map goes through each element and changes it into something else... in this case to rotate the letter.
//   // map returns an array. It changes each element as it does through the initial array.
//   let encrypted = userStringArray.map(function (item,i){
//       return rotX(i);
//   })
//   console.log(`The original string was: ${userString}`);
//   console.log(`The encrypted string is: ${encrypted.join('')}`);
  
  /*
   * BONUS #1 `derot13`
   * Create a function called `derot13` that takes a ROT-13 encrypted string and
   * returns the decrypted version of that string.
   *
   * The input should only contain lower-case alphabetic characters. If the input
   * is invalid throw an 'Invalid Input' exception.
   */
// function derotX(i) {
//     const rotNum = -13;
//     let index = alphaArray.findIndex(function checkLetter(item) {
//       return item === userStringArray[i]; 
//     });
//     if (index === -1){
//       throw new Error('Invalid Input');
//     }
//     else if (index === 26){
//       return ' ';
//     } else{
//       let rotated = index+rotNum;
//       if (rotated<0){
//           rotated=rotated+26;
//       }
//       return alphaArray[rotated];
//     }
//   }
  
//   const alpha='abcdefghijklmnopqrstuvwxyz ';
//   const alphaArray = alpha.split('');
//   const userString = prompt('Enter a string: ');
//   const userStringArray = userString.split('');
//   // map goes through each element and changes it into something else... in this case to rotate the letter.
//   // map returns an array. It changes each element as it does through the initial array.
//   let encrypted = userStringArray.map(function (item,i){
//       return derotX(i);
//   })
//   console.log(`The original string was: ${userString}`);
//   console.log(`The encrypted string is: ${encrypted.join('')}`);
  
  /*
   * BONUS #2 `rotn`
   * Create a function called `rotn` that takes an unencrypted string and an
   * integer (n) and returns the ROT-N version of that string.
   *
   * The input should only contain lower-case alphabetic characters. If the input
   * is invalid throw an 'Invalid Input' exception.
   */

// example brandon = oenaqba when rotated 13
//   function rotX(i) {
//     let index = alphaArray.findIndex(function checkLetter(item) {
//       return item === userStringArray[i]; 
//     });
//     let rotated = index+rotNum;
//     if (index === -1){
//       throw new Error('Invalid Input');
//     }
//     else if (index === 26){
//       return ' ';
//     } else{
//       if (rotated > 25){
//           rotated=rotated-26;
//       }
//       return alphaArray[rotated];
//     }
//   } 
//   const alpha='abcdefghijklmnopqrstuvwxyz ';
//   const alphaArray = alpha.split('');
//   const userString = prompt('Enter a string: ');
//   const rotNum = parseInt(prompt('Enter a number of letter to rotate: '));
//   const userStringArray = userString.split('');
//   // map goes through each element and changes it into something else... in this case to rotate the letter.
//   // map returns an array. It changes each element as it does through the initial array.
//   let encrypted = userStringArray.map(function (item,i){
//       return rotX(i);
//   })
//   console.log(`The original string was: ${userString}`);
//   console.log(`The encrypted string is: ${encrypted.join('')}`);
  
  /*
   * BONUS #3 `findBoth`
   * Write a function called `findBoth` that takes two arrays of integers a and b
   * returns an array that includes only the elements that appear in both a and b.
   * A value should not appear more than once in the returned array.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
  // mine
//   const a = [5,6,4,1,2,3,3,4,4,4,4,4,5];
//   const b = [3,4,5,5,6,7];
//   let both = a.filter(function (e) {
//     let matched = false;
//     for (let i=0; i<b.length; i++){
//         if (e === b[i]){
//             matched = true;
//         }
//     }  
//     return matched;
//   });
//   console.log(both);
//   both.sort();
//   let bothOnce = [];
//   for (i=0; i<both.length; i++){
//       if (both[i]!==both[i+1]){
//         bothOnce.push(both[i]);
//       }
//   }
//   console.log(bothOnce);

// Gin's ... I added console.logs to better track and understand what is happening.
//   const a = [5,1,2,3,3,4];
//   const b = [3,4,5,6,7];
//   let both = a.filter(function (e) { 
//       console.log(`This is the AAA Array elements ${e}`);
//       //When array.some returns a true value it then in turn returns the element value that it is currently on.
//       return b.some(function (j,i){ //some returns true if condition is met and instantly send it back to the filter.
//         console.log(`This is the BBB Array elements ${j}`);
//         if (e===j){
//           console.log((e===j) +`, at B Array index ${i}`);
//           console.log(`B Array value is ${j} at index ${i}`);
//         }
//         return e===j;
//       })
//   });
//   console.log(both);
//   both.sort();
//   let bothOnce = [];
//   for (i=0; i<both.length; i++){
//       if (both[i]!==both[i+1]){
//         bothOnce.push(both[i]);
//       }
//   }
//   console.log(bothOnce);

  /*
   * BONUS #4 `countBoth`
   * Write a function called `countBoth` that takes two arrays of integers a and
   * b. The function should return the number of elements that exist in both a and
   * b.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
// Same as #3 but add console.log(bothOnce.length);
  
  
  /*
   * BONUS #5 `isDiagonalMatrix`
   * In linear algebra, a square matrix (array of arrays) is called a diagonal
   * matrix if all entries outside the main diagonal are zero (the diagonal from
   * the upper left to the lower right).
   * For example:
   * [
   *   [1, 0, 0],
   *   [0, 2, 0],
   *   [0, 0, 3]
   * ]
   * is a diagonal matrix.
   *
   * [
   *   [1, 0, 2],
   *   [0, 2, 0],
   *   [0, 0, 3]
   * ]
   * is not a diagonal matrix.
   *
   * [
   *   [1, 0, 0],
   *   [0, 2, 0]
   * ]
   * is not a diagonal matrix.
   *
   * Write a function called `isDiagonalMatrix` that takes a matrix and returns
   * true if the matrix is a diagonal matrix. Otherwise return false.
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
// let matrix = [
//         [1, 0, 0],
//         [0, 2, 0]
//     ]
// let matrix = [
//         [1, 0, 0, 0],
//         [0, 2, 0, 0],
//         [0, 0, 3, 0],
//         [0, 0, 2, 4]
//     ]
// let matrix = [
//     [1, 0, 0],
//     [0, 2, 0],
//     [0, 0, 3],
// ]
// let matrixOrginialLength = matrix.length;
// let isSquareMatrix = () => (matrix.length === matrix[0].length);
// if(isSquareMatrix()){
//     let matrixString = matrix.toString(); //take x dimensional array and returns a long comma seperated string
//     let stringArray = matrixString.split(','); // turns the string into a one dimensional array
//     let matrixDiagonal = []; 
//     let matrixOutsideDiagonal= stringArray;
//     // grab only the diagonal element of the original matrix
//     for(let i=0; i<stringArray.length; i=i+(matrix.length+1)){
//         matrixDiagonal.push(stringArray[i]);
//     }
//     // removes only the diagonal element sof the original matrix
//     for(let i=0; i<stringArray.length; i=i+matrix.length){
//         matrixOutsideDiagonal.splice(i,1);
//     }
//     let outsideTotal = 0;
//     for(let i=0; i<matrixOutsideDiagonal.length; i++){
//         outsideTotal = outsideTotal + parseInt(matrixOutsideDiagonal[i]);
//     }
//     if (outsideTotal===0){
//         console.log(matrix, 'is a diagonal matrix');
//     }else{
//         console.log(matrix, 'is a square matrix but not a diagonal matrix');
//     }
// }else{
//     console.log(matrix, `is not a square matrix so it can't be a diagonal matrix!`)
// }


  /*
   * BONUS #6 `isAnagram` - Actual Interview Question
   * An anagram is a type of word play, the result of rearranging the letters of a
   * word or phrase to produce a new word or phrase, using all the original
   * letters exactly once.
   *
   * Write a function called `isAnagram` that takes two arrays of strings of equal
   * lengths arr1 and arr2. The function should return a new array of the same
   * length as the input with boolean values at each position i. The boolean value
   * at position i of the result array should be true if the strings at position i
   * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
   * position i of the result array should be false.
   *
   * For example:
   * isAnagram(
   * 		['cinema', 'shot', 'aba', 'rain'],
   * 		['iceman', 'hots', 'bab', 'train']
   * ) === [true, true, false, false];
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */

// const arr1 = ['cinema', 'shot', 'aba', 'rain'];
// const arr2 = ['iceman', 'hots', 'bab', 'train'];
// let bothArr = [arr1, arr2];
// console.log(bothArr);
// let isAnagramArray = [];
// function isAnagram() {
//     for (let i=0; i<arr1.length; i++){
//         if(arr1[i].split('').sort().join('')===arr2[i].split('').sort().join('')){
//             isAnagramArray.push(true);
//         }else{
//             isAnagramArray.push(false);
//         }
//     }
//     return console.log(isAnagramArray);
// }
// isAnagram();
  
  /*
   * BONUS #7 `validateParentheses` - Actual Interview Question
   * Write a function called `validateParentheses` that takes a string of
   * parentheses. The string can contain the following characters repeated any
   * number of times in any order: ()[]{}
   *
   * The function should return true if the parentheses are in a valid order and
   * false if they are not. One type of parentheses cannot close before it has
   * been opened and one type of parentheses cannot be closed while a different
   * type of parentheses is open. All parentheses that are opened must also be
   * closed.
   *
   * For example:
   * validateParentheses(']') === false;
   * validateParentheses('[') === false;
   * validateParentheses('[]') === true;
   * validateParentheses('{[]}') === true;
   * validateParentheses('([)]') === false;
   * validateParentheses('{[(){()}]}') === true;
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   */
// function validateParentheses(input){
//     let parenthesesArray = [];
//     let inputArray = input.split('');
//     console.log(inputArray);
//     for (let i=0; i<inputArray.length+1; i++){
//         if (inputArray[i]==='{' || inputArray[i]==='[' || inputArray[i]==='('){
//             parenthesesArray.push(inputArray[i]);
//         }
//         else if (inputArray[i]==='}' && parenthesesArray[parenthesesArray.length-1]==='{'){
//             parenthesesArray.pop();
//         }
//         else if (inputArray[i]===']' && parenthesesArray[parenthesesArray.length-1]==='['){
//             parenthesesArray.pop();
//         } 
//         else if (inputArray[i]===')' && parenthesesArray[parenthesesArray.length-1]==='('){
//             parenthesesArray.pop();
//         }
//         else if(inputArray[i]==='}' || inputArray[i]===']' || inputArray[i]===')'){
//             throw new Error ('Invalid Input');
//         }
//         else if (parenthesesArray.length===0){
//             console.log('Valid!')
//         }
//     }
// }
// const userInput1 = ']';
// const userInput2 = '[';
// const userInput3 = '[]';
// const userInput4 = '{[]}';
// const userInput5 = '([)]';
// const userInput6 = '{[(){()}]}';

// validateParentheses(userInput1);
// validateParentheses(userInput2);
// validateParentheses(userInput3);
// validateParentheses(userInput4);
// validateParentheses(userInput5);
// validateParentheses(userInput6);

  
  /*
   * BONUS #8 `flattenArray` - Actual Interview Question
   * Write a function called flattenArray that takes an array of any type of
   * element, and flattens it, such that any element in the given array that is an
   * array is converted to a list of non-arrays. For example:
   *
   * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
   * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
   *
   * If the input is invalid throw an 'Invalid Input' exception.
   *
   * Insane mode: do this without recursion.
   */
// NOT COMPLETE
// let input = [1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]
// let flatten = input.toString().split(',');
// console.log(input);
// console.log(flatten);
// console.log(flatten[0]);
