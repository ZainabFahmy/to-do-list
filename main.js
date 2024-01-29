
    // Retrieve tasks from local storage if available
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render tasks on the page
    function renderTasks() {
      const todoList = document.getElementById('todo-list');
      todoList.innerHTML = '';

      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('task');
        listItem.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          removeTask(index);
        });

        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
      });
    }

    // Add a new task
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskName = taskInput.value.trim();

      if (taskName !== '') {
        tasks.push(taskName);
        renderTasks();
        taskInput.value = '';
        saveTasks();
      }
    }

    // Remove a task
    function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
      saveTasks();
    }

    // Save tasks to local storage
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listeners
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });

    // Initial rendering
    renderTasks();
