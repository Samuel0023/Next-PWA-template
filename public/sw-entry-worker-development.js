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

/***/ "./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nself.onmessage = async (t)=>{\n    if (\"__FRONTEND_NAV_CACHE__\" === t.data.type) {\n        const e = t.data.url, s = await caches.open(\"pages\");\n        if (!await s.match(e, {\n            ignoreSearch: !0\n        })) {\n            const a = await fetch(e);\n            if (a.ok) {\n                const c = a.clone();\n                if (s.put(e, c), t.data.shouldCacheAggressively && a.headers.get(\"Content-Type\")?.includes(\"text/html\")) try {\n                    const t = await a.text(), e = [], s = await caches.open(\"static-style-assets\"), c = await caches.open(\"next-static-js-assets\"), o = await caches.open(\"static-js-assets\");\n                    for (const [a, c] of t.matchAll(/<link.*?href=['\"](.*?)['\"].*?>/g))/rel=['\"]stylesheet['\"]/.test(a) && e.push(s.match(c).then((t)=>t ? Promise.resolve() : s.add(c)));\n                    for (const [, s] of t.matchAll(/<script.*?src=['\"](.*?)['\"].*?>/g)){\n                        const t = /\\/_next\\/static.+\\.js$/i.test(s) ? c : o;\n                        e.push(t.match(s).then((e)=>e ? Promise.resolve() : t.add(s)));\n                    }\n                    return await Promise.all(e);\n                } catch  {}\n            }\n        }\n        return Promise.resolve();\n    }\n    return Promise.resolve();\n};\n\n\n//# sourceURL=webpack://six/./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;