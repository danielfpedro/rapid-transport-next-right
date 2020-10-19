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
    margin: "none",
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
      textShadow: '0px 1px 1px rgba(0, 0, 0, 1)'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInNpemUiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJSZXNwb25zaXZlQ29udGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRDb2xvciIsInRleHRTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyx5REFBakIsQ0FBYjtBQUVBLFNBQ0MsTUFBQywyQ0FBRDtBQUNDLFNBQUssRUFBQyxRQURQO0FBRUMsU0FBSyxFQUFFO0FBQ05DLHFCQUFlLEVBQUUsd0JBRFg7QUFFTkMsd0JBQWtCLEVBQUUsZ0JBRmQ7QUFHTkMsc0JBQWdCLEVBQUUsV0FIWjtBQUlOQyxvQkFBYyxFQUFFLGFBSlY7QUFLTkMscUJBQWUsRUFBRTtBQUxYLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixhQUFTLEVBQUVSLElBQUksSUFBSSxPQUFSLEdBQWtCLEtBQWxCLEdBQTBCLFFBQXpEO0FBQW1FLE9BQUcsRUFBQyxRQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywrQ0FBRDtBQUNDLFNBQUssRUFBQyxTQURQO0FBRUMsVUFBTSxFQUFDLE1BRlI7QUFHQyxhQUFTLEVBQUVBLElBQUksSUFBSSxPQUFSLEdBQWtCLE9BQWxCLEdBQTRCLFFBSHhDO0FBSUMsU0FBSyxFQUFFO0FBQUVTLGdCQUFVLEVBQUU7QUFBZCxLQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREQsRUFVQyxNQUFDLCtDQUFEO0FBQ0MsU0FBSyxFQUFDLFNBRFA7QUFFQyxTQUFLLEVBQUMsR0FGUDtBQUdDLGFBQVMsRUFBRVQsSUFBSSxJQUFJLE9BQVIsR0FBa0IsT0FBbEIsR0FBNEIsUUFIeEM7QUFJQyxTQUFLLEVBQUU7QUFBRVMsZ0JBQVUsRUFBRTtBQUFkLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpR0FWRCxDQURELEVBcUJDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FyQkQsQ0FERCxDQVZELENBREQ7QUF3Q0EsQ0EzQ0Q7O0dBQU1WLE07O0tBQUFBLE07QUE2Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0MzBlOWI2YjQ4MGZiOTYyNjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcsIFJlc3BvbnNpdmVDb250ZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcbmltcG9ydCBNeU5hdmJhciBmcm9tICcuL215LW5hdmJhcic7XHJcbmltcG9ydCBRdW90ZUZvcm0gZnJvbSAnLi9xdW90ZS1mb3JtJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdGFsaWduPVwiY2VudGVyXCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hlYWRlci5wbmcpJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIsIGNlbnRlcicsXHJcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICcyNTYwcHggYXV0bycsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzAwMCdcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PE1haW5Db250ZW50PlxyXG5cdFx0XHRcdDxCb3ggYWxpZ249XCJjZW50ZXJcIiBkaXJlY3Rpb249e3NpemUgIT0gJ3NtYWxsJyA/ICdyb3cnIDogJ2NvbHVtbid9IGdhcD1cInhsYXJnZVwiPlxyXG5cdFx0XHRcdFx0PEJveCBmaWxsPlxyXG5cdFx0XHRcdFx0XHQ8SGVhZGluZ1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwibGlnaHQtMVwiXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWduPXtzaXplICE9ICdzbWFsbCcgPyAnc3RhcnQnIDogJ2NlbnRlcid9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dFNoYWRvdzogJzBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMSknIH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRFY29ub21pYSwgcmFwaWRleiBlIHNlZ3VyYW7Dp2EhXHJcblx0XHRcdFx0XHRcdDwvSGVhZGluZz5cclxuXHJcblx0XHRcdFx0XHRcdDxIZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJsaWdodC0xXCJcclxuXHRcdFx0XHRcdFx0XHRsZXZlbD1cIjNcIlxyXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbj17c2l6ZSAhPSAnc21hbGwnID8gJ3N0YXJ0JyA6ICdjZW50ZXInfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Q29tIGEgUmFwaWQgVHJhbnNwb3J0IFVTQSB2b2PDqiBwb2RlIGVudmlhciBzZXUgdmXDrWN1bG8gcGFyYSBxdWFscXVlciBsdWdhciBkb3MgRVVBLlxyXG5cdFx0XHRcdFx0XHQ8L0hlYWRpbmc+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IHdpZHRoPVwibGFyZ2VcIj5cclxuXHRcdFx0XHRcdFx0PFF1b3RlRm9ybSAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvTWFpbkNvbnRlbnQ+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9