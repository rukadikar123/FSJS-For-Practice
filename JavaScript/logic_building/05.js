// function PalindromeString(str){
//     let string=str.split('').reverse().join('')
//     // console.log(string);

//     if (string===str) {
//         return true
//     } return false
// }
// console.log(PalindromeString("abbaa"));


// function countVowel(str) {
//     let splittedstr = str.split('')
//     let vowelcount = 0;
//     let consonantcount=0;
//     for (i = 0; i < splittedstr.length; i++) {
//         if (splittedstr[i] === 'a' || splittedstr[i]==='e' || splittedstr[i]==='i' || splittedstr[i]==='o' || splittedstr[i]==='u') {
//             vowelcount += 1
//         }else{
//             consonantcount+=1
//         }
//     } return [vowelcount , consonantcount]
// }

// console.log(countVowel("adefgisdou sidfhd"));


// function Factor(num){
//     if(num<0){
//         throw new Error("enter number above 1")
//     }
//     for(i=1; i<=num; i++){
//         if(num%i==0){
//             console.log(i);
            
//         }
//     }
// }
// Factor(-26)

// function calcAverage(arr){
//     let result=0;
//     for(i=0; i<arr.length; i++){
//         result+=arr[i]
//     }
//     return result/arr.length
// }
// console.log(calcAverage([2,3,4,8,8]));


// function WordsCount(sentense){
//    let splitted=sentense.split(' ')
//    console.log(splitted.length);
   
   
// }

// WordsCount("hello siddharth how are you")


function swap(a,b){
    let temp=a
    a=b
    b=temp
    console.log(`now a is: ${a} and b is: ${b}`);
    
}
swap(3,5)

