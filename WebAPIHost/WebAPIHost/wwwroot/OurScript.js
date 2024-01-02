document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const createTaskForm = document.getElementById("createTaskForm");
    const updateTaskForm = document.getElementById("updateTaskForm");
    const deleteTaskForm = document.getElementById("deleteTaskForm");

    // Function to fetch and display tasks
    function displayTasks() {
        fetch("http://localhost:5091/api/Tasks")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(tasks => {
                taskList.innerHTML = ""; // Clear previous list
                tasks.forEach(task => {
                    const listItem = document.createElement("li");
                    listItem.textContent
                    = `ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}`;
                    taskList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error("Fetch error:", error);
                taskList.innerHTML = "Error fetching tasks.";
            });
    }
    createTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;

        fetch("http://localhost:5091/api/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, dueDate })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                // Clear form fields after successful creation
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
                document.getElementById("dueDate").value = "";

                // Refresh the task list
                displayTasks();
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    });
    displayTasks();
});
