var todoList = {
    todos : [],
    addTodo: function(todoText) {
        this.todos.push(
            {
                todoText: todoText,
                completed: false
            }
        )
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        totalTodos = this.todos.length;
        completedTodos = 0;

        for( var i = 0; i < totalTodos; i++ ) {
            if( this.todos[i].completed === true ) {
                completedTodos++;
            }
        }

        if( completedTodos === totalTodos ) {
            for( var i = 0; i < totalTodos; i++ ) {
                this.todos[i].completed = false;
            }
        } else {
            for( var i = 0; i < totalTodos; i++ ) {
                this.todos[i].completed = true;
            }
        }
    }
}

var handlers = {
    toggleAll: function(){
        todoList.toggleAll();
        views.displayTodos();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo( addTodoTextInput.value );
        addTodoTextInput.value = '';
        views.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        views.displayTodos();
    },
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        views.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedPostionInput = document.getElementById('toggleCompletedPostionInput');
        todoList.toggleCompleted(toggleCompletedPostionInput.valueAsNumber);
        toggleCompletedPostionInput.value = '';
        views.displayTodos();
    }
};

// view object
var views = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for( var i = 0; i < todoList.todos.length; i++ ){
            var todosLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoCompletionText = '';
            if( todo.completed === true ) {
                todoCompletionText = '(x) ' + todo.todoText;
            } else {
                todoCompletionText = '( ) ' + todo.todoText;
            }
            todosLi.textContent = todoCompletionText;
            todosUl.appendChild(todosLi);
        }
    }
}