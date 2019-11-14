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
let todoNumber = counter + 1;

function newTodo() {
  // initialize all the elements the list will contain
  var count = parseInt(itemCountSpan.textContent);
  var uncheckedCount = parseInt(uncheckedCountSpan.textContent);
  var listItemContainer = document.createElement('div');
  var listItem = document.createElement('li');
  var listItemText = prompt('Enter todo item: ');
  var checkBox = document.createElement('input');
  var deleteButton = document.createElement('button');

  //increase counter variables
  count++;
  uncheckedCount++;

  //checkbox
  checkBox.type = 'checkbox';
  checkBox.className = classNames.TODO_CHECKBOX;

  checkBox.onclick = function() {
    if(this.checked) {
      uncheckedCount = parseInt(uncheckedCountSpan.textContent);
      uncheckedCount = uncheckedCount - 1;
      uncheckedCountSpan.textContent = uncheckedCount;
      listItem.style.setProperty('text-decoration', 'line-through');
    } else {
      uncheckedCount = parseInt(uncheckedCountSpan.textContent);
      uncheckedCount = uncheckedCount + 1;
      uncheckedCountSpan.textContent = uncheckedCount;
      listItem.style.setProperty('text-decoration', 'none');
    }
  }

  //delete button
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'delete';

  deleteButton.onclick = function() {
    listItemContainer.remove();
    count = parseInt(itemCountSpan.textContent);
    count--;
    itemCountSpan.textContent = count;
    if(!checkBox.checked) {
      uncheckedCount = parseInt(uncheckedCountSpan.textContent);
      uncheckedCount--;
      uncheckedCountSpan.textContent = uncheckedCount;
    }
  }

  //todo items
  listItem.className = classNames.TODO_ITEM;
  listItem.textContent = '#' + todoNumber + '.  ' + listItemText + '\t';
  
  //append created items
  listItem.appendChild(checkBox);
  listItem.appendChild(deleteButton);
  listItemContainer.appendChild(listItem);
  list.appendChild(listItemContainer);

  //counters to html span
  itemCountSpan.textContent = count;
  uncheckedCountSpan.textContent = uncheckedCount;
}
