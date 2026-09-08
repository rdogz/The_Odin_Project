import "../css/style.css";
import "../css/reset.css";
import "../css/side-bar.css";
import "../css/content.css";
import "../css/forms.css";

import { Task, Project, TodoApp } from "./appLogic.js";
import { getTask, renderTask } from "./ui.js";

const taskForm = document.querySelector("#task-form"); 
const taskDialog = document.querySelector("#add-task"); 

const firstTask = new Task("Water plants", "water them bro", "2026-09-08", "low", false);

const tasks = [firstTask];

let currentProject = new Project("default", tasks);

renderTask(currentProject.tasks[0], currentProject);

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = getTask();

    currentProject.addTask(task);

    renderTask(task, currentProject);
    taskForm.reset();
    taskDialog.close();
});

