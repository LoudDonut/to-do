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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayItem\": () => (/* binding */ displayItem),\n/* harmony export */   \"displayAllItems\": () => (/* binding */ displayAllItems),\n/* harmony export */   \"removeAllItems\": () => (/* binding */ removeAllItems),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem),\n/* harmony export */   \"dropForm\": () => (/* binding */ dropForm),\n/* harmony export */   \"unDropForm\": () => (/* binding */ unDropForm)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\".content\");\r\nconst sidebar = document.querySelector(\".sidebar\");\r\n\r\nfunction displayItem(item) {\r\n    const itemContainer = document.createElement(\"div\");\r\n    const propList = document.createElement(\"ul\");\r\n    const edit = document.createElement(\"button\");\r\n    const remove = document.createElement(\"button\");\r\n    const title = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title);\r\n\r\n    for (let prop in item) {\r\n\r\n        if (item.propertyIsEnumerable(prop) === true) {\r\n            const itemProp = document.createElement(\"li\");\r\n            itemProp.classList.add(title);\r\n            itemProp.textContent = item[prop];\r\n            propList.appendChild(itemProp);\r\n        }\r\n\r\n    }\r\n\r\n    itemContainer.id = title;\r\n    itemContainer.classList.add(\"item-container\");\r\n    itemContainer.appendChild(propList);\r\n    edit.textContent = \"Edit\";\r\n    edit.classList.add(title);\r\n    remove.textContent = \"Remove\";\r\n    remove.classList.add(title);\r\n    itemContainer.appendChild(edit);\r\n    itemContainer.appendChild(remove);\r\n    content.appendChild(itemContainer);\r\n}\r\n\r\nfunction displayAllItems(project) {\r\n    for (let key in project) {\r\n        if (key !== \"title\" &&\r\n        project.propertyIsEnumerable(key) === true) {\r\n            displayItem(project[key]);\r\n        }\r\n    }\r\n}\r\n\r\nfunction removeItem(itemId) {\r\n    const itemContainer = document.querySelector(\"#\" + itemId);\r\n    content.removeChild(itemContainer);\r\n}\r\n\r\nfunction removeAllItems(project) {\r\n    for (let key in project) {\r\n        if (key !== \"title\" &&\r\n        project.propertyIsEnumerable(key) === true) {\r\n            const curr = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(project[key].title);\r\n            removeItem(curr);\r\n        }\r\n    }\r\n}\r\n\r\nfunction displayProject(project) {\r\n    const projectButt = document.createElement(\"button\");\r\n    projectButt.id = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(project.title);\r\n    projectButt.classList.add(\"projectButtons\");\r\n    \r\n    projectButt.textContent = project.title;\r\n    sidebar.appendChild(projectButt);\r\n}\r\n\r\nfunction dropForm(mode, className) {\r\n    const form = document.createElement(\"form\");\r\n    const input = document.createElement(\"input\");\r\n    const submit = document.createElement(\"input\");\r\n    input.setAttribute(\"type\", \"text\");\r\n    submit.setAttribute(\"type\", \"submit\");\r\n    submit.setAttribute(\"value\", \"Submit\");\r\n    form.setAttribute(\"action\", \"javascript:void(0);\");\r\n    \r\n    form.appendChild(input);\r\n    form.appendChild(submit);\r\n\r\n    sidebar.appendChild(form)\r\n\r\n    return { submit, form };\r\n}\r\n\r\nfunction unDropForm(formSelector) {\r\n    sidebar.removeChild(formSelector);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./my_modules/dom.js?");

/***/ }),

/***/ "./my_modules/item.js":
/*!****************************!*\
  !*** ./my_modules/item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItem\": () => (/* binding */ createItem),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n\r\n\r\nfunction createItem(\r\n    title,\r\n    description,\r\n    dueDate,\r\n    priority\r\n){\r\n    const proto = {\r\n        changeTitle: function(newTitle) {\r\n            this.title = newTitle;\r\n        },\r\n        changeDescription: function(newDesc) {\r\n            this.description = newDesc;\r\n        },\r\n        changeDueDate: function(newDate) {\r\n            this.dueDate = newDate;\r\n        },\r\n        changePriority: function(newPriority) {\r\n            this.priority = newPriority;\r\n        }\r\n    };\r\n    const item = {\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority\r\n    }\r\n    return Object.assign(Object.create(proto), item);\r\n}\r\n\r\nfunction createProject(title) {\r\n    const proto = {\r\n        addItem: function(item) {\r\n            let title = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(item.title)\r\n            this[title] = item;\r\n        }\r\n    }\r\n    const project = {\r\n        title\r\n    }\r\n    return Object.assign(Object.create(proto), project);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./my_modules/item.js?");

/***/ }),

/***/ "./my_modules/string_functions.js":
/*!****************************************!*\
  !*** ./my_modules/string_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toCamelCase\": () => (/* binding */ toCamelCase)\n/* harmony export */ });\nfunction toCamelCase(string) {\r\n    string = string.toLowerCase();\r\n    let newString = \"\";\r\n    for (let i = 0; i < string.length; i++) {\r\n        if (string[i] === \" \") {\r\n            newString = newString + string[i + 1].toUpperCase();\r\n            i++;\r\n        } else {\r\n            newString = newString + string[i];\r\n        }\r\n    }\r\n    return newString;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./my_modules/string_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n/* harmony import */ var _my_modules_string_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/string_functions */ \"./my_modules/string_functions.js\");\n/* harmony import */ var _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my_modules/dom.js */ \"./my_modules/dom.js\");\n\r\n\r\n\r\n\r\n \r\n\r\nconst vacation = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"vacation\");\r\nconst trip = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\r\n    \"Trip\",\r\n    \"Go to the airport, board the plane untill arrival\",\r\n    \"20/11/2022\",\r\n    \"High\"\r\n);\r\nconst shopping = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\r\n    \"Shopping\",\r\n    \"Go to some stores in town and look around\",\r\n    \"21/11/2022\",\r\n    \"Medium\"\r\n);\r\nconst goBackHome = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\r\n    \"Go back home\",\r\n    \"Go to the airport, board the plane untill we're back home\",\r\n    \"28/11/2022\",\r\n    \"High\"\r\n);\r\nvacation.addItem(trip);\r\nvacation.addItem(shopping);\r\nvacation.addItem(goBackHome);\r\n\r\nlet allProjects = {}; //for storage, maybe save when page closes?\r\nallProjects.vacation = vacation;\r\n\r\n(0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(vacation);\r\n\r\nlet clickStatus = {};\r\nconst projectButtons = document.querySelectorAll(\".projectButtons\");\r\nprojectButtons.forEach(project => {\r\n    project.addEventListener(\"click\", (e) => {\r\n        if (clickStatus[e.target.id] === undefined ||\r\n        clickStatus[e.target.id] === \"display\") {\r\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayAllItems)(allProjects[e.target.id]);\r\n            clickStatus[e.target.id] = \"remove\";\r\n        } else {\r\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeAllItems)(allProjects[e.target.id]);\r\n            clickStatus[e.target.id] = \"display\";\r\n        }\r\n    });\r\n});\r\n\r\nlet submitButt;\r\nconst addProject = document.querySelector(\"#add-project\");\r\naddProject.addEventListener(\"click\", (e) => {\r\n    const dropSelectors = (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.dropForm)();\r\n    \r\n    dropSelectors.submit.addEventListener(\"click\", (e) => {\r\n        const name = (0,_my_modules_string_functions__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(e.target.previousSibling.value);\r\n        if (!(name === \"\")) {\r\n            const newProject = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\r\n            allProjects[newProject] = newProject;\r\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProject)(newProject);\r\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.unDropForm)(dropSelectors.form);\r\n        } else {\r\n            (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.unDropForm)();\r\n        }\r\n    });\r\n\r\n});\r\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;