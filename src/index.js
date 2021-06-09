import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

import {
    toCamelCase
} from "../my_modules/string_functions";

import {
   displayItem,
   displayAllItems,
   removeItem,
   removeAllItems,
   dropForm,
   unDropForm,
   editMenu,
   remEditMenu,
   displayProject,
   displayAllProjects
} from "../my_modules/dom.js";

const vacation = createProject("vacation");
const trip = createItem(
    "Trip",
    "Go to the airport, board the plane untill arrival",
    "20/11/2022",
    "High"
);
const shopping = createItem(
    "Shopping",
    "Go to some stores in town and look around",
    "21/11/2022",
    "Medium"
);
const goBackHome = createItem(
    "Go back home",
    "Go to the airport, board the plane untill we're back home",
    "28/11/2022",
    "High"
);
vacation.addItem(trip);
vacation.addItem(shopping);
vacation.addItem(goBackHome);

//localStorage.clear(); //for testing

console.log(Object.entries(localStorage).length === 0);
if (Object.entries(localStorage).length === 0) {
    var allProjects = {};
} else {
    var allProjects = localStorage.getItem('allProjects');

    console.log('retrievedObject: ', JSON.parse(allProjects));
    allProjects = JSON.parse(allProjects);
}

//allProjects.vacation = vacation; //for testing

function getAllProjects() {
    return allProjects;
}

function getItem(projectName, itemName) {
    return allProjects[projectName][itemName];
}

function listenEditSubmit(currProj) {
    const subbutt = document.querySelectorAll(".submit-item-edit");
    subbutt.forEach(button => {
        button.addEventListener("click", (e) => {
            const currItem = e.target.parentNode.id;
            const form = document.querySelector("#" + currItem);
            const newItem = createItem(
                form[0].value,
                form[1].value,
                form[2].value,
                form[3].value
            );
            const itemTitle = toCamelCase(newItem.title);
            allProjects[currProj][itemTitle] = newItem;
            displayItem(newItem);
            remEditMenu("#" + currItem);

            const editButt = document.querySelector(
                "#" + itemTitle + "Edit");
            const removeButt = document.querySelector(
                "#" + itemTitle + "Remove"
            );

            editButt.addEventListener("click", (e) => {
                const currentItem = e.target.parentNode.id;
                editMenu(currentItem);
                removeItem(currentItem);
                delete allProjects[currProj][currentItem];
    
                listenEditSubmit(currProj);
            });

            removeButt.addEventListener("click", (e) => {
                const currentItem = e.target.parentNode.id
                delete allProjects[currProj][currentItem];
                removeItem(currentItem);
            });

        });
    });
}

function listenEdit(currProj) {
    const editButtons = document.querySelectorAll(".editButtons");
    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const currentItem = e.target.parentNode.id;
            editMenu(currentItem);
            removeItem(currentItem);
            delete allProjects[currProj][currentItem];

            listenEditSubmit(currProj);
        });
    }); 
    
    const removeButtons = document.querySelectorAll(".removeButtons");
    removeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const currentItem = e.target.parentNode.id
            removeItem(currentItem);
            delete allProjects[currProj][currentItem];
        });
    });
}

function listenAddItem() {
    editMenu(templateItem); //Continue here <<<<<<<<<<<<<<<<<<<<<<<<<<<
}

let clickStatusDropItems = {};
function dropItems(e) {
    const currProj = e.target.id;
    if (clickStatusDropItems[e.target.id] === undefined ||
    clickStatusDropItems[e.target.id] === "display") {
        displayAllItems(allProjects[e.target.id]);
        clickStatusDropItems[e.target.id] = "remove";
        
        listenEdit(currProj);
    
    } else {
        removeAllItems(allProjects[e.target.id]);
        clickStatusDropItems[e.target.id] = "display";
    }
}

function listenProject() {
    let clickStatus = {};
    const projectButtons = document.querySelectorAll(".projectButtons");
    projectButtons.forEach(project => {
    project.addEventListener("click", (e) => {
        dropItems(e);
    });
    });
}

function savePage() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}

window.addEventListener('unload', savePage);

displayAllProjects(allProjects);

listenProject();

const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", (e) => {
    const dropSelectors = dropForm();
    
    dropSelectors.submit.addEventListener("click", (e) => {
        const name = toCamelCase(e.target.previousSibling.value);
        if (name === "") {
            unDropForm(dropSelectors.form);
        } else if (!(name === "")) {
            const newProject = createProject(name);

            allProjects[newProject.title] = newProject;
            displayProject(newProject);
            unDropForm(dropSelectors.form);
            
            const projectButton = document.querySelector('#' + newProject.title);
            projectButton.addEventListener('click', (e) => {
                dropItems(e);
            });

        } else {
            unDropForm();
        }
    });

});


export { getAllProjects, getItem };