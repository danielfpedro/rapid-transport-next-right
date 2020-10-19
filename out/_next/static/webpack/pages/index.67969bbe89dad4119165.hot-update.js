webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
/* harmony import */ var _quote_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-form */ "./components/quote-form.tsx");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\header.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Header = function Header() {
  _s();

  var size = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(grommet__WEBPACK_IMPORTED_MODULE_0__["ResponsiveContext"]);
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    style: {
      backgroundImage: 'url(images/header.png)',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2560px auto',
      backgroundColor: '#000'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    direction: size != 'small' ? 'row' : 'column',
    gap: "xlarge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    fill: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    margin: {
      bottom: 'none',
      top: 'none'
    },
    textAlign: size != 'small' ? 'start' : 'center',
    style: {
      textShadow: '0px 2px 1px rgba(0, 0, 0, 1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Economia, rapidez e seguran\xE7a!"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    level: "3",
    textAlign: size != 'small' ? 'start' : 'center',
    style: {
      textShadow: '0px 2px 1px rgba(0, 0, 0, 1)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Com a Rapid Transport USA voc\xEA pode enviar seu ve\xEDculo para qualquer lugar dos EUA.")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    width: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx(_quote_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  })))));
};

_s(Header, "/KBwov+JmSCTHSSC6VXWAf4OqjQ=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInNpemUiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJSZXNwb25zaXZlQ29udGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRDb2xvciIsImJvdHRvbSIsInRvcCIsInRleHRTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyx5REFBakIsQ0FBYjtBQUVBLFNBQ0MsTUFBQywyQ0FBRDtBQUNDLFNBQUssRUFBQyxRQURQO0FBRUMsU0FBSyxFQUFFO0FBQ05DLHFCQUFlLEVBQUUsd0JBRFg7QUFFTkMsd0JBQWtCLEVBQUUsZ0JBRmQ7QUFHTkMsc0JBQWdCLEVBQUUsV0FIWjtBQUlOQyxvQkFBYyxFQUFFLGFBSlY7QUFLTkMscUJBQWUsRUFBRTtBQUxYLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixhQUFTLEVBQUVSLElBQUksSUFBSSxPQUFSLEdBQWtCLEtBQWxCLEdBQTBCLFFBQXpEO0FBQW1FLE9BQUcsRUFBQyxRQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywrQ0FBRDtBQUNDLFNBQUssRUFBQyxTQURQO0FBRUMsVUFBTSxFQUFFO0FBQUVTLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxTQUFHLEVBQUU7QUFBdkIsS0FGVDtBQUdDLGFBQVMsRUFBRVYsSUFBSSxJQUFJLE9BQVIsR0FBa0IsT0FBbEIsR0FBNEIsUUFIeEM7QUFJQyxTQUFLLEVBQUU7QUFBRVcsZ0JBQVUsRUFBRTtBQUFkLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERCxFQVVDLE1BQUMsK0NBQUQ7QUFDQyxTQUFLLEVBQUMsU0FEUDtBQUVDLFNBQUssRUFBQyxHQUZQO0FBR0MsYUFBUyxFQUFFWCxJQUFJLElBQUksT0FBUixHQUFrQixPQUFsQixHQUE0QixRQUh4QztBQUlDLFNBQUssRUFBRTtBQUFFVyxnQkFBVSxFQUFFO0FBQWQsS0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQVZELENBREQsRUFxQkMsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQXJCRCxDQURELENBVkQsQ0FERDtBQXdDQSxDQTNDRDs7R0FBTVosTTs7S0FBQUEsTTtBQTZDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc5NjliYmU4OWRhZDQxMTkxNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgUmVzcG9uc2l2ZUNvbnRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuaW1wb3J0IE15TmF2YmFyIGZyb20gJy4vbXktbmF2YmFyJztcclxuaW1wb3J0IFF1b3RlRm9ybSBmcm9tICcuL3F1b3RlLWZvcm0nO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNpemUgPSBSZWFjdC51c2VDb250ZXh0KFJlc3BvbnNpdmVDb250ZXh0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0YWxpZ249XCJjZW50ZXJcIlxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaGVhZGVyLnBuZyknLFxyXG5cdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciwgY2VudGVyJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJzI1NjBweCBhdXRvJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ1xyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8TWFpbkNvbnRlbnQ+XHJcblx0XHRcdFx0PEJveCBhbGlnbj1cImNlbnRlclwiIGRpcmVjdGlvbj17c2l6ZSAhPSAnc21hbGwnID8gJ3JvdycgOiAnY29sdW1uJ30gZ2FwPVwieGxhcmdlXCI+XHJcblx0XHRcdFx0XHQ8Qm94IGZpbGw+XHJcblx0XHRcdFx0XHRcdDxIZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJsaWdodC0xXCJcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW49e3sgYm90dG9tOiAnbm9uZScsIHRvcDogJ25vbmUnIH19XHJcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWduPXtzaXplICE9ICdzbWFsbCcgPyAnc3RhcnQnIDogJ2NlbnRlcid9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dFNoYWRvdzogJzBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMSknIH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRFY29ub21pYSwgcmFwaWRleiBlIHNlZ3VyYW7Dp2EhXHJcblx0XHRcdFx0XHRcdDwvSGVhZGluZz5cclxuXHJcblx0XHRcdFx0XHRcdDxIZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJsaWdodC0xXCJcclxuXHRcdFx0XHRcdFx0XHRsZXZlbD1cIjNcIlxyXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbj17c2l6ZSAhPSAnc21hbGwnID8gJ3N0YXJ0JyA6ICdjZW50ZXInfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Q29tIGEgUmFwaWQgVHJhbnNwb3J0IFVTQSB2b2PDqiBwb2RlIGVudmlhciBzZXUgdmXDrWN1bG8gcGFyYSBxdWFscXVlciBsdWdhciBkb3MgRVVBLlxyXG5cdFx0XHRcdFx0XHQ8L0hlYWRpbmc+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IHdpZHRoPVwibGFyZ2VcIj5cclxuXHRcdFx0XHRcdFx0PFF1b3RlRm9ybSAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvTWFpbkNvbnRlbnQ+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9