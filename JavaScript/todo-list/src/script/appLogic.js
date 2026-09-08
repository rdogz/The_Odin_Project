const removeById = (arr, id) => {
    const index = arr.findIndex(item => item.id === id);

    if (index !== -1) {
        return arr.splice(index, 1)[0];
    }

    return undefined;
};

class Task {
    constructor(title, description = "", date, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = date;
        this.priority = priority;
        this.completed = completed;
        this.id = crypto.randomUUID();
    } 

    changeComplete() {
        this.completed = !this.completed;
    }

    changePriority(p) {
        this.priority = p;
    }
}

class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
        this.id = crypto.randomUUID();
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(id) {
        return removeById(this.tasks, id);
    }
}

class TodoApp {
    constructor(projects = []) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }
    
    removeProject(id) {
        return removeById(this.projects, id);
    }
}

export { Task, Project, TodoApp }; 
