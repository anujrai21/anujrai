let userScore=0;
let CompScore=0;

const choices = document.querySelectorAll(".choice");  
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-Score");
const CompScorePara = document.querySelector("#comp-Score");
const drawGame =() =>{
     msg.innerText ="game was draw .play again";
    msg.style.backgroundColor=" #081b31";
};
const showWinner =(userWin ,userChoice , CompChoice) =>{
    if(userWin){
    userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
     else {
        CompScore++;
        CompScorePara.innerText =CompScore;
        
        msg.innerText =` you lose ${CompChoice} beats your ${userChoice}`; 
        msg.style.backgroundColor ="red";
    }
}

const genCompChoice= () => {
    const options = [ "stone", "paper" ,"scisor"];  
 const randIdx = Math.floor( Math.random() * 3);
 return options[ randIdx];
};
const playGame= ( userChoice) => {
    
    //generate computer choice
const CompChoice= genCompChoice();

if(userChoice === CompChoice){
    drawGame();
} 
else{
    let userWin =true;
    if( userChoice ==="stone"){
        userWin =CompChoice ===" paper" ? false: true;
    }
    else if(userChoice ===" paper"){
        userWin =CompChoice ===" scisor"? false: true;
    } else {
        userWin =CompChoice ==="stone" ? false: true;
    }
    showWinner(userWin ,userChoice,CompChoice);
}

};

choices.forEach(( choice)  =>{

    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
playGame(userChoice);

    });
});