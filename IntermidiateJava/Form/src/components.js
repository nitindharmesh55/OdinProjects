const form = document.querySelector("form");
const email = document.querySelector("#mail");
const emailError =document.querySelector("#mail + span.error");
email.addEventListener("input", (event)=>{
    if(email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    }
    else
    {
        showError();
        event.preventDefault();
    }
});

function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address.";
    }
    else if(email.validity.typeMismatch){
        emailError.textContent = "Entered value needs to be an email address!!";
    }
    else if(email.validity.tooshort)
    {
        emailError.textContent =  `Email should be at leat ${email.minLength} characters and You entered ${email.value.length}`;
    }
    emailError.className = "error active";
}