// An Event is an Action that web browser can detect and respond to.
let btn = document.querySelector("#btn");

function handleClick(){
    alert("it was clicked!")
}
btn.addEventListener("click", handleClick);

// Event Capture and Evant Bubbling:

// 1.Event Bubbling: it start with most specific element and flows upword toword the least specific element!!
// When click the button Event  bubbling happend like this!!
// 1. Button  -> div - > body -> html - > document;

// 2.Event Capture: it start from leaset specific elemtn and the goes toward most specific elemtn;
// 1. Document -> Html -> Body -> div -> button;

// Int the event the first Eavent capture occure and then bubbling event occure 


// Event Object!!

btn.addEventListener("click", function(event){
         console.log(event.type);
})

let link = document.querySelector('a');
link.addEventListener("click", function(event){
    console.log("clicked");
    event.preventDefault();
})


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("NitinWants");
})

document.addEventListener("load", ()=>{
    console.log("Love Nitin")
})

document.addEventListener('beforeunload', (event)=>{
    console.log("Crime");
    event.preventDefault();
    event.returnValue = "";
})

document.addEventListener("unload", ()=>{
    console.log("Leave");
})