import {
    createItem //title, desc, dueDate, priority
} from "../my_modules/item.js";

import {
   
} from "../my_modules/dom.js";

const newItem = createItem("bigYoshi", "have fun with big yoshi",
"11/12/12", "HIGH");

console.log(newItem);