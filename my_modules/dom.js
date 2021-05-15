import {
    toCamelCase
} from "../my_modules/string_functions";

function displayItem(item) {
    const content = document.querySelector(".content");
    const itemContainer = document.createElement("button");
    const propList = document.createElement("ul");

    for (let prop in item) {

        if (item.propertyIsEnumerable(prop) === true) {
            const itemProp = document.createElement("li");
            itemProp.textContent = item[prop];
            propList.appendChild(itemProp);
        }

    }

    itemContainer.appendChild(propList);
    content.appendChild(propList);
}

function displayProject(project) {
    const sidebar = document.querySelector(".sidebar");
    const projectButt = document.createElement("button");
    projectButt.id = toCamelCase(project.title);
    
    projectButt.textContent = project.title;
    sidebar.appendChild(projectButt);
}

export { displayItem, displayProject };