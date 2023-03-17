function bubble(){
    var clutter=""

for(i=0; i<65; i++){
    var rn= Math.floor(Math.random()*10)
    clutter+=` <div class="bubble">${rn}</div>`
}

document.querySelector("#bubbles").innerHTML=clutter

document.querySelector("#bubbles").addEventListener("click", function(dets){
    console.log(dets.target.textContent)
})
}

var score=0

function setnshowscore(){
    document.querySelector("#score").innerHTML=score
}
           
var timer=60

function setnshowtime(){
   setInterval(function(){
       if(timer>0){
           timer--
           document.querySelector("#timer").textContent=timer
       }
       else{
           document.querySelector("#bubbles").innerHTML=`<h1> Game Over<br> Score was: ${score} </h1>`
       }
   }, 1000)
}
var hit
function newhit(){
    hit=Math.floor(Math.random()*10) 
    document.querySelector("#hit").textContent=hit
}

function mainengine(){
    document.querySelector("#bubbles").addEventListener("click", function(dets){
        if(Number(dets.target.textContent)===hit)
        setnshowscore(score+=10)
        bubble()
        newhit()
    })
}
mainengine()
newhit()
setnshowtime()
setnshowscore(score)
bubble()

