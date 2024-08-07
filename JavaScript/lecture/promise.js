// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task is complited');
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function () {
//     console.log('promise consumed');

// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task 2 is complited');
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('promise 2 consumed');
    
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'siddharth', email:'example@gmail.com'})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user.email);
    
// })

// const promisefour=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({username:'rahul', password:'123'})
//         }else{
//             reject('ERROR: Something went wrong')
//         }

//     },2000)
// })


// promisefour.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected");
    
// })


// const promiseFive=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:'javascript',password:'1234'})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response=await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//   try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log('E:',error);
    
//   }
   
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})