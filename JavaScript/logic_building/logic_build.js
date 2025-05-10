// let price=[102,221, 235, 953, 945]

// const totalPrice=price.reduce((sum,price)=>sum+price, 0)


// console.log("total price",totalPrice);


// const nestedArray = [[1], [2], [3]];

// const flatArray=nestedArray.reduce((arr, curr)=>arr.concat(curr), [])

// console.log(flatArray);


// Count frequency of elements	     Count how often words appear

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(frequency);




// Group items by a key           	Group users by age, category, etc.












// Convert array to object/map	                              Create an object from array of key-value pairs