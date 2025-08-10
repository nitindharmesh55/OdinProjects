// Creating toDo List from here!1

export const MainContent =  document.querySelector(".mainContent");

export const clickBtn = document.querySelector("#click");
export const OkayBtn = document.querySelector("#done");

export function TodoList(title, description, dueDate, priority, notes, checkList)
{
    return{
        title, description, dueDate, priority, notes, checkList
    };
}


export const task = clickBtn.addEventListener("click", ()=>{

    // Asking title for the  task;
    const createTask = document.createElement("div");
    createTask.classList.add("create");
    

    createTask.innerHTML = `
    <div class="form-group">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" >
  </div>

  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" id="description" name="description">
  </div>

  <div class="form-group">
    <label for="dueDate">Due Date</label>
    <input type="date" id="dueDate" name="dueDate">
  </div>

  <div class="form-group">
    <label for="priority">Priority</label>
    <input type="text" id="priority" name="priority">
  </div>

  <div class="form-group">
    <label for="notes">Notes</label>
    <input type="text" id="notes" name="notes">
  </div>

  <div class="form-group">
    <label for="check">Check</label>
    <input type="checkbox" id="check" name="check">
  </div> `
  

    MainContent.append (createTask);
    

})

export const Done =  OkayBtn.addEventListener("click", ()=>{
    const Task =  document.querySelector(".create");

      let Title = document.querySelector("#title").value;

    let description = document.querySelector("#description").value;

    let dueDate = document.querySelector("#dueDate").value;

    let priority = document.querySelector("#priority").value;

    let notes = document.querySelector("#notes").value;

    let checkBox = document.querySelector("#check").value;

    const taskOne = TodoList(Title, description, dueDate, priority, notes, checkBox );
    console.log(taskOne);


    const todo = document.createElement("div");
    todo.classList.add("todo")
    todo.innerHTML = `
    <p>Title: ${taskOne.title}</p> <br>
    <p>Description: ${taskOne.description} </p> <br>
    <p>DueDate:${taskOne.dueDate}</p> <br>
    <p>Priority: ${taskOne.priority}</p><br>
    <p>Notes:${taskOne.notes}</p> <br>
    <p>check: ${taskOne.checkList}</p>
    
    `
    MainContent.appendChild(todo);

    

   if(Task){
    Task.remove();
   }
})