// IMPORTS
import "../css/style.css";
import "../css/reset.css";
import "../css/side-bar.css";
import "../css/content.css";
import "../css/forms.css";


import { Task, Project, TodoApp } from "./appLogic.js";
import { getTask, renderTask, getProject, renderProject } from "./ui.js";


const taskForm = document.querySelector("#task-form");
const taskDialog = document.querySelector("#add-task");
const projectForm = document.querySelector("#project-form");
const projectDialog = document.querySelector("#add-project");
//////////////////////////////////////////////////////////


const firstTask = new Task(
    "Water plants",
    "water them bro",
    "2026-09-08",
    "low",
    false
);
const defaultProject = new Project("Default", [firstTask]);
const appControl = new TodoApp([defaultProject]);

let currentProject = defaultProject;


appControl.projects.forEach(project => {
    renderProject(project, selectProject);
});
renderTask(firstTask, currentProject);


// Add task
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = getTask();

    currentProject.addTask(task);
    renderTask(task, currentProject);

    taskForm.reset();
    taskDialog.close();
});


// Add project
projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = getProject();

    appControl.addProject(project);
    renderProject(project, selectProject);

    projectForm.reset();
    projectDialog.close();
});


function selectProject(project) {
    currentProject = project;
    renderCurrentProject();
}


function renderCurrentProject() {
    const content = document.querySelector("#content");
    const existingTasks = content.querySelectorAll(".todo-item");
    const projectTitle = content.querySelector("#project-title");
    projectTitle.innerText = `Project: ${currentProject.name}`;

    existingTasks.forEach(task => {
        task.remove();
    });
    
    currentProject.tasks.forEach(task => {
        renderTask(task, currentProject);
    });
}
