'use strict';
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent 
document.querySelector('.message').textContent = 'correct ans';
*/

//This is the code for the generation of the random number in the JS in our casr it is from the 0 to 20 and the random() function returns the number between 0 and the 1
let random_guess = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = random_guess;
let score = 20;
let high_score = 0;

const displayMessage = function(my_message){
    document.querySelector('.message').textContent = my_message;
}



document.querySelector('.check').addEventListener('click', function () {
    const guess_number = Number(document.querySelector('.guess').value);
    // console.log(guess_number, typeof guess_number);

    //When the player doesn't choose any number
    if (!guess_number) {
        // document.querySelector('.message').textContent = 'Select Again MF...!';
        displayMessage('Select Again MF...!');
    }
    //when the palyer win condition
    else if (guess_number === random_guess) {
        document.querySelector('.message').textContent = 'Badhai Ho BDSK..!';
        document.querySelector('.number').textContent = random_guess;
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30rem';
        //Highscore condition for the Game
        if (score > high_score) {
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;
        }
        //When the player guess the number TOO big..!
    } else if(guess_number!==random_guess){
        if (score > 1) {
            //Ternery operator would be the best option for the simple one line conditional operations
            document.querySelector('.message').textContent = guess_number>random_guess ? '📈Too high..!' :'📉Too low..!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //Loosing Condition
            document.querySelector('.message').textContent =
                '💣 You Lost MF.....!';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = 'GAME OVER';
            document.querySelector('.number').style.width = '30rem';
        }
    }
    //------------This is the part of the Refactoring code------------ 
//     else if (guess_number > random_guess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent =
//                 'Too high MF.....!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             //Loosing Condition
//             document.querySelector('.message').textContent =
//                 '💣 You Lost MF.....!';
//         }
//         //when the palyer guess the number low..!
//     } else if (guess_number < random_guess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too Low MF.....!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             //loosing condition
//             document.querySelector('.message').textContent =
//                 '💣 You Lost MF.....!';
//         }
//     }
});

//set the repeating value to the initial position
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Try New Gussing......!';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
