const randomColor = function () {
    const bg = '0123456ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        color +=  bg[Math.floor(Math.random() * 16)]
    
    }
    return color;
};

let intervalID;

const StartChangingColor=function(){
   if (!intervalID) {
    intervalID= setInterval(changebgColor,1000);
   }

    function changebgColor(){
        document.body.style.backgroundColor=randomColor()
    }
} 
const StopChangingColor=function(){
    clearInterval(intervalID)
    intervalID=null
}


document.querySelector("#start").addEventListener('click', StartChangingColor)

document.querySelector("#stop").addEventListener('click', StopChangingColor)