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
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ1c2VQb3N0IiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkFydGlrZWwiLCJ0YWdEYXRhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJvblNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwiYWRhcHRpdmVIZWlnaHQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsInRhZyIsInNldFRhZyIsInN0eWxlcyIsImFydGlrZWxQYWdlIiwiYXJ0aWtlbFBhZ2VfX2hlcm8iLCJhcnRpa2VsUGFnZV9faGVyb0RhcmsiLCJjYXRlZ29yeVNsaWRlciIsImJvcmRlclJhZGl1cyIsInRhZ3MiLCJtYXAiLCJzbHVnIiwibmFtZSIsImlkIiwicG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidGl0bGUiLCJpbmNsdWRlcyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ2xCLFNBQU9DLEtBQUssQ0FBQ0QsR0FBRCxFQUFNO0FBQ2pCRSxXQUFPLEVBQUU7QUFDUixzQkFBZ0I7QUFEUjtBQURRLEdBQU4sQ0FBTCxDQUlKQyxJQUpJLENBSUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBSmIsQ0FBUDtB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QUgsR0FBZUgsSUFBSSxDQUFDeUMsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxJQUFJLElBQUk7QUFDaEQsY0FBR3BDLE1BQU0sSUFBSSxFQUFiLEVBQWlCO0FBQ2YsbUJBQU9vQyxJQUFQO0FBQ0QsV0FGRCxNQUVNLElBQUdBLElBQUksQ0FBQ0MsS0FBTCxDQUFXOUIsV0FBWCxHQUF5QitCLFFBQXpCLENBQWtDdEMsTUFBTSxDQUFDTyxXQUFQLEVBQWxDLENBQUgsRUFBNEQ7QUFDaEUsbUJBQU82QixJQUFQO0FBQ0Q7QUFDRixTQU51QixFQU1yQk4sR0FOcUIsQ0FNakIsQ0FBQ00sSUFBRCxFQUFNRyxHQUFOLGtCQUNMLHFFQUFDLDRFQUFEO0FBQWEsY0FBSSxFQUFFSDtBQUFuQixXQUE4QkEsSUFBSSxDQUFDSCxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBzQjtBQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaURIOztJQXRHUW5DLE87VUFnRHVCc0Isb0QsRUFJTzVCLE87OztLQXBEOUJNLE87O0FBeUhNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpa2VsLjg4ZTE1NzBiNDY5M2QwMjFlYWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9jb21wb25lbnRzL2FydGlrZWwvYXJ0aWtlbC1wYWdlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFydGlrZWxDYXJkIGZyb20gJy4uL2NvbXBvbmVudC9hcnRpa2VsLWNhcmQvQXJ0aWtlbC1jYXJkJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnQvc2VhcmNoL3NlYXJjaCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgfSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgfVxyXG4gIGZ1bmN0aW9uIHVzZVBvc3QgKHVybCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCxmZXRjaGVyKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yXHJcbiAgICB9XHJcbiAgfVxyXG5mdW5jdGlvbiBBcnRpa2VsKHt0YWdEYXRhfSkge1xyXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBcclxuICAgY29uc3Qgb25TZWFyY2ggPSBlID0+IHtcclxuICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgKTtcclxuICAgfTtcclxuICAvLyAgY29uc3QgZmlsdGVyZWRDb3VudHJpZXMgPSBjb3VudHJpZXNMaXN0LmZpbHRlcihjb3VudHJ5ID0+IHtcclxuICAvLyAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XHJcbiAgLy8gfSk7XHJcblxyXG4gICBjb25zdCBzZXR0aW5ncyAgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICBcclxuXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICAgIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgW3RhZyxzZXRUYWddICA9IHVzZVN0YXRlKCcnKVxyXG4gICAgICAgXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLGlzTG9hZGluZ30gPSB1c2VQb3N0KGBodHRwOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzLz9rZXk9YWRmNmQyZGYwMjUzNjE5N2FjYmE0ZjRlZjImJHtzZWFyY2ggPyAnJyA6ICdsaW1pdD02J30maW5jbHVkZT10YWdzJiR7dGFnID8gYGZpbHRlcj10YWc6JHt0YWd9YCA6ICcnfWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGlrZWxQYWdlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSAnbGlnaHQnID8gc3R5bGVzLmFydGlrZWxQYWdlX19oZXJvIDogc3R5bGVzLmFydGlrZWxQYWdlX19oZXJvRGFya30gID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+QVJUSUtFTDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+QmFjYSBhcnRpa2VsIHlhbmcgc3VkYWgga2FtaSBidWF0IGRpc2luaSAsIGppa2EgaW5naW4gbWVsaWhhdCBtYXRlcmkgeWFuZyBzdWRhaCB0ZXJzdHJ1a3R1ciA8TGluayBocmVmPVwiL3R1dG9yaWFsLXNlcmllc1wiPjxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtYmxhay01MCBkYXJrOnRleHQtYmx1ZS01MDBcIj5rbGlrIGRpc2luaTwvc3Bhbj48L0xpbms+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXJcIj5BUlRJS0VMPC9oMT5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggb25TZWFyY2g9e29uU2VhcmNofS8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyICB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhdGVnb3J5U2xpZGVyfSBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrLTUwIGJvcmRlci0yXHQgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MGB9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMTBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWcoJycpfSA+U2VtdWEgS2F0ZWdvcmk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ0RhdGEudGFncy5tYXAodGFnID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RhZy5pZH0gIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhdGVnb3J5U2xpZGVyfSBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrLTUwIGJvcmRlci0yXHQgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MGB9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMTBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWcodGFnLnNsdWcpfSA+e3RhZyAgLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEwIG10LTMgeHM6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTMgXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/ICdsb2FkaW5nJyA6IGRhdGEucG9zdHMuZmlsdGVyKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWFyY2ggPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHBvc3Qsa2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpa2VsQ2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC90YWdzLz9rZXk9YWRmNmQyZGYwMjUzNjE5N2FjYmE0ZjRlZjJgKVxyXG4gIGNvbnN0IHRhZ0RhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGlmICghdGFnRGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGFnRGF0YVxyXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=