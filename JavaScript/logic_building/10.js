// let arr=[1,2,3,4,2,1,3,4,2,1,3,8.7]

// let remArr=[...new Set(arr)]
// console.log(remArr);

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, d: 5 };

// const merger={...obj1 , ...obj2}

// console.log(merger);


// You have an array of objects representing products, each with a name and price property. Write a JavaScript function called applyDiscount that takes an array of products and a discount percentage as arguments. The function should return a new array where each product's price is reduced by the given discount percentage using the map function.

// let arr=[
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 750 }
// ]

// function applyDiscount(arr,discount) {
//     return arr.map((val)=>{
//         // console.log(val.price);
        
//         let newPrice=discount/100 * val.price 
//             val.price=val.price - newPrice
            
//         return {
//             name:val.name,
//             price:val.price
//         }
         
        
//     })
// }   

// console.log(applyDiscount(arr,10));



// const names = ["John Doe", "Jane Smith", "Bob Johnson"];

// function getInitials(names){
//   return  names.map((val)=>{
//     let splitted=val.split(" ")
//     let letter_1=[...splitted[0]]
//     let letter_2=[...splitted[1]]
//     let joined= [letter_1[0], "." ,letter_2[0],"." ].join("")
//     return joined
//     })
// }

// console.log(getInitials(names));
