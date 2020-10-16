webpackHotUpdate_N_E("pages/index",{

/***/ "./components/gallery-tile.jsx":
/*!*************************************!*\
  !*** ./components/gallery-tile.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\gallery-tile.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var GalleryTile = function GalleryTile(_ref) {
  var filename = _ref.filename;
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    background: "light-1",
    height: "250px",
    elevation: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "images/".concat(filename, ".jpg"),
    fit: "cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

_c = GalleryTile;
/* harmony default export */ __webpack_exports__["default"] = (GalleryTile);

var _c;

$RefreshReg$(_c, "GalleryTile");

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

/***/ }),

/***/ "./components/my-gallery.jsx":
/*!***********************************!*\
  !*** ./components/my-gallery.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-tile */ "./components/gallery-tile.jsx");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\my-gallery.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyGallery = function MyGallery() {
  return __jsx(_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pad: "xlarge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    level: "1",
    margin: {
      bottom: 'medium',
      top: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Sobre N\xF3s"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "3",
    margin: {
      bottom: 'large',
      top: 'none'
    },
    textAlign: "",
    color: "light-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Rapid Transport \xE9 uma company maneira de confian\xE7a e tal.")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    gap: "medium",
    margin: {
      bottom: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
};

_c = MyGallery;
/* harmony default export */ __webpack_exports__["default"] = (MyGallery);

var _c;

$RefreshReg$(_c, "MyGallery");

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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_about_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about-us */ "./components/about-us.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main-content */ "./components/main-content.tsx");
/* harmony import */ var _components_my_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/my-footer */ "./components/my-footer.tsx");
/* harmony import */ var _components_my_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/my-gallery */ "./components/my-gallery.jsx");
/* harmony import */ var _components_my_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/my-navbar */ "./components/my-navbar.tsx");
/* harmony import */ var _components_our_job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/our-job */ "./components/our-job.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Index = function Index() {
  var blocksPad = 'xlarge';
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "light-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_my_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_components_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))), __jsx(_components_about_us__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYWxsZXJ5LXRpbGUuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL215LWdhbGxlcnkuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiR2FsbGVyeVRpbGUiLCJmaWxlbmFtZSIsIk15R2FsbGVyeSIsImJvdHRvbSIsInRvcCIsIkluZGV4IiwiYmxvY2tzUGFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3BDLFNBQ0UsTUFBQyw0Q0FBRDtBQUFNLGNBQVUsRUFBQyxTQUFqQjtBQUEyQixVQUFNLEVBQUMsT0FBbEM7QUFBMEMsYUFBUyxFQUFDLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU8sT0FBRyxtQkFBWUEsUUFBWixTQUFWO0FBQXNDLE9BQUcsRUFBQyxPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBTkQ7O0tBQU1ELFc7QUFRU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxPQUFHLEVBQUMsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFLLFNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsQ0FERjtBQStCRCxDQWpDRDs7S0FBTUQsSztBQW1DU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWYxNDk2NWEzZGRkNzc5MmJjMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ2FyZCwgSW1hZ2UgfSBmcm9tICdncm9tbWV0JztcclxuXHJcbmNvbnN0IEdhbGxlcnlUaWxlID0gKHsgZmlsZW5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBiYWNrZ3JvdW5kPVwibGlnaHQtMVwiIGhlaWdodD1cIjI1MHB4XCIgZWxldmF0aW9uPVwiMFwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtgaW1hZ2VzLyR7ZmlsZW5hbWV9LmpwZ2B9IGZpdD1cImNvdmVyXCIgLz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVRpbGU7XHJcbiIsImltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5VGlsZSBmcm9tICcuL2dhbGxlcnktdGlsZSc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcblxyXG5jb25zdCBNeUdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGVudD5cclxuICAgICAgPEJveCBwYWQ9XCJ4bGFyZ2VcIj5cclxuICAgICAgICA8Qm94IGFsaWduPVwiXCI+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0LTFcIlxyXG4gICAgICAgICAgICBsZXZlbD1cIjFcIlxyXG4gICAgICAgICAgICBtYXJnaW49e3sgYm90dG9tOiAnbWVkaXVtJywgdG9wOiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU29icmUgTsOzc1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgbGV2ZWw9XCIzXCJcclxuICAgICAgICAgICAgbWFyZ2luPXt7IGJvdHRvbTogJ2xhcmdlJywgdG9wOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiXCJcclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmFwaWQgVHJhbnNwb3J0IMOpIHVtYSBjb21wYW55IG1hbmVpcmEgZGUgY29uZmlhbsOnYSBlIHRhbC5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGdhcD1cIm1lZGl1bVwiIG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nIH19PlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTFcIiAvPlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTJcIiAvPlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTNcIiAvPlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTRcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHsvKiA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGZpbGwgZ2FwPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9NYWluQ29udGVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlHYWxsZXJ5O1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dC11cyc7XHJcbmltcG9ydCBDb250YWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3RzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL21haW4tY29udGVudCc7XHJcbmltcG9ydCBNeUZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL215LWZvb3Rlcic7XHJcbmltcG9ydCBNeUdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9teS1nYWxsZXJ5JztcclxuaW1wb3J0IE15TmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbXktbmF2YmFyJztcclxuaW1wb3J0IE91ckpvYiBmcm9tICcuLi9jb21wb25lbnRzL291ci1qb2InO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgYmxvY2tzUGFkID0gJ3hsYXJnZSc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD1cImxpZ2h0LTNcIj5cclxuICAgICAgPE15TmF2YmFyIC8+XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgICA8TWFpbkNvbnRlbnQ+XHJcbiAgICAgICAgICA8T3VySm9iIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICA8L01haW5Db250ZW50PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxBYm91dFVzIC8+XHJcblxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJibGFja1wiPlxyXG4gICAgICAgIDxNeUdhbGxlcnkgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7LyogPEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuICAgICAgICA8Q29udGFjdHMgLz5cclxuICAgICAgPC9Cb3g+ICovfVxyXG5cclxuICAgICAgey8qIDxCb3ggYmFja2dyb3VuZD1cIlwiIHBhZD17eyB2ZXJ0aWNhbDogYmxvY2tzUGFkIH19PlxyXG4gICAgICAgICAgPEZvbGxvd1VzIC8+XHJcbiAgICAgICAgPC9Cb3g+ICovfVxyXG5cclxuICAgICAgPE15Rm9vdGVyIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=