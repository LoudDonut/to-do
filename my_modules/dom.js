const mainContainer = document.querySelector(".main-container");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

function createDomItems(choice, all=false) {
    //use choice to what extra creation you want aside from
    //container, title (only takes array of strings)

    if (all || choice === undefined) {
        const domItems = {
            container: document.createElement("div"),
            checkbox: document.createElement("button"),
            title: document.createElement("button"),
            description: document.createElement("button"),
            dueDate: document.createElement("button"),
            priority: document.createElement("button"),
            notes: document.createElement("button")
        }
        return domItems;
    } else {
        domItems = {
            container: document.createElement("div"),
            checkbox: document.createElement("button"),
            title: document.createElement("button")
        }
        choice.forEach(element => {
            switch (element) {
                case "description":
                    const description = document.
                        createElement("button");
                        domItems.description = description;
                    break
                case "dueDate":
                    const dueDate = document.
                        createElement("button");
                        domItems.dueDate = dueDate;
                    break
                case "priority":
                    const priority = document.
                        createElement("button");
                        domItems.priority = priority;
                    break
                case "notes":
                    const notes = document.
                        createElement("button");
                        domItems.notes = notes;
                    break
            }
        });
        return domItems;
    }
}

function createDomProject() {
    const file = document.createElement("button");
    file.classList.add("project-button");
    return file;
}

function renderToContent(item, elemCreateFunc) {
    const container = document.createElement("div");
    container.classList.add("key-container");
    let keys = [];
    for (let key in item) {
        keys.push(key);
    }
    const elemRefObj = elemCreateFunc(undefined, true);
    for (let key in elemRefObj) {
        let currentEl = elemRefObj[key];
        if (key !== "container") {
            container.appendChild(currentEl);
            if (key !== "checkbox") currentEl.textContent = item[key];
        }
    }
    content.appendChild(container);
}

function displayProjects(projects) { //as an object
    let references = {}; //remove if unneeded

    for (let project in projects) {
        let projectObj = projects[project];
        let projectName = projectObj.name;

        let button = document.createElement("button");
        references[project] = button;
        button.classList.add("project-buttons");
        button.textContent = projectName;
        sidebar.appendChild(button);
    }
    
    return references;
}

export { createDomItems, renderToContent, displayProjects };