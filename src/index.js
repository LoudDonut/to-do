import {
    createItem, //arg: title, desc, dueDate, priority
    createProject //arg: item
} from "../my_modules/item.js";

import {
   displayItem,
   displayProject
} from "../my_modules/dom.js";

const playYoshi = createItem("bIg yoShi", "have fun with big yoshi",
"11/12/12", "HIGH");

const vacation = createProject("vacation");
vacation.addItem(playYoshi);

displayItem(vacation.bigYoshi);
console.log(vacation);

displayProject(vacation);