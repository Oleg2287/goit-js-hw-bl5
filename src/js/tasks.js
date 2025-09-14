import { taskList } from './refs.js';
export function renderTask({ name, description }) { 
    const markup = `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${name}</h3>
      <p>${description}</p>
  </li>`;
   taskList.insertAdjacentHTML('beforeend', markup);
}