const GameBoard = document.querySelector("#gameboard");
const Info  = document.querySelector("#info");
Info.textContent = "Circle Goes first!"
let go = "circle";

const startCell = [
    "", "", "", "", "", "", "", "", ""
]

function createBoard(){
   startCell.forEach((_cell, index)=> {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGO);
    GameBoard.append(cellElement);

   })
}
createBoard();

function addGO(e){
    console.log("clcikk", e)

   const goDisplay =  document.createElement("div");
   goDisplay.classList.add(go);
   e.target.append(goDisplay);
   go  = go === "circle" ? "cross":"circle"
   Info.textContent = `it is now ${go} go`
   e.target.removeEventListener("click", addGO);
   checkScore();
}
function checkScore(){
    const allSquare = document.querySelectorAll(".square");
    const winning = [
        [0 , 1 , 2], [3 , 4 , 5], [6 , 7 , 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6] 
    ]
   
    winning.forEach(array =>{
        const circleWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains("circle")

        )
        if(circleWins){
            Info.textContent = "Circle Wins!!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)));
        }


    })

     winning.forEach(array =>{
        const crossWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains("cross")
            

        )
        if(crossWins){
            Info.textContent = "Cross Wins!!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
        }

        
    })

}