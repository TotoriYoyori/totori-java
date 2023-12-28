// If a line of code gets repeated more than once, consider boxing them into functions.

const todoList = 
  JSON.parse ( localStorage.getItem ('storedTodo') ) 
    || [{
      name: 'Your first reminder',
      dueDate: date()
      }];

renderTodoList();

function addTodo() {
  const nameLm = document.querySelector('.js-todo-input');
    const name = nameLm.value;

  const dueDateLm = document.querySelector('.js-due-date-input');
    const dueDate = dueDateLm.value;

  // Consider smarter naming conventions to shorthand the property name as a variable. In this case, name the variable exactly as the property name you want to push to.
  todoList.push({
    name,
    dueDate
  });

  nameLm.value = '';
  renderTodoList();
  // Consider creating a standardized function called saveToStorage or retrieveStorage for all instances of localStorage operations. 
  saveToStorage();
};

function saveToStorage() {
  localStorage.setItem
    ( 'storedTodo', JSON.stringify(todoList) );
};

// The following function is a common technique called 'Generating the HTML' so that new elements are displayed in the page using JavaScript. It uses an accumulator pattern procedure, where the accumulator is a box of HTML elements.
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
          saveToStorage();
        "> Delete </button>
    `;
    // The delete button splices the value out of the array and update the new array to the localStorage, effectively removing it by updating new status. 
    todoListHTML += html;
  };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};