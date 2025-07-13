const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess) || guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }else {
        attempts++;

        if (guess < answer){
            window.alert("TO LOW! TRY AGAIN!!!");
        }else if (gues > answer){
            window.alert("TOO HIGH! TRY AGAIN!!!");
        }else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}