//delete, change, toggle todos
//v10 Requirement
//- There should be a way to create delete buttons
//- delete button for each todo
//- each li should have an id that has the todo position
//- delete buttons should have access to the todo id 
//- clicking delete should update todoList.todos and the DOM

var todoList = {
  todos: [],
  addTodo: function(todoText)
  {
    this.todos.push({
      todoText: todoText, 
      completed: false
    });

    view.displayTodos();
  },
  changeTodo: function(position, todoText)
  {
    this.todos[position].todoText = todoText;
    view.displayTodos();
  },
  deleteTodo: function(position)
  {
    this.todos.splice(position, 1);
    view.displayTodos();
  },
  toggleCompleted: function(position)
  {
    var todo = this.todos[position];
    if (todo !== undefined){
      todo.completed = !todo.completed;
    }

    view.displayTodos();
  },
  toggleAll: function()
  {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for (var i=0; i<totalTodos; i++) {
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }

    if(completedTodos === totalTodos){
      for(var i=0; i<this.todos.length; i++){
        this.todos[i].completed = false;
      }
    }else{
      for(var i=0; i<this.todos.length; i++){
        this.todos[i].completed = true;
      }
    }
    view.displayTodos();
  }
};

var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  }
};

var view = {
  displayTodos: function(){
    var todoUl = document.querySelector("ul");
    todoUl.textContent = "";

    for (var i=0; i<todoList.todos.length; i++){
      var li = document.createElement("li");

      var button = document.createElement("button");

      if (todoList.todos[i].completed === true){
        li.textContent = "(x) " + todoList.todos[i].todoText;
      }else{
        li.textContent = "( ) " + todoList.todos[i].todoText;
      }   
      todoUl.appendChild(li);
    }
  }
}

var newTodo = document.getElementById("newTodo");
newTodo.addEventListener("keyup", function(event){
  if(event.keyCode == 13) {
    if (newTodo.value === "" || newTodo.value.length === 0) {
      return;
    }else{
      todoList.addTodo(newTodo.value);
    }
    newTodo.value = "";
  }
})




