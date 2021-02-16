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
            className: "mt-5 postText ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJwb3N0cyIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwidXJsIiwidGl0bGUiLCJvZ190aXRsZSIsImRlc2NyaXB0aW9uIiwib2dfZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsInBvc3RJbWFnZSIsImZlYXR1cmVfaW1hZ2UiLCJvYmplY3RGaXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXdCO0FBQUE7O0FBQ3RCLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyw0REFBUSxFQUFwQztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsa0RBQUssQ0FBQ0MsWUFBTjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsV0FBSyxFQUFFTixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLFVBRHZCO0FBRUUsaUJBQVcsRUFBRVIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjRSxnQkFGN0I7QUFHRSxlQUFTLEVBQUVULElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0csR0FIM0I7QUFJRSxlQUFTLEVBQUU7QUFDVEEsV0FBRyxFQUFFLDBCQURJO0FBRVRDLGFBQUssRUFBRyxHQUFFWCxJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNLLFFBQVMsRUFGeEI7QUFHVEMsbUJBQVcsRUFBRyxHQUFFYixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNPLGNBQWUsRUFIcEM7QUFJVEMsY0FBTSxFQUFFLENBQ047QUFDRUwsYUFBRyxFQUFHLEdBQUVWLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0csR0FBSSxFQUQ1QjtBQUVFTSxlQUFLLEVBQUUsR0FGVDtBQUdFQyxnQkFBTSxFQUFFLEdBSFY7QUFJRUMsYUFBRyxFQUFHLEdBQUVsQixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNLLFFBQVM7QUFKakMsU0FETSxDQUpDO0FBWVRPLGlCQUFTLEVBQUc7QUFaSCxPQUpiO0FBa0JFLGFBQU8sRUFBRTtBQUNQQyxjQUFNLEVBQUUsUUFERDtBQUVQQyxZQUFJLEVBQUUsV0FGQztBQUdQQyxnQkFBUSxFQUFFO0FBSEg7QUFsQlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBMEJFO0FBQUssZUFBUyxFQUFFQywrRUFBTSxDQUFDdkIsSUFBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUV1QiwrRUFBTSxDQUFDQyxTQUF2QjtBQUFBLCtCQUNFO0FBQ0UsYUFBRyxFQUFFeEIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFja0IsYUFEckI7QUFFRSxhQUFHLEVBQUMsT0FGTjtBQUdFLGVBQUssRUFBRTtBQUFFVCxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLGtCQUFNLEVBQUUsTUFBekI7QUFBaUNTLHFCQUFTLEVBQUU7QUFBNUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMsOERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxRQUEzQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUgsK0VBQU0sQ0FBQ0ksV0FBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQywrQkFBZDtBQUFBLHdCQUNHM0IsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjSTtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVNFO0FBQ0UscUJBQVMsRUFBQyxnQkFEWjtBQUVFLG1DQUF1QixFQUFFO0FBQUVpQixvQkFBTSxFQUFFNUIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjc0I7QUFBeEI7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUEsa0JBREY7QUF1REQ7O0dBNURROUIsSTtVQUNxQkksb0Q7OztLQURyQkosSTs7QUF5Rk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLmUwM2VlNzI3ZGI3MzA4YjM1NjYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvcG9zdC9wb3N0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPXtwb3N0LnBvc3RzWzBdLm1ldGFfdGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QucG9zdHNbMF0ubWV0YV9kZXNjcmlwdGlvbn1cclxuICAgICAgICBjYW5vbmljYWw9e3Bvc3QucG9zdHNbMF0udXJsfVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lm5leHRjb2RlLmlkL1wiLFxyXG4gICAgICAgICAgdGl0bGU6IGAke3Bvc3QucG9zdHNbMF0ub2dfdGl0bGV9YCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtwb3N0LnBvc3RzWzBdLm9nX2Rlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogYCR7cG9zdC5wb3N0c1swXS51cmx9YCxcclxuICAgICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgIGFsdDogYCR7cG9zdC5wb3N0c1swXS5vZ190aXRsZX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHNpdGVfbmFtZTogYG5leHRjb2RlIGluZG9uZXNpYWAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQHRlZ2FyXCIsXHJcbiAgICAgICAgICBzaXRlOiBcIkBuZXh0Y29kZVwiLFxyXG4gICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdEltYWdlfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwb3N0LnBvc3RzWzBdLmZlYXR1cmVfaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZGFyazpjb2xvci1ncmV5LTYwMCBcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnBvc3RzWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkJ5IFRlZ2FyIEFrbWFsIG9uIE5vdmVtYmVyIDMwLCAyMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgcG9zdFRleHQgXCJcclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QucG9zdHNbMF0uaHRtbCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke3Byb2Nlc3MuZW52LmtleX1gXHJcbiAgKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcclxuICBjb25zdCBwYXRocyA9IHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy9zbHVnLyR7cGFyYW1zLnNsdWd9Lz9rZXk9JHtwcm9jZXNzLmVudi5rZXl9YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==