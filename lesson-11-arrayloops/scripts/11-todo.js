const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
  }, {
  name: 'wash dishes',
  dueDate: '2022,12-22'
  }];
renderTodoList();

// The following function is a common technique called 'Generating the HTML' so that new elements are displayed in the page using JavaScript. 
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
      const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button class = "delete-todo-button" onclick ="
          todoList.splice(${i}, 1);
          renderTodoList();
        "> Delete </button>
    `;
    todoListHTML += html;
  };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};

function addTodo() {
  const todoLm = document.querySelector('.js-todo-input');
  const todo = todoLm.value;

  todoList.push(todo);
  todoLm.value = '';
};

function addTodo2() {
  const todo2Lm = document.querySelector('.js-todo2-input');
    const todo2 = todo2Lm.value;

  const dateLm = document.querySelector('.js-due-date-input');
    const date = dateLm.value;

  todoList.push({
    name: todo2,
    dueDate: date
  });

  todo2Lm.value = '';
  renderTodoList();
};