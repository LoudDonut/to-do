import {
  toCamelCase,
} from './string_functions';

import {
  createItem, // arg: title, desc, dueDate, priority
  createProject, // arg: item
} from './item.js';

import {
  getAllProjects,
  getItem,
} from '../src/index';

const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');

const dom = {
  displayItem(item) {
    const itemContainer = document.createElement('div');
    const propList = document.createElement('ul');
    const edit = document.createElement('button');
    const remove = document.createElement('button');
    const title = toCamelCase(item.title);

    for (const prop in item) {
      if (item.propertyIsEnumerable(prop) === true) {
        const itemProp = document.createElement('li');
        itemProp.classList.add(title);
        itemProp.textContent = item[prop];
        propList.appendChild(itemProp);
      }
    }

    itemContainer.id = title;
    itemContainer.classList.add('item-container');
    itemContainer.appendChild(propList);

    edit.textContent = 'Edit';
    edit.classList.add('editButtons');
    edit.id = `${title}Edit`;

    remove.textContent = 'Remove';
    remove.classList.add('removeButtons');
    remove.id = `${title}Remove`;

    itemContainer.appendChild(edit);
    itemContainer.appendChild(remove);
    content.appendChild(itemContainer);
  },

  displayAddItem(project) {
    const variableName = toCamelCase(project.title);
    const add = document.createElement('button');
    add.textContent = 'Add Item';
    add.classList.add('addButton');
    add.id = `${variableName}Add`;
    content.appendChild(add);
  },

  displayAllItems(project) {
    for (const key in project) {
      if (key !== 'title'
            && project.propertyIsEnumerable(key) === true) {
        dom.displayItem(project[key]);
      }
    }

    dom.displayAddItem(project);
  },

  removeItem(itemId) {
    const itemContainer = document.querySelector(`#${itemId}`);
    if (itemContainer !== null) content.removeChild(itemContainer);
  },

  remProjAddButton(project) {
    const variableName = toCamelCase(project.title);

    const add = document.querySelector(`#${variableName}Add`);
    content.removeChild(add);
  },

  removeAllItems(project) {
    dom.remProjAddButton(project);

    for (const key in project) {
      if (key !== 'title'
            && project.propertyIsEnumerable(key) === true) {
        const curr = toCamelCase(project[key].title);
        dom.removeItem(curr);
      }
    }
  },

  displayProject(projectTitle) {
    const variableName = toCamelCase(projectTitle);

    const projectCont = document.createElement('div');
    const projectButt = document.createElement('button');
    const removeButt = document.createElement('button');

    projectCont.id = variableName;
    projectCont.classList.add('projectContainer');
    projectButt.id = `${variableName}Button`;
    projectButt.classList.add('projectButtons');
    removeButt.id = `${variableName}RemoveButt`;
    removeButt.classList.add('projectRemButtons');

    projectButt.textContent = projectTitle;
    removeButt.textContent = 'x';
    projectCont.appendChild(projectButt);
    projectCont.appendChild(removeButt);
    sidebar.appendChild(projectCont);
  },

  displayAllProjects(allProjects) { // displayProject repeated
    for (const project in allProjects) {
      dom.displayProject(allProjects[project].title);
    }
  },

  removeProject(projectName) {
    const projectCont = document.querySelector(
      `#${projectName}`,
    );

    sidebar.removeChild(projectCont);
  },

  dropForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('input');
    input.setAttribute('type', 'text');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.setAttribute('action', 'javascript:void(0);');
    form.appendChild(input);
    form.appendChild(submit);
    sidebar.appendChild(form);

    return { submit, form };
  },

  editMenu(itemName) {
    const className = `.${itemName}`;
    const itemContainer = document.querySelectorAll(className);
    const form = document.createElement('form');
    form.id = `${itemName}Edit`;
    form.classList.add('edit-form');
    itemContainer.forEach((prop, index) => {
      if (index === 0 || index === 1) {
        const editBar = document.createElement('input');
        editBar.classList.add('edit-bar');
        editBar.setAttribute('value', prop.textContent);
        form.appendChild(editBar);
      } else if (index === 2) {
        const editBar = document.createElement('input');
        editBar.setAttribute('type', 'date');
        editBar.classList.add('edit-bar');
        editBar.setAttribute('value', prop.textContent);
        form.appendChild(editBar);
      } else if (index === 3) {
        for (let i = 0; i < 3; i++) {
          const editBar = document.createElement('input');
          const label = document.createElement('label');
          editBar.setAttribute('name', 'priority');
          editBar.setAttribute('type', 'radio');
          switch (i) {
            case 0:
              editBar.setAttribute('value', 'Low');
              label.textContent = 'Low';
              break;
            case 1:
              editBar.setAttribute('value', 'Medium');
              label.textContent = 'Medium';
              break;
            case 2:
              editBar.setAttribute('value', 'High');
              label.textContent = 'High';
              break;
          }
          form.appendChild(label);
          form.appendChild(editBar);
        }
      }
    });
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.classList.add('submit-item-edit');
    form.setAttribute('action', 'javascript:void(0);');
    form.appendChild(submit);
    content.appendChild(form);
  },

  addToProjectForm() {
    const form = document.createElement('form');
    form.classList.add('edit-form');
    for (let i = 0; i < 6; i++) {
      const input = document.createElement('input');
      input.classList.add('newItemInputs');

      if (i > 2) {
        var label = document.createElement('label');
        form.appendChild(label);
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'priority');
      }

      switch (i) {
        case 0:
          input.setAttribute('value', 'Title');
          break;
        case 1:
          input.setAttribute('value', 'Description');
          break;
        case 2:
          input.setAttribute('type', 'date');
          break;
        case 3:
          input.setAttribute('value', 'Low');
          label.textContent = 'Low';
          break;
        case 4:
          input.setAttribute('value', 'Medium');
          label.textContent = 'Medium';
          break;
        case 5:
          input.setAttribute('value', 'High');
          label.textContent = 'High';
          break;
      }

      form.appendChild(input);
    }
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.classList.add('submit-item-edit');
    form.setAttribute('action', 'javascript:void(0);');
    form.appendChild(submit);
    content.appendChild(form);
  },

  unDropForm(formSelector) {
    sidebar.removeChild(formSelector);
  },

  remEditMenu(editMenuClass) {
    const editMenu = document.querySelector(editMenuClass);
    content.removeChild(editMenu);
  },
};

export {
  dom,
};
