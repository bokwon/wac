//toggleAll, displayTodo use forEach()

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
    
    this.todos.forEach(function(todo, index, todos){
      if(todos[index].completed === true){
        completedTodos++;
      }
    })

    if(completedTodos === totalTodos){
      
      this.todos.forEach(function(todo, index, todos){
        todos[index].completed = false;
      });
      
    }else{
      
      this.todos.forEach(function(todo, index, todos){
        todos[index].completed = true;
      });
      
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
    
    todoList.todos.forEach(function(todo, index, todos){
      var li = document.createElement("li");
      li.setAttribute("id", index);
      
      var button = document.createElement("button");
      button.textContent = "Delete";
      button.setAttribute("onClick", "todoList.deleteTodo(" + index + ")");
      
      if(todos[index].completed === true){
        li.textContent = "(x) " + todos[index].todoText;
      }else{
        li.textContent = "( ) " + todos[index].todoText;
      }
      
      li.appendChild(button);
      todoUl.appendChild(li);
      
    })

//    for (var i=0; i<todoList.todos.length; i++)
//    {
//      var li = document.createElement("li");
//      li.setAttribute("id", i);
//
//      var button = document.createElement("button");
//      button.textContent = "Delete";
//      button.setAttribute("onClick", "todoList.deleteTodo("+i+")");
//
//      if (todoList.todos[i].completed === true){
//        li.textContent = "(x) " + todoList.todos[i].todoText;
//      }else{
//        li.textContent = "( ) " + todoList.todos[i].todoText;
//      }
//      
//      li.appendChild(button);
//      todoUl.appendChild(li);
//    }
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
});






