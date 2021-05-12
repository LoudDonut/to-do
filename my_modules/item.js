function createItem(
    title,
    description,
    dueDate,
    priority
){
    const proto = {
        changeTitle: function(newTitle) {
            this.title = newTitle;
        },
        changeDescription: function(newDesc) {
            this.description = newDesc;
        },
        changeDueDate: function(newDate) {
            this.dueDate = newDate;
        },
        changePriority: function(newPriority) {
            this.priority = newPriority;
        }
    };
    const item = {
        title,
        description,
        dueDate,
        priority
    }
    return Object.assign(Object.create(proto), item);
}

function toCamelCase(string) {
    string = string.toLowerCase();
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = newString + string[i + 1].toUpperCase();
            i++;
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
}

function createProject(title) {
    const proto = {
        addItem: function(item) {
            let title = toCamelCase(item.title)
            this[title] = item;
        }
    }
    const project = {
        title
    }
    return Object.assign(Object.create(proto), project);
}

export { createItem, createProject };