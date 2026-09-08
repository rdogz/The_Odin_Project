// IMPORTS

import "../css/style.css";
import "../css/reset.css";
import "../css/side-bar.css";
import "../css/content.css";
import "../css/forms.css";

import { Task, Project, TodoApp } from "./appLogic.js";
import { getTask, renderTask, getProject, renderProject } from "./ui.js";

///////////////////////////////////////////////////////////////


// TESTING STUFF
const taskForm = document.querySelector("#task-form"); 
const taskDialog = document.querySelector("#add-task"); 
const projectForm = document.querySelector("#project-form");
const projectDialog = document.querySelector("#add-project");

const firstTask = new Task("Water plants", "water them bro", "2026-09-08", "low", false);

const tasks = [firstTask];
let currentProject = new Project("default", tasks);
const projects = [currentProject];

const appControl = new TodoApp(projects); 

renderTask(currentProject.tasks[0], currentProject);

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = getTask();

    currentProject.addTask(task);

    renderTask(task, currentProject);
    taskForm.reset();
    taskDialog.close();
});

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const project = getProject();

    appControl.addProject(project);
    currentProject = project;

    console.log(currentProject);
    console.log(currentProject.name);
    renderProject(currentProject);
    projectForm.reset();
    projectDialog.close();
});

/////////////////////////////////////////////////////////////
