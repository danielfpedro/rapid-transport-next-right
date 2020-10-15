webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.tsx");
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
    background: "brand",
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
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx(_components_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pad: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "",
    pad: {
      vertical: blocksPad
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "light-1",
    pad: {
      vertical: blocksPad
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiYmxvY2tzUGFkIiwidmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFNQyxTQUFTLEdBQUcsUUFBbEI7QUFDQSxTQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQU1FLE1BQUMsZ0VBQUQ7QUFBYSxPQUFHLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBUyxtQkFBZSxFQUFDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBVUUsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxFQUFoQjtBQUFtQixPQUFHLEVBQUU7QUFBRUMsY0FBUSxFQUFFRDtBQUFaLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLEVBY0UsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxTQUFoQjtBQUEwQixPQUFHLEVBQUU7QUFBRUMsY0FBUSxFQUFFRDtBQUFaLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWRGLEVBc0JFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGO0FBMEJELENBNUJEOztLQUFNRCxLO0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZDNlYjQwOGM4MzQyNzMyMjYwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3RzJztcclxuaW1wb3J0IEZvbGxvd1VzIGZyb20gJy4uL2NvbXBvbmVudHMvZm9sbG93LXVzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL21haW4tY29udGVudCc7XHJcbmltcG9ydCBNeUZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL215LWZvb3Rlcic7XHJcbmltcG9ydCBNeUdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9teS1nYWxsZXJ5JztcclxuaW1wb3J0IE15TmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbXktbmF2YmFyJztcclxuaW1wb3J0IE91ckpvYiBmcm9tICcuLi9jb21wb25lbnRzL291ci1qb2InO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgYmxvY2tzUGFkID0gJ3hsYXJnZSc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmFja2dyb3VuZD1cImJyYW5kXCI+XHJcbiAgICAgIDxNeU5hdmJhciAvPlxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPE1haW5Db250ZW50IHBhZD1cImxhcmdlXCIgPlxyXG4gICAgICAgIDxPdXJKb2IgIGJhY2tncm91bmRDb2xvcj0ncmVkJyAvPlxyXG4gICAgICA8L01haW5Db250ZW50PlxyXG5cclxuICAgICAgPEJveCBiYWNrZ3JvdW5kPVwiXCIgcGFkPXt7IHZlcnRpY2FsOiBibG9ja3NQYWQgfX0+XHJcbiAgICAgICAgPE15R2FsbGVyeSAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggYmFja2dyb3VuZD1cImxpZ2h0LTFcIiBwYWQ9e3sgdmVydGljYWw6IGJsb2Nrc1BhZCB9fT5cclxuICAgICAgICA8Q29udGFjdHMgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7LyogPEJveCBiYWNrZ3JvdW5kPVwiXCIgcGFkPXt7IHZlcnRpY2FsOiBibG9ja3NQYWQgfX0+XHJcbiAgICAgICAgICA8Rm9sbG93VXMgLz5cclxuICAgICAgICA8L0JveD4gKi99XHJcblxyXG4gICAgICA8TXlGb290ZXIgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==