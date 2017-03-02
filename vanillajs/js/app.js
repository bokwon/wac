//v9 - refactor: 4min
var todoList = {
	todos: [],
	displayTodos: function(){
		if (this.todos.length === 0)
		{
			console.log("My Todos are empty");
		} else {
			for (var i=0; i<this.todos.length; i++)
			{
				if (this.todos[i].completed === true){
					console.log("(x) " + this.todos[i].todoText);
				}else {
					console.log("( ) " + this.todos[i].todoText);
				}						
			}
		}
	},
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText, 
			completed: false
		});
        
        this.createNewTodoView(todoText);
		this.displayTodos();
	},
    createNewTodoView: function(todoText){
        var todoList = document.getElementById("todoList");
        var li = document.createElement("li");
        var div = document.createElement("div");
        // input, label, button
        div.innerHTML = todoText;
        
        li.appendChild(div);
        todoList.appendChild(li);  
    },
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position){
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function(){
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
		}else {
			for(var i=0; i<this.todos.length; i++){
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
    }
};

var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
	}
};

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
    



