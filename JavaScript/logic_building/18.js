// // 1. Find the First Non-Repeating Character

// function findNonRepeating(str) {
//   let splittedStr = str.split("");
//   console.log(splittedStr);
//   console.log(str);

//   for (let i = 0; i < splittedStr.length; i++) {
//     let isUnique = true;

//     for (let j = 0; j < str.length; j++) {
//       if (i !==j && splittedStr[i] === str[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       return splittedStr[i];
//     }
//   }
// }

// console.log(findNonRepeating("aabbc"));

// function findNonRepeating(str) {

//   const count={}
//   for(let char of str){
//     count[char]=(count[char] || 0)+1
//   }

// for(let char of str){
//   if(count[char]===1){
//     return char
//   }
// }

// }

// console.log(findNonRepeating("aabbc"));

// -----------------------------------------------------------------------------------------------------------------------------

// Anagram Checker

// function checkAnagram(str1, str2) {
//   let splittedStr1 = str1.toLowerCase().split("");
//   console.log(splittedStr1);
//   let str1Count = {};
//   let str2Count = {};

//   if(str1.length !== str2.length) return false

//   for (let char of str1) {
//     str1Count[char] = (str1Count[char] || 0) + 1;
//   }
//   console.log(str1Count);

//   for (let char of str2) {
//     str2Count[char] = (str2Count[char] || 0) + 1;
//   }
//   console.log(str2Count);

//   for(let char of str1){
//     if(str1Count[char]!==str2Count[char]){
//       return false
//     }
//   }
//  return true
// }

// console.log(checkAnagram("listen", "silent"));


// function checkAnagram(str1, str2) {
//   let sortedstr1=str1.toLowerCase().split("").sort().join("")
//   let sortedstr2=str2.toLowerCase().split("").sort().join("")

//   console.log(sortedstr1);
//   console.log(sortedstr2);
  
//   return sortedstr1===sortedstr2


// }

// console.log(checkAnagram("listen", "silent"));

// -----------------------------------------------------------------------------------------------------------------------------

//  Move Zeroes to End

// let Input= [0, 1, 0, 3, 12]
// let array1=[]
// Input.forEach((elem)=>{
//   if(elem !==0){
//     array1.push(elem)
//   }
// })
// console.log(array1);

// Input.forEach((elem)=>{
//   if(elem ===0){
//     array1.push(elem)
//   }
// })

// console.log(array1);


// let input = [0, 1, 0, 3, 12];

// let index = 0;

// Move non-zero elements forward
// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== 0) {
//     input[index] = input[i];
//     index++;
//   }
// }

// while(index< input.length){
//   input[index]=0
//   index++
// }

// console.log(input);


// let input = [0, 1, 0, 3, 12];

// let result=input.filter((n)=>n !==0)
// let zeros=Array(input.length - result.length).fill(0)

// console.log(result.concat(zeros));

// -----------------------------------------------------------------------------------------------------------------------------

// Find All Pairs with Given Sum

// let Input = [1, 2, 3, 4, 3];
// let sum = 6;

// let result=[]

// for(let i=0; i<Input.length;i++){
//     for(let j=i+1; j< Input.length;j++){
//       if( Input[i]+Input[j]==sum ){
//       result.push([Input[i], Input[j]])
//     }
//     }
//   }

// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------


// let Input= [1, [2, [3, [4]]]]
// let flattedArray=Input.flat(Infinity)

// console.log(flattedArray);

// -----------------------------------------------------------------------------------------------------------------------------

// 6. Find Duplicate Elements

// let Input= [1, 2, 3, 2, 4, 5, 1]

// let count={}
// let result=[]

// for(let item of Input ){
//     count[item]=(count[item] || 0) + 1
    
// }
// Object.keys(count).forEach((key)=>{
//     if(count[key]>1){
//         result.push(+key)
//     }
// })

// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------

// 7. Longest Word in a Sentence


// let Input= "Web development is awesome"

// let splittedStr=Input.split(" ")
// console.log(splittedStr);

// let count={}

// for(let word of splittedStr){
//     count[word]=word.length
// }
// console.log(count);

// let sortedArray=Object.values(count).sort((a,b)=> b-a)

// let greatestValue=sortedArray[0]

// let result=Object.keys(count).filter((key)=> count[key]===greatestValue )

// console.log(result);


// let Input= "Web development is awesome"
// let words=Input.split(" ")

// let maxLength=0;
// let result=[]

// for(let word of words){
//     if(word.length>maxLength){
//         maxLength=word.length;
//         result=[word]
//     }else if(word.length===maxLength){
//         result.push(word)
//     }
// }

// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------

