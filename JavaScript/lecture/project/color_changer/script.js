const Buttons=document.querySelectorAll(".button")

const Body=document.querySelector("body")


Buttons.forEach( function(button){
    button.addEventListener('click', function(e){
       if(e.target.id==="red"){
        Body.style.backgroundColor=e.target.id
       }
       if(e.target.id==="green"){
        Body.style.backgroundColor=e.target.id
       }
       if(e.target.id==="blue"){
        Body.style.backgroundColor=e.target.id
       }
    })
    
} )