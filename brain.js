// Cache Dom
let playerOneTurn=true;
let ScoreP1 = 0, ScoreP2 = 0;

function cacheDom(){
    let boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(cul => cul.addEventListener("mousedown", function()
    {
        if(cul.textContent == "")
        {
            cul.textContent = playerOneTurn? "X" : "O";
            winningCondition(0, 1, 2);
            winningCondition(3, 4, 5);
            winningCondition(6, 7, 8);
            winningCondition(0, 3, 6);
            winningCondition(1, 4, 7);
            winningCondition(2, 5, 8);
            winningCondition(0, 4, 8);
            winningCondition(2, 4, 6);
            playerOneTurn=!playerOneTurn;
        }
    }
    ));
}
cacheDom();


function winningCondition(a, b, c){
    let Cells = Array.from(document.querySelectorAll(".box")); 
    
    if(Cells[a].innerHTML.length && Cells[a].textContent == Cells[b].textContent && Cells[b].textContent == Cells[c].textContent){
        UpdateScore(playerOneTurn);
    }
}

function UpdateScore(winner) {

    if (winner == true)
    {
        let playerWWW = document.querySelector("#p1 > p");
        let temp = parseInt(playerWWW.textContent,10);
        playerWWW.textContent = temp+1;
    } 
    else if (winner == false)
    {
        let playerWWW = document.querySelector("#p2 > p");
        let temp = parseInt(playerWWW.textContent,10);
        playerWWW.textContent = temp+1;
    }
    clearBoard();
}

function clearBoard()
{
    let board = Array.from(document.querySelectorAll(".box"));
    for (let i = 0; i < board.length; i++)
    {
        board[i].textContent="";
    }
}

function restartGame()
{
    clearBoard();
    let score1 = document.querySelector("#p1 > p");
    let score2 = document.querySelector("#p2 > p");
    score1.textContent="0";
    score2.textContent="0";
}

let resButton = document.querySelector("#restart");
resButton.addEventListener("mousedown", function()
{
    restartGame();
} 
);