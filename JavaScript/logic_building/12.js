// let str="saare jahaan se accha hindustaan hamara"

// reversedString=str.split(" ")
// .map((word)=>(
//     word.split("").reverse().join("")
// ))

// console.log(reversedString.join(" "));

// let arr=[1,2,3,4,5,]

// arr.length=0

// console.log(arr);

// function isInteger(num){
//     if (num%1===0) {
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(isInteger(1));

// var a=[1,2]

// var b=a.concat(a)
// console.log(b);

// var a=12342

// let b=a.toString().split("").reverse().join("")
// console.log(Number(b));


// function acc(str){
//     var occurence={}
//     str.split("").forEach(element => {
        
//         if(occurence.hasOwnProperty(element)===false){
//             occurence[element]=1
//         }else{
//             occurence[element]++
//         }
       
//     });
//     return occurence
// }

// console.log(acc("apple"));


let arr=[1,2,1,2,3,4,5,7,8,9,2,1,3,4,8,9]

var sum=0
arr.forEach((val)=>{
    sum=sum+val

})
console.log(sum);

