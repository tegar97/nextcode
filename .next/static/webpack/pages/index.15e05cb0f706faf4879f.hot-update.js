webpackHotUpdate_N_E("pages/index",{

/***/ "./component/artikel-card/Artikel-card.tsx":
/*!*************************************************!*\
  !*** ./component/artikel-card/Artikel-card.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../styles/components/Artikel-card/ArtikelCard.module.scss */ "./styles/components/Artikel-card/ArtikelCard.module.scss");
/* harmony import */ var _styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\component\\artikel-card\\Artikel-card.tsx",
    _s = $RefreshSig$();








function ArtikelCard({
  post
}) {
  _s();

  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `bg-white dark:primary text-left ${_styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.artikelCard} dark:bg-black-50`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: `/post/${post.slug}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.artikelImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          src: post.feature_image,
          alt: "Artikel ",
          width: 500,
          height: 380
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row",
        children: post.tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: `kategori/${tag.slug}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: `dark:text-white text-white ${_styles_components_Artikel_card_ArtikelCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.category}`,
            style: {
              backgroundColor: `${tag.accent_color}`
            },
            children: tag.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: `/post/${post.slug}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-lg",
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row mt-10",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm",
              children: moment_timezone__WEBPACK_IMPORTED_MODULE_3___default.a.tz(post.created_at, "Asia/Jakarta").fromNow()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "ml-2 text-sm",
              children: post.reading_time === 0 ? "kurang dari 1 menit baca" : post.reading_time + " menit baca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(ArtikelCard, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_5__["useTheme"]];
});

_c = ArtikelCard;
/* harmony default export */ __webpack_exports__["default"] = (ArtikelCard);

var _c;

$RefreshReg$(_c, "ArtikelCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2FydGlrZWwtY2FyZC9BcnRpa2VsLWNhcmQudHN4Il0sIm5hbWVzIjpbIkFydGlrZWxDYXJkIiwicG9zdCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsInN0eWxlcyIsImFydGlrZWxDYXJkIiwic2x1ZyIsImFydGlrZWxJbWFnZSIsImZlYXR1cmVfaW1hZ2UiLCJ0YWdzIiwibWFwIiwidGFnIiwiY2F0ZWdvcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY2NlbnRfY29sb3IiLCJuYW1lIiwidGl0bGUiLCJtb21lbnQiLCJ0eiIsImNyZWF0ZWRfYXQiLCJmcm9tTm93IiwicmVhZGluZ190aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBK0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLDREQUFRLEVBQXBDO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUcsbUNBQWtDQyw4RkFBTSxDQUFDQyxXQUFZLG1CQURuRTtBQUFBLDRCQUdFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFHLFNBQVFMLElBQUksQ0FBQ00sSUFBSyxFQUEvQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUYsOEZBQU0sQ0FBQ0csWUFBdkI7QUFBQSwrQkFDRSxxRUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBRVAsSUFBSSxDQUFDUSxhQURaO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxlQUFLLEVBQUUsR0FIVDtBQUlFLGdCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQWFFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGtCQUNHUixJQUFJLENBQUNTLElBQUwsQ0FBVUMsR0FBVixDQUFlQyxHQUFELGlCQUNiLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdBLEdBQUcsQ0FBQ0wsSUFBSyxFQUFqQztBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRyw4QkFBNkJGLDhGQUFNLENBQUNRLFFBQVMsRUFEM0Q7QUFFRSxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLEVBQUcsR0FBRUYsR0FBRyxDQUFDRyxZQUFhO0FBQXZDLGFBRlQ7QUFBQSxzQkFJR0gsR0FBRyxDQUFDSTtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBYUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUcsU0FBUWYsSUFBSSxDQUFDTSxJQUFLLEVBQS9CO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsU0FBZDtBQUFBLHNCQUF5Qk4sSUFBSSxDQUFDZ0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQyxTQUFiO0FBQUEsd0JBQ0dDLHNEQUFNLENBQUNDLEVBQVAsQ0FBVWxCLElBQUksQ0FBQ21CLFVBQWYsRUFBMkIsY0FBM0IsRUFBMkNDLE9BQTNDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBQyxjQUFkO0FBQUEsd0JBQ0dwQixJQUFJLENBQUNxQixZQUFMLEtBQXNCLENBQXRCLEdBQ0csMEJBREgsR0FFR3JCLElBQUksQ0FBQ3FCLFlBQUwsR0FBb0I7QUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNEOztHQS9DUXRCLFc7VUFDcUJJLG9EOzs7S0FEckJKLFc7QUFpRE1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1ZTA1Y2IwZjcwNmZhZjQ4NzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9BcnRpa2VsLWNhcmQvQXJ0aWtlbENhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiBBcnRpa2VsQ2FyZCh7IHBvc3QgfSkge1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGJnLXdoaXRlIGRhcms6cHJpbWFyeSB0ZXh0LWxlZnQgJHtzdHlsZXMuYXJ0aWtlbENhcmR9IGRhcms6YmctYmxhY2stNTBgfVxyXG4gICAgPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpa2VsSW1hZ2V9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlX2ltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9XCJBcnRpa2VsIFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzgwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAge3Bvc3QudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtga2F0ZWdvcmkvJHt0YWcuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRhcms6dGV4dC13aGl0ZSB0ZXh0LXdoaXRlICR7c3R5bGVzLmNhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGAke3RhZy5hY2NlbnRfY29sb3J9YCB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIHttb21lbnQudHoocG9zdC5jcmVhdGVkX2F0LCBcIkFzaWEvSmFrYXJ0YVwiKS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnJlYWRpbmdfdGltZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICA/IFwia3VyYW5nIGRhcmkgMSBtZW5pdCBiYWNhXCJcclxuICAgICAgICAgICAgICAgICAgOiBwb3N0LnJlYWRpbmdfdGltZSArIFwiIG1lbml0IGJhY2FcIn1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==