
console.log('-index.js-')


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready..');

    //----------------------------------------------------
    // using DOM API
    //----------------------------------------------------

    // query DOM , bind event listeners, when event happern, process that event

    let alertBox = document.querySelector('.alert-info');
    let showBtn = document.querySelector('.btn-primary');
    let hideBtn = document.querySelector('.btn-danger');
    let greetBtn = document.querySelector('.btn-success');

    hideBtn.addEventListener('click', e => alertBox.style.display = 'none')
    showBtn.addEventListener('click', e => alertBox.style.display = '')
    greetBtn.addEventListener('click', e => {
        alertBox.innerHTML = "Good Morning";
    })



    //----------------------------------------------------
    // using Timer API
    //----------------------------------------------------

    let imageEle = document.querySelector('img');
    let idx = 0
    let interval = setInterval(() => {
        idx++;
        let image = `./images/${idx}.jpeg`
        //imageEle.src = image
        if (idx == 4) /*idx = 0*/clearInterval(interval)
    }, 1000);

    //------------------------------------------------------



    //----------------------------------------------------
    // using XHR/Fetch API     ==> AJAX
    //----------------------------------------------------

    let todosBtn = document.querySelector('.btn-dark');
    todosBtn.addEventListener('click', e => {
        let api = "https://jsonplaceholder.typicode.com/todos?_limit=5";
        let promise = fetch(api)
        promise
            .then(response => response.json())
            .then(todos => {
                let arr = [];
                todos.forEach((todo) => {
                    let liTemplate = `
                            <li class="list-group-item ${todo.completed ? 'bg bg-success' : ""}">
                              <span class="badge badge-primary">${todo.id}</span> 
                              <label>${todo.title}</label> 
                            </li>
                        `;
                    arr.push(liTemplate)
                });
                let todoList = document.querySelector('#todo-list')
                todoList.innerHTML = arr.join(" ")
            })
    })
})
