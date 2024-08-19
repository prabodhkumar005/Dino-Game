var dinosor = document.querySelector('.dinosor');
var obstacle = document.querySelector('.obstacle');
var result = document.getElementById("result");

var game = document.querySelector(".game-box");
var score = document.getElementById("score");
var count = 0;



function jump() {
    dinosor.style.top = "110px";
    setTimeout(function() {
        dinosor.style.top = "170px"
    }, 500);
    count++;
}
window.addEventListener('keydown', jump);

var obstacle = document.querySelector('.obstacle');
setInterval(function(gameover) {
    var obstacleleft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var dinosortop = parseInt(window.getComputedStyle(dinosor).getPropertyValue("top"));

    if ((obstacleleft < 40) && (dinosortop > 120)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${count}`;
    }
}, 10)