const inputElement =  document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".tasks-container");

    const validate = () => inputElement.value.trim().length > 0; 

    const addTask = () =>{
        const isValid = validate();

        if(!isValid) {
            return inputElement.classList.add("error");
        }

        const taskItemContainer = document.createElement("div");
        taskItemContainer.classList.add("task-item");

        const taskContent = document.createElement("p");
        taskContent.innerText = inputElement.value;

        const deleteItem = document.createElement("i");
        deleteItem.classList.add("far");
        deleteItem.classList.add("fa-trash-alt");

        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);
        taskItemContainer.appendChild(taskItemContainer);

    };

    const inputChange = () => {
        const isValid = validate();

        if (isValid){
            return inputElement.classList.remove("error");
        }
    };

    addTaskButton.addEventListener('click', ()=> addTask());