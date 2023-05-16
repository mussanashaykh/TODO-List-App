const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let counter = 1;

addBtn.addEventListener('click', function() {
  const todoText = todoInput.value;
  if (todoText.trim() === '') {
    return;
  }
  const todoItem = createTodoItem(todoText);
  todoList.appendChild(todoItem);
  todoInput.value = '';
  counter++;
});

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = counter + '. ' + text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.classList.add('done-btn');
  doneBtn.addEventListener('click', function() {
    li.classList.toggle('done');
  });

  li.appendChild(deleteBtn);
  li.appendChild(doneBtn);
  return li;
}
