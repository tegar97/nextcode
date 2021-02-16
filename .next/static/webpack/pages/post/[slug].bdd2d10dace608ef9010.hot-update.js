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
          src: "/artikel.jpg",
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
            className: "mt-5",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJwb3N0cyIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwidXJsIiwidGl0bGUiLCJvZ190aXRsZSIsImRlc2NyaXB0aW9uIiwib2dfZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsInBvc3RJbWFnZSIsIm9iamVjdEZpdCIsInBvc3RDb250ZW50IiwiX19odG1sIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFBQTs7QUFDdEIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLDREQUFRLEVBQXBDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0MsVUFEdkI7QUFFRSxpQkFBVyxFQUFFUixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNFLGdCQUY3QjtBQUdFLGVBQVMsRUFBRVQsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUgzQjtBQUlFLGVBQVMsRUFBRTtBQUNUQSxXQUFHLEVBQUUsMEJBREk7QUFFVEMsYUFBSyxFQUFHLEdBQUVYLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUyxFQUZ4QjtBQUdUQyxtQkFBVyxFQUFHLEdBQUViLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY08sY0FBZSxFQUhwQztBQUlUQyxjQUFNLEVBQUUsQ0FDTjtBQUNFTCxhQUFHLEVBQUcsR0FBRVYsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRyxHQUFJLEVBRDVCO0FBRUVNLGVBQUssRUFBRSxHQUZUO0FBR0VDLGdCQUFNLEVBQUUsR0FIVjtBQUlFQyxhQUFHLEVBQUcsR0FBRWxCLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0ssUUFBUztBQUpqQyxTQURNLENBSkM7QUFZVE8saUJBQVMsRUFBRztBQVpILE9BSmI7QUFrQkUsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxRQUREO0FBRVBDLFlBQUksRUFBRSxXQUZDO0FBR1BDLGdCQUFRLEVBQUU7QUFISDtBQWxCWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkU7QUFBSyxlQUFTLEVBQUVDLCtFQUFNLENBQUN2QixJQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRXVCLCtFQUFNLENBQUNDLFNBQXZCO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUMsY0FETjtBQUVFLGFBQUcsRUFBQyxPQUZOO0FBR0UsZUFBSyxFQUFFO0FBQUVSLGlCQUFLLEVBQUUsTUFBVDtBQUFpQkMsa0JBQU0sRUFBRSxNQUF6QjtBQUFpQ1EscUJBQVMsRUFBRTtBQUE1QztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFpQixpQkFBUyxFQUFDLFFBQTNCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFRiwrRUFBTSxDQUFDRyxXQUF2QjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLCtCQUFkO0FBQUEsd0JBQ0cxQixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNJO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFDRSxxQkFBUyxFQUFDLE1BRFo7QUFFRSxtQ0FBdUIsRUFBRTtBQUFFZ0Isb0JBQU0sRUFBRTNCLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY3FCO0FBQXhCO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBLGtCQURGO0FBdUREOztHQTVEUTdCLEk7VUFDcUJJLG9EOzs7S0FEckJKLEk7O0FBeUZNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5iZGQyZDEwZGFjZTYwOGVmOTAxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3Bvc3QvcG9zdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17cG9zdC5wb3N0c1swXS5tZXRhX3RpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LnBvc3RzWzBdLm1ldGFfZGVzY3JpcHRpb259XHJcbiAgICAgICAgY2Fub25pY2FsPXtwb3N0LnBvc3RzWzBdLnVybH1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5uZXh0Y29kZS5pZC9cIixcclxuICAgICAgICAgIHRpdGxlOiBgJHtwb3N0LnBvc3RzWzBdLm9nX3RpdGxlfWAsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cG9zdC5wb3N0c1swXS5vZ19kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmw6IGAke3Bvc3QucG9zdHNbMF0udXJsfWAsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICBhbHQ6IGAke3Bvc3QucG9zdHNbMF0ub2dfdGl0bGV9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzaXRlX25hbWU6IGBuZXh0Y29kZSBpbmRvbmVzaWFgLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiBcIkB0ZWdhclwiLFxyXG4gICAgICAgICAgc2l0ZTogXCJAbmV4dGNvZGVcIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RJbWFnZX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9hcnRpa2VsLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZGFyazpjb2xvci1ncmV5LTYwMCBcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RzWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkJ5IFRlZ2FyIEFrbWFsIG9uIE5vdmVtYmVyIDMwLCAyMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTVcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5wb3N0c1swXS5odG1sIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7cHJvY2Vzcy5lbnYua2V5fWBcclxuICApO1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzL3NsdWcvJHtwYXJhbXMuc2x1Z30vP2tleT04YmM4OWI1NGZhNzIzNDE5MjRmODU1ODYzMWBcclxuICApO1xyXG5cclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=