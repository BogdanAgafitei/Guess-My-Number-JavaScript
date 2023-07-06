'use strict';
// function for displaying messages
function displayMessage (message){
    document.querySelector('.message').textContent = message;
}

// Randomize the number
let number =  Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = number;

/// Check the number logic
document.querySelector('.check').addEventListener('click', function () {
    //variables initialization
    const guess = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    let highscore = Number(document.querySelector('.highscore').textContent);

    if (score) {
        //if there is no number in guess
        if (!guess) {
            displayMessage('⛔️ No number!');
            document.querySelector('.score').textContent = --score;

            //It is the correct number
        } else if (guess === number) {
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
            }
            document.querySelector('.check').disabled = true;

            // It is either lower or higher
        } else {
            guess > number ? displayMessage('📈 Too high!') : displayMessage('📉 Too low!');
            document.querySelector('.score').textContent = --score;
        }

        // Have no points to play
    }else{
        displayMessage('💥 You lost the game!');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#f56042';
    }
});

// Press again logic ***
document.querySelector('.again').addEventListener('click', function (){
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;
})


