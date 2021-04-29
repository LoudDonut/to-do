import { createItem } from "../my_modules/item.js";

const goBike = createItem("Go Bike",
    "Cycle around the block",
    "15/02/1998",
    "low",
    "No notes");

goBike.addProp("time", "3h")
console.log(goBike);