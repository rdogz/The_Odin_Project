const getTask = {
    constructor() {
        const taskForm = document.querySelector("#task-form"); 

        taskForm.addEventListener("submit", () => {
            event.preventDefault();

            const taskName = document.querySelector('[name="task-name"]').value;
            const taskDescription = document.querySelector('[name="task-description"]').value;
            const taskDate = document.querySelector('[name="task-date"]').value;
            const taskPriority = document.querySelector('[name="task-priority"]').value;

            console.log(taskName);
            console.log(taskDescription);
            console.log(taskDate);
            console.log(taskPriority);
        });
    }
}

const renderTask = (title, description, date, priority, completed) => {
    const project = document.querySelector("#content");

    const task = document.createElement("div");
    task.classList.add("todo-item");

    const taskHeader = document.createElement("div");
    taskHeader.classList.add("todo-item-header");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "item-check";
    checkbox.value = "true";
    const taskTitle = document.createElement("h2");
    taskTitle.innerText = title;
    taskHeader.appendChild(checkbox);
    taskHeader.appendChild(taskTitle);

    const taskDescription = document.createElement("p");
    taskDescription.innerText = description;

    const taskDate = document.createElement("p");
    taskDate.innerText = `Due date: ${date}` ;

    task.appendChild(taskHeader);
    task.appendChild(taskDescription);
    task.appendChild(taskDate);

    project.appendChild(task);
}


export { getTask, renderTask };
