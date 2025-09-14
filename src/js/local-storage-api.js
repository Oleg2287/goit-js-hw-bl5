export function saveTask(task) {
// localStorage.setItem('tasks', JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
};
export function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}