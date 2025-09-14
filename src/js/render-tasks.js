import { taskForm, taskList } from './refs.js';
import { renderTask } from './tasks.js';
import { saveTask } from './local-storage-api.js';
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
    saveTask(task);
    event.target.reset();
}

taskList.addEventListener('click', deleteBtn);

function deleteBtn(e) {
  if (e.target.classList.contains('task-list-item-btn')) {
    const parent = e.target.closest('.task-list-item');
      const index = [...taskList.children].indexOf(parent);
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      savedTasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
      parent.remove();
  }
}
