export const container = document.querySelector(".container");

export function createBoard(){
const slidr = document.createElement("div");
slidr.classList.add("slider");
for(let i = 0; i < 5; i++)
{
    const mainContainer =  document.createElement("div");
    mainContainer.classList.add("mainContainer");
    slidr.appendChild(mainContainer);
}
container.append(slidr);

const totalSlide = 5;
let index = 0;

function sideShow(index){
    slidr.style.transform = `translateX(-${index * 800}px)`
}
setInterval(()=>{
    index = (index + 1 ) % totalSlide;
    sideShow(index);
}, 5000);

document.querySelector("#next").addEventListener("click", ()=>{
    index = (index + 1 ) % totalSlide;
    sideShow(index);
})

document.querySelector("#prev").addEventListener("click", ()=>{
    index = (index - 1 + totalSlide) % totalSlide;
    sideShow(index);
})


}

createBoard();