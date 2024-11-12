let tasks = [];

// Carregar tarefas do localStorage
function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  } else {
    tasks = [];
  }
  renderTasks();
}

// Adicionar nova tarefa
document.getElementById('saveButton').addEventListener('click', function(e) {
  e.preventDefault();
  let input1Val = document.getElementById('input1').value;
  let input2Val = document.getElementById('input2').value;
  let input3Val = document.getElementById('input3').value;

  if (input1Val === '' || input2Val === '' || input3Val === '') {
    document.getElementById('err_msg').classList.remove('hidden');
    input1.value = '';
    input2.value = '';
    input3.value = '';
    return;
  }

  const task = {
    id: Date.now(),
    title: input1Val,
    type: input2Val,
    description: input3Val
  };

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  input1.value = '';
  input2.value = '';
  input3.value = '';

  alert('Tarefa salva!');
  document.getElementById('err_msg').classList.add('hidden');
  renderTasks();
});

// Renderizar tarefas
function renderTasks() {
  let taskDisplay = document.getElementById('tasks_display');
  taskDisplay.innerHTML = '';
  let listTasks = document.getElementById('task_list')

  if (tasks.length === 0) {
    document.getElementById('empty_msg').classList.remove('hidden')
  }

  tasks.forEach(task => {
    let taskElement = document.createElement('div');
    taskElement.classList.add('task-item', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md');
    taskElement.innerHTML = `
      <h3 class="text-lg font-semibold">${task.title}</h3>
      <p class="text-sm text-gray-600">${task.description}</p>
      <p class="text-sm text-purple-600 font-semibold">Categoria: ${task.type}</p>
      <div class="mt-2 px-4 py-2">
        <button class="w-full py-2 bg-purple-800 hover:bg-purple-600 text-white rounded" onclick="editTask(${task.id})">Editar</button>
        <button class="w-full mt-2 py-2 bg-purple-800 hover:bg-purple-600 text-white rounded" onclick="deleteTask(${task.id})">Deletar</button>
      </div>
    `;
    taskDisplay.appendChild(taskElement);
  });
}

// Excluir tarefa
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Função de editar
function editTask(taskId) {
  const taskToEdit = tasks.find(task => task.id === taskId);
  if (taskToEdit) {
    document.getElementById('editTitle').value       = taskToEdit.title;
    document.getElementById('editType').value        = taskToEdit.type;
    document.getElementById('editDescription').value = taskToEdit.description;
    document.getElementById('saveEditBtn').setAttribute('data-editing', taskId);
    document.getElementById('editModal').classList.remove('hidden');
  }
}

document.getElementById('saveEditBtn').addEventListener('click', function() {
  const editingTaskId = this.getAttribute('data-editing');
  const taskToEdit = tasks.find(task => task.id === parseInt(editingTaskId));

  if (taskToEdit) {
    const updatedTitle       = document.getElementById('editTitle').value;
    const updatedType        = document.getElementById('editType').value;
    const updatedDescription = document.getElementById('editDescription').value;

    taskToEdit.title       = updatedTitle;
    taskToEdit.type        = updatedType;
    taskToEdit.description = updatedDescription;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();

    document.getElementById('editModal').classList.add('hidden');
  }
});

// Fechar modal de edição
document.getElementById('cancelEditBtn').addEventListener('click', function() {
  document.getElementById('editModal').classList.add('hidden');
});

// Carregar tarefas ao iniciar
window.onload = function() {
  loadTasks();
};
