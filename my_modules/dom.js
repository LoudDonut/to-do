import {
    toCamelCase
} from "../my_modules/string_functions";

const content = document.querySelector(".content");

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
            const curr = toCamelCase(project[key].title);
            removeItem(curr);
        }
    }
}

function displayProject(project) {
    const sidebar = document.querySelector(".sidebar");
    const projectButt = document.createElement("button");
    projectButt.id = toCamelCase(project.title);
    
    projectButt.textContent = project.title;
    sidebar.appendChild(projectButt);

    let prevClicked;
    projectButt.addEventListener("click", (e) => {
        if (prevClicked !== e.target.id) {
            displayAllItems(project);
            prevClicked = e.target.id;
        } else {
            removeAllItems(project);
            prevClicked = undefined;
        }
    });
}

export {
    displayItem,
    displayAllItems,
    displayProject,
    removeItem
};