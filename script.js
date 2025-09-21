// alert('hallo');
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-img');
    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    
    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = '<span class="material-symbols-outlined checkbox">check_box_outline_blank</span><span class="task-text">' + taskText +'</span>';
        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
    }

    /* Add Task */
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    });

    /* Task done */
    taskList.addEventListener('click', (event) => {
        const clickedTask = event.target.closest('li');
        if (clickedTask) {
            const checkBoxStatus = clickedTask.querySelector('.checkbox');
            checkBoxStatus.classList.toggle('checked');
            checkBoxStatus.textContent = (checkBoxStatus.classList.contains('checked')) ?  'check_box' : 'check_box_outline_blank';
        }
    });

});