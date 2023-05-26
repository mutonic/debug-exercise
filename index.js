   // Array to store the to-do items
   const todos = [];

   // Function to add a new to-do item
   function addTodo() {
     const todoInput = document.getElementById("newTodo");
     const todo = todoInput.value;
     if (todo) {
       todos.push(todo);
       todoInput.value = "";
       displayTodos();
     }
   }

   // Function to remove a to-do item
   function removeTodo(index) {
     todos.splice(index, 1);
     displayTodos();
   }

   // Function to display the to-do list
   function displayTodos() {
     const todoList = document.getElementById("todolist");
     todoList.innerHTML = "";

     if (todos.length === 0) {
       const listItem = document.createElement("li");
       listItem.textContent = "The to-do list is empty.";
       todoList.appendChild(listItem);
     } else {
       for (let i = 0; i < todos.length; i++) {
         const listItem = document.createElement("li");
         listItem.textContent = `${i + 1}. ${todos[i]}`;

         const removeButton = document.createElement("button");
         removeButton.textContent = "Remove";
         removeButton.addEventListener("click", () => {
           removeTodo(i);
         });

         listItem.appendChild(removeButton);
         todoList.appendChild(listItem);
       }
     }
   }