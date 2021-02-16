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
          children: isLoading ? "loading" : data.post.filter(post => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ1c2VQb3N0IiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkFydGlrZWwiLCJ0YWdEYXRhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJhZGFwdGl2ZUhlaWdodCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidGFnIiwic2V0VGFnIiwicHJvY2VzcyIsImVudiIsImtleSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsInN0eWxlcyIsImFydGlrZWxQYWdlIiwiYXJ0aWtlbFBhZ2VfX2hlcm8iLCJhcnRpa2VsUGFnZV9faGVyb0RhcmsiLCJjYXRlZ29yeVNsaWRlciIsImJvcmRlclJhZGl1cyIsInRhZ3MiLCJtYXAiLCJzbHVnIiwibmFtZSIsImlkIiwicG9zdCIsImZpbHRlciIsImluY2x1ZGVzIiwibWV0YSIsInBhZ2luYXRpb24iLCJwYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlC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Q1MsV0FBUCxFQUFsQyxDQURLLEVBRUw7QUFDQSxxQkFBT3dDLElBQVA7QUFDRDtBQUNGLFdBVEgsRUFVR0osR0FWSCxDQVVRSSxJQUFELGlCQUFVLHFFQUFDLDRFQUFEO0FBQWEsZ0JBQUksRUFBRUE7QUFBbkIsYUFBOEJBLElBQUksQ0FBQ0QsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWakI7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRixFQXdDR3BELFNBQVMsR0FDUixVQURRLEdBRU5ILElBQUksQ0FBQzJELElBQUwsQ0FBVUMsVUFBVixDQUFxQkMsS0FBckIsR0FBNkIsQ0FBN0IsR0FDRixFQURFLGdCQUdGO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGlDQUNFLHFFQUFDLHlFQUFEO0FBQ0UsZ0JBQUksRUFBRW5ELElBRFI7QUFFRSxtQkFBTyxFQUFFQyxPQUZYO0FBR0Usc0JBQVUsRUFBRVgsSUFBSSxDQUFDMkQsSUFBTCxDQUFVQyxVQUFWLENBQXFCQztBQUhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBLGtCQURGO0FBNkdEOztJQXRLUXhELE87VUErQ3FCd0Isb0QsRUFHUzlCLE87OztLQWxEOUJNLE87O0FBNkxNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpa2VsLjVkMWZkYmM3ZDE0OTM4NWQ0ZWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hcnRpa2VsL2FydGlrZWwtcGFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBcnRpa2VsQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50L2FydGlrZWwtY2FyZC9BcnRpa2VsLWNhcmRcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50L3NlYXJjaC9zZWFyY2hcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50L3BhZ2luYXRpb24vcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcblxyXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZVBvc3QodXJsKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gQXJ0aWtlbCh7IHRhZ0RhdGEgfSkge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH07XHJcbiAgLy8gIGNvbnN0IGZpbHRlcmVkQ291bnRyaWVzID0gY291bnRyaWVzTGlzdC5maWx0ZXIoY291bnRyeSA9PiB7XHJcbiAgLy8gICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVBvc3QoXHJcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvcG9zdHMvP2tleT0ke1xyXG4gICAgICBwcm9jZXNzLmVudi5rZXlcclxuICAgIH0mJHtzZWFyY2ggPyBcIlwiIDogXCJsaW1pdD04XCJ9JmluY2x1ZGU9dGFncyYke1xyXG4gICAgICB0YWcgPyBgZmlsdGVyPXRhZzoke3RhZ31gIDogXCJcIlxyXG4gICAgfSZwYWdlPSR7cGFnZX1gXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17XCJLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhXCJ9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgXCJCYWNhIGFydGlrZWwgeWFuZyBzdWRhaCBrYW1pIGJ1YXQgZGlzaW5pICwgamlrYSBpbmdpbiBtZWxpaGF0IG1hdGVyaSB5YW5nIHN1ZGFoIHRlcnN0cnVrdHVyIGtsaWsgZGlzaW5pXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Fub25pY2FsPXtcImh0dHBzOi8vd3d3Lm5leHRjb2RlLmlkL2FydGlrZWxcIn1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5uZXh0Y29kZS5pZC9hcnRpa2VsXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgXCJCYWNhIGFydGlrZWwgeWFuZyBzdWRhaCBrYW1pIGJ1YXQgZGlzaW5pICwgamlrYSBpbmdpbiBtZWxpaGF0IG1hdGVyaSB5YW5nIHN1ZGFoIHRlcnN0cnVrdHVyIGtsaWsgZGlzaW5pXCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybDogYGAsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICBhbHQ6IGBLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzaXRlX25hbWU6IFwiS3VtcHVsYW4gQXJ0aWtlbCBNYXRlcmkgUGVtYmVsYWphcmFuIE5leHRjb2RlIGluZG9uZXNpYVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgaGFuZGxlOiBcIkB0ZWdhclwiLFxyXG4gICAgICAgICAgc2l0ZTogXCJAbmV4dGNvZGVcIixcclxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpa2VsUGFnZX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIlxyXG4gICAgICAgICAgICAgID8gc3R5bGVzLmFydGlrZWxQYWdlX19oZXJvXHJcbiAgICAgICAgICAgICAgOiBzdHlsZXMuYXJ0aWtlbFBhZ2VfX2hlcm9EYXJrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQVJUSUtFTFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBCYWNhIGFydGlrZWwgeWFuZyBzdWRhaCBrYW1pIGJ1YXQgZGlzaW5pICwgamlrYSBpbmdpbiBtZWxpaGF0XHJcbiAgICAgICAgICAgICAgbWF0ZXJpIHlhbmcgc3VkYWggdGVyc3RydWt0dXJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90dXRvcmlhbC1zZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtYmxhay01MCBkYXJrOnRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAga2xpayBkaXNpbmlcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtdC0xMFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyXCI+QVJUSUtFTDwvaDE+XHJcbiAgICAgICAgICA8U2VhcmNoIG9uU2VhcmNoPXtvblNlYXJjaH0gLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBcIj5cclxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhdGVnb3J5U2xpZGVyfSBib3JkZXItc29saWQgYm9yZGVyLWJsdWUtNTAwIGJvcmRlci0yXHQgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MGB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWcoXCJcIil9PlNlbXVhIEthdGVnb3JpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHt0YWdEYXRhLnRhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXt0YWcuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhdGVnb3J5U2xpZGVyfSBib3JkZXItc29saWQgYm9yZGVyLWJsdWUtNTAwICBib3JkZXItMlx0IGJnLXdoaXRlIGRhcms6YmctYmxhY2stNTBgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFnKHRhZy5zbHVnKX0+e3RhZy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xMCBtdC0zIHhzOmdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy0zIFwiPlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nXHJcbiAgICAgICAgICAgICAgPyBcImxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgIDogZGF0YS5wb3N0XHJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IDxBcnRpa2VsQ2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9IC8+KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgXCJ3YWl0IC4uLlwiXHJcbiAgICAgICAgICApIDogZGF0YS5tZXRhLnBhZ2luYXRpb24ucGFnZXMgPCAxID8gKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXtkYXRhLm1ldGEucGFnaW5hdGlvbi5wYWdlc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9ibG9nLWJhY2tlbmQudGVnYXIubWUvZ2hvc3QvYXBpL3YzL2NvbnRlbnQvdGFncy8/a2V5PSR7cHJvY2Vzcy5lbnYua2V5fWBcclxuICApO1xyXG4gIGNvbnN0IHRhZ0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAoIXRhZ0RhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0YWdEYXRhLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgICAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpa2VsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9