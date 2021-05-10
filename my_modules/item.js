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

export { createItem };