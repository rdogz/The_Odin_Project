import "../css/style.css";
import "../css/reset.css";
import "../css/side-bar.css";
import "../css/content.css";
import "../css/forms.css";

import { Task, Project, TodoApp } from "./appLogic.js";

const firstTask = new Task("Water plants", "", "2026-09-08", "High", false);

console.log(firstTask);
