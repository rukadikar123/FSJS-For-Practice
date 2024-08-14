// function isArmstrong(num){
//     let number=num;
//     let last_digit=0;
//     let digit=[];
//     while(number>0){
//         last_digit=number%10
//         number=Math.floor(number/10)
//         digit.push(last_digit)
        
//     } 
//     let sum=0;
//     for(i=0; i<digit.length;i++){
        
//         sum=sum+Math.pow(digit[i],digit.length)
//     }
//     if(sum===num){
//         console.log(`${num} is armstrong number`);
        
//         return true
//     }return false
// }

// console.log(isArmstrong(153));


function replace(num){
    for(i=1;i<=num;i++){
        if(i%3===0){
            console.log("Fizz");
            
        }else if(i%5===0){
            console.log("Buzz");
            
        }else if(i%3===0 && i%5===0){
            console.log("Fizz-Buzz");
            
        }else{
            console.log(i);
            
        }
    }
}

replace(36)