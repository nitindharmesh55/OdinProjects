const gameBoard  = document.querySelector("#game-board");
const message = document.querySelector("#message");
const resetBtn = document.querySelector("#reset");
let currentPlayer = "X";
let gameOver = false;

function createBoard(){
 for(let i = 0;  i < 9; i++)
 {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameBoard.append(cell);
  cell.addEventListener("click", ()=>{
    if(cell.textContent !== "" || gameOver) return;
    cell.textContent = currentPlayer;
    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  
  })
 }
 
}
createBoard();

const winingCombo = [
    [0,1,2],
    [3, 4, 5],
    [6, 7 , 8],
    [0, 3 , 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner(){
    const cells = document.querySelectorAll(".cell");
    
    for(let combo of winingCombo)
    {
        const [a, b, c] = combo;
        const CellOne = cells[a].textContent;
        const cellTwo = cells[b].textContent;
        const cellThree = cells[c].textContent;

        if(CellOne && CellOne === cellTwo && CellOne === cellThree)
        {
            alert(`${CellOne} wins!`);
            gameOver = true;
        }   
    
    }
    let isdraw = true;
    cells.forEach(cell =>{
        if(cell.textContent === "")
        {
            isdraw = false;
        }
    })
    if(isdraw){
        alert(`Well It's draw!`)
    }
}
checkWinner();

// Reset start from here!;p

resetBtn.addEventListener("click", ()=>{
    const cell = document.querySelectorAll(".cell")
    cell.forEach(cell =>{
        cell.textContent = "";
    })
    gameOver = false;
    currentPlayer = "X";
})