// obj={}

// if (Object.keys(obj).length===0) {
//     console.log("empty object");
// }

// let array=[]
// for (let i = 0; i <= 10; i++) {
//     array.push(i)
//     console.log(array);
// }

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(i+ '*' +j+'='+ i*j);
        
//     }
    
// }
// let myarray=["supermn", "batman","spiderman","thor"]
// let arr=0
// while (arr<myarray.length) {
//     console.log(`value is  ${ myarray[arr]}`);
//     arr=arr+1
// }

// arr=[8,7,6,5,4]

// for (const i of arr) {
//     console.log(i);
// }

//  const myobj={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby"
// }

// for (const key in myobj) {
//     console.log(`${key} is for ${myobj[key]}`);
// }

// const lang=["js",'rb','cpp']

// for (const key in lang) {
//     console.log(lang[key]);
// }

// const coding=["js",'rb','cpp']

// coding.forEach( (val)=>(console.log(val + " is language")) )

// mycoding=[
//     {
//         lang:"javascript",
//         shortcut:"js"
//     },
//     {
//         lang:"python",
//         shortcut:"py"
//     },
//     {
//         lang:"ruby",
//         shortcut:"rb"
//     }
// ]

// mycoding.forEach( (item)=>(console.log(item.shortcut)) )


// myarray=[1,2,3,4,5,6,7,96]

// const newarray=myarray.filter( (num)=>(num>3) )

// console.log(newarray);


// nums=[1,2,3,4,5,7,8,9]

// const newNums=nums.map( (num)=>(num+10) )
// console.log(newNums);


const myNums=[1,2,3,4]

const total=myNums.reduce( (acc, currval)=> 
     acc+ currval ,0)

console.log(total);