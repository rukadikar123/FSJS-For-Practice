// Filter out falsy values

// const input = [0, "hello", false, 42, "", null];

// const result=input.filter(Boolean)

// console.log(result);



// Count how many times each character appears in a string

// const inputStr="hello"

// const result={}

// const splittedStr=inputStr.split("")

// splittedStr.forEach((char)=>{
//       result[char]=(result[char] || 0)+1
    
// })

// console.log(result);


// Flatten deeply nested arrays

// const input = [1, [2, 3], [4, 5], 6];

// const result=input.reduce((acc, curr)=> {
//     return acc.concat(curr)
// },[])

// console.log(result);



// Find the second highest number in an array


// let Input= [10, 30, 20, 40]

// Input=[... new Set(Input)]

// Input.sort((a,b)=>a-b)
// console.log(Input[Input.length-2]);



// Reverse each word in a sentence

// let Input= "hello world"

// let result=Input.split(" ").map((word)=>word.split("").reverse().join("") ).join(" ")

// console.log(result);


// Check if a string is a palindrome


// function PalindromeStr(str){
//     let reveresedStr=str.split("").reverse().join("")
//     if(reveresedStr===str){
//         return true
//     }
//     return false

// }

// console.log(PalindromeStr("madam"));


// let number=1234755

// let sum=0

// while(number>0){
//     let lastDig=number%10
//     sum+=lastDig
//     number=Math.floor(number/10)
// }
// console.log(sum);


// let sum=number.toString().split("").map(Number).reduce((acc,curr)=> acc+curr,0)

// console.log(sum);


// Capitalize the first letter of each word 

// let input = "hello world from javascript";

// let result = input
//   .split(" ")                              
//   .map(word => word[0].toUpperCase() + word.slice(1)) 
//   .join(" ");                               

// console.log(result);


// Convert object to array of key-value pairs


// const obj = {
//     a:1, b:6
// };

// const keyValuePairs = Object.entries(obj);
// console.log(keyValuePairs);


function GlobalFunc(){
    console.log(x);
    var x=10
}

GlobalFunc()