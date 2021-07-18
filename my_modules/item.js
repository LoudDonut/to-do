import {
  toCamelCase,
} from './string_functions';

function createItem(
  title,
  description,
  dueDate,
  priority,
) {
  const proto = {
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    changeDescription(newDesc) {
      this.description = newDesc;
    },
    changeDueDate(newDate) {
      this.dueDate = newDate;
    },
    changePriority(newPriority) {
      this.priority = newPriority;
    },
  };
  const item = {
    title,
    description,
    dueDate,
    priority,
  };
  return Object.assign(Object.create(proto), item);
}

function createProject(title) {
  const proto = {
    addItem(item) {
      const title = toCamelCase(item.title);
      this[title] = item;
    },
  };
  const project = {
    title,
  };
  return Object.assign(Object.create(proto), project);
}

export { createItem, createProject };
