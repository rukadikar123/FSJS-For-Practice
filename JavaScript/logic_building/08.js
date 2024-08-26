// function perfectNumber(num) {
//     let result = 0
//     if(num<1){
//         throw new Error("enter number above one");
        
//     }
//     for (i = 1; i < num; i++) {
//         if (num % i === 0) {
//             result += i
//         }

//     } if(result===num){
//      return true   
//     } 
//     return false
// }

// console.log(perfectNumber(28));


function passwordChecker(str){
    str=str.trim()
    if (str.length<8) {
        throw new Error("enter password contains min 8 chars");
        
    }
    let lower="abcdefghijklmnopqrstuvwxyz"
    let lowerExist=false
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let upperExist=false
    let number="1234567890"
    let numberExist=false
    let specialchar="@!#$%^&*"
    let specialcharExist=false
    for (let char of str){
       if(lower.includes(char)){
        lowerExist=true
       }else if(upper.includes(char)){
        upperExist=true
       }else if(number.includes(char)){
        numberExist=true
       }else if(specialchar.includes(char)){
        specialcharExist=true
       }
    }
    if (lowerExist===true && upperExist===true && numberExist===true && specialcharExist===true) {
        return true
    }
    return false
}

console.log(passwordChecker("SIddharth@"));



