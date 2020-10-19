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
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\our-job.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OurJob = function OurJob(_ref) {
  var backgroundColor = _ref.backgroundColor;
  var iconColor = 'dark-2';

  var stackzinho = function stackzinho() {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      anchor: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 4
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }
    }, "Olar"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, "dsdsa"));
  };

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    align: "center",
    margin: {
      vertical: 'xlarge'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    gap: "large",
    align: "start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "01",
    text: "Voc\xEA solicita sua cota\xE7\xE3o online ou por telefone." // icon={<Contact color={iconColor} size="large" />}
    ,
    icon: stackzinho(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "02",
    text: "Seu ve\xEDculo \xE9 transportado totalmente coberto pelo nosso seguro.",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Deliver"], {
      color: iconColor,
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 12
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "03",
    text: "Voc\xEA recebe em casa na maciota aqui tem coraje.",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
      color: iconColor,
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 12
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItam9iLnRzeCJdLCJuYW1lcyI6WyJPdXJKb2IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uQ29sb3IiLCJzdGFja3ppbmhvIiwidmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFDdkMsTUFBTUMsU0FBUyxHQUFHLFFBQWxCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsV0FDQyxNQUFDLDZDQUFEO0FBQU8sWUFBTSxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBRUMsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsQ0FERDtBQU1BLEdBUEQ7O0FBU0EsU0FDQyxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBb0IsVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQyxNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQWlDLFNBQUssRUFBQyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUNDLFlBQVEsRUFBQyxJQURWO0FBRUMsUUFBSSxFQUFDLDREQUZOLENBR0M7QUFIRDtBQUlDLFFBQUksRUFBRUQsVUFBVSxFQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQyxNQUFDLHFEQUFEO0FBQ0MsWUFBUSxFQUFDLElBRFY7QUFFQyxRQUFJLEVBQUMsd0VBRk47QUFHQyxRQUFJLEVBQUUsTUFBQyxxREFBRDtBQUFTLFdBQUssRUFBRUQsU0FBaEI7QUFBMkIsVUFBSSxFQUFDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFZQyxNQUFDLHFEQUFEO0FBQ0MsWUFBUSxFQUFDLElBRFY7QUFFQyxRQUFJLEVBQUMsb0RBRk47QUFHQyxRQUFJLEVBQUUsTUFBQyxzREFBRDtBQUFVLFdBQUssRUFBRUEsU0FBakI7QUFBNEIsVUFBSSxFQUFDLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkQsQ0FMRCxDQUREO0FBMEJBLENBdENEOztLQUFNRixNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjQ4NzMzNzgwZGVkNzdiOTMxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBTdGFjayB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBDb250YWN0LCBDYWxlbmRhciwgRGVsaXZlciwgRG9jdW1lbnRUZXh0IH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tICcuL3NlcnZpY2UtY2FyZCc7XHJcblxyXG5jb25zdCBPdXJKb2IgPSAoeyBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4ge1xyXG5cdGNvbnN0IGljb25Db2xvciA9ICdkYXJrLTInO1xyXG5cclxuXHRjb25zdCBzdGFja3ppbmhvID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFN0YWNrIGFuY2hvcj1cIlwiPlxyXG5cdFx0XHRcdDxCb3g+T2xhcjwvQm94PlxyXG5cdFx0XHRcdDxCb3g+ZHNkc2E8L0JveD5cclxuXHRcdFx0PC9TdGFjaz5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggYWxpZ249XCJjZW50ZXJcIiBtYXJnaW49e3sgdmVydGljYWw6ICd4bGFyZ2UnIH19PlxyXG5cdFx0XHR7LyogPEhlYWRpbmcgbGV2ZWw9XCIyXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgbWFyZ2luPXt7IGJvdHRvbTogJ3hsYXJnZScgfX0+XHJcbiAgICAgICAgQ29tbyBmdW5jaW9uYT9cclxuICAgICAgPC9IZWFkaW5nPiAqL31cclxuXHJcblx0XHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwibGFyZ2VcIiBhbGlnbj1cInN0YXJ0XCI+XHJcblx0XHRcdFx0PFNlcnZpY2VDYXJkXHJcblx0XHRcdFx0XHRmaWxlbmFtZT1cIjAxXCJcclxuXHRcdFx0XHRcdHRleHQ9XCJWb2PDqiBzb2xpY2l0YSBzdWEgY290YcOnw6NvIG9ubGluZSBvdSBwb3IgdGVsZWZvbmUuXCJcclxuXHRcdFx0XHRcdC8vIGljb249ezxDb250YWN0IGNvbG9yPXtpY29uQ29sb3J9IHNpemU9XCJsYXJnZVwiIC8+fVxyXG5cdFx0XHRcdFx0aWNvbj17c3RhY2t6aW5obygpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFNlcnZpY2VDYXJkXHJcblx0XHRcdFx0XHRmaWxlbmFtZT1cIjAyXCJcclxuXHRcdFx0XHRcdHRleHQ9XCJTZXUgdmXDrWN1bG8gw6kgdHJhbnNwb3J0YWRvIHRvdGFsbWVudGUgY29iZXJ0byBwZWxvIG5vc3NvIHNlZ3Vyby5cIlxyXG5cdFx0XHRcdFx0aWNvbj17PERlbGl2ZXIgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cImxhcmdlXCIgLz59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8U2VydmljZUNhcmRcclxuXHRcdFx0XHRcdGZpbGVuYW1lPVwiMDNcIlxyXG5cdFx0XHRcdFx0dGV4dD1cIlZvY8OqIHJlY2ViZSBlbSBjYXNhIG5hIG1hY2lvdGEgYXF1aSB0ZW0gY29yYWplLlwiXHJcblx0XHRcdFx0XHRpY29uPXs8Q2FsZW5kYXIgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cImxhcmdlXCIgLz59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VySm9iO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9