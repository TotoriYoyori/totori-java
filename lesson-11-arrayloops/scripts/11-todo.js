const todoList = ['have sex', 'sexy boys'];
renderTodoList();

// The following function is a common technique called 'Generating the HTML' so that new elements are displayed in the page using JavaScript. 
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  };

  console.log(todoListHTML);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};

function addTodo() {
  const todoLm = document.querySelector('.js-todo-input');
  const todo = todoLm.value;

  todoList.push(todo);
  console.log(todoList);

  todoLm.value = '';
};

function addTodo2() {
  const todo2Lm = document.querySelector('.js-todo2-input');
  const todo2 = todo2Lm.value;

  todoList.push(todo2);

  todo2Lm.value = '';
  renderTodoList();
};