// function Factorial(num){
//     // let factorial=1
//     if(num==1 || num==0){
//         return 1
//     }
//     if(num<0){
//         throw new Error("enter valid number");
        
//     }
//     // for(i=num; i>0; i--){
//     //     factorial*=i
//     // }
//     // return factorial

//     return num * Factorial(num-1)

// }
// console.log(Factorial(-9));

//  sum of digits

// function sumOfDigit(number){
//     if(number<1){
//         throw new Error("enter a valid number")
//     }

//     const splittedNumber =number.toString().split('')
//     let result=0
//     splittedNumber.forEach(num => {
//         result+=parseInt(num)
//     });
//     return result
// }

// console.log(sumOfDigit(0));

function MultiplicationTable(num){
    let result;
    if (num<1) {
        throw new Error("enter a number above 0")
    }
    console.log(`Multiplication table of ${num} is:`);
    for(i=1; i<11; i++){
         
        console.log(`${num} * ${i} = ${num*i}`);
        
    }
    
}
MultiplicationTable(5)
