let arr=[1,2,3,2,7,6,9,3,2,6,6,6,5,4,4,4,]

function findDuplicate(arr) {
    let nonDuplicateArr=[]
    let duplicateArr=[]

    arr.forEach((num,index) => {
        if(nonDuplicateArr.includes(num) && !duplicateArr.includes(num)){
            duplicateArr.push(num)
        }else{
            nonDuplicateArr.push(num)
        }
    });
    console.log(duplicateArr);
    
}

findDuplicate(arr)