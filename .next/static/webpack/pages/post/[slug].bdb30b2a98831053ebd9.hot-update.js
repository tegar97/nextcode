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
        url: 'https://www.nextcode.id/',
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
        handle: '@tegar',
        site: '@nextcode',
        cardType: 'summary_large_image'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/artikel.jpg",
          alt: "image",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
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
              lineNumber: 49,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-center mt-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "By Tegar Akmal on November 30, 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
              __html: post.posts[0].html
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), ";"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Post, "wVF4xldMMabFrEVBIbM7NG5J0Bg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJwb3N0cyIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwidXJsIiwidGl0bGUiLCJvZ190aXRsZSIsImRlc2NyaXB0aW9uIiwib2dfZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsInBvc3RJbWFnZSIsIm9iamVjdEZpdCIsInBvc3RDb250ZW50IiwiX19odG1sIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBc0I7QUFBQTs7QUFDbEIsUUFBTTtBQUFDQyxTQUFEO0FBQU9DO0FBQVAsTUFBbUJDLDREQUFRLEVBQWpDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FGTSxFQUVKLEVBRkksQ0FBVDtBQUdBLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFDSSxXQUFLLEVBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0MsVUFEekI7QUFFSSxpQkFBVyxFQUFFUixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNFLGdCQUYvQjtBQUdJLGVBQVMsRUFBRVQsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUg3QjtBQUlJLGVBQVMsRUFBRTtBQUNYQSxXQUFHLEVBQUUsMEJBRE07QUFFWEMsYUFBSyxFQUFHLEdBQUVYLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUyxFQUZ0QjtBQUdYQyxtQkFBVyxFQUFHLEdBQUViLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY08sY0FBZSxFQUhsQztBQUlYQyxjQUFNLEVBQUUsQ0FDSjtBQUNBTCxhQUFHLEVBQUcsR0FBRVYsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUFJLEVBRDFCO0FBRUFNLGVBQUssRUFBRSxHQUZQO0FBR0FDLGdCQUFNLEVBQUUsR0FIUjtBQUlBQyxhQUFHLEVBQUcsR0FBRWxCLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUztBQUovQixTQURJLENBSkc7QUFhWE8saUJBQVMsRUFBRztBQWJELE9BSmY7QUFtQkksYUFBTyxFQUFFO0FBQ1RDLGNBQU0sRUFBRSxRQURDO0FBRVRDLFlBQUksRUFBRSxXQUZHO0FBR1RDLGdCQUFRLEVBQUU7QUFIRDtBQW5CYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUEyQkk7QUFBSyxlQUFTLEVBQUVDLCtFQUFNLENBQUN2QixJQUF2QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRXVCLCtFQUFNLENBQUNDLFNBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUMsY0FBVDtBQUF3QixhQUFHLEVBQUMsT0FBNUI7QUFBb0MsZUFBSyxFQUFFO0FBQUNSLGlCQUFLLEVBQUUsTUFBUjtBQUFlQyxrQkFBTSxFQUFFLE1BQXZCO0FBQThCUSxxQkFBUyxFQUFFO0FBQXpDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJUSxxRUFBQyw4REFBRDtBQUFpQixpQkFBUyxFQUFDLFFBQTNCO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFFRiwrRUFBTSxDQUFDRyxXQUF2QjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0E7QUFBSSx1QkFBUyxFQUFDLCtCQUFkO0FBQUEsd0JBQStDMUIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjSTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBRUE7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU9JO0FBQUssbUNBQXVCLEVBQUU7QUFBQ2dCLG9CQUFNLEVBQUMzQixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNxQjtBQUF0QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQko7QUFBQSxrQkFESjtBQThDSDs7R0FuRFE3QixJO1VBQ29CSSxvRDs7O0tBRHBCSixJOztBQWdGTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYmRiMzBiMmE5ODgzMTA1M2ViZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3Bvc3QvcG9zdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xyXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIjtcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcblxyXG5mdW5jdGlvbiBQb3N0KHtwb3N0fSkge1xyXG4gICAgY29uc3Qge3RoZW1lLHNldFRoZW1lfSA9IHVzZVRoZW1lKClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgPE5leHRTZW8gXHJcbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnBvc3RzWzBdLm1ldGFfdGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LnBvc3RzWzBdLm1ldGFfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGNhbm9uaWNhbD17cG9zdC5wb3N0c1swXS51cmx9XHJcbiAgICAgICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5uZXh0Y29kZS5pZC8nLFxyXG4gICAgICAgICAgICB0aXRsZTogYCR7cG9zdC5wb3N0c1swXS5vZ190aXRsZX1gLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cG9zdC5wb3N0c1swXS5vZ19kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogYCR7cG9zdC5wb3N0c1swXS51cmx9YCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgIGFsdDogYCR7cG9zdC5wb3N0c1swXS5vZ190aXRsZX1gLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc2l0ZV9uYW1lOiBgbmV4dGNvZGUgaW5kb25lc2lhYFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICAgIGhhbmRsZTogJ0B0ZWdhcicsXHJcbiAgICAgICAgICAgIHNpdGU6ICdAbmV4dGNvZGUnLFxyXG4gICAgICAgICAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0SW1hZ2V9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcnRpa2VsLmpwZ1wiIGFsdD1cImltYWdlXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnLGhlaWdodDogJzEwMCUnLG9iamVjdEZpdDogJ2NvdmVyJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBkYXJrOmNvbG9yLWdyZXktNjAwIFwiPntwb3N0LnBvc3RzWzBdLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CeSBUZWdhciBBa21hbCBvbiBOb3ZlbWJlciAzMCwgMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QucG9zdHNbMF0uaHRtbCB9fSAvPjtcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT1hZGY2ZDJkZjAyNTM2MTk3YWNiYTRmNGVmMicpXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgICBjb25zdCBwYXRocyA9IHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXHJcbiAgICB9KSlcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzL3NsdWcvJHtwYXJhbXMuc2x1Z30vP2tleT1hZGY2ZDJkZjAyNTM2MTk3YWNiYTRmNGVmMmApXHJcblxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHBvc3RcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=