let buttons = document.querySelectorAll(".button");
let startBtn = document.getElementById("startBtn");

const game = () => {
  let roundNumber = 0;
  let yourScore = 0;
  let computerScore = 0;
  let tie = 0;
  startBtn.innerText = "Started";
  buttons.forEach((button) => {
    button.disabled = false;
  });
  document.getElementById("roundResult").innerText = "";
  document.getElementById("visibleResult").style.visibility = "hidden";
  for (const button of buttons) {
    button.addEventListener("click", (e) => {
      if (roundNumber < 5) {
        let buttonName = e.target.innerText.toLowerCase();
        const computerChoice = computerSelection();
        let roundResult = playRound(buttonName, computerChoice);
        document.getElementById("roundResult").innerText = roundResult;
        if (roundResult === "The computer won!") {
          computerScore += 1;
        } else if (roundResult === "You won!") {
          yourScore += 1;
        } else {
          tie += 1;
        }
        roundNumber++;
      }
      //startGameEvent function is to get result after every round.
      if (
        (yourScore >= 2 || computerScore >= 2 || tie >= 2) &&
        roundNumber == 5
      ) {
        startBtn.innerText = "Let's start again";
        document.getElementById("visibleResult").style.visibility = "visible";
        document.getElementById("you").innerText = Number(yourScore);
        document.getElementById("computer").innerText = Number(computerScore);
        document.getElementById("tie").innerText = Number(tie);

        if (yourScore > computerScore) {
          document.getElementById("result").innerText = "YOU WON !";
        } else if (yourScore < computerScore) {
          document.getElementById("result").innerText = "COMPUTER WON !";
        } else {
          document.getElementById("result").innerText = "GAME IS TIE !";
        }
        //these are all statements to diplay result on webpage.
        roundNumber = 0;
        yourScore = 0;
        tie = 0;
        computerScore = 0;
        buttons.forEach((button) => {
          button.disabled = true;
        });
        return;
      }
    });

    const computerSelection = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
        default:
        // code block
      }
    };
    //computerSelection function is to get random value.
    const playRound = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return "The game is a tie!";
      } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
      ) {
        return "The computer won!";
      } else {
        return "You won!";
      }
    };
    //compare and get result
  }
};
