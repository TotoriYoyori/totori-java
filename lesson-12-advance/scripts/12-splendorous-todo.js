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

// This is an alternate way to write the traditiona for-loops when it comes to L2A. 
  todoList.forEach(
    // Taking the array todoList, each value is returned as two parameters: each array value, and the index number. They are then used to run whatever functions you require.
    function (todoObject,index) {
      const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button class = "delete-todo-button" onclick ="
          todoList.splice(${index}, 1);
          renderTodoList();
        "> Delete </button>
    `;
    todoListHTML += html;
    }
  );

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
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