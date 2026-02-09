let userScore = 0;
let compScore =0;

const choices=document.querySelectorAll("button");
const massage=document.querySelector("#msg");
const userScorehead =document.querySelector("#user-score");
const compScorehead =document.querySelector("#comp-score");
 
const genComputerChoice=()=>{
    //rock paper scissors
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame =() =>{
    console.log("game was draw.");
    massage.innerText="Game Was Draw. paly again !"
}
const showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin){
        console.log("you Win!")
        userScore++;
        userScorehead.innerText=userScore;
        massage.innerText =`you Win ! Your ${userChoice} beats   ${compChoice}`;
        massage.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorehead.innerText=compScore;
        console.log("you lose");
        massage.innerText=`you lose!  ${compChoice} beats your  ${userChoice}`;
         massage.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    //computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice=",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userWin =compChoice === "scissors" ? false : true;

        }else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        console.log("button was clicked",userChoice);
        playGame(userChoice);

    });
});