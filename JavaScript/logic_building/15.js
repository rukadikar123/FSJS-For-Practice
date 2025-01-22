// const user=["siddharth", 3 , "admin"]

// var [name, courseCount , role]=user

// console.log(role);

// const myUser={
//     name:"siddharth",
//     age:25,
//     role:"admin"
// }

// const {name,age,role}=myUser

// console.log(age);


// var myObj={}

// Object.assign(myObj, {a:1, b:2, c:3, d:4}, {x:9, y:8, z:7})

// console.log(myObj);


// function sumOne(a,b){
//     return a+b
// }


// const myArr=[4,5]
// console.log(sumOne(...myArr));          // spread operator


function sumTwo(a,b, ...args){
    let multi=a*b

    let sum=0;
    for(const arg of args){
        sum+=arg
    }
    return [sum,multi]
}

console.log(sumTwo(2,3,4,2,4));







// let user={
//     Name:"siddharth",
//     age:25
// }

// function sayhello(){
//     console.log(`my name is :  ${this.Name} and age is ${this.age}`);
    
// }

// let newMethod=sayhello.bind(user)()

// newMethod()
