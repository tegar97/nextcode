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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    data,
    isError,
    isLoading
  } = usePost(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&${search ? '' : 'limit=8'}&include=tags&${tag ? `filter=tag:${tag}` : ''}&page=${page}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_11__["NextSeo"], {
      title: 'Kumpulan Artikel Materi Pembelajaran Nextcode indonesia',
      description: 'Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini',
      canonical: 'https://www.nextcode.id/artikel',
      openGraph: {
        url: 'https://www.nextcode.id/artikel',
        title: 'Kumpulan Artikel Materi Pembelajaran Nextcode indonesia',
        description: 'Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini',
        images: [{
          url: ``,
          width: 800,
          height: 600,
          alt: `Kumpulan Artikel Materi Pembelajaran Nextcode indonesia`
        }],
        site_name: 'Kumpulan Artikel Materi Pembelajaran Nextcode indonesia'
      },
      twitter: {
        handle: '@tegar',
        site: '@nextcode',
        cardType: 'summary_large_image'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: theme === 'light' ? _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__hero : _styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.artikelPage__heroDark,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-4xl font-bold text-center text-white",
            children: "ARTIKEL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "mt-3 text-lg font-medium text-center text-white",
            children: ["Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/tutorial-series",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "cursor-pointer text-blak-50 dark:text-blue-500",
                children: "klik disini"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 207
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 177
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-5 mt-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl text-center",
          children: "ARTIKEL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 18
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_search_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-5 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, _objectSpread(_objectSpread({}, settings), {}, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-blue-500 border-2	 bg-white dark:bg-black-50`,
              style: {
                borderRadius: '10px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => setTag(''),
                children: "Semua Kategori"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 19
            }, this), tagData.tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `${_styles_components_artikel_artikel_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categorySlider} border-solid border-blue-500  border-2	 bg-white dark:bg-black-50`,
              style: {
                borderRadius: '10px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => setTag(tag.slug),
                children: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 27
              }, this)
            }, tag.id, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 25
            }, this))]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ",
          children: isLoading ? 'loading' : data.posts.filter(post => {
            if (search == "") {
              return post;
            } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
              return post;
            }
          }).map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_artikel_card_Artikel_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
            post: post
          }, post.id, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 18
        }, this), isLoading ? 'wait ...' : data.meta.pagination.pages < 1 ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-5 text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
            page: page,
            setPage: setPage,
            totalPages: data.meta.pagination.pages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s2(Artikel, "qChZDBF4RCGG71piX0KCmxbus2U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWtlbC50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ1c2VQb3N0IiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkFydGlrZWwiLCJ0YWdEYXRhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJhZGFwdGl2ZUhlaWdodCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwidGFnIiwic2V0VGFnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic2l0ZV9uYW1lIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIiwic3R5bGVzIiwiYXJ0aWtlbFBhZ2UiLCJhcnRpa2VsUGFnZV9faGVybyIsImFydGlrZWxQYWdlX19oZXJvRGFyayIsImNhdGVnb3J5U2xpZGVyIiwiYm9yZGVyUmFkaXVzIiwidGFncyIsIm1hcCIsInNsdWciLCJuYW1lIiwiaWQiLCJwb3N0cyIsImZpbHRlciIsInBvc3QiLCJpbmNsdWRlcyIsIm1ldGEiLCJwYWdpbmF0aW9uIiwicGFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7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UDtBQUNEO0FBQ0YsV0FOdUIsRUFNckJOLEdBTnFCLENBTWhCTSxJQUFELGlCQUNMLHFFQUFDLDRFQUFEO0FBQWEsZ0JBQUksRUFBRUE7QUFBbkIsYUFBOEJBLElBQUksQ0FBQ0gsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQc0I7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkwsRUF3Q01qRCxTQUFTLEdBQUcsVUFBSCxHQUFnQkgsSUFBSSxDQUFDeUQsSUFBTCxDQUFVQyxVQUFWLENBQXFCQyxLQUFyQixHQUE2QixDQUE3QixHQUFpQyxFQUFqQyxnQkFDekI7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0UscUVBQUMseUVBQUQ7QUFBWSxnQkFBSSxFQUFFakQsSUFBbEI7QUFBd0IsbUJBQU8sRUFBRUMsT0FBakM7QUFBMEMsc0JBQVUsRUFBRVgsSUFBSSxDQUFDeUQsSUFBTCxDQUFVQyxVQUFWLENBQXFCQztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUEsa0JBREY7QUFxRkg7O0lBM0lRdEQsTztVQWlEdUJ3QixvRCxFQUlPOUIsTzs7O0tBckQ5Qk0sTzs7QUE4Sk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGlrZWwuYjk3NmRhOWM4M2MyMTg3NGI3NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXJ0aWtlbC9hcnRpa2VsLXBhZ2UubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQXJ0aWtlbENhcmQgZnJvbSAnLi4vY29tcG9uZW50L2FydGlrZWwtY2FyZC9BcnRpa2VsLWNhcmQnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgfSxcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgfVxyXG4gIGZ1bmN0aW9uIHVzZVBvc3QgKHVybCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCxmZXRjaGVyKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yXHJcbiAgICB9XHJcbiAgfVxyXG5mdW5jdGlvbiBBcnRpa2VsKHt0YWdEYXRhfSkge1xyXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgXHJcbiAgIGNvbnN0IG9uU2VhcmNoID0gZSA9PiB7XHJcbiAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpICk7XHJcbiAgIH07XHJcbiAgLy8gIGNvbnN0IGZpbHRlcmVkQ291bnRyaWVzID0gY291bnRyaWVzTGlzdC5maWx0ZXIoY291bnRyeSA9PiB7XHJcbiAgLy8gICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIC8vIH0pO1xyXG5cclxuICAgY29uc3Qgc2V0dGluZ3MgID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgXHJcblxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IFt0YWcsc2V0VGFnXSAgPSB1c2VTdGF0ZSgnJylcclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgaXNFcnJvcixpc0xvYWRpbmd9ID0gdXNlUG9zdChgaHR0cDovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PWFkZjZkMmRmMDI1MzYxOTdhY2JhNGY0ZWYyJiR7c2VhcmNoID8gJycgOiAnbGltaXQ9OCd9JmluY2x1ZGU9dGFncyYke3RhZyA/IGBmaWx0ZXI9dGFnOiR7dGFnfWAgOiAnJ30mcGFnZT0ke3BhZ2V9YClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICA8TmV4dFNlbyBcclxuICAgICAgICAgICAgdGl0bGU9eydLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhJ31cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249eydCYWNhIGFydGlrZWwgeWFuZyBzdWRhaCBrYW1pIGJ1YXQgZGlzaW5pICwgamlrYSBpbmdpbiBtZWxpaGF0IG1hdGVyaSB5YW5nIHN1ZGFoIHRlcnN0cnVrdHVyIGtsaWsgZGlzaW5pJ31cclxuICAgICAgICAgICAgY2Fub25pY2FsPXsnaHR0cHM6Ly93d3cubmV4dGNvZGUuaWQvYXJ0aWtlbCd9XHJcbiAgICAgICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5uZXh0Y29kZS5pZC9hcnRpa2VsJyxcclxuICAgICAgICAgICAgdGl0bGU6J0t1bXB1bGFuIEFydGlrZWwgTWF0ZXJpIFBlbWJlbGFqYXJhbiBOZXh0Y29kZSBpbmRvbmVzaWEnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JhY2EgYXJ0aWtlbCB5YW5nIHN1ZGFoIGthbWkgYnVhdCBkaXNpbmkgLCBqaWthIGluZ2luIG1lbGloYXQgbWF0ZXJpIHlhbmcgc3VkYWggdGVyc3RydWt0dXIga2xpayBkaXNpbmknLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogYGAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IGBLdW1wdWxhbiBBcnRpa2VsIE1hdGVyaSBQZW1iZWxhamFyYW4gTmV4dGNvZGUgaW5kb25lc2lhYCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNpdGVfbmFtZTogJ0t1bXB1bGFuIEFydGlrZWwgTWF0ZXJpIFBlbWJlbGFqYXJhbiBOZXh0Y29kZSBpbmRvbmVzaWEnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHR3aXR0ZXI9e3tcclxuICAgICAgICAgICAgaGFuZGxlOiAnQHRlZ2FyJyxcclxuICAgICAgICAgICAgc2l0ZTogJ0BuZXh0Y29kZScsXHJcbiAgICAgICAgICAgIGNhcmRUeXBlOiAnc3VtbWFyeV9sYXJnZV9pbWFnZScsXHJcbiAgICAgICAgfX0vPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGlrZWxQYWdlfT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09ICdsaWdodCcgPyBzdHlsZXMuYXJ0aWtlbFBhZ2VfX2hlcm8gOiBzdHlsZXMuYXJ0aWtlbFBhZ2VfX2hlcm9EYXJrfSAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5BUlRJS0VMPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5CYWNhIGFydGlrZWwgeWFuZyBzdWRhaCBrYW1pIGJ1YXQgZGlzaW5pICwgamlrYSBpbmdpbiBtZWxpaGF0IG1hdGVyaSB5YW5nIHN1ZGFoIHRlcnN0cnVrdHVyIDxMaW5rIGhyZWY9XCIvdHV0b3JpYWwtc2VyaWVzXCI+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFrLTUwIGRhcms6dGV4dC1ibHVlLTUwMFwiPmtsaWsgZGlzaW5pPC9zcGFuPjwvTGluaz48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlclwiPkFSVElLRUw8L2gxPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBvblNlYXJjaD17b25TZWFyY2h9Lz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIgIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnlTbGlkZXJ9IGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZS01MDAgYm9yZGVyLTJcdCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrLTUwYH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6ICcxMHB4Jyx9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhZygnJyl9ID5TZW11YSBLYXRlZ29yaTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnRGF0YS50YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFnLmlkfSAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnlTbGlkZXJ9IGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZS01MDAgIGJvcmRlci0yXHQgYmctd2hpdGUgZGFyazpiZy1ibGFjay01MGB9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMTBweCcsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWcodGFnLnNsdWcpfSA+e3RhZyAgLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEwIG10LTMgeHM6Z3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTMgXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/ICdsb2FkaW5nJyA6IGRhdGEucG9zdHMuZmlsdGVyKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWFyY2ggPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBvc3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGlrZWxDYXJkIHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyAnd2FpdCAuLi4nIDogZGF0YS5tZXRhLnBhZ2luYXRpb24ucGFnZXMgPCAxID8gJycgOiAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlfSBzZXRQYWdlPXtzZXRQYWdlfSB0b3RhbFBhZ2VzPXtkYXRhLm1ldGEucGFnaW5hdGlvbi5wYWdlc30vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3RhZ3MvP2tleT1hZGY2ZDJkZjAyNTM2MTk3YWNiYTRmNGVmMmApXHJcbiAgY29uc3QgdGFnRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgaWYgKCF0YWdEYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB0YWdEYXRhXHJcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGlrZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==