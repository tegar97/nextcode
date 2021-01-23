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
          src: theme === "light" ? '/logo-black.png' : '/logo-white.png',
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/artikel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "mr-4 fas fa-search color-black-50 dark:color-white",
          style: {
            color: theme === 'light' ? '#000' : '#fff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 16
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldGVBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwic2Nyb2xsWSIsImhvbWVSb3V0ZXIiLCJwYXRobmFtZSIsInN0eWxlcyIsIm5hdmJhciIsInRvcCIsIm1hcmdpblJpZ2h0IiwidHJhbnNpdGlvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2QsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLDREQUFRLEVBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsTUFBSztBQUNYQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDQyxnQkFBakM7QUFFSCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUtBLFFBQU1BLGdCQUFnQixHQUFHLE1BQUs7QUFDMUIsUUFBR0YsTUFBTSxDQUFDRyxPQUFQLEdBQWdCLEVBQW5CLEVBQXVCO0FBQ25CUixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNILEtBRkQsTUFFSztBQUNEQSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIO0FBQ0osR0FORDs7QUFPQSxRQUFNUyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUF2QztBQUdBLHNCQUNBO0FBQUssYUFBUyxFQUFHLEdBQUVDLG1GQUFNLENBQUNDLE1BQVEsSUFBR2IsTUFBTSxJQUFJVSxVQUFWLEdBQXVCLDJCQUF2QixHQUFxRCxFQUFHLElBQUcsQ0FBQ0EsVUFBRCxHQUFjLDJCQUFkLEdBQTRDLEVBQUcsR0FBL0k7QUFBbUosU0FBSyxFQUFFO0FBQUNJLFNBQUcsRUFBRWQsTUFBTSxJQUFJLENBQUNVLFVBQVgsR0FBd0IsUUFBeEIsR0FBbUM7QUFBekMsS0FBMUo7QUFBQSw0QkFDUSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFBTyxhQUFHLEVBQUViLEtBQUssS0FBTSxPQUFYLEdBQXVCLGlCQUF2QixHQUEyQyxpQkFBdkQ7QUFBMEUsYUFBRyxFQUFDLE1BQTlFO0FBQXFGLGVBQUssRUFBRSxHQUE1RjtBQUFpRyxnQkFBTSxFQUFFO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSLGVBT1E7QUFBSSxXQUFLLEVBQUU7QUFBQ2tCLG1CQUFXLEVBQUVmLE1BQU0sR0FBRyxLQUFILEdBQVcsRUFBL0I7QUFBa0NnQixrQkFBVSxFQUFFO0FBQTlDLE9BQVg7QUFBcUUsZUFBUyxFQUFHLG1CQUFrQixDQUFDaEIsTUFBRCxJQUFXVSxVQUFYLEdBQXdCLDRCQUF4QixHQUF1RCxrQ0FBbUMsRUFBN0w7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUEsK0JBQXNCO0FBQUksbUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQXVCO0FBQUksbUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBSSxtQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsSUFBWDtBQUFBLCtCQUFnQjtBQUFJLG1CQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBSLGVBY1E7QUFBQSw2QkFDRyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUEsK0JBQXNCO0FBQUcsbUJBQVMsRUFBQyxvREFBYjtBQUFrRSxlQUFLLEVBQUU7QUFBQ08saUJBQUssRUFBRXBCLEtBQUssS0FBSyxPQUFWLEdBQW9CLE1BQXBCLEdBQTZCO0FBQXJDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQW9CSDs7R0F2Q1FELE07VUFDdUJHLG9ELEVBRWJLLHFEOzs7S0FIVlIsTTtBQXlDTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MjJiZWE2NDE4OWIyNWNiNDkyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlUmVmLHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0ZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsY2hhbmdlQmFja2dyb3VuZClcclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PntcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+ODApIHtcclxuICAgICAgICAgICAgc2V0ZUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRlQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhvbWVSb3V0ZXIgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvJ1xyXG4gXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyIH0gJHthY3RpdmUgJiYgaG9tZVJvdXRlciA/ICdiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwJyA6ICcnfSAkeyFob21lUm91dGVyID8gJ2JnLXdoaXRlIGRhcms6YmctZ3JheS05MDAnIDogJyd9IGB9IHN0eWxlPXt7dG9wOiBhY3RpdmUgJiYgIWhvbWVSb3V0ZXIgPyAnLTEwMHB4JyA6ICcnfX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGVtZSAgPT09IFwibGlnaHRcIiAgID8gJy9sb2dvLWJsYWNrLnBuZycgOiAnL2xvZ28td2hpdGUucG5nJ30gYWx0PVwibG9nb1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MzB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IGFjdGl2ZSA/ICc2NSUnIDogJycsdHJhbnNpdGlvbjogJy41cyBhbGwnfX0gY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyAgICR7IWFjdGl2ZSAmJiBob21lUm91dGVyID8gJ3RleHQtd2hpdGUgZGFyazp0ZXh0LXdoaXRlJyA6ICd0ZXh0LWJsYWNrLTUwICBkYXJrOnRleHQtd2hpdGUgICd9YH0gPiBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWtlbFwiPjxsaSBjbGFzc05hbWU9XCJtci0zIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgXCI+QXJ0aWtlbDwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaVwiPjxsaSBjbGFzc05hbWU9XCJtci0zIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgXCI+S2F0ZWdvcmk8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+PGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5UdXRvcmlhbCBTZXJpZXM8L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPjxsaSBjbGFzc05hbWU9XCJtci0zIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgXCI+VGVudGFuZzwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlrZWxcIj48aSBjbGFzc05hbWU9XCJtci00IGZhcyBmYS1zZWFyY2ggY29sb3ItYmxhY2stNTAgZGFyazpjb2xvci13aGl0ZVwiIHN0eWxlPXt7Y29sb3I6IHRoZW1lID09PSAnbGlnaHQnID8gJyMwMDAnIDogJyNmZmYnfX0gPjwvaT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9