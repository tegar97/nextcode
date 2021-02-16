webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Artikel_Artikel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Artikel/Artikel */ "./component/Artikel/Artikel.tsx");
/* harmony import */ var _component_hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/hero/Hero */ "./component/hero/Hero.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\index.tsx",
    _s = $RefreshSig$();







var __N_SSG = true;
function Home({
  posts,
  setting
}) {
  _s();

  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setMode(localStorage.getItem("theme"));
  }, [theme]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
      title: setting.settings.meta_title,
      description: setting.settings.meta_description,
      canonical: setting.url,
      openGraph: {
        url: "https://www.nextcode.id/",
        title: `${setting.settings.og_title}`,
        description: `${setting.settings.og_description}`,
        images: [{
          url: `${setting.settings.og_image}`,
          width: 800,
          height: 600,
          alt: `${setting.settings.og_title}`
        }],
        site_name: `${setting.settings.og_title}`
      },
      twitter: {
        handle: "@tegar",
        site: "@nextcode",
        cardType: "summary_large_image"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
      mode: mode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
      animateIn: "fadeIn",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Artikel_Artikel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        posts: posts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Home, "QTOGG1IRz/eZzxAHDTR9HjHwbNE=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0cyIsInNldHRpbmciLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlVGhlbWUiLCJtb2RlIiwic2V0TW9kZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldHRpbmdzIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJ1cmwiLCJ0aXRsZSIsIm9nX3RpdGxlIiwiZGVzY3JpcHRpb24iLCJvZ19kZXNjcmlwdGlvbiIsImltYWdlcyIsIm9nX2ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBZCxFQUFrQztBQUFBOztBQUMvQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQkMsNERBQVEsRUFBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBQyx5REFBUyxDQUNQLFlBQVk7QUFDVkYsV0FBTyxDQUFDRyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBRCxDQUFQO0FBQ0QsR0FITSxFQUlQLENBQUNSLEtBQUQsQ0FKTyxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUNFLFdBQUssRUFBRUQsT0FBTyxDQUFDVSxRQUFSLENBQWlCQyxVQUQxQjtBQUVFLGlCQUFXLEVBQUVYLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkUsZ0JBRmhDO0FBR0UsZUFBUyxFQUFFWixPQUFPLENBQUNhLEdBSHJCO0FBSUUsZUFBUyxFQUFFO0FBQ1RBLFdBQUcsRUFBRSwwQkFESTtBQUVUQyxhQUFLLEVBQUcsR0FBRWQsT0FBTyxDQUFDVSxRQUFSLENBQWlCSyxRQUFTLEVBRjNCO0FBR1RDLG1CQUFXLEVBQUcsR0FBRWhCLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQk8sY0FBZSxFQUh2QztBQUlUQyxjQUFNLEVBQUUsQ0FDTjtBQUNFTCxhQUFHLEVBQUcsR0FBRWIsT0FBTyxDQUFDVSxRQUFSLENBQWlCUyxRQUFTLEVBRHBDO0FBRUVDLGVBQUssRUFBRSxHQUZUO0FBR0VDLGdCQUFNLEVBQUUsR0FIVjtBQUlFQyxhQUFHLEVBQUcsR0FBRXRCLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkssUUFBUztBQUpwQyxTQURNLENBSkM7QUFZVFEsaUJBQVMsRUFBRyxHQUFFdkIsT0FBTyxDQUFDVSxRQUFSLENBQWlCSyxRQUFTO0FBWi9CLE9BSmI7QUFrQkUsYUFBTyxFQUFFO0FBQ1BTLGNBQU0sRUFBRSxRQUREO0FBRVBDLFlBQUksRUFBRSxXQUZDO0FBR1BDLGdCQUFRLEVBQUU7QUFISDtBQWxCWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkUscUVBQUMsNERBQUQ7QUFBTSxVQUFJLEVBQUV0QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsZUE0QkkscUVBQUMsOERBQUQ7QUFBaUIsZUFBUyxFQUFDLFFBQTNCO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFBUyxhQUFLLEVBQUVMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKO0FBQUEsa0JBREY7QUFtQ0Q7O0dBNUN1QkQsSTtVQUNNSyxvRDs7O0tBRE5MLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTA2MmFiMjM2NDUyYjdlYTNlZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBcnRpa2VsIGZyb20gXCIuLi9jb21wb25lbnQvQXJ0aWtlbC9BcnRpa2VsXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50L2hlcm8vSGVyb1wiO1xuaW1wb3J0IFNlY3Rpb25DYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50L3NlY3Rpb24tY2F0ZWdvcnkvU2VjdGlvbkNhdGVnb3J5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzLCBzZXR0aW5nIH0pIHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0TW9kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKTtcbiAgICB9LFxuICAgIFt0aGVtZV1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9e3NldHRpbmcuc2V0dGluZ3MubWV0YV90aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3NldHRpbmcuc2V0dGluZ3MubWV0YV9kZXNjcmlwdGlvbn1cbiAgICAgICAgY2Fub25pY2FsPXtzZXR0aW5nLnVybH1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lm5leHRjb2RlLmlkL1wiLFxuICAgICAgICAgIHRpdGxlOiBgJHtzZXR0aW5nLnNldHRpbmdzLm9nX3RpdGxlfWAsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGAke3NldHRpbmcuc2V0dGluZ3Mub2dfZGVzY3JpcHRpb259YCxcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBgJHtzZXR0aW5nLnNldHRpbmdzLm9nX2ltYWdlfWAsXG4gICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICBhbHQ6IGAke3NldHRpbmcuc2V0dGluZ3Mub2dfdGl0bGV9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaXRlX25hbWU6IGAke3NldHRpbmcuc2V0dGluZ3Mub2dfdGl0bGV9YCxcbiAgICAgICAgfX1cbiAgICAgICAgdHdpdHRlcj17e1xuICAgICAgICAgIGhhbmRsZTogXCJAdGVnYXJcIixcbiAgICAgICAgICBzaXRlOiBcIkBuZXh0Y29kZVwiLFxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxIZXJvIG1vZGU9e21vZGV9IC8+XG4gICAgICB7XG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCI+XG4gICAgICAgICAgPEFydGlrZWwgcG9zdHM9e3Bvc3RzfSAvPlxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7cHJvY2Vzcy5lbnYua2V5fSZsaW1pdD00JmluY2x1ZGU9dGFnc2BcbiAgKTtcbiAgY29uc3QgcmVzX3NldHRpbmcgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvc2V0dGluZ3MvP2tleT0ke3Byb2Nlc3MuZW52LmtleX1gXG4gICk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3Qgc2V0dGluZyA9IGF3YWl0IHJlc19zZXR0aW5nLmpzb24oKTtcblxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICAgIHNldHRpbmcsXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=