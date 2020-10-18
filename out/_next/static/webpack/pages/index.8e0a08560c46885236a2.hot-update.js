webpackHotUpdate_N_E("pages/index",{

/***/ "./components/our-job.tsx":
/*!********************************!*\
  !*** ./components/our-job.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _service_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-card */ "./components/service-card.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\our-job.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OurJob = function OurJob(_ref) {
  var backgroundColor = _ref.backgroundColor;
  var iconColor = 'dark-2';
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    align: "center",
    margin: {
      vertical: 'large'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    level: "2",
    textAlign: "center",
    margin: {
      bottom: 'xlarge'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Como funciona?"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    gap: "large",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "01",
    text: "Voc\xEA solicita sua cota\xE7\xE3o online ou por telefone inserindo dados como a origem e o destino do seu ve\xEDculo.",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Contact"], {
      color: iconColor,
      size: "xlarge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "02",
    text: "No dia programado para a viagem, seu autom\xF3vel ser\xE1 coletado e estar\xE1 totalmente seguro do in\xEDcio ao fim da viagem.",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
      color: iconColor,
      size: "xlarge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "03",
    text: "Ao fim do transporte, seu ve\xEDculo \xE9 entregue exatamente da mesma forma em que foi coletado.",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Deliver"], {
      color: iconColor,
      size: "xlarge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

_c = OurJob;
/* harmony default export */ __webpack_exports__["default"] = (OurJob);

var _c;

$RefreshReg$(_c, "OurJob");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItam9iLnRzeCJdLCJuYW1lcyI6WyJPdXJKb2IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uQ29sb3IiLCJ2ZXJ0aWNhbCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUN0QyxNQUFNQyxTQUFTLEdBQUcsUUFBbEI7QUFFQSxTQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBUyxTQUFLLEVBQUMsR0FBZjtBQUFtQixhQUFTLEVBQUMsUUFBN0I7QUFBc0MsVUFBTSxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFLRSxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsUUFBSSxFQUFDLHdIQUZQO0FBR0UsUUFBSSxFQUFFLE1BQUMscURBQUQ7QUFBUyxXQUFLLEVBQUVGLFNBQWhCO0FBQTJCLFVBQUksRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsUUFBSSxFQUFDLGlJQUZQO0FBR0UsUUFBSSxFQUFFLE1BQUMsc0RBQUQ7QUFBVSxXQUFLLEVBQUVBLFNBQWpCO0FBQTRCLFVBQUksRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0UsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsUUFBSSxFQUFDLG1HQUZQO0FBR0UsUUFBSSxFQUFFLE1BQUMscURBQUQ7QUFBUyxXQUFLLEVBQUVBLFNBQWhCO0FBQTJCLFVBQUksRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBTEYsQ0FERjtBQXlCRCxDQTVCRDs7S0FBTUYsTTtBQThCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGUwYTA4NTYwYzQ2ODg1MjM2YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBDb250YWN0LCBDYWxlbmRhciwgRGVsaXZlciB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSAnLi9zZXJ2aWNlLWNhcmQnO1xyXG5cclxuY29uc3QgT3VySm9iID0gKHsgYmFja2dyb3VuZENvbG9yIH0pID0+IHtcclxuICBjb25zdCBpY29uQ29sb3IgPSAnZGFyay0yJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYWxpZ249XCJjZW50ZXJcIiBtYXJnaW49e3sgdmVydGljYWw6ICdsYXJnZScgfX0+XHJcbiAgICAgIDxIZWFkaW5nIGxldmVsPVwiMlwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1hcmdpbj17eyBib3R0b206ICd4bGFyZ2UnIH19PlxyXG4gICAgICAgIENvbW8gZnVuY2lvbmE/XHJcbiAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwibGFyZ2VcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxTZXJ2aWNlQ2FyZFxyXG4gICAgICAgICAgZmlsZW5hbWU9XCIwMVwiXHJcbiAgICAgICAgICB0ZXh0PVwiVm9jw6ogc29saWNpdGEgc3VhIGNvdGHDp8OjbyBvbmxpbmUgb3UgcG9yIHRlbGVmb25lIGluc2VyaW5kbyBkYWRvcyBjb21vIGEgb3JpZ2VtIGUgbyBkZXN0aW5vIGRvIHNldSB2ZcOtY3Vsby5cIlxyXG4gICAgICAgICAgaWNvbj17PENvbnRhY3QgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cInhsYXJnZVwiIC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlcnZpY2VDYXJkXHJcbiAgICAgICAgICBmaWxlbmFtZT1cIjAyXCJcclxuICAgICAgICAgIHRleHQ9XCJObyBkaWEgcHJvZ3JhbWFkbyBwYXJhIGEgdmlhZ2VtLCBzZXUgYXV0b23Ds3ZlbCBzZXLDoSBjb2xldGFkbyBlIGVzdGFyw6EgdG90YWxtZW50ZSBzZWd1cm8gZG8gaW7DrWNpbyBhbyBmaW0gZGEgdmlhZ2VtLlwiXHJcbiAgICAgICAgICBpY29uPXs8Q2FsZW5kYXIgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cInhsYXJnZVwiIC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlcnZpY2VDYXJkXHJcbiAgICAgICAgICBmaWxlbmFtZT1cIjAzXCJcclxuICAgICAgICAgIHRleHQ9XCJBbyBmaW0gZG8gdHJhbnNwb3J0ZSwgc2V1IHZlw61jdWxvIMOpIGVudHJlZ3VlIGV4YXRhbWVudGUgZGEgbWVzbWEgZm9ybWEgZW0gcXVlIGZvaSBjb2xldGFkby5cIlxyXG4gICAgICAgICAgaWNvbj17PERlbGl2ZXIgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cInhsYXJnZVwiIC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91ckpvYjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==