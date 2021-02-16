webpackHotUpdate_N_E("pages/artikel",{

/***/ "./pages/artikel.tsx":
/*!***************************!*\
  !*** ./pages/artikel.tsx ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
/* harmony import */ var _component_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/pagination/pagination */ "./component/pagination/pagination.tsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");




var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\artikel.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function fetcher(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    data,
    isError,
    isLoading
  } = usePost(`https://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=${process.env.key}&${search ? "" : "limit=8"}&include=tags&${tag ? `filter=tag:${tag}` : ""}&page=${page}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_11__["NextSeo"], {
      title: "Kumpulan Artikel Materi Pembelajaran Nextcode indonesia",
      description: "Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini",
      canonical: "https://www.nextcode.id/artikel",
      openGraph: {
        url: "https://www.nextcode.id/artikel",
        title: "Kumpulan Artikel Materi Pembelajaran Nextcode indonesia",
        description: "Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini",
        images: [{
          url: ``,
          width: 800,
          height: 600,
          alt: `Kumpulan Artikel Materi Pembelajaran Nextcode indonesia`
        }],
        site_name: "Kumpulan Artikel Materi Pembelajaran Nextcode indonesia"
      },
      twitter: {
        handle: "@tegar",
        site: "@nextcode",
        cardType: "summary_large_image"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: theme === "light" ? _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__hero : _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__heroDark,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-4xl font-bold text-center text-white",
            children: "ARTIKEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "mt-3 text-lg font-medium text-center text-white",
            children: ["Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/tutorial-series",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "cursor-pointer text-blak-50 dark:text-blue-500",
                children: "klik disini"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-5 mt-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl text-center",
          children: "ARTIKEL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_search_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _objectSpread(_objectSpread({}, settings), {}, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-blue-500 border-2	 bg-white dark:bg-black-50`,
              style: {
                borderRadius: "10px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => setTag(""),
                children: "Semua Kategori"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), tagData.tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-blue-500  border-2	 bg-white dark:bg-black-50`,
              style: {
                borderRadius: "10px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => setTag(tag.slug),
                children: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, this)
            }, tag.id, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this))]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ",
          children: isLoading ? "loading" : data.posts.filter(post => {
            if (search == "") {
              return post;
            } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
              return post;
            }
          }).map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
            post: post
          }, post.id, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 34
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), isLoading ? "wait ..." : data.meta.pagination.pages < 1 ? "" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-5 text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
            page: page,
            setPage: setPage,
            totalPages: data.meta.pagination.pages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Artikel, "oqeSHBSqkn0OFpiYyP0n1th7vEI=", false, function () {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ1c2VQb3N0IiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkFydGlrZWwiLCJ0YWdEYXRhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJhZGFwdGl2ZUhlaWdodCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidGFnIiwic2V0VGFnIiwicHJvY2VzcyIsImVudiIsImtleSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsImFydGlrZWxQYWdlIiwiYXJ0aWtlbFBhZ2VfX2hlcm8iLCJhcnRpa2VsUGFnZV9faGVyb0RhcmsiLCJjYXRlZ29yeVNsaWRlciIsImJvcmRlclJhZGl1cyIsInRhZ3MiLCJtYXAiLCJzbHVnIiwibmFtZSIsImlkIiwicG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwiaW5jbHVkZXMiLCJtZXRhIiwicGFnaW5hdGlvbiIsInBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9B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TUFBTSxDQUFDUyxXQUFQLEVBQWxDLENBREssRUFFTDtBQUNBLHFCQUFPMEMsSUFBUDtBQUNEO0FBQ0YsV0FUSCxFQVVHTixHQVZILENBVVFNLElBQUQsaUJBQVUscUVBQUMsNEVBQUQ7QUFBYSxnQkFBSSxFQUFFQTtBQUFuQixhQUE4QkEsSUFBSSxDQUFDSCxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZqQjtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGLEVBd0NHcEQsU0FBUyxHQUNSLFVBRFEsR0FFTkgsSUFBSSxDQUFDNEQsSUFBTCxDQUFVQyxVQUFWLENBQXFCQyxLQUFyQixHQUE2QixDQUE3QixHQUNGLEVBREUsZ0JBR0Y7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0UscUVBQUMseUVBQUQ7QUFDRSxnQkFBSSxFQUFFcEQsSUFEUjtBQUVFLG1CQUFPLEVBQUVDLE9BRlg7QUFHRSxzQkFBVSxFQUFFWCxJQUFJLENBQUM0RCxJQUFMLENBQVVDLFVBQVYsQ0FBcUJDO0FBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUEsa0JBREY7QUE2R0Q7O0lBdEtRekQsTztVQStDcUJ3QixvRCxFQUdTOUIsTzs7O0tBbEQ5Qk0sTzs7QUE2TE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGlrZWwuOWQ5OTJjOTBiMmJlN2RkZGEwZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9jb21wb25lbnRzL2FydGlrZWwvYXJ0aWtlbC1wYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFydGlrZWxDYXJkIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWtlbC1jYXJkL0FydGlrZWwtY2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnQvc2VhcmNoL3NlYXJjaFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlUG9zdCh1cmwpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBBcnRpa2VsKHsgdGFnRGF0YSB9KSB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgfTtcclxuICAvLyAgY29uc3QgZmlsdGVyZWRDb3VudHJpZXMgPSBjb3VudHJpZXNMaXN0LmZpbHRlcihjb3VudHJ5ID0+IHtcclxuICAvLyAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG5cclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUG9zdChcclxuICAgIGBodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PSR7XHJcbiAgICAgIHByb2Nlc3MuZW52LmtleVxyXG4gICAgfSYke3NlYXJjaCA/IFwiXCIgOiBcImxpbWl0PThcIn0maW5jbHVkZT10YWdzJiR7XHJcbiAgICAgIHRhZyA/IGBmaWx0ZXI9dGFnOiR7dGFnfWAgOiBcIlwiXHJcbiAgICB9JnBhZ2U9JHtwYWdlfWBcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPXtcIkt1bXB1bGFuIEFydGlrZWwgTWF0ZXJpIFBlbWJlbGFqYXJhbiBOZXh0Y29kZSBpbmRvbmVzaWFcIn1cclxuICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICBcIkJhY2EgYXJ0aWtlbCB5YW5nIHN1ZGFoIGthbWkgYnVhdCBkaXNpbmkgLCBqaWthIGluZ2luIG1lbGloYXQgbWF0ZXJpIHlhbmcgc3VkYWggdGVyc3RydWt0dXIga2xpayBkaXNpbmlcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW5vbmljYWw9e1wiaHR0cHM6Ly93d3cubmV4dGNvZGUuaWQvYXJ0aWtlbFwifVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lm5leHRjb2RlLmlkL2FydGlrZWxcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkt1bXB1bGFuIEFydGlrZWwgTWF0ZXJpIFBlbWJlbGFqYXJhbiBOZXh0Y29kZSBpbmRvbmVzaWFcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICBcIkJhY2EgYXJ0aWtlbCB5YW5nIHN1ZGFoIGthbWkgYnVhdCBkaXNpbmkgLCBqaWthIGluZ2luIG1lbGloYXQgbWF0ZXJpIHlhbmcgc3VkYWggdGVyc3RydWt0dXIga2xpayBkaXNpbmlcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsOiBgYCxcclxuICAgICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgIGFsdDogYEt1bXB1bGFuIEFydGlrZWwgTWF0ZXJpIFBlbWJlbGFqYXJhbiBOZXh0Y29kZSBpbmRvbmVzaWFgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHNpdGVfbmFtZTogXCJLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0d2l0dGVyPXt7XHJcbiAgICAgICAgICBoYW5kbGU6IFwiQHRlZ2FyXCIsXHJcbiAgICAgICAgICBzaXRlOiBcIkBuZXh0Y29kZVwiLFxyXG4gICAgICAgICAgY2FyZFR5cGU6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGlrZWxQYWdlfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICB0aGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgPyBzdHlsZXMuYXJ0aWtlbFBhZ2VfX2hlcm9cclxuICAgICAgICAgICAgICA6IHN0eWxlcy5hcnRpa2VsUGFnZV9faGVyb0RhcmtcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBBUlRJS0VMXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0zIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIEJhY2EgYXJ0aWtlbCB5YW5nIHN1ZGFoIGthbWkgYnVhdCBkaXNpbmkgLCBqaWthIGluZ2luIG1lbGloYXRcclxuICAgICAgICAgICAgICBtYXRlcmkgeWFuZyBzdWRhaCB0ZXJzdHJ1a3R1cntcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3R1dG9yaWFsLXNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFrLTUwIGRhcms6dGV4dC1ibHVlLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBrbGlrIGRpc2luaVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG10LTEwXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXJcIj5BUlRJS0VMPC9oMT5cclxuICAgICAgICAgIDxTZWFyY2ggb25TZWFyY2g9e29uU2VhcmNofSAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IFwiPlxyXG4gICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnlTbGlkZXJ9IGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZS01MDAgYm9yZGVyLTJcdCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrLTUwYH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhZyhcIlwiKX0+U2VtdWEgS2F0ZWdvcmk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3RhZ0RhdGEudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhZy5pZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnlTbGlkZXJ9IGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZS01MDAgIGJvcmRlci0yXHQgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MGB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWcodGFnLnNsdWcpfT57dGFnLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEwIG10LTMgeHM6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTMgXCI+XHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmdcclxuICAgICAgICAgICAgICA/IFwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgOiBkYXRhLnBvc3RzXHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IDxBcnRpa2VsQ2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9IC8+KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgXCJ3YWl0IC4uLlwiXHJcbiAgICAgICAgICApIDogZGF0YS5tZXRhLnBhZ2luYXRpb24ucGFnZXMgPCAxID8gKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXtkYXRhLm1ldGEucGFnaW5hdGlvbi5wYWdlc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvdGFncy8/a2V5PSR7cHJvY2Vzcy5lbnYua2V5fWBcclxuICApO1xyXG4gIGNvbnN0IHRhZ0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAoIXRhZ0RhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0YWdEYXRhLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgICAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9