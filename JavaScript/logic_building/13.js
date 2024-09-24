// const books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 },
//     { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
//   ];
  
//   function sortBooksByYear(arr){
//         return arr.sort((a,b)=>b.year - a.year)
//   }

// console.log(sortBooksByYear(books));

// function findBooksByAuthor(arr){
//     return arr.filter((obj)=>obj.author==="Harper Lee")
// }

// console.log(findBooksByAuthor(books));


const numbers = [4, 5, 4, 2, 1, 2, 3, 5, 7, 8, 3, 9];

function removeDuplicates(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicates(numbers));
