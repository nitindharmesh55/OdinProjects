// Getting container 
let container = document.querySelector("#container");

// getting grid ;
const grid = document.querySelector(".grid");

grid.addEventListener("click", ()=>{
    let gridCount = prompt("Enter Grid Count: ");
    gridCount = parseInt(gridCount);

    if (isNaN(gridCount) || gridCount <= 0 || gridCount >= 100)
    {
        return alert("please enter Nhumber Between 0 - 100");
    }

    container.innerHTML = " ";

    let squareSize = 640 / gridCount;

    for (let i = 0; i < gridCount * gridCount; i++)
    {
        const squar = document.createElement("div");
          squar.classList.add("squar");
        squar.style.width = squareSize + "px";
        squar.style.height = squareSize + "px";
      
        container.appendChild(squar);
    }
})