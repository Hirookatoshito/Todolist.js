/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/sub.js":
/*!******************************!*\
  !*** ./src/component/sub.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => /* binding */ addTask
/* harmony export */ });
var addTask = document.querySelector('.section__text--add');

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/sub.js */ "./src/component/sub.js");

var list = document.querySelector('.section__list');
var search = document.querySelector('.section__text--search--input');

var createTodoList = function createTodoList(task) {
  var li = "\n    <li class=\"section__list__item\">\n      <span>".concat(task, "</span>\n      <i class=\"far fa-trash-alt delete\"></i>\n    </li>\n  ");
  list.innerHTML += li;
};

_component_sub_js__WEBPACK_IMPORTED_MODULE_0__.addTask.addEventListener('submit', function (e) {
  e.preventDefault();
  var task = _component_sub_js__WEBPACK_IMPORTED_MODULE_0__.addTask.add.value.trim();

  if (task.length) {
    createTodoList(task);
    _component_sub_js__WEBPACK_IMPORTED_MODULE_0__.addTask.reset();
  }
});
list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
search.addEventListener('keyup', function () {
  var term = search.value.trim().toLowerCase();
  filterTasks(term);
});

var filterTasks = function filterTasks(term) {
  Array.from(list.children).filter(function (todo) {
    return !todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.add('filtered');
  });
  Array.from(list.children).filter(function (todo) {
    return todo.textContent.toLowerCase().includes(term);
  }).forEach(function (todo) {
    return todo.classList.remove('filtered');
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnQvc3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYWRkVGFzayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJzZWFyY2giLCJjcmVhdGVUb2RvTGlzdCIsInRhc2siLCJsaSIsImlubmVySFRNTCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJ0ZXJtIiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJUYXNrcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiZmlsdGVyIiwidG9kbyIsInRleHRDb250ZW50IiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFoQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUVBLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFiO0FBQ0EsSUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQWY7O0FBRUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxJQUFJLEVBQUk7QUFDN0IsTUFBTUMsRUFBRSxtRUFFSUQsSUFGSiw0RUFBUjtBQU9BSCxNQUFJLENBQUNLLFNBQUwsSUFBa0JELEVBQWxCO0FBQ0QsQ0FURDs7QUFXQVAsdUVBQUEsQ0FBeUIsUUFBekIsRUFBbUMsVUFBQVMsQ0FBQyxFQUFJO0FBQ3RDQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNSixJQUFJLEdBQUdOLHFFQUFBLEVBQWI7O0FBQ0EsTUFBR00sSUFBSSxDQUFDSyxNQUFSLEVBQWdCO0FBQ2ROLGtCQUFjLENBQUNDLElBQUQsQ0FBZDtBQUNBTixnRUFBQTtBQUNEO0FBQ0YsQ0FSRDtBQVVBRyxJQUFJLENBQUNTLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUFILENBQUMsRUFBSTtBQUNsQyxNQUFHQSxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsUUFBNUIsQ0FBSCxFQUEwQztBQUN4Q04sS0FBQyxDQUFDSSxNQUFGLENBQVNHLGFBQVQsQ0FBdUJDLE1BQXZCO0FBQ0Q7QUFDRixDQUpEO0FBTUFiLE1BQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQyxNQUFNTSxJQUFJLEdBQUdkLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhQyxJQUFiLEdBQW9CQyxXQUFwQixFQUFiO0FBQ0FDLGFBQVcsQ0FBQ0osSUFBRCxDQUFYO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSixJQUFELEVBQVU7QUFDNUJLLE9BQUssQ0FBQ0MsSUFBTixDQUFXckIsSUFBSSxDQUFDc0IsUUFBaEIsRUFBMEJDLE1BQTFCLENBQWlDLFVBQUNDLElBQUQ7QUFBQSxXQUFVLENBQUNBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQlAsV0FBakIsR0FBK0JRLFFBQS9CLENBQXdDWCxJQUF4QyxDQUFYO0FBQUEsR0FBakMsRUFBMkZZLE9BQTNGLENBQW1HLFVBQUNILElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNiLFNBQUwsQ0FBZWlCLEdBQWYsQ0FBbUIsVUFBbkIsQ0FBVjtBQUFBLEdBQW5HO0FBRUFSLE9BQUssQ0FBQ0MsSUFBTixDQUFXckIsSUFBSSxDQUFDc0IsUUFBaEIsRUFBMEJDLE1BQTFCLENBQWlDLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUJQLFdBQWpCLEdBQStCUSxRQUEvQixDQUF3Q1gsSUFBeEMsQ0FBVjtBQUFBLEdBQWpDLEVBQTBGWSxPQUExRixDQUFrRyxVQUFDSCxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDYixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsVUFBdEIsQ0FBVjtBQUFBLEdBQWxHO0FBQ0QsQ0FKRCxDOzs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX3RleHQtLWFkZCcpOyIsImltcG9ydCB7IGFkZFRhc2sgfSBmcm9tICcuL2NvbXBvbmVudC9zdWIuanMnO1xuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2xpc3QnKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX190ZXh0LS1zZWFyY2gtLWlucHV0Jyk7XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gdGFzayA9PiB7XG4gIGNvbnN0IGxpID0gYFxuICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2xpc3RfX2l0ZW1cIj5cbiAgICAgIDxzcGFuPiR7dGFza308L3NwYW4+XG4gICAgICA8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgZGVsZXRlXCI+PC9pPlxuICAgIDwvbGk+XG4gIGA7XG5cbiAgbGlzdC5pbm5lckhUTUwgKz0gbGk7XG59XG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0YXNrID0gYWRkVGFzay5hZGQudmFsdWUudHJpbSgpO1xuICBpZih0YXNrLmxlbmd0aCkge1xuICAgIGNyZWF0ZVRvZG9MaXN0KHRhc2spO1xuICAgIGFkZFRhc2sucmVzZXQoKTtcbiAgfVxufSlcblxubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufSk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgY29uc3QgdGVybSA9IHNlYXJjaC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgZmlsdGVyVGFza3ModGVybSk7XG59KTtcblxuY29uc3QgZmlsdGVyVGFza3MgPSAodGVybSkgPT4ge1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pLmZpbHRlcigodG9kbykgPT4gIXRvZG8udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSkuZm9yRWFjaCgodG9kbykgPT4gdG9kby5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJlZCcpKTtcblxuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pLmZpbHRlcigodG9kbykgPT4gdG9kby50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKS5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlcmVkJykpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==