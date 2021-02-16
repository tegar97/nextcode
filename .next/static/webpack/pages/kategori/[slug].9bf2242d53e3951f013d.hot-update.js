webpackHotUpdate_N_E("pages/kategori/[slug]",{

/***/ "./pages/kategori/[slug].tsx":
/*!***********************************!*\
  !*** ./pages/kategori/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/components/kategori-page/category-page.module.scss */ "./styles/components/kategori-page/category-page.module.scss");
/* harmony import */ var _styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var _component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/artikel-card/Artikel-card */ "./component/artikel-card/Artikel-card.tsx");


var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\kategori\\[slug].tsx",
    _s = $RefreshSig$();






function Category({
  posts,
  category
}) {
  _s();

  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.categoryPage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: theme === "light" ? _styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.categoryPage__hero : _styles_components_kategori_page_category_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.categoryPage__heroDark,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl font-bold text-center text-white",
          children: category.tags[0].name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "mt-3 text-lg font-medium text-center text-white",
          children: category.tags[0].description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-5 mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "mb-10 text-4xl text-center",
        children: ["ARTIKEL DENGAN KATEGORI \"", category.tags[0].name, "\"", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ",
        children: posts.posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(Category, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"]];
});

_c = Category;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2F0ZWdvcmkvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsInBvc3RzIiwiY2F0ZWdvcnkiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlVGhlbWUiLCJzdHlsZXMiLCJjYXRlZ29yeVBhZ2UiLCJjYXRlZ29yeVBhZ2VfX2hlcm8iLCJjYXRlZ29yeVBhZ2VfX2hlcm9EYXJrIiwidGFncyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQWxCLEVBQXVDO0FBQUE7O0FBQ3JDLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyw0REFBUSxFQUFwQztBQUNBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxpR0FBTSxDQUFDQyxZQUEzQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUNQSixLQUFLLEtBQUssT0FBVixHQUNJRyxpR0FBTSxDQUFDRSxrQkFEWCxHQUVJRixpR0FBTSxDQUFDRyxzQkFKZjtBQUFBLDZCQU9FO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDJDQUFkO0FBQUEsb0JBQ0dQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjLENBQWQsRUFBaUJDO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFJLG1CQUFTLEVBQUMsaURBQWQ7QUFBQSxvQkFDR1QsUUFBUSxDQUFDUSxJQUFULENBQWMsQ0FBZCxFQUFpQkU7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFpQkU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyw0QkFBZDtBQUFBLGlEQUM0QlYsUUFBUSxDQUFDUSxJQUFULENBQWMsQ0FBZCxFQUFpQkMsSUFEN0MsUUFDb0QsR0FEcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsK0VBQWY7QUFBQSxrQkFDR1YsS0FBSyxDQUFDQSxLQUFOLENBQVlZLEdBQVosQ0FBaUJDLElBQUQsaUJBQ2YscUVBQUMsNEVBQUQ7QUFBMkIsY0FBSSxFQUFFQTtBQUFqQyxXQUFrQkEsSUFBSSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FoQ1FmLFE7VUFDcUJLLG9EOzs7S0FEckJMLFE7O0FBMEVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rYXRlZ29yaS9bc2x1Z10uOWJmMjI0MmQ1M2UzOTUxZjAxM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2thdGVnb3JpLXBhZ2UvY2F0ZWdvcnktcGFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQXJ0aWtlbENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9hcnRpa2VsLWNhcmQvQXJ0aWtlbC1jYXJkXCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9wb3N0L1tzbHVnXVwiO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnkoeyBwb3N0cywgY2F0ZWdvcnkgfSkge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeVBhZ2V9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCJcclxuICAgICAgICAgICAgPyBzdHlsZXMuY2F0ZWdvcnlQYWdlX19oZXJvXHJcbiAgICAgICAgICAgIDogc3R5bGVzLmNhdGVnb3J5UGFnZV9faGVyb0RhcmtcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeS50YWdzWzBdLm5hbWV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeS50YWdzWzBdLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG10LTEwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtNHhsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBBUlRJS0VMIERFTkdBTiBLQVRFR09SSSBcIntjYXRlZ29yeS50YWdzWzBdLm5hbWV9XCJ7XCIgXCJ9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEwIG10LTMgeHM6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTMgXCI+XHJcbiAgICAgICAgICB7cG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpa2VsQ2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3RhZ3MvP2tleT0wMWJlMTkxMmJjNGNkNmFhYTUwNDQxMWY3OGBcclxuICApO1xyXG4gIGNvbnN0IHRhZ3MgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSB0YWdzLnRhZ3MubWFwKCh0YWcpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogdGFnLnNsdWcgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9MDFiZTE5MTJiYzRjZDZhYWE1MDQ0MTFmNzgmbGltaXQ9NiZpbmNsdWRlPXRhZ3MmJHtcclxuICAgICAgcGFyYW1zLnNsdWcgPyBgZmlsdGVyPXRhZzoke3BhcmFtcy5zbHVnfWAgOiBcIlwiXHJcbiAgICB9YFxyXG4gICk7XHJcbiAgY29uc3QgcmVzQ2F0ZWdvcnkgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC90YWdzL3NsdWcvJHtwYXJhbXMuc2x1Z30/a2V5PTAxYmUxOTEyYmM0Y2Q2YWFhNTA0NDExZjc4YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IHJlc0NhdGVnb3J5Lmpzb24oKTtcclxuXHJcbiAgaWYgKCFwb3N0cykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgICBjYXRlZ29yeSxcclxuICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==