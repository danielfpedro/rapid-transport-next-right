webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contacts.tsx":
/*!*********************************!*\
  !*** ./components/contacts.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-contact */ "./components/card-contact.tsx");
/* harmony import */ var _social_networks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-networks */ "./components/social-networks.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\contacts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Contacts = function Contacts() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "1",
    margin: {
      bottom: 'medium',
      top: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Contact Us")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    margin: "none",
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    fill: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_card_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["MailOption"], {
      color: "brand",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 19
      }
    }),
    direction: "row",
    title: "Email",
    content: "example@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    fill: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_card_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Phone"], {
      color: "brand",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }),
    title: "Phone",
    content: "(88) 9844-6655",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    margin: {
      top: 'large'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_social_networks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })));
};

_c = Contacts;
/* harmony default export */ __webpack_exports__["default"] = (Contacts);

var _c;

$RefreshReg$(_c, "Contacts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0cy50c3giXSwibmFtZXMiOlsiQ29udGFjdHMiLCJib3R0b20iLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsRUFBaEI7QUFBbUIsU0FBSyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQVMsU0FBSyxFQUFDLEdBQWY7QUFBbUIsVUFBTSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxRQUFWO0FBQW9CQyxTQUFHLEVBQUU7QUFBekIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBTUUsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFVBQU0sRUFBQyxNQUE1QjtBQUFtQyxPQUFHLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUUsTUFBQyx3REFBRDtBQUFZLFdBQUssRUFBQyxPQUFsQjtBQUEwQixVQUFJLEVBQUMsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFdBQU8sRUFBQyxtQkFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNFLE1BQUMsMkNBQUQ7QUFBSyxRQUFJLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUUsTUFBQyxtREFBRDtBQUFPLFdBQUssRUFBQyxPQUFiO0FBQXFCLFVBQUksRUFBQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFI7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFdBQU8sRUFBQyxnQkFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixDQU5GLEVBdUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUU7QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdkNGLENBREY7QUE2Q0QsQ0E5Q0Q7O0tBQU1GLFE7QUFnRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlODI2YjA3NmYzYjZmMTJjNTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHtcclxuICBGYWNlYm9vayxcclxuICBGYWNlYm9va09wdGlvbixcclxuICBJbnN0YWdyYW0sXHJcbiAgTWFpbE9wdGlvbixcclxuICBQaG9uZSxcclxufSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRDb250YWN0IGZyb20gJy4vY2FyZC1jb250YWN0JztcclxuaW1wb3J0IFNvY2lhbE5ldHdvcmtzIGZyb20gJy4vc29jaWFsLW5ldHdvcmtzJztcclxuXHJcbmNvbnN0IENvbnRhY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94IGJhY2tncm91bmQ9XCJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGxldmVsPVwiMVwiIG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nLCB0b3A6ICdub25lJyB9fT5cclxuICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIG1hcmdpbj1cIm5vbmVcIiBnYXA9XCJtZWRpdW1cIj5cclxuICAgICAgICA8Qm94IGZpbGw+XHJcbiAgICAgICAgICA8Q2FyZENvbnRhY3RcclxuICAgICAgICAgICAgaWNvbj17PE1haWxPcHRpb24gY29sb3I9XCJicmFuZFwiIHNpemU9XCJsYXJnZVwiIC8+fVxyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkVtYWlsXCJcclxuICAgICAgICAgICAgY29udGVudD1cImV4YW1wbGVAZ21haWwuY29tXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBmaWxsPlxyXG4gICAgICAgICAgPENhcmRDb250YWN0XHJcbiAgICAgICAgICAgIGljb249ezxQaG9uZSBjb2xvcj1cImJyYW5kXCIgc2l6ZT1cImxhcmdlXCIgLz59XHJcbiAgICAgICAgICAgIHRpdGxlPVwiUGhvbmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiKDg4KSA5ODQ0LTY2NTVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICB7LyogPEJveCBkaXJlY3Rpb249XCJyb3dcIiBtYXJnaW49XCJub25lXCIgZ2FwPVwibWVkaXVtXCI+XHJcbiAgICAgICAgPEJveCBmaWxsPlxyXG4gICAgICAgICAgPENhcmRDb250YWN0XHJcbiAgICAgICAgICAgIGljb249ezxGYWNlYm9vayBjb2xvcj1cImJyYW5kXCIgc2l6ZT1cImxhcmdlXCIgLz59XHJcbiAgICAgICAgICAgIHRpdGxlPVwiSW5zdGFncmFtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBmaWxsPlxyXG4gICAgICAgICAgPENhcmRDb250YWN0XHJcbiAgICAgICAgICAgIGljb249ezxJbnN0YWdyYW0gY29sb3I9XCJicmFuZFwiIHNpemU9XCJsYXJnZVwiIC8+fVxyXG4gICAgICAgICAgICB0aXRsZT1cIkZhY2Vib29rXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PiAqL31cclxuXHJcbiAgICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIiBtYXJnaW49e3sgdG9wOiAnbGFyZ2UnIH19PlxyXG4gICAgICAgIDxTb2NpYWxOZXR3b3JrcyAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==