webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/components/post/post.module.scss */ "./styles/components/post/post.module.scss");
/* harmony import */ var _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");



var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\post\\[slug].tsx",
    _s = $RefreshSig$();








function Post({
  post
}) {
  _s();

  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.highlightAll();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_6__["NextSeo"], {
      title: post.posts[0].meta_title,
      description: post.posts[0].meta_description,
      canonical: post.posts[0].url,
      openGraph: {
        url: "https://www.nextcode.id/",
        title: `${post.posts[0].og_title}`,
        description: `${post.posts[0].og_description}`,
        images: [{
          url: `${post.posts[0].url}`,
          width: 800,
          height: 600,
          alt: `${post.posts[0].og_title}`
        }],
        site_name: `nextcode indonesia`
      },
      twitter: {
        handle: "@tegar",
        site: "@nextcode",
        cardType: "summary_large_image"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: post.posts[0].feature_image,
          alt: "image",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
        animateIn: "fadeIn",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postContent,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-4xl dark:color-grey-600 ",
              children: post.posts[0].title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-center mt-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "By Tegar Akmal on November 30, 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postText,
            dangerouslySetInnerHTML: {
              __html: post.posts[0].html
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), ";"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Post, "GWyluvqPvJYGclNjYuclapM29yk=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_3__["useTheme"]];
});

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJwb3N0cyIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwidXJsIiwidGl0bGUiLCJvZ190aXRsZSIsImRlc2NyaXB0aW9uIiwib2dfZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsInBvc3RJbWFnZSIsImZlYXR1cmVfaW1hZ2UiLCJvYmplY3RGaXQiLCJwb3N0Q29udGVudCIsInBvc3RUZXh0IiwiX19odG1sIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFBQTs7QUFDdEIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLDREQUFRLEVBQXBDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0MsVUFEdkI7QUFFRSxpQkFBVyxFQUFFUixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNFLGdCQUY3QjtBQUdFLGVBQVMsRUFBRVQsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUgzQjtBQUlFLGVBQVMsRUFBRTtBQUNUQSxXQUFHLEVBQUUsMEJBREk7QUFFVEMsYUFBSyxFQUFHLEdBQUVYLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUyxFQUZ4QjtBQUdUQyxtQkFBVyxFQUFHLEdBQUViLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY08sY0FBZSxFQUhwQztBQUlUQyxjQUFNLEVBQUUsQ0FDTjtBQUNFTCxhQUFHLEVBQUcsR0FBRVYsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUFJLEVBRDVCO0FBRUVNLGVBQUssRUFBRSxHQUZUO0FBR0VDLGdCQUFNLEVBQUUsR0FIVjtBQUlFQyxhQUFHLEVBQUcsR0FBRWxCLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUztBQUpqQyxTQURNLENBSkM7QUFZVE8saUJBQVMsRUFBRztBQVpILE9BSmI7QUFrQkUsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxRQUREO0FBRVBDLFlBQUksRUFBRSxXQUZDO0FBR1BDLGdCQUFRLEVBQUU7QUFISDtBQWxCWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkU7QUFBSyxlQUFTLEVBQUVDLCtFQUFNLENBQUN2QixJQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRXVCLCtFQUFNLENBQUNDLFNBQXZCO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUV4QixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNrQixhQURyQjtBQUVFLGFBQUcsRUFBQyxPQUZOO0FBR0UsZUFBSyxFQUFFO0FBQUVULGlCQUFLLEVBQUUsTUFBVDtBQUFpQkMsa0JBQU0sRUFBRSxNQUF6QjtBQUFpQ1MscUJBQVMsRUFBRTtBQUE1QztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFpQixpQkFBUyxFQUFDLFFBQTNCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFSCwrRUFBTSxDQUFDSSxXQUF2QjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLCtCQUFkO0FBQUEsd0JBQ0czQixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNJO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFDRSxxQkFBUyxFQUFFWSwrRUFBTSxDQUFDSyxRQURwQjtBQUVFLG1DQUF1QixFQUFFO0FBQUVDLG9CQUFNLEVBQUU3QixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWN1QjtBQUF4QjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQSxrQkFERjtBQXVERDs7R0E1RFEvQixJO1VBQ3FCSSxvRDs7O0tBRHJCSixJOztBQXlGTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uNWUyZmFmODU4ZjJlNjI1MmE0NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9wb3N0L3Bvc3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xyXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIjtcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgdGl0bGU9e3Bvc3QucG9zdHNbMF0ubWV0YV90aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5wb3N0c1swXS5tZXRhX2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIGNhbm9uaWNhbD17cG9zdC5wb3N0c1swXS51cmx9XHJcbiAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cubmV4dGNvZGUuaWQvXCIsXHJcbiAgICAgICAgICB0aXRsZTogYCR7cG9zdC5wb3N0c1swXS5vZ190aXRsZX1gLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGAke3Bvc3QucG9zdHNbMF0ub2dfZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBgJHtwb3N0LnBvc3RzWzBdLnVybH1gLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgYWx0OiBgJHtwb3N0LnBvc3RzWzBdLm9nX3RpdGxlfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2l0ZV9uYW1lOiBgbmV4dGNvZGUgaW5kb25lc2lhYCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgIGhhbmRsZTogXCJAdGVnYXJcIixcclxuICAgICAgICAgIHNpdGU6IFwiQG5leHRjb2RlXCIsXHJcbiAgICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0SW1hZ2V9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3Bvc3QucG9zdHNbMF0uZmVhdHVyZV9pbWFnZX1cclxuICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBkYXJrOmNvbG9yLWdyZXktNjAwIFwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3QucG9zdHNbMF0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QnkgVGVnYXIgQWttYWwgb24gTm92ZW1iZXIgMzAsIDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFRleHR9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnBvc3RzWzBdLmh0bWwgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9JHtwcm9jZXNzLmVudi5rZXl9YFxyXG4gICk7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5wb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvc2x1Zy8ke3BhcmFtcy5zbHVnfS8/a2V5PSR7cHJvY2Vzcy5lbnYua2V5fWBcclxuICApO1xyXG5cclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=