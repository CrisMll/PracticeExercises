//primero se recogen los elementos que queremos a traves de querySelector
const tasksList = document.querySelector('#tasks-list');
const newTaskInput = document.querySelector('#new-task-input');
const addTaskButton = document.querySelector('#add-task-button');

//crea el array con las referencias
const tasks = [];

//crea el objeto global
const app = {
    tasks,
    tasksList,
    newTaskInput,
};


window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    app.tasks = savedTasks.map((task) => {
        return createTask(task.title, task.isCompleted);    
    });
    app.tasks.forEach((task) => {
        return addTaskToList(task, app.tasksList);
    });
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//crea el objeto de la tarea
function createTask(title, isCompleted = false) {
    return {
        id: Date.now(),
        title,
        isCompleted,
    };
}



function addTaskToList(task, taskList){
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement); 
    //añade como hijo al elemento desde el que se llama, en este caso los 'li' en la 'ul'
}

//crea el objeto de la tarea, lo añade a la estructura de datos que guarda las tareas y llama a la funcion que lo inserta en el html
function addTask(app){
    const newTaskTitle = app.newTaskInput.value;
    //objeto que representa la nueva tarea creada con la funcion createTask
    const newTask = createTask(newTaskTitle);
    //incluye en el array la tarea creada
    app.tasks.push(newTask);
    //renderiza en el html el elemento que simboliza la tarea 
    addTaskToList(newTask, app.tasksList);
    saveTasksToLocalStorage(app.tasks);
    //asi cuando escribimos un texto y le damos a añadir se borra para escribir otra desde cero
    app.newTaskInput.value = '';
}


//REPRESENTACION EN EL HTML

function createTaskElement(task) {
    const taskElement = document.createElement('li');
    
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;
    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = taskCheckbox.checked;
        taskText.classList.toggle("completed", task.isCompleted);
        saveTasksToLocalStorage(app.tasks);
    });

    const taskText = document.createElement('span');
    taskText.textContent = task.title;
    taskText.classList.toggle("completed", task.isCompleted);

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.textContent = 'Eliminar';
    taskDeleteButton.className = 'delete-button';
    taskDeleteButton.addEventListener('click', () => {
        taskElement.remove();

        const taskIndex = app.tasks.indexOf(task);
        if (taskIndex > -1) {
            app.tasks.splice(taskIndex, 1);
        }
        saveTasksToLocalStorage(app.tasks);
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(taskDeleteButton);

    return taskElement;
}

//llamar a la funcion addTask al hacer click y encadenar el resto
addTaskButton.addEventListener('click', () => {
    addTask(app);
});

newTaskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask(app);
    }
});
