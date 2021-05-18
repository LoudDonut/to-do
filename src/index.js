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
   dropForm,
   displayProject
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

let allProjects = []; //for storage, maybe save when page closes?
allProjects.push(vacation);

let submitButt; //listeners for the addButt and everything inside
const addProject = document.querySelector("#add-project");
addProject.addEventListener("click", (e) => {
    submitButt = dropForm();
    
    submitButt.addEventListener("click", (e) => {
        const name = toCamelCase(e.target.previousSibling.value);
        const newProject = createProject(name);
        allProjects.push(newProject);
        console.log(allProjects);
    });

});


displayProject(vacation);