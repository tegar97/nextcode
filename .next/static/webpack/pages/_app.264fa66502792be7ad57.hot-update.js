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
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      seteActive(true);
    } else {
      seteActive(false);
    }
  };

  const homeRouter = router.pathname === "/";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: `${_styles_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navbar} ${active && homeRouter ? "bg-white dark:bg-gray-900" : ""} ${!homeRouter ? "bg-white dark:bg-gray-900" : ""} `,
    style: {
      top: active && !homeRouter ? "-100px" : ""
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center p-2 cursor-pointer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          src: theme === "light" ? "/logo-black.png" : "/logo-white.png",
          alt: "logo",
          width: 100,
          height: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      style: {
        marginRight: active ? "65%" : "",
        transition: ".5s all"
      },
      className: `flex flex-row   ${!active && homeRouter ? "text-white dark:text-white" : "text-black-50  dark:text-white  "}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/artikel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Artikel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/kategori",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mr-3 text-sm cursor-pointer ",
          children: "Kategori"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/artikel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "mr-4 fas fa-search color-black-50 dark:color-white",
          style: {
            color: theme === "light" ? "#000" : "#fff"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Navbar, "dQanH7BUR873J2ubhWNX+6rxKT4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsImFjdGl2ZSIsInNldGVBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwic2Nyb2xsWSIsImhvbWVSb3V0ZXIiLCJwYXRobmFtZSIsInN0eWxlcyIsIm5hdmJhciIsInRvcCIsIm1hcmdpblJpZ2h0IiwidHJhbnNpdGlvbiIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyw0REFBUSxFQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUF1QkMsc0RBQVEsQ0FBQyxLQUFELENBQXJDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsZ0JBQWxDO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxRQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFFBQUlGLE1BQU0sQ0FBQ0csT0FBUCxHQUFpQixFQUFyQixFQUF5QjtBQUN2QlIsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFDTEEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsUUFBTVMsVUFBVSxHQUFHUCxNQUFNLENBQUNRLFFBQVAsS0FBb0IsR0FBdkM7QUFFQSxzQkFDRTtBQUNFLGFBQVMsRUFBRyxHQUFFQyxtRkFBTSxDQUFDQyxNQUFPLElBQzFCYixNQUFNLElBQUlVLFVBQVYsR0FBdUIsMkJBQXZCLEdBQXFELEVBQ3RELElBQUcsQ0FBQ0EsVUFBRCxHQUFjLDJCQUFkLEdBQTRDLEVBQUcsR0FIckQ7QUFJRSxTQUFLLEVBQUU7QUFBRUksU0FBRyxFQUFFZCxNQUFNLElBQUksQ0FBQ1UsVUFBWCxHQUF3QixRQUF4QixHQUFtQztBQUExQyxLQUpUO0FBQUEsNEJBTUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxzQ0FBZjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFFYixLQUFLLEtBQUssT0FBVixHQUFvQixpQkFBcEIsR0FBd0MsaUJBRC9DO0FBRUUsYUFBRyxFQUFDLE1BRk47QUFHRSxlQUFLLEVBQUUsR0FIVDtBQUlFLGdCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWdCRTtBQUNFLFdBQUssRUFBRTtBQUFFa0IsbUJBQVcsRUFBRWYsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUFoQztBQUFvQ2dCLGtCQUFVLEVBQUU7QUFBaEQsT0FEVDtBQUVFLGVBQVMsRUFBRyxtQkFDVixDQUFDaEIsTUFBRCxJQUFXVSxVQUFYLEdBQ0ksNEJBREosR0FFSSxrQ0FDTCxFQU5IO0FBQUEsOEJBUUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVdFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBZ0NFO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxvREFEWjtBQUVFLGVBQUssRUFBRTtBQUFFTyxpQkFBSyxFQUFFcEIsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBcEIsR0FBNkI7QUFBdEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0dBNURRRCxNO1VBQ3FCRyxvRCxFQUViSyxxRDs7O0tBSFJSLE07QUE4RE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjY0ZmE2NjUwMjc5MmJlN2FkNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldGVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VCYWNrZ3JvdW5kKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA4MCkge1xyXG4gICAgICBzZXRlQWN0aXZlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0ZUFjdGl2ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBob21lUm91dGVyID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2YmFyfSAke1xyXG4gICAgICAgIGFjdGl2ZSAmJiBob21lUm91dGVyID8gXCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwXCIgOiBcIlwiXHJcbiAgICAgIH0gJHshaG9tZVJvdXRlciA/IFwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMFwiIDogXCJcIn0gYH1cclxuICAgICAgc3R5bGU9e3sgdG9wOiBhY3RpdmUgJiYgIWhvbWVSb3V0ZXIgPyBcIi0xMDBweFwiIDogXCJcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCIvbG9nby1ibGFjay5wbmdcIiA6IFwiL2xvZ28td2hpdGUucG5nXCJ9XHJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8dWxcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogYWN0aXZlID8gXCI2NSVcIiA6IFwiXCIsIHRyYW5zaXRpb246IFwiLjVzIGFsbFwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyAgICR7XHJcbiAgICAgICAgICAhYWN0aXZlICYmIGhvbWVSb3V0ZXJcclxuICAgICAgICAgICAgPyBcInRleHQtd2hpdGUgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgOiBcInRleHQtYmxhY2stNTAgIGRhcms6dGV4dC13aGl0ZSAgXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWtlbFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5BcnRpa2VsPC9saT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaVwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBcIj5LYXRlZ29yaTwvbGk+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgIFxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWtlbFwiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNCBmYXMgZmEtc2VhcmNoIGNvbG9yLWJsYWNrLTUwIGRhcms6Y29sb3Itd2hpdGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiIzAwMFwiIDogXCIjZmZmXCIgfX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==