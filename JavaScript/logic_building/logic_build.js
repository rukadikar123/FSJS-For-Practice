// let price=[102,221, 235, 953, 945]

// const totalPrice=price.reduce((sum,price)=>sum+price, 0)


// console.log("total price",totalPrice);


// const nestedArray = [[1], [2], [3]];

// const flatArray=nestedArray.reduce((arr, curr)=>arr.concat(curr), [])

// console.log(flatArray);


// Count frequency of elements	     Count how often words appear

// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequency = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);


// Group items by a key           	Group users by age, category, etc.


// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 35 }
// ];

// const groupedUser={}

// users.forEach((user)=>{
//   const key=user.age
//   if(!groupedUser[key]){
//     groupedUser[key]=[]
//   }
//   groupedUser[key].push(user.name)
  
// })

// console.log(groupedUser);



// const newArr=users.reduce((acc,user)=>{
//   const key =user.age;

//   if(!acc[key]){
//     acc[key]=[]
//   }
//   acc[key].push(user.name)

//   return acc
// },{})


// console.log(newArr);


// Convert array to object/map	                              Create an object from array of key-value pairs


const pairs = [
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'New York']
];

const obj = Object.fromEntries(pairs);
console.log(obj);