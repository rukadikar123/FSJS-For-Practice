// function reverseString(str){
//     // let rev=srt.split('').reverse().join('')
//     // console.log(rev);
//     let rev="";
//     for(let i=str.length-1; i>=0;i--){
       
//       rev+=str[i]
        
//     }
//     return rev
// }
// console.log(reverseString('siddharth'));


function reversestring(str){
    let result=""
    if (typeof(str)==="string") {
        for(i=str.length-1 ; i>=0 ; i--){
            result+=str[i]
            
        }
    }else {
        throw new Error("only strings are allowed");
        
    }
    return result
}

console.log(reversestring("siddharth"));

console.log(reversestring(12425));
