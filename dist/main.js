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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inconsolata&family=Sacramento&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --mainColor: rgb(141, 4, 43);\\n  --grayColor: #ededed;\\n  --mainFont: 'Inconsolata', monospace;\\n  --lightGray: rgb(215, 215, 215);\\n  --greenColor: #9FC26E;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: var(--mainFont);\\n}\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 300px auto;\\n  grid-template-rows: 50px calc(100vh - 100px) 50px;\\n}\\n\\n.header {\\n  grid-area: 1 / 1 / 2 / 3;\\n  background-color: var(--mainColor);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.sidebar {\\n  grid-area: 2 / 1 / 3 / 2;\\n  width: 300px;\\n  background-color: var(--grayColor);\\n  transition: 0.3s;\\n}\\n\\n.hidden {\\n  transform: translateX(-300px);\\n  transition: 0.3s;\\n}\\n\\n.content {\\n  grid-area: 2 / 1 / 3 / 3;\\n  margin-left: 320px;\\n  transition: 0.3s;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n\\n.extend {\\n  margin-left: 20px;\\n  transition: 0.3s;\\n}\\n\\n.footer {\\n  grid-area: 3 / 1 / 4 / 3;\\n  background-color: var(--mainColor);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n  color: white;\\n}\\n\\n.footer img {\\n  width: 24px;\\n  transition: 0.3s;\\n}\\n\\n.footer img:hover {\\n  transform: rotate(360deg);\\n  transition: 0.3s;\\n}\\n\\n.header .title {\\n  color: rgb(255, 255, 255);\\n  font-family: 'Sacramento', cursive;\\n  font-size: 2rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.menu,\\n.home {\\n  width: 24px;\\n  height: 24px;\\n  background-size: 24px 24px;\\n  padding: 5px;\\n  margin-left: 20px;\\n}\\n\\n.menu:hover,\\n.home:hover {\\n  cursor: pointer;\\n  background-color: rgba(255, 255, 255, 0.2);\\n  border-radius: 5px;\\n}\\n\\n.sidebarMenu img {\\n  width: 24px;\\n}\\n\\n.sidebarMenu {\\n  margin: 30px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n  font-size: 1.1rem;\\n  padding: 10px;\\n  border-radius: 5px;\\n  transition: 0.3s;\\n}\\n\\n.nav:hover {\\n  cursor: pointer;\\n  background-color: rgb(0, 0, 0, 0.05);\\n  transition: 0.3s;\\n}\\n\\n#projectsTag:hover {\\n  background-color: rgb(0, 0, 0, 0);\\n  cursor: default;\\n}\\n\\n.addProjectBtn {\\n  transition: 0.3s;\\n}\\n\\n.addProjectBtn:hover {\\n  transform: scale(1.3);\\n  transition: 0.3s;\\n  cursor: pointer;\\n}\\n\\n.projects {\\n  margin-left: 30px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#addProjectForm {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 30px;\\n  grid-template-areas: \\n    \\\"input input\\\"\\n    \\\"submit cancel\\\";\\n  margin: 5px 0px;\\n  margin-left: 15px;\\n  gap: 5px;\\n  z-index: 1;\\n}\\n\\n#addProjectForm.hidden {\\n  display: none;\\n}\\n\\n#addProjectForm div {\\n  grid-area: input;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#addProjectForm input {\\n  width: auto;\\n  line-height: 1.8rem;\\n  font-size: 1rem;\\n  border: 0;\\n  border-radius: 5px;\\n  text-indent: 10px;\\n  font-family: var(--mainFont);\\n}\\n\\n#addProjectForm input:focus {\\n  outline: none;\\n}\\n\\n#addProjectForm input::placeholder {\\n  font-family: var(--mainFont);\\n}\\n\\n#addProjectForm button {\\n  height: 30px;\\n  border: 0;\\n  color: white;\\n  border-radius: 5px;\\n  font-family: var(--mainFont);\\n  font-size: 1rem;\\n}\\n\\n#addProjectForm button:hover {\\n  cursor: pointer;\\n}\\n\\n#addProjectForm .submitNewProject {\\n  grid-area: submit;\\n  background-color: var(--greenColor);\\n}\\n\\n#addProjectForm .cancelNewProject {\\n  grid-area: cancel;\\n  background-color: var(--mainColor);\\n}\\n\\n.projectsList * {\\n  padding: 5px;\\n  border-radius: 5px;\\n  transition: 0.3s;\\n}\\n\\n.projectsList>*:hover {\\n  background-color: rgb(0, 0, 0, 0.05);\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n.projectItem {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-left: 15px;\\n}\\n\\n.delBtn {\\n  transition: 0.3s;\\n  width: 16px !important;\\n  display: none;\\n  opacity: 0.5;\\n  z-index: 5;\\n}\\n\\n.delBtn:hover {\\n  transform: scale(1.5);\\n  transition: 0.3s;\\n  opacity: 1;\\n}\\n\\n.projectsList>*:hover .delBtn {\\n  display: block;\\n}\\n\\n.projectItem.active, .filter.active {\\n  background-color: rgb(203, 203, 203);\\n}\\n\\n.contentBox {\\n  background-color: var();\\n  border-radius: 10px;\\n  border: 1px solid var(--lightGray);\\n  margin-right: 20px;\\n  margin-top: 20px;\\n  max-width: 700px;\\n  flex: 1;\\n  padding: 0 20px 20px 20px;\\n}\\n\\n#h1Title {\\n  color: var(--mainColor);\\n}\\n\\n.ToDoItem {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.ToDoItem img {\\n  width: 24px;\\n}\\n\\n#toDoField {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.toDoDate {\\n  border: 1px solid var(--lightGray);\\n  padding: 5px;\\n  border-radius: 5px;\\n  margin-right: auto;\\n}\\n\\n.toDoDate:hover {\\n  cursor: default;\\n}\\n\\n.toDoTitle:hover {\\n  cursor: help;\\n}\\n\\n.popup h2 {\\n  margin-top: 10px;\\n}\\n\\n.importantIcon,\\n.editToDoBtn,\\n.delToDoBtn {\\n  transition: 0.3s;\\n}\\n\\n.importantIcon:hover,\\n.editToDoBtn:hover,\\n.delToDoBtn:hover {\\n  cursor: pointer;\\n  transform: scale(1.3);\\n  transition: 0.3s;\\n}\\n\\n#newToDo,\\n#saveButton {\\n  border: none;\\n  border-radius: 5px;\\n  background-color: var(--greenColor);\\n  color: white;\\n  transition: 0.3s;\\n  margin-top: 20px;\\n  padding: 5px 20px;\\n  font-family: var(--mainFont);\\n  font-size: 1.1rem;\\n}\\n\\n#saveButton {\\n  margin: 0;\\n}\\n\\n#newToDo:hover,\\n#saveButton:hover {\\n  cursor: pointer;\\n  transition: 0.3s;\\n  transform: scale(1.1);\\n}\\n\\n.toDoCheckbox {\\n  -ms-transform: scale(1.3); /* IE */\\n  -moz-transform: scale(1.3); /* FF */\\n  -webkit-transform: scale(1.3); /* Safari and Chrome */\\n  -o-transform: scale(1.3); /* Opera */\\n  transform: scale(1.3);\\n  accent-color: var(--greenColor);\\n}\\n\\n.toDoCheckbox:hover {\\n  cursor: pointer;\\n}\\n\\n.done {\\n  text-decoration: line-through;\\n}\\n\\n.popupFill {\\n  position: fixed;\\n  left: 0px;\\n  top: 0px;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  z-index: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgb(0, 0, 0, 0.5);\\n}\\n\\n.popup {\\n  border-radius: 10px;\\n  background-color: white;\\n  padding: 30px;\\n}\\n\\n.popupContainer {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 40px;\\n}\\n\\n.leftPart,\\n.rightPart {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n\\n.isImportantBox {\\n  display: flex;\\n  gap: 10px;\\n}\\n\\n.hidePopup {\\n  opacity: 0;\\n  z-index: -1;\\n}\\n\\n.showPopup {\\n  opacity: 1;\\n  z-index: 1;\\n  transition: 0.2s;\\n}\\n\\nlabel {\\n  margin-bottom: -10px;\\n}\\n\\n.popup p {\\n  margin: 0;\\n  color: rgba(165, 165, 165)\\n}\\n\\n.warningUniqueName {\\n  color: red;\\n}\\n\\n.hideWarning {\\n  display: none !important;\\n}\\n\\n.toDoNotes {\\n  color: white;\\n  background-color: black;\\n  padding: 10px;\\n  border-radius: 10px;\\n  position: absolute;\\n  top: 35px;\\n  z-index: 2;\\n  display: none;\\n}\\n\\n.makeVisibleToDoNotes {\\n  display: block;\\n}\\n\\n.popup input,\\n.popup textarea,\\nselect {\\n  font-family: var(--mainFont);\\n  font-size: 1rem;\\n  line-height: 1.8rem;\\n  background-color: #eee;\\n  border: 0;\\n  border-radius: 5px;\\n  text-indent: 10px;\\n}\\n\\n.popup input:focus,\\n.popup textarea:focus,\\nselect:focus {\\n  outline: none;\\n  color: white;\\n  background-color: var(--greenColor);\\n  transition: 0.5s;\\n}\\n\\nselect {\\n  padding: 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/icons/del.png":
/*!***************************!*\
  !*** ./src/icons/del.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"96c638dca48f72d095beefa8039e659f.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/icons/del.png?");

/***/ }),

/***/ "./src/icons/delToDo.png":
/*!*******************************!*\
  !*** ./src/icons/delToDo.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"157ec952019c5f3f12e342cd3b8c503b.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/icons/delToDo.png?");

/***/ }),

/***/ "./src/icons/editToDo.png":
/*!********************************!*\
  !*** ./src/icons/editToDo.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"733dd11579db6b2cb08c38c950eae7f0.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/icons/editToDo.png?");

/***/ }),

/***/ "./src/icons/starOff.png":
/*!*******************************!*\
  !*** ./src/icons/starOff.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c486e9cba3a5df4d92d9517dcece8162.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/icons/starOff.png?");

/***/ }),

/***/ "./src/icons/starOn.png":
/*!******************************!*\
  !*** ./src/icons/starOn.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9afc1eab207a76dfab993211984f0392.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/icons/starOn.png?");

/***/ }),

/***/ "./src/img/GitHub.png":
/*!****************************!*\
  !*** ./src/img/GitHub.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5de0643bf1bbf77878ff26e8d04f3042.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/img/GitHub.png?");

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"72f54611fa979ffd23ecb62733959f73.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/img/home.png?");

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"360d0dcab772fd97d50f6beb177e2daa.png\");\n\n//# sourceURL=webpack://11-todo-list/./src/img/menu.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://11-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu.png */ \"./src/img/menu.png\");\n/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/home.png */ \"./src/img/home.png\");\n/* harmony import */ var _img_GitHub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/GitHub.png */ \"./src/img/GitHub.png\");\n/* harmony import */ var _icons_del_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/del.png */ \"./src/icons/del.png\");\n/* harmony import */ var _icons_starOn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/starOn.png */ \"./src/icons/starOn.png\");\n/* harmony import */ var _icons_starOff_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/starOff.png */ \"./src/icons/starOff.png\");\n/* harmony import */ var _icons_editToDo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/editToDo.png */ \"./src/icons/editToDo.png\");\n/* harmony import */ var _icons_delToDo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/delToDo.png */ \"./src/icons/delToDo.png\");\n\n\n\n\n\n\n\n\n\n\n\nclass toDo {\n  constructor(toDoId, projectId, title, notes, date, important) {\n    this.toDoId = toDoId,\n    this.projectId = projectId;\n    this.title = title,\n    this.notes = notes,\n    this.date = date,\n    this.important = important,\n    this.ready = false\n  }\n}\n\nclass project {\n  constructor(projectId, name) {\n    this.projectId = projectId,\n    this.name = name\n  }\n}\n\n\nconst projectsManager = (function() {\n  let projectIdCounter = 0;\n  let toDoIdCounter = 0;\n  let activeProjectId = 0;\n  const projectList = [];\n  const toDoList = [];\n\n  function getActiveProjectId() {\n    return activeProjectId;\n  }\n\n  function setActiveProjectId(id) {\n    activeProjectId = +id;\n  }\n\n  function getActiveTitle() {\n    return document.querySelector('.active').textContent;\n  }\n\n  function createProject(name) {\n    const newProject = new project(projectIdCounter, name);\n    projectIdCounter++;\n    projectList.push(newProject);\n  }\n\n  function moveToDosToInbox(projectId) {\n    toDoList.forEach(toDo => {\n      if (toDo.projectId === +projectId) {\n        console.log(1);\n        toDo.projectId = 0;\n      }\n    })\n  }\n\n  function deleteProject(projectId) {\n    let needToRenderToDos = false;\n    projectList.forEach(function(item, index, object) {\n      if (+projectId === item.projectId) {\n        object.splice(index, 1);\n        moveToDosToInbox(projectId);\n        if (item.projectId === projectsManager.getActiveProjectId()) {\n          projectsManager.setActiveProjectId(0);\n          needToRenderToDos = true;\n        }\n      }\n    })\n    return needToRenderToDos;\n  }\n\n  function getToDoNumberInList(id) {\n    let index = -1;\n    toDoList.forEach(function(toDo, i) {\n      if (toDo.toDoId === +id) index = i;\n    })\n    return index;\n  }\n\n  function getProjectIdbyName(name) {\n    let projectId;\n    projectList.forEach(project => {\n      if (project.name === name) projectId = project.projectId;\n    })\n    return projectId;\n  }\n\n  function getProjectNameById(id) {\n    let projectName;\n    projectList.forEach(project => {\n      if (project.projectId === id) {\n        projectName = project.name;\n      }\n    })\n    return projectName;\n  }\n\n  function editToDo(title, notes, dateToSave, projectName, important, editToDoId) {\n    toDoList.forEach(toDo => {\n      if (toDo.toDoId === editToDoId) {\n        toDo.title = title;\n        toDo.notes = notes;\n        toDo.date = dateToSave;\n        toDo.projectId = getProjectIdbyName(projectName);\n        toDo.important = important;\n      }\n    })\n  }\n\n  function createToDo(title, notes, date, projectName, important) {\n    const projectId = getProjectIdbyName(projectName);\n    const newToDo = new toDo(toDoIdCounter, projectId, title, notes, date, important);\n    toDoIdCounter++;\n    toDoList.push(newToDo);\n  }\n\n  function deleteToDo(toDoId) {\n    toDoList.forEach(function(toDo, index, object) {\n      if (toDo.toDoId === toDoId) {\n        object.splice(index, 1);\n      }\n    })\n  }\n\n  createProject('Inbox');\n  createProject('Project1');\n  createProject('Project2');\n  createToDo('Text of note 1','Some descripton 1', '13-05-2022', 'Inbox', false);\n  createToDo('Text of note 2','Some descripton 2', '13-05-2022', 'Inbox', true);\n  createToDo('Text of note 3','Some descripton 3', '13-05-2022', 'Project1', false);\n  createToDo('Text of note 4','Some descripton 4', '15-05-2022', 'Project1', true);\n  createToDo('Text of note 5','Some descripton 5', '16-05-2022', 'Project2', false);\n  createToDo('Text of note 6','Some descripton 6', '17-05-2022', 'Project2', false);\n\n  return {projectList, toDoList, createProject, deleteProject, createToDo, deleteToDo, getActiveProjectId, setActiveProjectId, getActiveTitle, getToDoNumberInList, getProjectNameById, editToDo};\n\n})();\n\n\nconst domManipulation = (function() {\n  const sidebar = document.querySelector('.sidebar');\n  const content = document.querySelector('.content');\n  const menuBtn = document.querySelector('.menu');\n  const homeBtn = document.querySelector('.home');\n  const projectsList = document.querySelector('.projectsList');\n  const h1Title = document.querySelector('#h1Title');\n  const toDoField = document.querySelector('#toDoField');\n  let sidebarShow = true;\n  const addToDoBtn = document.querySelector('#newToDo');\n  const warningUniqueName = document.querySelector('.warningUniqueName');\n  let editMode = {\n    enabled: false,\n    editToDoId: null\n  };\n\n  // AddNewProjectForm\n  const cancelNewProject = document.querySelector('.cancelNewProject');\n  const addProjectBtn = document.querySelector('.addProjectBtn');\n  const addProjectForm = document.querySelector('#addProjectForm');\n  const addProjectInput = document.querySelector('#addProjectInput');\n\n  // PopupForm\n  const popupFill = document.querySelector('.popupFill');\n  const popupForm = document.querySelector('.popup');\n\n  const addToDoTitle = document.querySelector('#addToDoTitle');\n  const description = document.querySelector('#description');\n  const dueDate = document.querySelector('#dueDate');\n  const selectProjectInForm = document.querySelector('#selectProject');\n  const isImportant = document.querySelector('#isImportant');\n\n  function hideShowSidebar() {\n    if (sidebarShow) {\n      sidebarShow = false;\n      sidebar.classList.add('hidden');\n      content.classList.add('extend');\n    } else {\n      sidebarShow = true;\n      sidebar.classList.remove('hidden');\n      content.classList.remove('extend');\n    }\n  }\n\n  function showAddProjectForm() {\n    addProjectForm.classList.remove('hidden');\n    addProjectInput.focus();\n    addProjectInput.value = '';\n  }\n\n  function checkUniqueName(name) {\n    let nameIsUnique = true;\n    if (name.length < 1) nameIsUnique = false;\n    projectsManager.projectList.forEach(project => {\n      if (project.name === name) nameIsUnique = false;\n    })\n    return nameIsUnique;\n  }\n\n  function hideNewProjectForm() {\n    addProjectForm.classList.add('hidden');\n    warningUniqueName.classList.add('hideWarning');\n  }\n\n  function addProject(event) {\n    event.preventDefault();\n    const name = addProjectInput.value.charAt(0).toUpperCase() + addProjectInput.value.slice(1).toLowerCase();\n    if (checkUniqueName(name)) {\n      projectsManager.createProject(name);\n      renderProjects();\n      addProjectForm.classList.add('hidden');\n      warningUniqueName.classList.add('hideWarning');\n    } else {\n      warningUniqueName.classList.remove('hideWarning');\n    }\n  }\n\n  function delProject(event) {\n    const id = event.path[1].classList[1].split('-')[1];\n    const needToRenderToDos = projectsManager.deleteProject(id);\n    renderProjects();\n    if (needToRenderToDos) renderToDos();\n  }\n\n  function resetActiveColor() {\n    const allProjects = document.querySelectorAll('.projectItem');\n    const allFilters = document.querySelectorAll('.filter');\n    allProjects.forEach(project => project.classList.remove('active'));\n    allFilters.forEach(filter => filter.classList.remove('active'));\n  }\n\n  function colorActiveProject(id) {\n    if (id > -1) {\n      resetActiveColor();\n      const activeProject = document.querySelector(`.projectItem.id-${id}`);\n      activeProject.classList.add('active');\n    } \n  }\n\n  function colorActiveFilter(id) {\n    resetActiveColor();\n    const activeFilter = document.querySelector(`.filter.id-${id}`);\n    activeFilter.classList.add('active');\n  }\n\n  function selectProject() {\n    const projectId = this.classList[1].split('-')[1];\n    colorActiveProject(projectId);\n    projectsManager.setActiveProjectId(projectId);\n    renderToDos();\n  }\n\n  function selectFilter() {\n    const filterId = this.classList[2].split('-')[1];\n    colorActiveFilter(filterId);\n    projectsManager.setActiveProjectId(-1 * filterId);\n    renderToDos();\n  }\n\n  function renderProjects() {\n    const projectItems = document.querySelectorAll('.projectItem');\n    if (projectItems.length > 0) {\n      projectItems.forEach(projectItem => {\n        projectItem.removeEventListener('click', selectProject);\n      })\n    }\n    \n    projectsList.innerHTML = '';\n    projectsManager.projectList.forEach(project => {\n      const newProject = document.createElement('div');\n      const projectName = document.createElement('div');\n      newProject.classList.add('projectItem');\n      newProject.classList.add(`id-${project.projectId}`);\n      projectName.textContent = project.name;\n      newProject.appendChild(projectName);\n      \n      if (project.projectId !== 0) {\n        const delIcon = new Image();\n        delIcon.src = _icons_del_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        delIcon.classList.add('delBtn');\n        newProject.appendChild(delIcon);\n      }\n      \n      projectsList.appendChild(newProject);\n    })\n\n    const closeBtns = document.querySelectorAll('.delBtn');\n    closeBtns.forEach(closeBtn => {\n      closeBtn.addEventListener('click', delProject, {once: true});\n    })\n\n    const projectItemsUpdated = document.querySelectorAll('.projectItem');\n    projectItemsUpdated.forEach(projectItem => {\n      projectItem.addEventListener('click', selectProject);\n    })\n\n    const activeProjectId = projectsManager.getActiveProjectId();\n    colorActiveProject(activeProjectId); \n  }\n\n  const allFilters = document.querySelectorAll('.filter');\n  allFilters.forEach(filter => filter.addEventListener('click', selectFilter));\n\n  function addSelectProjectToForm() {\n    selectProjectInForm.innerHTML = '';\n    projectsManager.projectList.forEach(project => {\n      const newSelector = document.createElement('option');\n      newSelector.textContent = project.name;\n      if (project.projectId === projectsManager.getActiveProjectId()) {\n        newSelector.selected = true;\n      }\n      selectProjectInForm.appendChild(newSelector);\n    })\n  }\n\n  function getToDoObject(toDoId) {\n    let toDoObject;\n    projectsManager.toDoList.forEach(toDo => {\n      if (toDo.toDoId === +toDoId) toDoObject = toDo;\n    })\n    return toDoObject;\n  }\n\n  function switchEditMode(toDoId) {\n    if (toDoId) {\n      editMode.enabled = true;\n      editMode.editToDoId = +toDoId;\n    } else {\n      editMode.enabled = false;\n      editMode.editToDoId = null;\n    }\n  }\n\n  function fillFormForEdit(event) {\n    const toDoId = event.path[1].classList[1].split('-')[1];\n    const toDoObject = getToDoObject(toDoId);\n    addToDoTitle.value = toDoObject.title;\n    description.value = toDoObject.notes;\n    dueDate.value = invertDateFormat(toDoObject.date);\n    const projectName = projectsManager.getProjectNameById(toDoObject.projectId);\n    selectProjectInForm.value = projectName;\n    isImportant.checked = toDoObject.important;\n\n    switchEditMode(toDoId);\n  }\n\n  function showForm(event) {\n    addSelectProjectToForm();\n    popupFill.classList.remove('hidePopup');\n    popupFill.classList.add('showPopup');\n    if (event.target === addToDoBtn) {\n      document.querySelector('.popup h2').textContent = 'Add new ToDo:';\n      clearNewToDoForm();\n    } else {\n      document.querySelector('.popup h2').textContent = 'Edit ToDo:';\n      fillFormForEdit(event);\n    }\n  }\n\n  function hideForm(event, onSave) {\n    if (onSave || event.target == popupFill) {\n      popupFill.classList.remove('showPopup');\n      popupFill.classList.add('hidePopup');\n      switchEditMode();\n    }\n  }\n\n  function changeImportant(event) {\n    const toDoId = +event.path[1].classList[1].split('-')[1];\n    const toDoNumber = projectsManager.getToDoNumberInList(toDoId);\n    projectsManager.toDoList[toDoNumber].important = !projectsManager.toDoList[toDoNumber].important;\n    renderToDos();\n  }\n\n  function changeReady(event) {\n    const toDoId = +event.path[1].classList[1].split('-')[1];\n    const toDoNumber = projectsManager.getToDoNumberInList(toDoId);\n    projectsManager.toDoList[toDoNumber].ready = !projectsManager.toDoList[toDoNumber].ready;\n    renderToDos();\n  }\n\n  function delToDo(event) {\n    const toDoId = +event.path[1].classList[1].split('-')[1];\n    projectsManager.deleteToDo(toDoId);\n    renderToDos();\n  }\n\n  function makeVisibleToDoNote(event) {\n    const toDoId = event.path[1].classList[1].split('-')[1];\n    const toDoNote = document.querySelector(`div.ToDoItem.id-${toDoId} .toDoNotes`);\n    toDoNote.classList.add('makeVisibleToDoNotes');\n  }\n\n  function makeUnvisibleToDoNote() {\n    const toDoNotes = document.querySelectorAll('.toDoNotes');\n    toDoNotes.forEach(toDoNote => {\n      toDoNote.classList.remove('makeVisibleToDoNotes');\n    })\n  }\n\n  function prepareToDoListForRender() {\n    let ActualToDoList;\n    if (projectsManager.getActiveProjectId() === -1) {\n      ActualToDoList = projectsManager.toDoList;\n    }\n    return ActualToDoList;\n  }\n\n  function renderToDos(toDoList) {\n    h1Title.textContent = projectsManager.getActiveTitle();\n    const ActualToDoList = toDoList || projectsManager.toDoList;\n\n    toDoField.innerHTML = '';\n\n    ActualToDoList.forEach(toDo => {\n      const ToDoItem = document.createElement('div');\n      ToDoItem.classList.add('ToDoItem');\n      ToDoItem.classList.add(`id-${toDo.toDoId}`);\n\n      const checkBox = document.createElement('input');\n      checkBox.type = \"checkbox\";\n      checkBox.classList.add('toDoCheckbox');\n      if (toDo.ready) {checkBox.checked = true};\n      checkBox.addEventListener('click', changeReady);\n\n      const toDoTitle = document.createElement('div');\n      toDoTitle.classList.add('toDoTitle');\n      toDoTitle.textContent = toDo.title;\n      if (toDo.ready) {toDoTitle.classList.add('done')};\n      toDoTitle.addEventListener('mouseover', makeVisibleToDoNote);\n      toDoTitle.addEventListener('mouseleave', makeUnvisibleToDoNote);\n\n      const toDoDate = document.createElement('div');\n      toDoDate.textContent = toDo.date;\n      toDoDate.classList.add('toDoDate');\n\n      const importantIcon = new Image();\n      if (toDo.important) {\n        importantIcon.src = _icons_starOn_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      } else {\n        importantIcon.src = _icons_starOff_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n      }\n      importantIcon.classList.add('importantIcon');\n      importantIcon.addEventListener('click', changeImportant);\n\n      const editToDoBtn = new Image();\n      editToDoBtn.src = _icons_editToDo_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n      editToDoBtn.classList.add('editToDoBtn');\n      editToDoBtn.addEventListener('click', showForm)\n\n      const delToDoBtn = new Image();\n      delToDoBtn.src = _icons_delToDo_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      delToDoBtn.classList.add('delToDoBtn');\n      delToDoBtn.addEventListener('click', delToDo, {once: true});\n\n      const toDoNotes = document.createElement('div');\n      toDoNotes.classList.add('toDoNotes');\n      toDoNotes.textContent = toDo.notes;\n\n      ToDoItem.appendChild(checkBox);\n      ToDoItem.appendChild(toDoTitle);\n      ToDoItem.appendChild(toDoDate);\n      ToDoItem.appendChild(importantIcon);\n      ToDoItem.appendChild(editToDoBtn);\n      ToDoItem.appendChild(delToDoBtn);\n      ToDoItem.appendChild(toDoNotes);\n\n      toDoField.appendChild(ToDoItem);\n    })\n  }\n\n  function clearNewToDoForm() {\n    addToDoTitle.value = '';\n    description.value = '';\n    dueDate.value = '';\n    isImportant.checked = false;\n  }\n\n  function invertDateFormat(date) {\n    const tmpDate = date.split('-');\n    return tmpDate[2] + '-' + tmpDate[1] + '-' + tmpDate[0];\n  }\n\n  function submitNewToDoForm(event) {\n    event.preventDefault();\n\n    const title = addToDoTitle.value;\n    const notes = description.value;\n    const date = dueDate.value;\n    const projectName = selectProjectInForm.value;\n    const important = isImportant.checked;\n    const dateToSave = invertDateFormat(date)\n    if (editMode.enabled) {\n      projectsManager.editToDo(title, notes, dateToSave, projectName, important, editMode.editToDoId);\n      switchEditMode();\n    } else {\n      projectsManager.createToDo(title, notes, dateToSave, projectName, important);\n    }\n    hideForm(undefined, true);\n    renderToDos();\n    clearNewToDoForm();\n  }\n\n  addProjectBtn.addEventListener('click', showAddProjectForm);\n  addProjectForm.addEventListener('submit', addProject);\n  cancelNewProject.addEventListener('click', hideNewProjectForm);\n\n  menuBtn.addEventListener('click', hideShowSidebar);\n\n  addToDoBtn.addEventListener('click', showForm);\n  popupForm.addEventListener('submit', submitNewToDoForm);\n  popupFill.addEventListener('click', hideForm)\n\n  renderProjects();\n  renderToDos();\n  \n})();\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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