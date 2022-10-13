document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById('create-task-form')
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      newTask (e.target['new-task-description'].value)
    })
});

function newTask(todo){
  let listItem = document.createElement('p')
  let tasks = document.getElementById('tasks')
  listItem.textContent = (todo)
  tasks.appendChild(listItem)
}