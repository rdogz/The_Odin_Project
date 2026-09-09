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
    );
};

const getProject = () => {
    const projectName = document.querySelector('[name="project-name"]').value;

    return new Project(projectName);
};

const renderTask = (task, project) => {
    const content = document.querySelector("#content");

    const taskElement = document.createElement("div");
    taskElement.classList.add("todo-item");
    taskElement.dataset.taskId = task.id;

    const taskHeader = document.createElement("div");
    taskHeader.classList.add("todo-item-header");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
        task.changeComplete();
    });

    const taskTitle = document.createElement("h2");
    taskTitle.innerText = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", () => {
        project.removeTask(task.id);
        taskElement.remove();
    });

    taskHeader.appendChild(checkbox);
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(deleteButton);

    const taskDescription = document.createElement("p");
    taskDescription.innerText = task.description;

    const taskDate = document.createElement("p");
    taskDate.innerText = `Due date: ${task.dueDate}`;

    taskElement.appendChild(taskHeader);
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(taskDate);

    if (task.priority === "high") {
        taskElement.style.borderColor = "orangered";
    } else if (task.priority === "medium") {
        taskElement.style.borderColor = "yellow";
    } else if (task.priority === "low") {
        taskElement.style.borderColor = "lightblue";
    }

    content.appendChild(taskElement);
};

const renderProject = (project, onClick) => {
    const container = document.querySelector(".sidebar-project-container");
    const button = document.createElement("button");

    button.type = "button";
    button.innerText = `# ${project.name}`;

    button.addEventListener("click", () => {
        onClick(project);
    });

    container.appendChild(button);
};

export { getTask, renderTask, getProject, renderProject };
