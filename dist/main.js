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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDomItems\": () => (/* binding */ createDomItems),\n/* harmony export */   \"renderToContent\": () => (/* binding */ renderToContent)\n/* harmony export */ });\nconst mainContainer = document.querySelector(\".main-container\");\nconst sidebar = document.querySelector(\".sidebar\");\nconst content = document.querySelector(\".content\");\n\nfunction createDomItems(choice, all=false) {\n    //use choice to what extra creation you want aside from\n    //container, title (only takes array of strings)\n\n    if (all || choice === undefined) {\n        const domItems = {\n            container: document.createElement(\"div\"),\n            checkbox: document.createElement(\"button\"),\n            title: document.createElement(\"button\"),\n            description: document.createElement(\"button\"),\n            dueDate: document.createElement(\"button\"),\n            priority: document.createElement(\"button\"),\n            notes: document.createElement(\"button\")\n        }\n        return domItems;\n    } else {\n        domItems = {\n            container: document.createElement(\"div\"),\n            checkbox: document.createElement(\"button\"),\n            title: document.createElement(\"button\")\n        }\n        choice.forEach(element => {\n            switch (element) {\n                case \"description\":\n                    const description = document.\n                        createElement(\"button\");\n                        domItems.description = description;\n                    break\n                case \"dueDate\":\n                    const dueDate = document.\n                        createElement(\"button\");\n                        domItems.dueDate = dueDate;\n                    break\n                case \"priority\":\n                    const priority = document.\n                        createElement(\"button\");\n                        domItems.priority = priority;\n                    break\n                case \"notes\":\n                    const notes = document.\n                        createElement(\"button\");\n                        domItems.notes = notes;\n                    break\n            }\n        });\n        return domItems;\n    }\n}\n\nfunction createDomProject() {\n    const file = document.createElement(\"button\");\n    file.classList.add(\"project-button\");\n    return file;\n}\n\nfunction renderToContent(item, elemCreateFunc) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"key-container\");\n    let keys = [];\n    for (let key in item) {\n        keys.push(key);\n    }\n    const elemRefObj = elemCreateFunc(undefined, true);\n    for (let key in elemRefObj) {\n        let currentEl = elemRefObj[key];\n        if (key !== \"container\") {\n            container.appendChild(currentEl);\n            if (key !== \"checkbox\") currentEl.textContent = item[key];\n        }\n    }\n    content.appendChild(container);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/dom.js?");

/***/ }),

/***/ "./my_modules/item.js":
/*!****************************!*\
  !*** ./my_modules/item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItem\": () => (/* binding */ createItem),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createItem(title, \n    description,\n    dueDate,\n    priority, //could reduce number of arg by passing obj\n    notes) {\n    const proto = {\n        addProp: function(key, value) {\n            if (!(this[key] in this)) this[key] = value;\n        },\n        changeProp: function(key, value) {\n            if (this[key]) this[key] = value;\n        }\n    }\n    const item = {\n        title, \n        description,\n        dueDate,\n        priority,\n        notes\n    }\n    return Object.assign(Object.create(proto),\n        {\n        title, \n        description,\n        dueDate,\n        priority,\n        notes\n    });\n}\n\nfunction createProject(name) {\n    const proto = {\n        addItem: function(keyName, item) {\n            this[keyName] = item;\n        }\n    }\n    const project = {\n        name\n    };\n    return Object.assign(Object.create(proto), project);\n}\n\n\n\n//# sourceURL=webpack://to-do/./my_modules/item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../my_modules/item.js */ \"./my_modules/item.js\");\n/* harmony import */ var _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my_modules/dom.js */ \"./my_modules/dom.js\");\n\n\n\nconst goBike = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\"Go Bike\",\n    \"Cycle around the block\",\n    \"15/02/1998\",\n    \"low\",\n    \"No notes\");\n\n    const goHome = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createItem)(\"Go Home\",\n    \"Return home through the valley\",\n    \"16/02/1998\",\n    \"medium\",\n    \"there will be no notes here this time\");\n    goHome.changeProp(\"Do it\", \"Kill myself\");\n\n    const vacation = (0,_my_modules_item_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"vacation\");\n    vacation.addItem(\"goHome\", goHome);\n\n    (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderToContent)(goHome, _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.createDomItems);\n    (0,_my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderToContent)(goBike, _my_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.createDomItems);\n    \n    \n    /*const newDom = createDomItems(undefined, true);\n\n    console.log(newDom);\n\n    newDom.title.textContent = \"hello\";\n    const content = document.querySelector(\".content\");\n    newDom.title.appendChild(newDom);*/\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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