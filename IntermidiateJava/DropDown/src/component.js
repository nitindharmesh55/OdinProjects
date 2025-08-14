export const container = document.querySelector(".container");

export function createBtn(){
 const box = document.createElement("div");
 box.classList.add("box");
 for(let i = 0; i < 3; i++)
 {
    const classDiv = document.createElement("div");
    classDiv.classList.add("btnStyle");
    box.append(classDiv);
 }
 container.append(box);

 
 const clickEvents = document.querySelector(".box");
  const task = clickEvents.addEventListener("click", ()=>{
    clickEvents.classList.add("boxtt");

    const page = document.createElement("div");
    page.classList.add("page");
    page.innerHTML = `
     <a href="#">Home<a/>
        <a href="#">Home<a/>   <a href="#">Home<a/>
        <button id="close">X</button>
    
    `
    container.append(page);

    const closeBtn = document.querySelector("#close");
    closeBtn.addEventListener("click", ()=>{
        page.remove();
        clickEvents.classList.remove("boxtt")
    })

});

}
createBtn();



