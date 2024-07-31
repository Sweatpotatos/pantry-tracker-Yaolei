"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/firestore.js":
/*!*******************************!*\
  !*** ./services/firestore.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: function() { return /* binding */ addItem; },\n/* harmony export */   deleteItem: function() { return /* binding */ deleteItem; },\n/* harmony export */   getAllItemIds: function() { return /* binding */ getAllItemIds; },\n/* harmony export */   getItem: function() { return /* binding */ getItem; },\n/* harmony export */   getItems: function() { return /* binding */ getItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n// services/firestore.js\n\n\nconst pantryCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, \"pantry\");\nconst getAllItemIds = async ()=>{\n    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(pantryCollection);\n    const paths = snapshot.docs.map((doc)=>({\n            params: {\n                id: doc.id\n            }\n        }));\n    return paths;\n};\nconst getItem = async (id)=>{\n    const itemDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, \"pantry\", id);\n    const item = await getDoc(itemDoc);\n    return item.exists() ? {\n        id: item.id,\n        ...item.data()\n    } : null;\n};\nconst getItems = async ()=>{\n    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(pantryCollection);\n    return snapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n};\nconst addItem = async (item)=>{\n    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(pantryCollection, item);\n};\nconst updateItem = async (id, updatedItem)=>{\n    const itemDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, \"pantry\", id);\n    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(itemDoc, updatedItem);\n};\nconst deleteItem = async (id)=>{\n    const itemDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.db, \"pantry\", id);\n    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(itemDoc);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDb0U7QUFDckQ7QUFFdkMsTUFBTU8sbUJBQW1CUCw4REFBVUEsQ0FBQ00sK0NBQUVBLEVBQUU7QUFFakMsTUFBTUUsZ0JBQWdCO0lBQzNCLE1BQU1DLFdBQVcsTUFBTVAsMkRBQU9BLENBQUNLO0lBQy9CLE1BQU1HLFFBQVFELFNBQVNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDUCxDQUFBQSxNQUFRO1lBQ3RDUSxRQUFRO2dCQUFFQyxJQUFJVCxJQUFJUyxFQUFFO1lBQUM7UUFDdkI7SUFDQSxPQUFPSjtBQUNULEVBQUU7QUFFSyxNQUFNSyxVQUFVLE9BQU9EO0lBQzVCLE1BQU1FLFVBQVVYLHVEQUFHQSxDQUFDQywrQ0FBRUEsRUFBRSxVQUFVUTtJQUNsQyxNQUFNRyxPQUFPLE1BQU1DLE9BQU9GO0lBQzFCLE9BQU9DLEtBQUtFLE1BQU0sS0FBSztRQUFFTCxJQUFJRyxLQUFLSCxFQUFFO1FBQUUsR0FBR0csS0FBS0csSUFBSSxFQUFFO0lBQUMsSUFBSTtBQUMzRCxFQUFFO0FBRUssTUFBTUMsV0FBVztJQUN0QixNQUFNWixXQUFXLE1BQU1QLDJEQUFPQSxDQUFDSztJQUMvQixPQUFPRSxTQUFTRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1AsQ0FBQUEsTUFBUTtZQUFFUyxJQUFJVCxJQUFJUyxFQUFFO1lBQUUsR0FBR1QsSUFBSWUsSUFBSSxFQUFFO1FBQUM7QUFDL0QsRUFBRTtBQUVLLE1BQU1FLFVBQVUsT0FBT0w7SUFDNUIsTUFBTWhCLDBEQUFNQSxDQUFDTSxrQkFBa0JVO0FBQ2pDLEVBQUU7QUFFSyxNQUFNTSxhQUFhLE9BQU9ULElBQUlVO0lBQ25DLE1BQU1SLFVBQVVYLHVEQUFHQSxDQUFDQywrQ0FBRUEsRUFBRSxVQUFVUTtJQUNsQyxNQUFNWCw2REFBU0EsQ0FBQ2EsU0FBU1E7QUFDM0IsRUFBRTtBQUVLLE1BQU1DLGFBQWEsT0FBT1g7SUFDL0IsTUFBTUUsVUFBVVgsdURBQUdBLENBQUNDLCtDQUFFQSxFQUFFLFVBQVVRO0lBQ2xDLE1BQU1WLDZEQUFTQSxDQUFDWTtBQUNsQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2ZpcmVzdG9yZS5qcz9hMzU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNlcnZpY2VzL2ZpcmVzdG9yZS5qc1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGdldERvY3MsIHVwZGF0ZURvYywgZGVsZXRlRG9jLCBkb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlQ29uZmlnJztcclxuXHJcbmNvbnN0IHBhbnRyeUNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAncGFudHJ5Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsSXRlbUlkcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocGFudHJ5Q29sbGVjdGlvbik7XHJcbiAgY29uc3QgcGF0aHMgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgIHBhcmFtczogeyBpZDogZG9jLmlkIH0sXHJcbiAgfSkpO1xyXG4gIHJldHVybiBwYXRocztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgaXRlbURvYyA9IGRvYyhkYiwgJ3BhbnRyeScsIGlkKTtcclxuICBjb25zdCBpdGVtID0gYXdhaXQgZ2V0RG9jKGl0ZW1Eb2MpO1xyXG4gIHJldHVybiBpdGVtLmV4aXN0cygpID8geyBpZDogaXRlbS5pZCwgLi4uaXRlbS5kYXRhKCkgfSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBhbnRyeUNvbGxlY3Rpb24pO1xyXG4gIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgYXdhaXQgYWRkRG9jKHBhbnRyeUNvbGxlY3Rpb24sIGl0ZW0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBhc3luYyAoaWQsIHVwZGF0ZWRJdGVtKSA9PiB7XHJcbiAgY29uc3QgaXRlbURvYyA9IGRvYyhkYiwgJ3BhbnRyeScsIGlkKTtcclxuICBhd2FpdCB1cGRhdGVEb2MoaXRlbURvYywgdXBkYXRlZEl0ZW0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBpdGVtRG9jID0gZG9jKGRiLCAncGFudHJ5JywgaWQpO1xyXG4gIGF3YWl0IGRlbGV0ZURvYyhpdGVtRG9jKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZG9jIiwiZGIiLCJwYW50cnlDb2xsZWN0aW9uIiwiZ2V0QWxsSXRlbUlkcyIsInNuYXBzaG90IiwicGF0aHMiLCJkb2NzIiwibWFwIiwicGFyYW1zIiwiaWQiLCJnZXRJdGVtIiwiaXRlbURvYyIsIml0ZW0iLCJnZXREb2MiLCJleGlzdHMiLCJkYXRhIiwiZ2V0SXRlbXMiLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsInVwZGF0ZWRJdGVtIiwiZGVsZXRlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/firestore.js\n"));

/***/ })

});