interface Todo {
  id: number;
  item: string;
  completed: boolean;
}

class TodoList {
  private todos: Todo[] = [];

  add(todoItem: string) {
    const todo: Todo = {
      id: Date.now(),
      item: todoItem,
      completed: false,
    };
    this.todos.push(todo);
    this.render();

  }

  toggle(id: number) {
    const todo = this.todos.filter(todo => todo.id === id);
    if (todo) {
      todo[0].completed = !todo[0].completed;
      this.render();
    }
  }

  remove(id: number) {
    const todo = this.todos.map(todo => todo.id === id)
    let ind!: number;
    for (let i=0; i<todo.length; i++) {
      if (todo[i] == true) {
        ind = i;
      }
    }
    this.todos.splice(ind, 1);
    this.render();

  }
  // update UI with current todo list
  // - create a new 'li' element for each item
  // - add delete button
  private render() {
    const todoList = document.getElementById('todo-list');
    todoList!.innerHTML = '';
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.innerHTML = todo.item;
      if (todo.completed) li.classList.add('completed');

      li.addEventListener('click', () => {
        this.toggle(todo.id);
      })

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.remove(todo.id);
      })

      li.appendChild(deleteButton);
      todoList?.appendChild(li);
    })
  }
}

const todoList = new TodoList();

const form = document.getElementById('add-todo-form') as HTMLFormElement;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('todo-item') as HTMLInputElement;
  const todoText = input.value.trim();
  if (todoText) {
    todoList.add(todoText);
    input.value = '';
  }
});
