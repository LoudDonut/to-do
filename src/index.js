import {
    createItem,
    createProject,
    createProjectHolder
} from "../my_modules/item.js";

import {
    createDomItems,
    renderToContent,
    displayProjects
} from "../my_modules/dom.js";

//Test creations
const projectHolder = createProjectHolder();
const vacation = createProject("vacation");
const goBike = createItem(
    "Go Bike",
    "Cycle around the block",
    "15/02/1998",
    "low",
    "No notes"
);
const goHome = createItem(
    "Go Home",
    "Return home through the valley",
    "16/02/1998",
    "medium",
    "there will be no notes here this time"
);
vacation.addItem("goHome", goHome);
vacation.addItem("goBike", goBike);
projectHolder.addProject(vacation);

renderToContent(goHome, createDomItems);
let projectRefs = displayProjects(projectHolder);

// add listener to the project buttons
for (let projectref in projectRefs) {
    let button = projectRefs[projectref];
    button.addEventListener("click", (e) => {
        let targetProject = projectHolder[e.target.id];

        for (let item in targetProject) {

            if (item !== "name") {
                renderToContent(targetProject[item], createDomItems);
            }

        }
    });
}