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
//

let appControl;
let currentProject;
let firstTask;
let defaultProject;

const savedApp = localStorage.getItem("app");

if (savedApp) {
    const data = JSON.parse(savedApp);

    const projects = data.projects.map(projectData => {
        const tasks = projectData.tasks.map(taskData => {
            return new Task(
                taskData.title,
                taskData.description,
                taskData.dueDate,
                taskData.priority,
                taskData.completed
            );
        });

        return new Project(projectData.name, tasks);
    });

    appControl = new TodoApp(projects);
    currentProject = appControl.projects[0];

} else {
    firstTask = new Task(
        "Water plants",
        "water them bro",
        "2026-09-08",
        "low",
        false
    );

    defaultProject = new Project("Default", [firstTask]);

    appControl = new TodoApp([defaultProject]);
    currentProject = defaultProject;
}


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
    localStorage.setItem("app", JSON.stringify(appControl));
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

// local storage test from mozilla
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
