let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `WIN`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `LOSE`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);

}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `DRAW`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();