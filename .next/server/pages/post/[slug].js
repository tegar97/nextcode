module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/components/post/post.module.scss */ "./styles/components/post/post.module.scss");
/* harmony import */ var _styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_post_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\asus\\Documents\\belajar\\nextcode\\pages\\post\\[slug].tsx";







function Post({
  post
}) {
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

async function getStaticPaths() {
  const res = await fetch('https://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=8bc89b54fa72341924f8558631');
  const posts = await res.json(); // Get the paths we want to pre-render based on posts

  const paths = posts.posts.map(post => ({
    params: {
      slug: post.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const res = await fetch(`https://blog-backend.tegar.me/ghost/api/v3/content/posts/slug/${params.slug}/?key=8bc89b54fa72341924f8558631`);
  const post = await res.json();
  return {
    props: {
      post
    },
    revalidate: 10
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./styles/components/post/post.module.scss":
/*!*************************************************!*\
  !*** ./styles/components/post/post.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post": "post_post__1qIzo",
	"postImage": "post_postImage__1tp8w",
	"postContent": "post_postContent__2ISxZ",
	"postText": "post_postText__3xTRt"
};


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-themes");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animate-on-scroll":
/*!******************************************!*\
  !*** external "react-animate-on-scroll" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9jb21wb25lbnRzL3Bvc3QvcG9zdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdGhlbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsInVzZUVmZmVjdCIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwicG9zdHMiLCJtZXRhX3RpdGxlIiwibWV0YV9kZXNjcmlwdGlvbiIsInVybCIsInRpdGxlIiwib2dfdGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9nX2Rlc2NyaXB0aW9uIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiLCJzdHlsZXMiLCJwb3N0SW1hZ2UiLCJvYmplY3RGaXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImh0bWwiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwianNvbiIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwic2x1ZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LFFBQU1wQyxJQUFJLEdBQUcsTUFBTThCLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUlBLFNBQU87QUFDSE8sU0FBSyxFQUFDO0FBQ0Z2QztBQURFLEtBREg7QUFJSHdDLGNBQVUsRUFBRTtBQUpULEdBQVA7QUFPSDtBQUNjekMsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Bvc3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9wb3N0L3Bvc3QubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcclxuaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5cclxuZnVuY3Rpb24gUG9zdCh7cG9zdH0pIHtcclxuICAgIGNvbnN0IHt0aGVtZSxzZXRUaGVtZX0gPSB1c2VUaGVtZSgpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgIDxOZXh0U2VvIFxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC5wb3N0c1swXS5tZXRhX3RpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5wb3N0c1swXS5tZXRhX2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBjYW5vbmljYWw9e3Bvc3QucG9zdHNbMF0udXJsfVxyXG4gICAgICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubmV4dGNvZGUuaWQvJyxcclxuICAgICAgICAgICAgdGl0bGU6IGAke3Bvc3QucG9zdHNbMF0ub2dfdGl0bGV9YCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke3Bvc3QucG9zdHNbMF0ub2dfZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke3Bvc3QucG9zdHNbMF0udXJsfWAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IGAke3Bvc3QucG9zdHNbMF0ub2dfdGl0bGV9YCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNpdGVfbmFtZTogYG5leHRjb2RlIGluZG9uZXNpYWBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHdpdHRlcj17e1xyXG4gICAgICAgICAgICBoYW5kbGU6ICdAdGVnYXInLFxyXG4gICAgICAgICAgICBzaXRlOiAnQG5leHRjb2RlJyxcclxuICAgICAgICAgICAgY2FyZFR5cGU6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdEltYWdlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXJ0aWtlbC5qcGdcIiBhbHQ9XCJpbWFnZVwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJyxoZWlnaHQ6ICcxMDAlJyxvYmplY3RGaXQ6ICdjb3Zlcid9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZGFyazpjb2xvci1ncmV5LTYwMCBcIj57cG9zdC5wb3N0c1swXS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnkgVGVnYXIgQWttYWwgb24gTm92ZW1iZXIgMzAsIDIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpwb3N0LnBvc3RzWzBdLmh0bWwgfX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Jsb2ctYmFja2VuZC50ZWdhci5tZS9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PThiYzg5YjU0ZmE3MjM0MTkyNGY4NTU4NjMxJylcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcclxuICAgIGNvbnN0IHBhdGhzID0gcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcgfSxcclxuICAgIH0pKVxyXG5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYmxvZy1iYWNrZW5kLnRlZ2FyLm1lL2dob3N0L2FwaS92My9jb250ZW50L3Bvc3RzL3NsdWcvJHtwYXJhbXMuc2x1Z30vP2tleT04YmM4OWI1NGZhNzIzNDE5MjRmODU1ODYzMWApXHJcblxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHBvc3RcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzFxSXpvXCIsXG5cdFwicG9zdEltYWdlXCI6IFwicG9zdF9wb3N0SW1hZ2VfXzF0cDh3XCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X18ySVN4WlwiLFxuXHRcInBvc3RUZXh0XCI6IFwicG9zdF9wb3N0VGV4dF9fM3hUUnRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdGhlbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=