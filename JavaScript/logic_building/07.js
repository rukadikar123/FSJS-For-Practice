// function generatePyramid(num) {
//     for(let i = 1; i <= num; i++){
//         let linecontent = "";
//         for(let space = 1; space <=num-i; space++) {
//             linecontent =linecontent+ " "
//         }
//         for(let count=1; count<=i;count++){
//             linecontent+=count
//         }
//        for(let reverse=i-1; reverse>=1; reverse--){
//         linecontent+=reverse
//        }
//        console.log(linecontent);
//     }

// }

// generatePyramid(8)

// function countCharacters(str){
//     let result={}
//     str=str.toLowerCase()
//     for(let i=0 ; i<str.length;i++){
//         if(!result[str[i]]){
//             result[str[i]]=0
//         }
//         result[str[i]]+=1
//     }
//     console.log(result);


// }
// countCharacters("siddharth Rukadikar")

// function isStringInAlfabeticalOrder(str) {
//     for (let i=0; i<str.length-1; i++) {
//         if(str[i]>str[i+1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isStringInAlfabeticalOrder("abcd"));

function anagrams(s1, s2){

    if (s1.lentgh !== s2.lentgh) {
        return false
    }
    const charInS1={}
    for (let char of s1) {
      if(!charInS1[char]){
        charInS1[char]=0
      }
      charInS1[char]+=1
    }
    // console.log(charInS1);
    
    const charInS2={}
    for (let char of s2) {
      if(!charInS2[char]){
        charInS2[char]=0
      }
      charInS2[char]+=1
    }
    for (let key in charInS1) {
        if(charInS1[key] !== charInS2[key]){
                return false
        }
        
    }

    return true
}  

