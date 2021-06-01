/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./my_modules/dom.js":
/*!***************************!*\
  !*** ./my_modules/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayItem\": () => (/* binding */ displayItem),\n/* harmony export */   \"displayAllItems\": () => (/* binding */ displayAllItems),\n/* harmony export */   \"removeAllItems\": () => (/* binding */ removeAllItems),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem),\n/* harmony export */   \"dropForm\": () => (/* binding */ dropForm),\n/* harmony export */   \"unDropForm\": () => (/* binding */ unDropForm),\n/* harmony export */   \"editMenu\": () => (/* binding */ editMenu),\n/* harmony export */   \"remEditMenu\": () => (/* binding */ remEditMenu)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n\n\n\n\n\n\nconst content = document.querySelector(\".content\");\nconst sidebar = document.querySelector(\".sidebar\");\n\nfunction displayItem(item) {\n    const itemContainer = document.createElement(\"div\");\n    const propList = document.createElement(\"ul\");\n    const edit = document.createElement(\"button\");\n    const remove = document.createElement(\"button\");\n    const title = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title);\n\n    for (let prop in item) {\n\n        if (item.propertyIsEnumerable(prop) === true) {\n            const itemProp = document.createElement(\"li\");\n            itemProp.classList.add(title);\n            itemProp.textContent = item[prop];\n            propList.appendChild(itemProp);\n        }\n\n    }\n\n    itemContainer.id = title;\n    itemContainer.classList.add(\"item-container\");\n    itemContainer.appendChild(propList);\n    edit.textContent = \"Edit\";\n    edit.classList.add(\"editButtons\");\n    remove.textContent = \"Remove\";\n    remove.classList.add(\"removeButtons\");\n    itemContainer.appendChild(edit);\n    itemContainer.appendChild(remove);\n    content.appendChild(itemContainer);\n}\n\nfunction displayAllItems(project) {\n    for (let key in project) {\n        if (key !== \"title\" &&\n        project.propertyIsEnumerable(key) === true) {\n            displayItem(project[key]);\n        }\n    }\n}\n\nfunction removeItem(itemId) {\n    const itemContainer = document.querySelector(\"#\" + itemId);\n    content.removeChild(itemContainer);\n}\n\nfunction removeAllItems(project) {\n    for (let key in project) {\n        if (key !== \"title\" &&\n        project.propertyIsEnumerable(key) === true) {\n            const curr = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(project[key].title);\n            removeItem(curr);\n        }\n    }\n}\n\nfunction displayProject(project) {\n    const projectButt = document.createElement(\"button\");\n    projectButt.id = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(project.title);\n    projectButt.classList.add(\"projectButtons\");\n    \n    projectButt.textContent = project.title;\n    sidebar.appendChild(projectButt);\n}\n\nfunction dropForm() {\n    const form = document.createElement(\"form\");\n    const input = document.createElement(\"input\");\n    const submit = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"text\");\n    submit.setAttribute(\"type\", \"submit\");\n    submit.setAttribute(\"value\", \"Submit\");\n    form.setAttribute(\"action\", \"javascript:void(0);\");\n    form.appendChild(input);\n    form.appendChild(submit);\n    sidebar.appendChild(form)\n    \n\n    return { submit, form };\n}\n\nfunction editMenu(item) {\n    const className = \".\" + item;\n    const itemContainer = document.querySelectorAll(className);\n    const form = document.createElement(\"form\");\n    form.id = item + \"Edit\";\n    form.classList.add(\"edit-form\");\n    itemContainer.forEach(prop => {\n        const editBar = document.createElement(\"input\");\n        editBar.classList.add(\"edit-bar\");\n        editBar.setAttribute(\"value\", prop.textContent)\n        form.appendChild(editBar);\n    });\n    const submit = document.createElement(\"input\");\n    submit.setAttribute(\"type\", \"submit\");\n    submit.setAttribute(\"value\", \"Submit\");\n    submit.classList.add(\"submit-item-edit\");\n    form.setAttribute(\"action\", \"javascript:void(0);\");\n    form.appendChild(submit);\n    content.appendChild(form);\n}\n\nfunction unDropForm(formSelector) {\n    sidebar.removeChild(formSelector);\n}\n\nfunction remEditMenu(editMenuId) {\n    const editMenu = document.querySelector(editMenuId);\n    content.removeChild(editMenu);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/dom.js?");

/***/ }),

/***/ "./my_modules/item.js":
/*!****************************!*\
  !*** ./my_modules/item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItem\": () => (/* binding */ createItem),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n\n\nfunction createItem(\n    title,\n    description,\n    dueDate,\n    priority\n){\n    const proto = {\n        changeTitle: function(newTitle) {\n            this.title = newTitle;\n        },\n        changeDescription: function(newDesc) {\n            this.description = newDesc;\n        },\n        changeDueDate: function(newDate) {\n            this.dueDate = newDate;\n        },\n        changePriority: function(newPriority) {\n            this.priority = newPriority;\n        }\n    };\n    const item = {\n        title,\n        description,\n        dueDate,\n        priority\n    }\n    return Object.assign(Object.create(proto), item);\n}\n\nfunction createProject(title) {\n    const proto = {\n        addItem: function(item) {\n            let title = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title)\n            this[title] = item;\n        }\n    }\n    const project = {\n        title\n    }\n    return Object.assign(Object.create(proto), project);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/item.js?");

/***/ }),

/***/ "./my_modules/string_functions.js":
/*!****************************************!*\
  !*** ./my_modules/string_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toCamelCase\": () => (/* binding */ toCamelCase)\n/* harmony export */ });\nfunction toCamelCase(string) {\n    string = string.toLowerCase();\n    let newString = \"\";\n    for (let i = 0; i < string.length; i++) {\n        if (string[i] === \" \") {\n            newString = newString + string[i + 1].toUpperCase();\n            i++;\n        } else {\n            newString = newString + string[i];\n        }\n    }\n    return newString;\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/string_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllProjects\": () => (/* binding */ getAllProjects),\n/* harmony export */   \"getItem\": () => (/* binding */ getItem)\n/* harmony export */ });\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n/* harmony import */ var _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my_modules/dom.js */ \"./my_modules/dom.js\");\n\n\n\n\n\n\nconst vacation = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"vacation\");\nconst trip = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Trip\",\n    \"Go to the airport, board the plane untill arrival\",\n    \"20/11/2022\",\n    \"High\"\n);\nconst shopping = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Shopping\",\n    \"Go to some stores in town and look around\",\n    \"21/11/2022\",\n    \"Medium\"\n);\nconst goBackHome = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n    \"Go back home\",\n    \"Go to the airport, board the plane untill we're back home\",\n    \"28/11/2022\",\n    \"High\"\n);\nvacation.addItem(trip);\nvacation.addItem(shopping);\nvacation.addItem(goBackHome);\n\nlet allProjects = {}; //for storage, maybe save when page closes?\n\nfunction getAllProjects() {\n    return allProjects;\n}\n\nfunction getItem(projectName, itemName) {\n    return allProjects[projectName][itemName];\n}\n\nallProjects.vacation = vacation;\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(vacation);\n\nlet clickStatus = {};\nconst projectButtons = document.querySelectorAll(\".projectButtons\");\nprojectButtons.forEach(project => {\n    project.addEventListener(\"click\", (e) => {\n        const currProj = e.target.id;\n        if (clickStatus[e.target.id] === undefined ||\n        clickStatus[e.target.id] === \"display\") {\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayAllItems)(allProjects[e.target.id]);\n            clickStatus[e.target.id] = \"remove\";\n\n            const editButtons = document.querySelectorAll(\".editButtons\");\n            editButtons.forEach(button => {\n                button.addEventListener(\"click\", (e) => {\n                    const currentItem = e.target.parentNode.id;\n                    (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.editMenu)(currentItem);\n                    (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeItem)(currentItem);\n                    delete allProjects[currProj][currentItem];\n\n                    const subbutt = document.querySelectorAll(\".submit-item-edit\");\n                    subbutt.forEach(button => {\n                        button.addEventListener(\"click\", (e) => {\n                        const currItem = e.target.parentNode.id;\n                        const form = document.querySelector(\"#\" + currItem);\n                        const newItem = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n                            form[0].value,\n                            form[1].value,\n                            form[2].value,\n                            form[3].value\n                        );\n                        allProjects[currProj][form[0].value] = newItem;\n                        (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayItem)(allProjects[currProj][form[0].value] = newItem);\n                        (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.remEditMenu)(\"#\" + currItem);\n                        });\n                    });\n                });\n            }); \n\n            const removeButtons = document.querySelectorAll(\".removeButtons\");\n            removeButtons.forEach(button => {\n                button.addEventListener(\"click\", (e) => {\n                    const currentItem = e.target.parentNode.id\n                    ;(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeItem)(currentItem);\n                });\n            });\n\n        } else {\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeAllItems)(allProjects[e.target.id]);\n            clickStatus[e.target.id] = \"display\";\n        }\n    });\n});\n\nconst addProject = document.querySelector(\"#add-project\");\naddProject.addEventListener(\"click\", (e) => {\n    const dropSelectors = (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dropForm)();\n    \n    dropSelectors.submit.addEventListener(\"click\", (e) => {\n        const name = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(e.target.previousSibling.value);\n        if (!(name === \"\")) {\n            const newProject = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\n            allProjects[newProject] = newProject;\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(newProject);\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.unDropForm)(dropSelectors.form);\n        } else {\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.unDropForm)();\n        }\n    });\n\n});\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;