import "../css/style.css";
import "../css/reset.css";
import "../css/side-bar.css";
import "../css/content.css";
import "../css/forms.css";

import { Task, Project, TodoApp } from "./appLogic.js";
import { getTask, renderTask } from "./ui.js";

const firstTask = new Task("Water plants", "water them bro", "2026-09-08", "High", false);

renderTask(firstTask.title, firstTask.description, firstTask.dueDate, firstTask.priority, firstTask.completed);

console.log(firstTask);
