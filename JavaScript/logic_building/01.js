// function sum(a,b){
//     // console.log(a+b);
//     return a+b
    
// }

// sum('2',4)
// console.log(sum(222,145) );


function CalculateArea(l,w){
    
    if(l>0 && w>0){
         console.log(l * w);
         
    }else{
        throw new RangeError("please enter valid positive number");
        
    }
}

CalculateArea(20,25)
