const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let counter = 0;

function newTodo() {
  //alert('New TODO button clicked!')
  
  // counter - new button
  counter++;
  itemCountSpan.innerHTML = counter;
  uncheckedCountSpan.innerHTML = counter;

  // create TODO item
  (function addTodo() {
    // create todo list text item
    var listItem = document.createElement('li');
    listItem.setAttribute('id', classNames.TODO_ITEM);
    var itemText = document.createElement('span');
    itemText.innerText = prompt('Enter todo item: ');
    
    // create todo chechbox
    var checkBox = document.createElement('input');
    checkBox.setAttribute('type', classNames.TODO_CHECKBOX);
    
    // appending the checkbox and user input to list entry
    listItem.appendChild(checkBox);
    //listItem.innerText = prompt('Enter todo item: ');
    

    //append
    list.appendChild(listItem);
  }())
}
