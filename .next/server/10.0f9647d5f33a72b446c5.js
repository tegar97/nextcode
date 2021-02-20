exports.ids = [10];
exports.modules = {

/***/ "XfHq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navigation__checkbox": "navbar-modal_navigation__checkbox__26Ysz",
	"navigation__button": "navbar-modal_navigation__button__3YFeA",
	"navigation__background": "navbar-modal_navigation__background__1tv04",
	"navigation__nav": "navbar-modal_navigation__nav__3T-wz",
	"navigation__list": "navbar-modal_navigation__list__30BXx",
	"navigation__item": "navbar-modal_navigation__item__2NjY1",
	"navigation__link": "navbar-modal_navigation__link__3XvAw",
	"navigation__icon": "navbar-modal_navigation__icon__3K8rX"
};


/***/ }),

/***/ "dLCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__("lN3F");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./styles/components/navbar/navbar.module.scss
var navbar_module = __webpack_require__("qcTO");
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./styles/components/navbar/navbar-modal.module.scss
var navbar_modal_module = __webpack_require__("XfHq");
var navbar_modal_module_default = /*#__PURE__*/__webpack_require__.n(navbar_modal_module);

// CONCATENATED MODULE: ./component/navbar/NavbarModal.tsx





function NavbarModal() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: navbar_modal_module_default.a.navigation,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "checkbox",
      className: navbar_modal_module_default.a.navigation__checkbox,
      id: "navi-toggle"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "navi-toggle",
      className: navbar_modal_module_default.a.navigation__button,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: navbar_modal_module_default.a.navigation__icon,
        children: "\xA0"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: navbar_modal_module_default.a.navigation__background,
      children: "\xA0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: navbar_modal_module_default.a.navigation__nav,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: navbar_modal_module_default.a.navigation__list,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: navbar_modal_module_default.a.navigation__item,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "/artikel",
            className: navbar_modal_module_default.a.navigation__link,
            children: "Tutorial"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: navbar_modal_module_default.a.navigation__item,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "/kategori",
            className: navbar_modal_module_default.a.navigation__link,
            children: "Kategori"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var navbar_NavbarModal = (NavbarModal);
// CONCATENATED MODULE: ./component/navbar/navbar-mobile.tsx










function NavbarMobile() {
  const {
    theme,
    setTheme
  } = Object(external_next_themes_["useTheme"])();
  const {
    0: active,
    1: seteActive
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      seteActive(true);
    } else {
      seteActive(false);
    }
  };

  const homeRouter = router.pathname === '/';
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    className: `${navbar_module_default.a.navbarMobile}  bg-white dark:bg-gray-900 ${!homeRouter ? 'bg-white dark:bg-gray-900' : ''} `,
    style: {
      top: active && !homeRouter ? '-100px' : ''
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex items-center p-2 cursor-pointer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: theme === "light" ? '/logo-black.png' : '/logo-white.png',
          alt: "logo",
          width: 100,
          height: 30
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(navbar_NavbarModal, {})
    })]
  });
}

/* harmony default export */ var navbar_mobile = __webpack_exports__["default"] = (NavbarMobile);

/***/ })

};;