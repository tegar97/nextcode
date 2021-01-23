webpackHotUpdate_N_E("pages/artikel",{

/***/ "./pages/artikel.tsx":
/*!***************************!*\
  !*** ./pages/artikel.tsx ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/components/artikel/artikel-page.module.scss */ "./styles/components/artikel/artikel-page.module.scss");
/* harmony import */ var _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/artikel-card/Artikel-card */ "./component/artikel-card/Artikel-card.tsx");
/* harmony import */ var _component_search_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/search/search */ "./component/search/search.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\artikel.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function fetcher(url) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

function usePost(url) {
  _s();

  const {
    data,
    error
  } = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}

_s(usePost, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

function Artikel({
  tagData
}) {
  _s2();

  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  const onSearch = e => {
    setSearch(e.target.value.toLowerCase());
  }; //  const filteredCountries = countriesList.filter(country => {
  //   return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  const {
    theme,
    setTheme
  } = Object(next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    data,
    isError,
    isLoading
  } = usePost(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&${search ? '' : 'limit=6'}&include=tags&${tag ? `filter=tag:${tag}` : ''}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: theme === 'light' ? _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__hero : _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__heroDark,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "text-center ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "text-4xl font-bold text-center text-white",
          children: "ARTIKEL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "mt-3 text-lg font-medium text-center text-white",
          children: ["Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/tutorial-series",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "cursor-pointer text-blak-50 dark:text-blue-500",
              children: "klik disini"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 207
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 177
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "p-5 mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "text-4xl text-center",
        children: "ARTIKEL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 18
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_search_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSearch: onSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "p-5 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _objectSpread(_objectSpread({}, settings), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-black-50 border-2	 bg-white dark:bg-black-50`,
            style: {
              borderRadius: '10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              onClick: () => setTag(''),
              children: "Semua Kategori"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 19
          }, this), tagData.tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-black-50 border-2	 bg-white dark:bg-black-50`,
            style: {
              borderRadius: '10px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              onClick: () => setTag(tag.slug),
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 27
            }, this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, this))]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ",
        children: isLoading ? 'loading' : data.posts.filter(post => {
          if (search == "") {
            return post;
          } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
            return post;
          }
        }).map((post, key) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, this);
}

_s2(Artikel, "LeQm7ldXZbtmz4ZcCUSN0FLlug8=", false, function () {
  return [next_themes__WEBPACK_IMPORTED_MODULE_4__["useTheme"], usePost];
});

_c = Artikel;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Artikel);

var _c;

$RefreshReg$(_c, "Artikel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ1c2VQb3N0IiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkFydGlrZWwiLCJ0YWdEYXRhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJvblNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwiYWRhcHRpdmVIZWlnaHQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsInRhZyIsInNldFRhZyIsInN0eWxlcyIsImFydGlrZWxQYWdlIiwiYXJ0aWtlbFBhZ2VfX2hlcm8iLCJhcnRpa2VsUGFnZV9faGVyb0RhcmsiLCJjYXRlZ29yeVNsaWRlciIsImJvcmRlclJhZGl1cyIsInRhZ3MiLCJtYXAiLCJzbHVnIiwibmFtZSIsImlkIiwicG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwiaW5jbHVkZXMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNsQixTQUFPQyxLQUFLLENBQUNELEdBQUQsRUFBTTtBQUNqQkUsV0FBTyxFQUFFO0FBQ1Isc0JBQWdCO0FBRFI7QUFEUSxHQUFOLENBQUwsQ0FJSkMsSUFKSSxDQUlDQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpiLENBQVA7QUFLQTs7QUFD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LElBQUksQ0FBQ3lDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsSUFBSSxJQUFJO0FBQ2hELGNBQUdwQyxNQUFNLElBQUksRUFBYixFQUFpQjtBQUNmLG1CQUFPb0MsSUFBUDtBQUNELFdBRkQsTUFFTSxJQUFHQSxJQUFJLENBQUNKLElBQUwsQ0FBVXpCLFdBQVYsR0FBd0I4QixRQUF4QixDQUFpQ3JDLE1BQU0sQ0FBQ08sV0FBUCxFQUFqQyxDQUFILEVBQTJEO0FBQy9ELG1CQUFPNkIsSUFBUDtBQUNEO0FBQ0YsU0FOdUIsRUFNckJOLEdBTnFCLENBTWpCLENBQUNNLElBQUQsRUFBTUUsR0FBTixrQkFDTCxxRUFBQyw0RUFBRDtBQUFhLGNBQUksRUFBRUY7QUFBbkIsV0FBOEJBLElBQUksQ0FBQ0gsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQc0I7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlESDs7SUF0R1FuQyxPO1VBZ0R1QnNCLG9ELEVBSU81QixPOzs7S0FwRDlCTSxPOztBQXlITUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWtlbC4wZGQ1NDU1YTlmNmU2ZmQxYzdiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hcnRpa2VsL2FydGlrZWwtcGFnZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBBcnRpa2VsQ2FyZCBmcm9tICcuLi9jb21wb25lbnQvYXJ0aWtlbC1jYXJkL0FydGlrZWwtY2FyZCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50L3NlYXJjaC9zZWFyY2gnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgIH0sXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgIH1cclxuICBmdW5jdGlvbiB1c2VQb3N0ICh1cmwpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsZmV0Y2hlcilcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvclxyXG4gICAgfVxyXG4gIH1cclxuZnVuY3Rpb24gQXJ0aWtlbCh7dGFnRGF0YX0pIHtcclxuICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgXHJcbiAgIGNvbnN0IG9uU2VhcmNoID0gZSA9PiB7XHJcbiAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpICk7XHJcbiAgIH07XHJcbiAgLy8gIGNvbnN0IGZpbHRlcmVkQ291bnRyaWVzID0gY291bnRyaWVzTGlzdC5maWx0ZXIoY291bnRyeSA9PiB7XHJcbiAgLy8gICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIC8vIH0pO1xyXG5cclxuICAgY29uc3Qgc2V0dGluZ3MgID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgXHJcblxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IFt0YWcsc2V0VGFnXSAgPSB1c2VTdGF0ZSgnJylcclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgaXNFcnJvcixpc0xvYWRpbmd9ID0gdXNlUG9zdChgaHR0cDovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PWFkZjZkMmRmMDI1MzYxOTdhY2JhNGY0ZWYyJiR7c2VhcmNoID8gJycgOiAnbGltaXQ9Nid9JmluY2x1ZGU9dGFncyYke3RhZyA/IGBmaWx0ZXI9dGFnOiR7dGFnfWAgOiAnJ31gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpa2VsUGFnZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gJ2xpZ2h0JyA/IHN0eWxlcy5hcnRpa2VsUGFnZV9faGVybyA6IHN0eWxlcy5hcnRpa2VsUGFnZV9faGVyb0Rhcmt9ICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkFSVElLRUw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkJhY2EgYXJ0aWtlbCB5YW5nIHN1ZGFoIGthbWkgYnVhdCBkaXNpbmkgLCBqaWthIGluZ2luIG1lbGloYXQgbWF0ZXJpIHlhbmcgc3VkYWggdGVyc3RydWt0dXIgPExpbmsgaHJlZj1cIi90dXRvcmlhbC1zZXJpZXNcIj48c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWstNTAgZGFyazp0ZXh0LWJsdWUtNTAwXCI+a2xpayBkaXNpbmk8L3NwYW4+PC9MaW5rPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyXCI+QVJUSUtFTDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIG9uU2VhcmNoPXtvblNlYXJjaH0vPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IFwiID5cclxuICAgICAgICAgICAgICAgICAgPFNsaWRlciAgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXRlZ29yeVNsaWRlcn0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjay01MCBib3JkZXItMlx0IGJnLXdoaXRlIGRhcms6YmctYmxhY2stNTBgfSBzdHlsZT17e2JvcmRlclJhZGl1czogJzEwcHgnLH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFnKCcnKX0gPlNlbXVhIEthdGVnb3JpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdEYXRhLnRhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0YWcuaWR9ICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXRlZ29yeVNsaWRlcn0gYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjay01MCBib3JkZXItMlx0IGJnLXdoaXRlIGRhcms6YmctYmxhY2stNTBgfSBzdHlsZT17e2JvcmRlclJhZGl1czogJzEwcHgnLH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFnKHRhZy5zbHVnKX0gPnt0YWcgIC5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xMCBtdC0zIHhzOmdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyAnbG9hZGluZycgOiBkYXRhLnBvc3RzLmZpbHRlcihwb3N0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihwb3N0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHBvc3Qsa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpa2VsQ2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC90YWdzLz9rZXk9YWRmNmQyZGYwMjUzNjE5N2FjYmE0ZjRlZjJgKVxyXG4gIGNvbnN0IHRhZ0RhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGlmICghdGFnRGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGFnRGF0YVxyXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=