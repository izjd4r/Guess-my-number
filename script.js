"use strict";
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = '?';
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = "⛔️ No number";


  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = " 🎉 Weee! correct number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📉 Number too high. Try again.";
        score--
        document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
      " 📈 Number too low, keep trying";
      score--
      document.querySelector('.score').textContent = score;

    } else { document.querySelector('.message').textContent = '💥 you lost the game'
    document.querySelector('.score').textContent = 0;
     }
    
  } else if (score < 1){
    document.querySelector('.message').textContent = '💥 Game Over'
  }
});


document.querySelector('.again').addEventListener('click', function (){
  score = 20
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.guess').value = ''
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...'
  
  
})
