import { taskForm, taskList } from './refs.js';
import { renderTask } from './tasks.js';
taskForm.addEventListener('submit', addTask);

function addTask(event) { 
    event.preventDefault();
    const taskName = event.target.taskName.value.trim();
    const taskDescription = event.target.taskDescription.value.trim();
    console.log(taskName, taskDescription);
    if (!taskName || !taskDescription) {
        alert('Please enter both task name and description.');
        return;
    }
    const task = { name: taskName, description: taskDescription };
    renderTask(task);
    event.target.reset();
}

taskList.addEventListener('click', deleteBtn);

function deleteBtn(e) {
  if (e.target.classList.contains('task-list-item-btn')) {
    const parent = e.target.closest('.task-list-item');
    parent.remove();
  }
}
