import {
    toCamelCase
} from "../my_modules/string_functions";

import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

import {
    getAllProjects,
    getItem
} from "../src/index";

const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");

const dom = {
    displayItem: function(item) {
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
        edit.classList.add("editButtons");
        edit.id = title + "Edit";
    
        remove.textContent = "Remove";
        remove.classList.add("removeButtons");
        remove.id = title + "Remove";
    
        itemContainer.appendChild(edit);
        itemContainer.appendChild(remove);
        content.appendChild(itemContainer);
    },
    
    displayAddItem: function(project) {
        const add = document.createElement("button");
        add.textContent = 'Add Item';
        add.classList.add('addButton');
        add.id = project.title + "Add";
        content.appendChild(add);
    },
    
    displayAllItems: function(project) {
        //const projectItemContainer = document.createElement("div");
        //projectItemContainer.id = project.title + 'Container';
        
        for (let key in project) {
            if (key !== "title" &&
            project.propertyIsEnumerable(key) === true) {
                dom.displayItem(project[key]);
            }
        }
        
        dom.displayAddItem(project);
    },
    
    removeItem: function(itemId) {
        const itemContainer = document.querySelector("#" + itemId);
        if (itemContainer !== null) content.removeChild(itemContainer);
    },
    
    remProjAddButton: function(project) {
        const add = document.querySelector("#" + project.title + "Add");
        content.removeChild(add);
    },
    
    removeAllItems: function(project) {
        dom.remProjAddButton(project);
    
        for (let key in project) {
            if (key !== "title" &&
            project.propertyIsEnumerable(key) === true) {
                const curr = toCamelCase(project[key].title);
                dom.removeItem(curr);
            }
        }
    },
    
    displayProject: function(project) {
        const projectButt = document.createElement("button");
        projectButt.id = project.title;
        projectButt.classList.add("projectButtons");
        
        projectButt.textContent = project.title;
        sidebar.appendChild(projectButt);
    },
    
    displayAllProjects: function(allProjects) {
        for (let project in allProjects) {
            dom.displayProject(allProjects[project]);
        }
    },
    
    dropForm: function() {
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
    },
    
    editMenu: function(itemName) {
        const className = "." + itemName;
        const itemContainer = document.querySelectorAll(className);
        const form = document.createElement("form");
        form.id = itemName + "Edit";
        form.classList.add("edit-form");
        itemContainer.forEach(prop => {
            const editBar = document.createElement("input");
            editBar.classList.add("edit-bar");
            editBar.setAttribute("value", prop.textContent)
            form.appendChild(editBar);
        });
        const submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        submit.classList.add("submit-item-edit");
        form.setAttribute("action", "javascript:void(0);");
        form.appendChild(submit);
        content.appendChild(form);
    },
    
    addToProjectForm: function() {
        const form = document.createElement("form");
        form.classList.add("edit-form");
        for (let i = 0; i < 4; i++) {
            const input = document.createElement("input");
            input.classList.add('newItemInputs');
    
            switch (i) {
                case 0:
                    input.setAttribute('value', 'Title');
                    break;
                case 1:
                    input.setAttribute('value', 'Description');
                    break;
                case 2:
                    input.setAttribute('value', 'Date');
                    break;
                case 3:
                    input.setAttribute('value', 'Priority');
                    break;
            }
    
            form.appendChild(input);
        }
        const submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        submit.classList.add("submit-item-edit");
        form.setAttribute("action", "javascript:void(0);");
        form.appendChild(submit);
        content.appendChild(form);
    },
    
    unDropForm: function(formSelector) {
        sidebar.removeChild(formSelector);
    },
    
    remEditMenu: function(editMenuClass) {
        const editMenu = document.querySelector(editMenuClass);
        content.removeChild(editMenu);
    }
}

export {
    dom
};