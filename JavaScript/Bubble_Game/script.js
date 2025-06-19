function MakeBubble() {
    var clutter=""

for(var i=1; i<=207; i++){
    var rn=Math.floor(Math.random()*12)
    clutter+=`<div class="bubble w-[3vw] h-[6vh] flex items-center justify-center cursor-pointer text-white rounded-[50%] bg-green-900">${rn}</div>`
}

document.querySelector('.pbtm').innerHTML=clutter
}

var timer=60;
function Timer(){
    var time=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".Timer").textContent=timer
        }else{
            clearInterval(timer)
            document.querySelector(".pbtm").innerHTML=`<div class="flex items-center w-full justify-center">Game Over</div>`
        }
    },1000)
}
var Hit_rn=undefined;
function getNewHit() {
     Hit_rn=Math.floor(Math.random()*12)
    document.querySelector(".Hit").textContent=Hit_rn
}

let score=0;
function GetScore() {
    score+=10;
    document.querySelector(".score").textContent=score
}

document.querySelector(".pbtm").addEventListener('click', function(e){
    if(Number(e.target.textContent) === Hit_rn ){
        GetScore()
        getNewHit()
        MakeBubble()
    }
    
})

MakeBubble()

Timer()
getNewHit()