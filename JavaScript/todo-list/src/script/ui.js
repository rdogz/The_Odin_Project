class GetInputForm {
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

export default GetInputForm;
