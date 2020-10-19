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
    return __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Deliver"], {
      color: iconColor,
      size: "60em",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 10
      }
    });
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      anchor: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 4
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      pad: {
        right: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Deliver"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    })), __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      pad: {
        left: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }
    }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Calendar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 6
      }
    })));
  };

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    align: "center",
    margin: {
      vertical: 'xlarge'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    gap: "large",
    align: "start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "01",
    text: "Solicite sua cota\xE7\xE3o pelo site ou por telefone. Voc\xEA receber\xE1 o or\xE7amento com a garantia do melhor pre\xE7o e qualidade." // icon={<Contact color={iconColor} size="large" />}
    ,
    icon: stackzinho(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "02",
    title: "N\xF3 fazemos tudo",
    text: "Na data agendada, seu ve\xEDculo ser\xE1 transportado com cobertura total pela seguradora",
    icon: stackzinho(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx(_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "03",
    text: "Voc\xEA recebe o ve\xEDculo no endere\xE7o combinado.",
    icon: stackzinho(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItam9iLnRzeCJdLCJuYW1lcyI6WyJPdXJKb2IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uQ29sb3IiLCJzdGFja3ppbmhvIiwicmlnaHQiLCJsZWZ0IiwidmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFDdkMsTUFBTUMsU0FBUyxHQUFHLFFBQWxCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsV0FBTyxNQUFDLHFEQUFEO0FBQVMsV0FBSyxFQUFFRCxTQUFoQjtBQUEyQixVQUFJLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0EsV0FDQyxNQUFDLDZDQUFEO0FBQU8sWUFBTSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFHLEVBQUU7QUFBRUUsYUFBSyxFQUFFO0FBQVQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FERCxFQUlDLE1BQUMsMkNBQUQ7QUFBSyxTQUFHLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FKRCxDQUREO0FBVUEsR0FaRDs7QUFjQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFvQixVQUFNLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsT0FBekI7QUFBaUMsU0FBSyxFQUFDLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQ00sWUFBUSxFQUFDLElBRGY7QUFFQyxRQUFJLEVBQUMseUlBRk4sQ0FHQztBQUhEO0FBSUMsUUFBSSxFQUFFSCxVQUFVLEVBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQU9DLE1BQUMscURBQUQ7QUFDTSxZQUFRLEVBQUMsSUFEZjtBQUVNLFNBQUssRUFBQyxvQkFGWjtBQUdDLFFBQUksRUFBQywyRkFITjtBQUlDLFFBQUksRUFBRUEsVUFBVSxFQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFhQyxNQUFDLHFEQUFEO0FBQ0MsWUFBUSxFQUFDLElBRFY7QUFFQyxRQUFJLEVBQUMsdURBRk47QUFHQyxRQUFJLEVBQUVBLFVBQVUsRUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJELENBTEQsQ0FERDtBQTJCQSxDQTVDRDs7S0FBTUgsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2EzM2ZmMDg1OTg0ZTIyZDc4MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgU3RhY2sgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHsgQ29udGFjdCwgQ2FsZW5kYXIsIERlbGl2ZXIsIERvY3VtZW50VGV4dCB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSAnLi9zZXJ2aWNlLWNhcmQnO1xyXG5cclxuY29uc3QgT3VySm9iID0gKHsgYmFja2dyb3VuZENvbG9yIH0pID0+IHtcclxuXHRjb25zdCBpY29uQ29sb3IgPSAnZGFyay0yJztcclxuXHJcblx0Y29uc3Qgc3RhY2t6aW5obyA9ICgpID0+IHtcclxuXHRcdHJldHVybiA8RGVsaXZlciBjb2xvcj17aWNvbkNvbG9yfSBzaXplPVwiNjBlbVwiIC8+O1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFN0YWNrIGFuY2hvcj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdDxCb3ggcGFkPXt7IHJpZ2h0OiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8RGVsaXZlciAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDxCb3ggcGFkPXt7IGxlZnQ6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdDxDYWxlbmRhciAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L1N0YWNrPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBhbGlnbj1cImNlbnRlclwiIG1hcmdpbj17eyB2ZXJ0aWNhbDogJ3hsYXJnZScgfX0+XHJcblx0XHRcdHsvKiA8SGVhZGluZyBsZXZlbD1cIjJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYXJnaW49e3sgYm90dG9tOiAneGxhcmdlJyB9fT5cclxuICAgICAgICBDb21vIGZ1bmNpb25hP1xyXG4gICAgICA8L0hlYWRpbmc+ICovfVxyXG5cclxuXHRcdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJsYXJnZVwiIGFsaWduPVwic3RhcnRcIj5cclxuXHRcdFx0XHQ8U2VydmljZUNhcmRcclxuICAgICAgICAgIGZpbGVuYW1lPVwiMDFcIlxyXG5cdFx0XHRcdFx0dGV4dD1cIlNvbGljaXRlIHN1YSBjb3Rhw6fDo28gcGVsbyBzaXRlIG91IHBvciB0ZWxlZm9uZS4gVm9jw6ogcmVjZWJlcsOhIG8gb3LDp2FtZW50byBjb20gYSBnYXJhbnRpYSBkbyBtZWxob3IgcHJlw6dvIGUgcXVhbGlkYWRlLlwiXHJcblx0XHRcdFx0XHQvLyBpY29uPXs8Q29udGFjdCBjb2xvcj17aWNvbkNvbG9yfSBzaXplPVwibGFyZ2VcIiAvPn1cclxuXHRcdFx0XHRcdGljb249e3N0YWNremluaG8oKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxTZXJ2aWNlQ2FyZFxyXG4gICAgICAgICAgZmlsZW5hbWU9XCIwMlwiXHJcbiAgICAgICAgICB0aXRsZT1cIk7DsyBmYXplbW9zIHR1ZG9cIlxyXG5cdFx0XHRcdFx0dGV4dD1cIk5hIGRhdGEgYWdlbmRhZGEsIHNldSB2ZcOtY3VsbyBzZXLDoSB0cmFuc3BvcnRhZG8gY29tIGNvYmVydHVyYSB0b3RhbCBwZWxhIHNlZ3VyYWRvcmFcIlxyXG5cdFx0XHRcdFx0aWNvbj17c3RhY2t6aW5obygpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFNlcnZpY2VDYXJkXHJcblx0XHRcdFx0XHRmaWxlbmFtZT1cIjAzXCJcclxuXHRcdFx0XHRcdHRleHQ9XCJWb2PDqiByZWNlYmUgbyB2ZcOtY3VsbyBubyBlbmRlcmXDp28gY29tYmluYWRvLlwiXHJcblx0XHRcdFx0XHRpY29uPXtzdGFja3ppbmhvKCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VySm9iO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9