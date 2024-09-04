// const students = [
//     { name: 'John', grade: 60, attendance: 3 },
//     { name: 'Jane', grade: 80, attendance: 6 },
//     { name: 'Jim', grade: 55, attendance: 4 },
//     { name: 'Jill', grade: 75, attendance: 5 }
//   ];

// //   let filteredStudent=students.filter((obj)=>(
// //       !(obj.grade<70 && obj.attendance<=6)

// //   ))

// //   console.log(filteredStudent);
  
// let filteredStudent = students.filter((obj) => (
//     obj.grade >= 70 || obj.attendance >= 5
// ));

// console.log(filteredStudent);


// que 2

// const emails = [
//     'alice@gmail.com',
//     'bob@yahoo.com',
//     'charlie@gmail.com',
//     'dave@hotmail.com',
//     'eve@gmail.com'
//   ];

// let filteredemail=emails.filter((email)=>(
//     email.includes("@gmail.com")
// ))
// console.log(filteredemail);


// slice, splice  method 

// let fruits = ["apple", "banana", "cherry", "date","watermelon"];

// let sliced=fruits.slice(1,4)

// console.log( sliced);
// console.log(fruits);


// let fruits = ["apple", "banana", "cherry", "date","watermelon"];


// let spliced=fruits.splice(1,4)

// console.log(spliced);

// console.log(fruits);

// const orders = [
//     { customerId: 'C1', items: ['item1', 'item2'], total: 150 },
//     { customerId: 'C2', items: ['item3'], total: 90 },
//     { customerId: 'C1', items: ['item4', 'item5'], total: 200 },
//     { customerId: 'C3', items: ['item6'], total: 120 },
//     { customerId: 'C2', items: ['item7', 'item8'], total: 110 }
//   ];
  
  // Your function to filter and aggregate data
//   function aggregateOrders(orders) {
//     const result={}
//         const filteredOrder= orders.filter((orders)=>(
//             orders.total>100
//         ))
//         filteredOrder.forEach(element => {
//              if(result[element.customerId]){
//                 result[element.customerId]+=element.total
//              }
//              else{
//                 result[element.customerId]=element.total
//              }
             
//         });
//         return result;
//   }
  
//   const aggregatedData = aggregateOrders(orders);
//   console.log(aggregatedData);
  

// reduce methd

let arr=[1,2,3,4,5]

let sum=arr.reduce((acc, curr)=>(
    acc+curr
),0)

console.log(sum);
