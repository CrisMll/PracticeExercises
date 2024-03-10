//primero se recogen los elementos que queremos a traves de querySelector

document.addEventListener('DOMContentLoaded', (event) => {
    const taskList = document.querySelector('#tasks-list');
    const newTaskInput = document.querySelector('#new-task-input');
    const addTaskButton = document.querySelector('#add-task-button');

    //comprobaciones
    console.log(taskList);
    console.log(newTaskInput); 
    console.log(addTaskButton); 





//array para guardar todas las tareas que se van creando
const tasks = [];

// objeto global llamado app para recoger las referencias
const app = {
    //Lo indico asi aunque ya no es necesario escribir el valor si es igual que la propiedad
    tasks, 
    taskList,
    newTaskInput,
}

//crea el objeto de la tarea
function createTask(title, isCompleted = false){
    console.log('Creando tarea: ' + title); 
    return{
        id: Date.now(),
        title,
        isCompleted,
    }
}

/*
window.onload = function(){
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    app.tasks = savedTasks.map((task) => {
        return createTask(task.title, task.isCompleted);
    });

    app.tasks.forEach((task) => {
        return addTaskToList(task, app.tasksList);
    });
}

function saveTasksToLocalStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
*/


function addTaskToList(task, taskList){
    console.log('Añadiendo tarea a la lista')
    const taskElement = createTaskElement(task);
    console.log(taskElement);
    //añade como hijo al elemento desde el que se llama, en este caso los 'li' en la 'ul'
    taskList.appendChild(taskElement);
    console.log(taskList); 
    taskList.innerHTML = taskList.innerHTML;
}

//crea el objeto de la tarea, lo añade a la estructura de datos que guarda las tareas y llama a la funcion que lo inserta en el html
function addTask(app){
    //
    console.log('Añadiendo tarea');
    const newTaskTitle = app.newTaskInput.value;
    console.log('Título de la nueva tarea: ' + newTaskTitle);
    //objeto que representa la nueva tarea creada con la funcion createTask
    const newTask = createTask(newTaskTitle);
    //incluye en el array la tarea creada
    app.tasks.push(newTask);
    //renderiza en el html el elemento que simboliza la tarea 
    addTaskToList(newTask, app.taskList);
    //asi cuando escribimos un texto y le damos a añadir se borra para escribir otra desde cero
    app.newTaskInput.value = '';
}


//REPRESENTACION EN EL HTML

function createTaskElement(task){

    console.log('Creando elemento de tarea');
    const taskElement =  document.createElement('li');//crea el li

    console.log(taskElement);
    const taskCheckbox = document.createElement('input');//crea el checkbox

    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;
    //permite que el elemento desde el que se llama la funcion escuche un elemento concreto, en este caso change
    taskCheckbox.addEventListener('change', () =>{
        task.isCompleted = taskCheckbox.checked;
        taskText.classList.toggle("completed", task.isCompleted);
    })

    const taskText = document.createElement('span');
    taskText.textContent = task.title;
    taskText.classList.toggle("completed", task.isCompleted);

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.textContent = 'Eliminar';
    taskDeleteButton.className = 'delete-button';
    taskDeleteButton.addEventListener('click', () => {
        //Eliminar tarea
        taskElement.remove();
        const taskIndex = app.tasks.indexOf(task)
        if (taskIndex > -1){
            app.tasks.splice(taskIndex, 1);
        }
    })

    //una vez tenemos los elementos los creamos como hijos al li
    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(taskDeleteButton);

    return taskElement;
}
//llamar a la funcion addTask al hacer click y encadenar el resto

addTaskButton.addEventListener('click', () => {
    console.log('Botón clicado'); 
    addTask(app);
});

});