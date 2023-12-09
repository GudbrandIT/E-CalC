/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import { menu } from \"./model\";\n// import { createMenu } from \"./templates\";\n\n//Создание переменных для кнопок верхнего Меню\n\nconst $ = document.querySelector.bind(document);\nconst docElements = document.body;\nconst childNodes = docElements.childNodes;\nconsole.log(childNodes); //Получить все узлы Документа\n\n// Вариант не работает:\ngetElementById(\"n1\").addEventListener(\"click\", function (event) {\n  console.log(\"I was clicked!\");\n});\n// const navButton2 = getElementById(\"n2\").addEventListener(\n//   \"click\",\n//   generateLeftMenu()\n// );\n// const navButton3 = getElementById(\"n3\").addEventListener(\n//   \"click\",\n//   generateLeftMenu()\n// );\n// const navButton4 = getElementById(\"n4\").addEventListener(\n//   \"click\",\n//   generateLeftMenu()\n// );\n// const navButton5 = getElementById(\"n5\").addEventListener(\n//   \"click\",\n//   generateLeftMenu()\n// );\n\n// // model.nav.forEach((element) => {\n// //   element.addEventListener(\"click\", generateLeftMenu());\n// // });\n\n// function generateLeftMenu() {\n//   if (navButton1) {\n//     button1 = \"Apricot\";\n//     button2 = \"Orange\";\n//     button3 = \"Apple\";\n//     button4 = \"Banana\";\n//     button5 = \"Plump\";\n//     createMenu();\n//   }\n//   if (navButton2) {\n//     button1 = \"Точка безубыточности\";\n//     button2 = \"\";\n//     button3 = \"\";\n//     button4 = \"\";\n//     button5 = \"\";\n//     createMenu();\n//   }\n//   if (navButton3) {\n//     button1 = \"Расчёт годовых по вкладу\";\n//     button2 = \"2\";\n//     button3 = \"3\";\n//     button4 = \"4\";\n//     button5 = \"5\";\n//     createMenu();\n//   }\n//   if (navButton4) {\n//     button1 = \"1\";\n//     button2 = \"2\";\n//     button3 = \"3\";\n//     button4 = \"4\";\n//     button5 = \"5\";\n//     createMenu();\n//   }\n//   if (navButton5) {\n//     button1 = \"\";\n//     button2 = \"\";\n//     button3 = \"\";\n//     button4 = \"\";\n//     button5 = \"\";\n//     createMenu();\n//   }\n//   return;\n// }\n\n//# sourceURL=webpack://1.0.0/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;