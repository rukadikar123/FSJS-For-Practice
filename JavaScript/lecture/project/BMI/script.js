const form=document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault();

    
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector("#Weight").value);
    const result=document.querySelector("#result")
    const message=document.querySelector(".message")
    const bmi= (weight / ((height *height)/10000)).toFixed(2);

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`please enter a valid height`
    }else if (weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter a valid weight`
    }else{
        
        result.innerHTML=`<span>${bmi}</span>`
    }

    if(bmi<18.7){
        message.innerHTML="under weight"
    }
    else if(bmi>=18.7 && bmi<=24.9){
        message.innerHTML=" weigth within normal range"
    }else{
        message.innerHTML="overweight"
    }


})