function createItem(title, 
    description,
    dueDate,
    priority, //could reduce number of arg by passing obj
    notes) {
    const proto = {
        addProp: function(key, value) {
            if (!(this[key] in this)) this[key] = value;
        },
        changeProp: function(key, value) {
            if (this[key]) this[key] = value;
        }
    }
    const item = {
        title, 
        description,
        dueDate,
        priority,
        notes
    }
    return Object.assign(Object.create(proto),
        {
        title, 
        description,
        dueDate,
        priority,
        notes
    });
}

function createProject(name) {
    const proto = {
        addItem: function(keyName, item) {
            this[keyName] = item;
        }
    }
    const project = {
        name
    };
    return Object.assign(Object.create(proto), project);
}

export { createItem, createProject };