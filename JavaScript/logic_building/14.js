// let arr=[1,2,3,2,7,6,9,3,2,6,6,6,5,4,4,4,]

// function findDuplicate(arr) {
//     let nonDuplicateArr=[]
//     let duplicateArr=[]

//     arr.forEach((num,index) => {
//         if(nonDuplicateArr.includes(num) && !duplicateArr.includes(num)){
//             duplicateArr.push(num)
//         }else{
//             nonDuplicateArr.push(num)
//         }
//     });
//     console.log(duplicateArr);
    
// }

// findDuplicate(arr)

function findSmallestMissingNumber(A, B) {
    // Create a Set from array B for efficient lookups
    // const setB = new Set(B);

    // Filter array A to include only numbers not present in set B
    const missingNumbers = A.filter(num => !B.includes(num));

    // If no missing numbers are found, return -1
    if (missingNumbers.length === 0) {
        return -1;
    }

    // Return the smallest missing number
    return Math.min(...missingNumbers);
    // return missingNumbers
}

// Example usage:
const A = [6, 2, 3, 4, 5];
const B = [2, 5, 6, 8, 10];
console.log(findSmallestMissingNumber(A, B));