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
    
    this.todos.forEach(function(todo){
      if(todo.completed === true){
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo){
      if(completedTodos === totalTodos){
        todo.completed = false;
      }
      else{
        todo.completed = true;  
      }
    });
    
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
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
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
    
    todoList.todos.forEach(function(todo, position, todos){
      var todoLi = document.createElement("li");
      var todoTextWithCompletion = "";
      
      if(todo.completed === true){
        todoTextWithCompletion = "(x) " + todo.todoText;
      }else{
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
    }, this)
  },
  
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");
    var newTodo = document.getElementById("newTodo");

    todosUl.addEventListener("click", function(e){
  
      // event delegation
      var elementClicked = e.target;

      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }

    });

    newTodo.addEventListener("keyup", function(e){
      if(e.keyCode == 13) {
        if (newTodo.value === "" || newTodo.value.length === 0) {
          return;
        }else{
          todoList.addTodo(newTodo.value);
        }
        newTodo.value = "";
      }
    }); 
  }
  
};

view.setUpEventListeners();






