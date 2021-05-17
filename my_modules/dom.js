import {
    toCamelCase
} from "../my_modules/string_functions";

function displayItem(item) {
    const itemContainer = document.createElement("div");
    const propList = document.createElement("ul");

    for (let prop in item) {

        if (item.propertyIsEnumerable(prop) === true) {
            const itemProp = document.createElement("li");
            itemProp.textContent = item[prop];
            propList.appendChild(itemProp);
        }

    }

    itemContainer.id = toCamelCase(item.title);
    itemContainer.appendChild(propList);
    content.appendChild(itemContainer);
}

function removeItem(itemId) {
    const itemContainer = itemId;
    content.removeChild(itemContainer);
}

function displayProject(project) {
    const sidebar = document.querySelector(".sidebar");
    const projectButt = document.createElement("button");
    projectButt.id = toCamelCase(project.title);
    
    projectButt.textContent = project.title;
    sidebar.appendChild(projectButt);
}

export { displayItem, displayProject, removeItem };