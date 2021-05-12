function displayItem(item) {
    const content = document.querySelector(".content");
    const itemContainer = document.createElement("button");
    const propList = document.createElement("ul");
    for (let prop in item) {
        const itemProp = document.createElement("li");
        console.log(prop);
        itemProp.textContent = item[prop];
        propList.appendChild(itemProp);
    }
    itemContainer.appendChild(propList);
    content.appendChild(propList);
}

export { displayItem };