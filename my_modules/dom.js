import {
    toCamelCase as title, toCamelCase
} from "../my_modules/string_functions";

import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");

function displayItem(item) {
    const itemContainer = document.createElement("div");
    const propList = document.createElement("ul");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const title = toCamelCase(item.title);

    for (let prop in item) {

        if (item.propertyIsEnumerable(prop) === true) {
            const itemProp = document.createElement("li");
            itemProp.classList.add(title);
            itemProp.textContent = item[prop];
            propList.appendChild(itemProp);
        }

    }

    itemContainer.id = title;
    itemContainer.classList.add("item-container");
    itemContainer.appendChild(propList);
    edit.textContent = "Edit";
    edit.classList.add(title);
    remove.textContent = "Remove";
    remove.classList.add(title);
    itemContainer.appendChild(edit);
    itemContainer.appendChild(remove);
    content.appendChild(itemContainer);
}

function displayAllItems(project) {
    for (let key in project) {
        if (key !== "title" &&
        project.propertyIsEnumerable(key) === true) {
            displayItem(project[key]);
        }
    }
}

function removeItem(itemId) {
    const itemContainer = document.querySelector("#" + itemId);
    content.removeChild(itemContainer);
}

function removeAllItems(project) {
    for (let key in project) {
        if (key !== "title" &&
        project.propertyIsEnumerable(key) === true) {
            const curr = title(project[key].title);
            removeItem(curr);
        }
    }
}

function displayProject(project) {
    const projectButt = document.createElement("button");
    projectButt.id = title(project.title);
    projectButt.classList.add("projectButtons");
    
    projectButt.textContent = project.title;
    sidebar.appendChild(projectButt);
}

function dropForm(mode, className) {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const submit = document.createElement("input");
    input.setAttribute("type", "text");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.setAttribute("action", "javascript:void(0);");
    
    form.appendChild(input);
    form.appendChild(submit);

    sidebar.appendChild(form)

    return { submit, form };
}

function unDropForm(formSelector) {
    sidebar.removeChild(formSelector);
}

export {
    displayItem,
    displayAllItems,
    removeAllItems,
    displayProject,
    removeItem,
    dropForm,
    unDropForm
};