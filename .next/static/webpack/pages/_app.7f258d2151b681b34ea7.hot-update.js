webpackHotUpdate_N_E("pages/_app",{

/***/ "./component/navbar/navbar.tsx":
/*!*************************************!*\
  !*** ./component/navbar/navbar.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../styles/components/navbar/navbar.module.scss */ "./styles/components/navbar/navbar.module.scss");
/* harmony import */ var _styles_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\component\\navbar\\navbar.tsx",
    _s = $RefreshSig$();








function Navbar() {
  _s();

  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const {
    0: active,
    1: seteActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      seteActive(true);
    } else {
      seteActive(false);
    }
  };

  const homeRouter = router.pathname === '/';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: `${_styles_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navbar} ${active && homeRouter ? 'bg-white dark:bg-gray-900' : ''} ${!homeRouter ? 'bg-white dark:bg-gray-900' : ''} `,
    style: {
      top: active && !homeRouter ? '-100px' : ''
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center p-2 cursor-pointer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          src: theme === "light" || !active ? '/logo-black.png' : '/logo-white.png',
          alt: "logo",
          width: 100,
          height: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      style: {
        marginRight: active ? '65%' : '',
        transition: '.5s all'
      },
      className: `flex flex-row   ${!active && homeRouter ? 'text-white dark:text-white' : 'text-black-50  dark:text-white  '}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/artikel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Artikel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/kategori",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Kategori"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 40
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Tutorial Series"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Tentang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "mr-4 fas fa-search color-black-50 dark:color-white",
          style: {
            color: theme === 'light' ? '#000' : '#fff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Navbar, "gMeJwSkv4gpv/YFy8hhULYCpZAo=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_1__["useTheme"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldGVBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwic2Nyb2xsWSIsImhvbWVSb3V0ZXIiLCJwYXRobmFtZSIsInN0eWxlcyIsIm5hdmJhciIsInRvcCIsIm1hcmdpblJpZ2h0IiwidHJhbnNpdGlvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2QsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLDREQUFRLEVBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsTUFBSztBQUNYQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDQyxnQkFBakM7QUFFSCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUtBLFFBQU1BLGdCQUFnQixHQUFHLE1BQUs7QUFDMUIsUUFBR0YsTUFBTSxDQUFDRyxPQUFQLEdBQWdCLEVBQW5CLEVBQXVCO0FBQ25CUixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILEtBRkQsTUFFSztBQUNEQSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIO0FBQ0osR0FORDs7QUFPQSxRQUFNUyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUF2QztBQUdBLHNCQUNBO0FBQUssYUFBUyxFQUFHLEdBQUVDLG1GQUFNLENBQUNDLE1BQVEsSUFBR2IsTUFBTSxJQUFJVSxVQUFWLEdBQXVCLDJCQUF2QixHQUFxRCxFQUFHLElBQUcsQ0FBQ0EsVUFBRCxHQUFjLDJCQUFkLEdBQTRDLEVBQUcsR0FBL0k7QUFBbUosU0FBSyxFQUFFO0FBQUNJLFNBQUcsRUFBRWQsTUFBTSxJQUFJLENBQUNVLFVBQVgsR0FBd0IsUUFBeEIsR0FBbUM7QUFBekMsS0FBMUo7QUFBQSw0QkFDUSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFBTyxhQUFHLEVBQUViLEtBQUssS0FBTSxPQUFYLElBQXVCLENBQUNHLE1BQXhCLEdBQWlDLGlCQUFqQyxHQUFxRCxpQkFBakU7QUFBb0YsYUFBRyxFQUFDLE1BQXhGO0FBQStGLGVBQUssRUFBRSxHQUF0RztBQUEyRyxnQkFBTSxFQUFFO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSLGVBT1E7QUFBSSxXQUFLLEVBQUU7QUFBQ2UsbUJBQVcsRUFBRWYsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUEvQjtBQUFrQ2dCLGtCQUFVLEVBQUU7QUFBOUMsT0FBWDtBQUFxRSxlQUFTLEVBQUcsbUJBQWtCLENBQUNoQixNQUFELElBQVdVLFVBQVgsR0FBd0IsNEJBQXhCLEdBQXVELGtDQUFtQyxFQUE3TDtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFBc0I7QUFBSSxtQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBQSwrQkFBdUI7QUFBSSxtQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZTtBQUFJLG1CQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxJQUFYO0FBQUEsK0JBQWdCO0FBQUksbUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUFIsZUFjUTtBQUFBLDZCQUNJO0FBQUEsK0JBQVM7QUFBRyxtQkFBUyxFQUFDLG9EQUFiO0FBQWtFLGVBQUssRUFBRTtBQUFDTyxpQkFBSyxFQUFFcEIsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkI7QUFBckM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFvQkg7O0dBdkNRRCxNO1VBQ3VCRyxvRCxFQUViSyxxRDs7O0tBSFZSLE07QUF5Q01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2YyNThkMjE1MWI2ODFiMzRlYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVJlZix1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLHNldGVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGNoYW5nZUJhY2tncm91bmQpXHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT57XHJcbiAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPjgwKSB7XHJcbiAgICAgICAgICAgIHNldGVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0ZUFjdGl2ZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBob21lUm91dGVyID0gcm91dGVyLnBhdGhuYW1lID09PSAnLydcclxuIFxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdmJhciB9ICR7YWN0aXZlICYmIGhvbWVSb3V0ZXIgPyAnYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCcgOiAnJ30gJHshaG9tZVJvdXRlciA/ICdiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwJyA6ICcnfSBgfSBzdHlsZT17e3RvcDogYWN0aXZlICYmICFob21lUm91dGVyID8gJy0xMDBweCcgOiAnJ319PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhlbWUgID09PSBcImxpZ2h0XCIgIHx8ICFhY3RpdmUgPyAnL2xvZ28tYmxhY2sucG5nJyA6ICcvbG9nby13aGl0ZS5wbmcnfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXszMH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW5SaWdodDogYWN0aXZlID8gJzY1JScgOiAnJyx0cmFuc2l0aW9uOiAnLjVzIGFsbCd9fSBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93ICAgJHshYWN0aXZlICYmIGhvbWVSb3V0ZXIgPyAndGV4dC13aGl0ZSBkYXJrOnRleHQtd2hpdGUnIDogJ3RleHQtYmxhY2stNTAgIGRhcms6dGV4dC13aGl0ZSAgJ31gfSA+IFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpa2VsXCI+PGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5BcnRpa2VsPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2thdGVnb3JpXCI+PGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5LYXRlZ29yaTwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48bGkgY2xhc3NOYW1lPVwibXItMyB0ZXh0LXNtIGN1cnNvci1wb2ludGVyIFwiPlR1dG9yaWFsIFNlcmllczwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+PGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5UZW50YW5nPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uID48aSBjbGFzc05hbWU9XCJtci00IGZhcyBmYS1zZWFyY2ggY29sb3ItYmxhY2stNTAgZGFyazpjb2xvci13aGl0ZVwiIHN0eWxlPXt7Y29sb3I6IHRoZW1lID09PSAnbGlnaHQnID8gJyMwMDAnIDogJyNmZmYnfX0gPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=