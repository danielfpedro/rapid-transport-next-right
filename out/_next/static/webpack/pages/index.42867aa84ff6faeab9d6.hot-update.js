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
      anchor: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 4
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      pad: {
        left: '5px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }
    }, "Olar"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      pad: {
        right: '5px'
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItam9iLnRzeCJdLCJuYW1lcyI6WyJPdXJKb2IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uQ29sb3IiLCJzdGFja3ppbmhvIiwibGVmdCIsInJpZ2h0IiwidmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFDdkMsTUFBTUMsU0FBUyxHQUFHLFFBQWxCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsV0FDQyxNQUFDLDZDQUFEO0FBQU8sWUFBTSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFHLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFFQyxNQUFDLDJDQUFEO0FBQU0sU0FBRyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELENBREQ7QUFNQSxHQVBEOztBQVNBLFNBQ0MsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBQyxRQUFYO0FBQW9CLFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFpQyxTQUFLLEVBQUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFDQyxZQUFRLEVBQUMsSUFEVjtBQUVDLFFBQUksRUFBQyw0REFGTixDQUdDO0FBSEQ7QUFJQyxRQUFJLEVBQUVILFVBQVUsRUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0MsTUFBQyxxREFBRDtBQUNDLFlBQVEsRUFBQyxJQURWO0FBRUMsUUFBSSxFQUFDLHdFQUZOO0FBR0MsUUFBSSxFQUFFLE1BQUMscURBQUQ7QUFBUyxXQUFLLEVBQUVELFNBQWhCO0FBQTJCLFVBQUksRUFBQyxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBWUMsTUFBQyxxREFBRDtBQUNDLFlBQVEsRUFBQyxJQURWO0FBRUMsUUFBSSxFQUFDLG9EQUZOO0FBR0MsUUFBSSxFQUFFLE1BQUMsc0RBQUQ7QUFBVSxXQUFLLEVBQUVBLFNBQWpCO0FBQTRCLFVBQUksRUFBQyxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpELENBTEQsQ0FERDtBQTBCQSxDQXRDRDs7S0FBTUYsTTtBQXdDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDI4NjdhYTg0ZmY2ZmFlYWI5ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgU3RhY2sgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHsgQ29udGFjdCwgQ2FsZW5kYXIsIERlbGl2ZXIsIERvY3VtZW50VGV4dCB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSAnLi9zZXJ2aWNlLWNhcmQnO1xyXG5cclxuY29uc3QgT3VySm9iID0gKHsgYmFja2dyb3VuZENvbG9yIH0pID0+IHtcclxuXHRjb25zdCBpY29uQ29sb3IgPSAnZGFyay0yJztcclxuXHJcblx0Y29uc3Qgc3RhY2t6aW5obyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxTdGFjayBhbmNob3I9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHQ8Qm94IHBhZD17eyBsZWZ0OiAnNXB4JyB9fT5PbGFyPC9Cb3g+XHJcblx0XHRcdFx0PEJveCAgcGFkPXt7IHJpZ2h0OiAnNXB4JyB9fT5kc2RzYTwvQm94PlxyXG5cdFx0XHQ8L1N0YWNrPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBhbGlnbj1cImNlbnRlclwiIG1hcmdpbj17eyB2ZXJ0aWNhbDogJ3hsYXJnZScgfX0+XHJcblx0XHRcdHsvKiA8SGVhZGluZyBsZXZlbD1cIjJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYXJnaW49e3sgYm90dG9tOiAneGxhcmdlJyB9fT5cclxuICAgICAgICBDb21vIGZ1bmNpb25hP1xyXG4gICAgICA8L0hlYWRpbmc+ICovfVxyXG5cclxuXHRcdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJsYXJnZVwiIGFsaWduPVwic3RhcnRcIj5cclxuXHRcdFx0XHQ8U2VydmljZUNhcmRcclxuXHRcdFx0XHRcdGZpbGVuYW1lPVwiMDFcIlxyXG5cdFx0XHRcdFx0dGV4dD1cIlZvY8OqIHNvbGljaXRhIHN1YSBjb3Rhw6fDo28gb25saW5lIG91IHBvciB0ZWxlZm9uZS5cIlxyXG5cdFx0XHRcdFx0Ly8gaWNvbj17PENvbnRhY3QgY29sb3I9e2ljb25Db2xvcn0gc2l6ZT1cImxhcmdlXCIgLz59XHJcblx0XHRcdFx0XHRpY29uPXtzdGFja3ppbmhvKCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8U2VydmljZUNhcmRcclxuXHRcdFx0XHRcdGZpbGVuYW1lPVwiMDJcIlxyXG5cdFx0XHRcdFx0dGV4dD1cIlNldSB2ZcOtY3VsbyDDqSB0cmFuc3BvcnRhZG8gdG90YWxtZW50ZSBjb2JlcnRvIHBlbG8gbm9zc28gc2VndXJvLlwiXHJcblx0XHRcdFx0XHRpY29uPXs8RGVsaXZlciBjb2xvcj17aWNvbkNvbG9yfSBzaXplPVwibGFyZ2VcIiAvPn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxTZXJ2aWNlQ2FyZFxyXG5cdFx0XHRcdFx0ZmlsZW5hbWU9XCIwM1wiXHJcblx0XHRcdFx0XHR0ZXh0PVwiVm9jw6ogcmVjZWJlIGVtIGNhc2EgbmEgbWFjaW90YSBhcXVpIHRlbSBjb3JhamUuXCJcclxuXHRcdFx0XHRcdGljb249ezxDYWxlbmRhciBjb2xvcj17aWNvbkNvbG9yfSBzaXplPVwibGFyZ2VcIiAvPn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJKb2I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=