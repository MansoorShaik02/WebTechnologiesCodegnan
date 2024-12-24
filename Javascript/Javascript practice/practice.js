// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('task-input');
//     const addTaskButton = document.getElementById('add-task-button');
//     const taskList = document.getElementById('task-list');

//     // Function to add a new task
//     const addTask = () => {
//         const taskText = taskInput.value.trim();
//         if (taskText) {
//             const taskItem = document.createElement('li');
//             taskItem.textContent = taskText;

//             // Create delete button
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', () => {
//                 taskList.removeChild(taskItem);
//             });

//             taskItem.appendChild(deleteButton);
//             taskList.appendChild(taskItem);
//             taskInput.value = ''; // Clear the input field
//         } else {
//             alert('Please enter a task.');
//         }
//     };

//     // Event listener for the add task button
//     addTaskButton.addEventListener('click', addTask);

//     // Optional: Allow pressing Enter to add a task
//     taskInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             addTask();
//         }
//     });
// });
const tasklist = document.getElementById('task-list')

const addTask = () => {
    const taskinput = document.getElementById('task-input')
    const tasktext = taskinput.value
    console.log(tasktext)
    if (tasktext) {
        const taskitem = document.createElement('li')
        taskitem.textContent = tasktext
        tasklist.appendChild(taskitem)
        const deletebutton = document.createElement('button')
        deletebutton.textContent = 'delete'
        deletebutton.addEventListener('click', () => {
            tasklist.removeChild(taskitem)
        })
        taskitem.appendChild(deletebutton)
        taskinput.value = ''

    } else {
        alert("nothing")
    }
}
const addtaskbutton = document.getElementById('add-task-button')
addtaskbutton.addEventListener('click', addTask)

