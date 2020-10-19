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
    fill: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    direction: size != 'small' ? 'row' : 'column',
    gap: "xlarge",
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
    margin: {
      vertical: 'medium'
    },
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
    width: "700px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, __jsx(_quote_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInNpemUiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJSZXNwb25zaXZlQ29udGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRDb2xvciIsInRleHRTaGFkb3ciLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxJQUFJLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLHlEQUFqQixDQUFiO0FBRUEsU0FDQyxNQUFDLDJDQUFEO0FBQ0MsU0FBSyxFQUFDLFFBRFA7QUFFQyxTQUFLLEVBQUU7QUFDTkMscUJBQWUsRUFBRSx3QkFEWDtBQUVOQyx3QkFBa0IsRUFBRSxnQkFGZDtBQUdOQyxzQkFBZ0IsRUFBRSxXQUhaO0FBSU5DLG9CQUFjLEVBQUUsYUFKVjtBQUtOQyxxQkFBZSxFQUFFO0FBTFgsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUMsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLGFBQVMsRUFBRVIsSUFBSSxJQUFJLE9BQVIsR0FBa0IsS0FBbEIsR0FBMEIsUUFBekQ7QUFBbUUsT0FBRyxFQUFDLFFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLCtDQUFEO0FBQ0MsU0FBSyxFQUFDLFNBRFA7QUFFQyxVQUFNLEVBQUMsTUFGUjtBQUdDLGFBQVMsRUFBRUEsSUFBSSxJQUFJLE9BQVIsR0FBa0IsT0FBbEIsR0FBNEIsUUFIeEM7QUFJQyxTQUFLLEVBQUU7QUFBRVMsZ0JBQVUsRUFBRTtBQUFkLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERCxFQVVDLE1BQUMsK0NBQUQ7QUFDQyxTQUFLLEVBQUMsU0FEUDtBQUVDLFNBQUssRUFBQyxHQUZQO0FBR0MsVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBSFQ7QUFJQyxhQUFTLEVBQUVWLElBQUksSUFBSSxPQUFSLEdBQWtCLE9BQWxCLEdBQTRCLFFBSnhDO0FBS0MsU0FBSyxFQUFFO0FBQUVTLGdCQUFVLEVBQUU7QUFBZCxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUdBVkQsQ0FERCxFQXNCQyxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBdEJELENBREQsQ0FWRCxDQUREO0FBeUNBLENBNUNEOztHQUFNVixNOztLQUFBQSxNO0FBOENTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OTQ2ZmRlYzA4OWNjYzU2YWY4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBSZXNwb25zaXZlQ29udGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgTXlOYXZiYXIgZnJvbSAnLi9teS1uYXZiYXInO1xyXG5pbXBvcnQgUXVvdGVGb3JtIGZyb20gJy4vcXVvdGUtZm9ybSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoUmVzcG9uc2l2ZUNvbnRleHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHRhbGlnbj1cImNlbnRlclwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9oZWFkZXIucG5nKScsXHJcblx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyLCBjZW50ZXInLFxyXG5cdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG5cdFx0XHRcdGJhY2tncm91bmRTaXplOiAnMjU2MHB4IGF1dG8nLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMwMDAnXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxNYWluQ29udGVudD5cclxuXHRcdFx0XHQ8Qm94IGZpbGw+XHJcblx0XHRcdFx0XHQ8Qm94IGFsaWduPVwiY2VudGVyXCIgZGlyZWN0aW9uPXtzaXplICE9ICdzbWFsbCcgPyAncm93JyA6ICdjb2x1bW4nfSBnYXA9XCJ4bGFyZ2VcIj5cclxuXHRcdFx0XHRcdFx0PEhlYWRpbmdcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cImxpZ2h0LTFcIlxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbj1cIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbj17c2l6ZSAhPSAnc21hbGwnID8gJ3N0YXJ0JyA6ICdjZW50ZXInfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDEpJyB9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0RWNvbm9taWEsIHJhcGlkZXogZSBzZWd1cmFuw6dhIVxyXG5cdFx0XHRcdFx0XHQ8L0hlYWRpbmc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8SGVhZGluZ1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwibGlnaHQtMVwiXHJcblx0XHRcdFx0XHRcdFx0bGV2ZWw9XCIzXCJcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW49e3sgdmVydGljYWw6ICdtZWRpdW0nIH19XHJcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWduPXtzaXplICE9ICdzbWFsbCcgPyAnc3RhcnQnIDogJ2NlbnRlcid9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dFNoYWRvdzogJzBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMSknIH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRDb20gYSBSYXBpZCBUcmFuc3BvcnQgVVNBIHZvY8OqIHBvZGUgZW52aWFyIHNldSB2ZcOtY3VsbyBwYXJhIHF1YWxxdWVyIGx1Z2FyIGRvcyBFVUEuXHJcblx0XHRcdFx0XHRcdDwvSGVhZGluZz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggd2lkdGg9XCI3MDBweFwiPlxyXG5cdFx0XHRcdFx0XHQ8UXVvdGVGb3JtIC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9NYWluQ29udGVudD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=