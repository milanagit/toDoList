// alert('hallo');
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-img');
    //const todosContainer = document.querySelector('.todos-container');
    
    // If the task list is empty, show empty-image and correct styles
    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
        // todosContainer.style.width = taskList.children.length > 0 ? '100%' : '50%';
    }
    
    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="material-symbols-outlined checkbox">check_box_outline_blank</span> 
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
            `;

        // Edit Task
        const checkbox = li.querySelector('.checkbox');
        const editBtn = li.querySelector('.edit-btn');
        
        if (li.querySelector('.checked'))/*(completed)*/ {
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointerEvents = 'none';
        }

        // if checkbox isn't checked, allow task edit
        checkbox.addEventListener('change', () => {
            console.log('change');
            const isChecked = checkbox.classList.contains('checked');
            li.classList.toggle('completed', isChecked);
            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5' : '1';
            editBtn.style.pointerEvents = isChecked ? 'none' : 'auto';
        });
        
        editBtn.addEventListener('click', () => {
            if (!checkbox.classList.contains('checked')) {
                taskInput.value = li.querySelector('.task-text').textContent;
                li.remove();
                toggleEmptyState();
            }
        });

        // Remove Task
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            toggleEmptyState();
        });
        
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
        const selectedCheckBox = event.target.closest('li .checkbox');
        if (selectedCheckBox) {
            selectedCheckBox.classList.toggle('checked');
            selectedCheckBox.textContent = (selectedCheckBox.classList.contains('checked')) ?  'check_box' : 'check_box_outline_blank';
        }
    });

});