import {
    createItem,
    createProject
} from "../my_modules/item.js";
import {
    createDomItems,
    renderToContent,
    displayProjects
} from "../my_modules/dom.js";

const goBike = createItem("Go Bike",
    "Cycle around the block",
    "15/02/1998",
    "low",
    "No notes");

    const goHome = createItem("Go Home",
    "Return home through the valley",
    "16/02/1998",
    "medium",
    "there will be no notes here this time");
    goHome.changeProp("Do it", "Kill myself");

    const vacation = createProject("vacation");
    vacation.addItem("goHome", goHome);

    renderToContent(goHome, createDomItems);

    let testObj = {
        vacation: {name: "Vacation", items: "vacationStuff"},
        school: {name: "School", items: "schoolStuff"},
        groceries: {name: "Groceries", items: "shoppinglist,etc"},
        minecraft: {name: "Minecraft", items: "ideas,todo"},
    };
    
    let projectRefs = displayProjects(testObj);

    for (let projectref in projectRefs) {
        let button = projectRefs[projectref];
        button.addEventListener("click", () => {
            for (let item in testObj) {
                renderToContent(testObj[item], createDomItems);
            }
        });
    }
    
    
    /*const newDom = createDomItems(undefined, true);

    console.log(newDom);

    newDom.title.textContent = "hello";
    const content = document.querySelector(".content");
    newDom.title.appendChild(newDom);*/
