let myLibrary = [];
// Array we're gonna put our details about the book;

// data structre for books object so that we can for mul;tiple object;

function Book(title, author, pages, read)
{
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// we're addding every books to my librarys;

function addBookToLibrary(title, author, pages, read)
{
  const newBook = new Book(title, author, pages, read)
  console.log( newBook);
   myLibrary.push(newBook)
   console.log(myLibrary)
}


// Now we want add the values in the div;
const  contentContainer = document.querySelector(".contentContainer");

contentContainer.innerHTML = " ";
const form = document.querySelector("form");
const addBook  = document.querySelector("#addBook");

addBook.addEventListener("click", ()=>{
  form.classList.toggle("Active");

})

// Rendor

function Rendor(){
  contentContainer.innerHTML = " ";
  myLibrary.forEach((items) =>{
    const container = document.createElement("div");
    container.classList.add("book")
    container.innerHTML = `
    <h1>Book Name: ${items.title}</h1>
    <p>Author Name: ${items.author}</p>
    <p>Number Of Pages: ${items.pages}</p>
    <p>Read?:${items.read}<p>
    
    <div class="bigDot">
    <button class="remove">REMOVE</button>
    <button class="toggle">Toggle</button>
    </div>

    `
    
    const removeBtn = container.querySelector(".remove");
    removeBtn.addEventListener("click", function(){
      removeMyLibrary(items.id);
      console.log(items.id);
    })

  

    contentContainer.appendChild(container);
  })

  
}

// Getting values from the form and putting value into addBookToLibrary function;


console.log(form)
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  const title = form.title.value;
  const author = form.author.value;
  const page = form.Pages.value;
  const read = form.read.value;
  console.log(read);
  let READ;
 
  READ = read === "true" ? "YES":"Not YET!";
  console.log(READ);
  // console.log(title);
  // console.log(author);
  // console.log(page);
  // console.log(READ);

   form.reset();

   addBookToLibrary(title, author, page, READ);
   Rendor();
   form.classList.toggle("Active");
})
console.log(myLibrary)

function removeMyLibrary(id){
  myLibrary = myLibrary.filter((Book) => Book.id !== id);
  Rendor();

}