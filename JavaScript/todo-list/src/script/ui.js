import { Task, Project, TodoApp } from "./appLogic.js";

const getTask = () => {
        const taskName = document.querySelector('[name="task-name"]').value;
        const taskDescription = document.querySelector('[name="task-description"]').value;
        const taskDate = document.querySelector('[name="task-date"]').value;
        const taskPriority = document.querySelector('[name="task-priority"]').value;

        return new Task(
            taskName,
            taskDescription,
            taskDate,
            taskPriority,
            false
        )
};

const renderTask = (currentTask, currentProject) => {
    const project = document.querySelector("#content");

    const taskElement = document.createElement("div");
    taskElement.id = currentTask.id;
    taskElement.classList.add("todo-item");

    const taskHeader = document.createElement("div");
    taskHeader.classList.add("todo-item-header");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "item-check";
    checkbox.value = "true";

    const taskTitle = document.createElement("h2");
    taskTitle.innerText = currentTask.title;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", () => {
        currentProject.removeTask(currentTask.id);
        taskElement.remove();
    });

    taskHeader.appendChild(checkbox);
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(deleteButton);

    const taskDescription = document.createElement("p");
    taskDescription.innerText = currentTask.description;

    const taskDate = document.createElement("p");
    taskDate.innerText = `Due date: ${currentTask.dueDate}`;

    taskElement.appendChild(taskHeader);
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(taskDate);

    if (currentTask.priority === "high") {
        taskElement.style.borderColor = "orangered";
    } else if (currentTask.priority === "medium") {
        taskElement.style.borderColor = "yellow";
    } else if (currentTask.priority === "low") {
        taskElement.style.borderColor = "lightblue";
    }

    project.appendChild(taskElement);
};


const getProject = () => {
        const projectName = document.querySelector('[name="project-name"]').value;

        return new Project(projectName);
};

const renderProject = (currentProject) => {
    const projectContainer = document.querySelector(".sidebar-project-container");

    const newProject = document.createElement("button");
    newProject.innerText = `# ${currentProject.name}`


    projectContainer.appendChild(newProject);
};

export { getTask, renderTask, getProject, renderProject };
