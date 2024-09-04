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



// let arr=[5,8,43,89,98]

// let newArr=arr.reduce((acc,curr)=> {
//    return Math.min(acc,curr)
// } )
// console.log(newArr);

 
// let array=[1,8,3,9,4,7,4,3]
// let sorted=array.sort()
// newArray=[...new Set(sorted)]

// console.log(newArray);


// let arr=[
//    {
//       name:"siddharth",
//       age:22
//    },
//    {
//       name:"rahul",
//       age:69
//    },
//    {
//       name:"sachin",
//       age:35
//    }
// ]

// newarr=arr.map((val)=> val.age)
// console.log(newarr);

// const newarr=[...arr].sort((a,b)=> a.age-b.age)


// console.log(newarr);
// console.log(arr);

// if(""){
//    console.log("hey");
   
// }else{
//    console.log("hello");
   
// }

// var obj={
//    name:"siddharth",
//    age:25,
//    city:"rukadi"
// }

// for (var key in obj){
//    console.log(`${key} : ${obj[key]}`);
   
// }

// function abcd(a){
//    a()
// }
// abcd(function(){
//    console.log("hello");
   
// })
// var a=[1,2,3,4,5]

// console.log(typeof([]));

// var arr=[1,2,3,4,5]
// arr[-2]=2
// arr[-1]=5

// console.log(arr);


// console.log("hello");

// setTimeout(function(){
//    console.log("hey");
   
   
// },2000)

// console.log("world");
// setTimeout(function(){
//    console.log("guys");
   
   
// },1000)

// var ans=new Promise((res, rej)=>{
//       if(false){
//          return res();
//       }else{
//          return rej();
//       }
// })
// ans.then(()=>{
//    console.log("resolve");
   
// }).catch(()=>{
//    console.log("reject");
   
// })

// async function abcd(){
//  let raw=await fetch('https://randomuser.me/api/')
// let ans=await raw.json()
// console.log(ans);

// }
// abcd()

// function abcd(name){
//    this.age=23;
//    this.name=name;
// }

// let func1=new abcd("siddharth")
// let func2=new abcd("rahul")

// console.log(func1);
// console.log(func2);


// var ans=function abcd(){
//    var a=12;
//    return {
//       getter: function(){
//          console.log(a);
         
//       },
//       setter:function(val){
//          a=val;
//       }

//    }
// }()


// function abcd(){
//    console.log(this);
   
// }
// var obj={
//    age:22
// }

// var bindedFunc=abcd.bind(obj)

// bindedFunc()

// function abc(a,b,c,...d){
//    console.log(a,b,c,d);
   
// }
// abc(1,2,3,4,5,7,8,9)

// destructuring
// var a=[1,2,34,21]

// var [b,c]=a

// console.log(a);

// var obj={name:"siddharth", age:23}
// var {age}=obj
// console.log(age);


function abcd(){
   var x=19
   return function(){
      console.log(x);
      
   } 
}

let ans= abcd()
ans()
