let newTodo = document.querySelector('.todo');
let addTodo = document.querySelector('.btn');
let todo = document.querySelector('.todo__list')
let todoList = [];

addTodo.addEventListener('click', function () {
    if (newTodo.value === '') {
        alert('Строка пустая');
        return; // Останавливаем выполнение функции, если строка пустая
    }

    let item = {
        title: newTodo.value,
        state: false
    }

    todoList.push(item);

    let lastIndex = todoList.length - 1;
    let newItemHTML = `
        <div class='todo__items' id='todo__items_${lastIndex}'>
            <span class='a' id='todo__item_${lastIndex}'>${item.title}</span>
            <button class="check" id='check__${lastIndex}'>✔</button>
            <button class="delete" id='del__${lastIndex}'>delte</button>
        </div>
    `;

    todo.innerHTML += newItemHTML;
    newTodo.value = '';

    todoList.forEach((e, i) => {
        let todoItem = document.getElementById('todo__item_' + i)
        let checkBtn = document.getElementById('check__' + i)
        checkBtn.addEventListener('click', () => {
            checkBtn.classList.toggle('active')
            todoItem.classList.toggle('todo__active')
        })

        let del = document.getElementById('del__' + i)
        let todoItems = document.getElementById('todo__items_' + i)
        del.addEventListener('click', () => {
            todoList.splice(i)
            todoItems.remove();

        })
    })

});


