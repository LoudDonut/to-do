import {
    createItem,
    createProject,
} from "../my_modules/item.js";
import {
    createDomItems,
    renderToContent
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
    renderToContent(goBike, createDomItems);
    
    
    /*const newDom = createDomItems(undefined, true);

    console.log(newDom);

    newDom.title.textContent = "hello";
    const content = document.querySelector(".content");
    newDom.title.appendChild(newDom);*/
