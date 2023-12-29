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

// This is an alternate way to write the traditional for-loops when it comes to L2A. Taking the array todoList, each value is returned as two parameters: each array value, and the index number. They are then used to run whatever functions you require.
  todoList.forEach( (todoObject,index) => {
    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button class = "js-delete-todo-button delete-todo-button"> Delete </button>
    `;
    todoListHTML += html;
    }
  );

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  // Adding an event listener to each delete buttons: 
   // We use .querySelectorAll here because there will be multiple instances of the class .js-delete-todo-button and we want to be able to select all of them. The normal querySelector only picks the first instance of the class.
   // .querySelectorAll returns an array, so forEach is used.
  document.querySelectorAll('.js-delete-todo-button')
    .forEach( (deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index, 1);
        renderTodoList();
      } );
    } );
};

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo2();
  } );

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