// let obj={
//     a:"1",
//     b:"3",
//     c:null,
//     d:undefined,
//     e:"5"
// }

// const newobj=Object.fromEntries(Object.entries(obj).filter(([_, val])=> val !=null))
// console.log(newobj);


// let arr=[234,112,24,13,9,2,78]
// let smallest=Number.POSITIVE_INFINITY
// function smallestNum(arr) {
//     for(num of arr){
//         if(num<smallest){
//             smallest=num
            
//         }
//     }
//     return smallest
// }

//  console.log(smallestNum(arr));



let arr=[5,8,43,89,98]

let newArr=arr.reduce((acc,curr)=> {
   return Math.min(acc,curr)
} )
console.log(newArr);

 
// let array=[1,8,3,9,4,7,4,3]
// let sorted=array.sort()
// newArray=[...new Set(sorted)]

// console.log(newArray);

