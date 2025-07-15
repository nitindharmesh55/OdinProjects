
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read, id){
    const newId = crypto.randomUUID();
 const newbook = {
    title : title,
    author:author,
    pages:pages,
    read:read,
    id: newId

    
 }

  myLibrary.push(newbook);
  return newbook;

}

// asking user for the newBook;
addBookToLibrary("Harry-Potter", "J-K-Rolling", 2555, "yes");


const add_to_cart = document.querySelector(".add");
let add_data = document.querySelector("#tableForm");

add_to_cart.addEventListener("click", () => {
  let author = prompt("Author-Name:");
let title = prompt("Book Name:");
let pages = prompt("Number of the Page: ");
let read = prompt("Did You read it??");
addBookToLibrary(title, author, pages, read);
 add_data.innerHTML = " ";
myLibrary.forEach(user =>{
  let row = document.createElement("tr");
  
  row.innerHTML = `<td>${user.title}</td> 
  <td>${user.author}</td> <td>${user.pages} </td> <td>${user.read}</td>`

  add_data.appendChild(row);
})




})


