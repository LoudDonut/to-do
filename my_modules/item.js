function createItem(title, 
    description,
    dueDate,
    priority, //could reduct number of arg by passing obj
    notes) {
        const proto = {
            addProp: function(name, value) {
                if (!(this[name] in this)) this[name] = value;
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

export { createItem };