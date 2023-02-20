var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.add = function (todoItem) {
        var todo = {
            id: Date.now(),
            item: todoItem,
            completed: false
        };
        this.todos.push(todo);
        this.render();
    };
    TodoList.prototype.toggle = function (id) {
        var todo = this.todos.filter(function (todo) { return todo.id === id; });
        if (todo) {
            console.log('todo', todo, todo[0]);
            todo[0].completed = !todo[0].completed;
            this.render();
        }
    };
    TodoList.prototype.remove = function (id) {
        var todo = this.todos.map(function (todo) { return todo.id === id; });
        var ind;
        for (var i = 0; i < todo.length; i++) {
            if (todo[i] == true) {
                ind = i;
            }
        }
        // const todoIndex = this.todos.indexOf(todo);
        console.log(this.todos, ind);
        this.todos.splice(ind, 1);
        this.render();
        // if (todoIndex !== -1) {
        //   this.todos.splice(todoIndex, 1);
        //   this.render();
        // }
    };
    // update UI with current todo list
    // - create a new 'li' element for each item
    // - add delete button
    TodoList.prototype.render = function () {
        var _this = this;
        var todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        this.todos.forEach(function (todo) {
            var li = document.createElement('li');
            li.innerHTML = todo.item;
            if (todo.completed)
                li.classList.add('completed');
            li.addEventListener('click', function () {
                _this.toggle(todo.id);
            });
            var deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', function (e) {
                e.stopPropagation();
                _this.remove(todo.id);
            });
            li.appendChild(deleteButton);
            todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(li);
        });
    };
    return TodoList;
}());
var todoList = new TodoList();
var form = document.getElementById('add-todo-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('todo-item');
    var todoText = input.value.trim();
    if (todoText) {
        todoList.add(todoText);
        input.value = '';
    }
});
