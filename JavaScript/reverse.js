let arr=[1,2,3,4,5,6,7,8,9,10]
let reverse=[]
arr.forEach((num,idx)=>{
    reverse.push(arr[arr.length-1-idx ])
})

console.log(reverse);
