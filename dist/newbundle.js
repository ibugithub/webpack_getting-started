/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_config"] = self["webpackChunkwebpack_config"] || []).push([["new"],{

/***/ "./src/new.js":
/*!********************!*\
  !*** ./src/new.js ***!
  \********************/
/***/ (() => {

eval("const newHeader = document.createElement('div');\r\nnewHeader.textContent = \"This is a new header\" ;\r\ndocument.body.appendChild(newHeader);\r\nconsole.log('This is from the new.js');\n\n//# sourceURL=webpack://webpack_config/./src/new.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/new.js"));
/******/ }
]);