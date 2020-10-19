webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-navbar.tsx":
/*!**********************************!*\
  !*** ./components/my-navbar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
/* harmony import */ var _navbar_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-items */ "./components/navbar-items.tsx");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\my-navbar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyNavbar = function MyNavbar() {
  _s();

  var size = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(grommet__WEBPACK_IMPORTED_MODULE_0__["ResponsiveContext"]);

  var socialMedia = __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }));

  var items = __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    gap: "large",
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), socialMedia);

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, "Size: ", breakpoint, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "xxlarge",
    pad: {
      horizontal: 'large',
      vertical: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    flex: {
      grow: 1
    },
    align: size != 'small' ? null : 'center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: size != 'small' ? '340px' : '280px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  })), size != 'small' && items)));
};

_s(MyNavbar, "/KBwov+JmSCTHSSC6VXWAf4OqjQ=");

_c = MyNavbar;
/* harmony default export */ __webpack_exports__["default"] = (MyNavbar);

var _c;

$RefreshReg$(_c, "MyNavbar");

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

/***/ "./node_modules/use-breakpoint/index.umd.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk15TmF2YmFyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0Iiwic29jaWFsTWVkaWEiLCJpdGVtcyIsImJyZWFrcG9pbnQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJncm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMseURBQWpCLENBQWI7O0FBRUEsTUFBTUMsV0FBVyxHQUNoQixNQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQVUsU0FBSyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsdURBQUQ7QUFBVyxTQUFLLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQ7O0FBTUEsTUFBTUMsS0FBSyxHQUNWLE1BQUMsMkNBQUQ7QUFBSyxPQUFHLEVBQUMsT0FBVDtBQUFpQixhQUFTLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscURBQUQ7QUFBYSxPQUFHLEVBQUMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUVELFdBRkYsQ0FERDs7QUFPQSxTQUNDLE1BQUMsMkNBQUQ7QUFBSyxjQUFVLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNRRSxVQURSLEVBRUMsTUFBQyxxREFBRDtBQUFhLFNBQUssRUFBQyxTQUFuQjtBQUE2QixPQUFHLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxPQUFkO0FBQXVCQyxjQUFRLEVBQUU7QUFBakMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFNBQUssRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFYO0FBQXdCLFNBQUssRUFBRVQsSUFBSSxJQUFJLE9BQVIsR0FBa0IsSUFBbEIsR0FBeUIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFFQSxJQUFJLElBQUksT0FBUixHQUFrQixPQUFsQixHQUE0QixPQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlFQSxJQUFJLElBQUksT0FBUixJQUFtQkssS0FKckIsQ0FERCxDQUZELENBREQ7QUFhQSxDQTdCRDs7R0FBTU4sUTs7S0FBQUEsUTtBQStCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRlMjQzNzA0MDVhMDc5OWRlOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFJlc3BvbnNpdmVDb250ZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEZhY2Vib29rLCBJbnN0YWdyYW0gfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuaW1wb3J0IE5hdmJhckl0ZW1zIGZyb20gJy4vbmF2YmFyLWl0ZW1zJztcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnQgZnJvbSAndXNlLWJyZWFrcG9pbnQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICgpID0+IHtcclxuXHRjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHNvY2lhbE1lZGlhID0gKFxyXG5cdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJzbWFsbFwiPlxyXG5cdFx0XHQ8RmFjZWJvb2sgY29sb3I9XCJmYWNlYm9va1wiIC8+XHJcblx0XHRcdDxJbnN0YWdyYW0gY29sb3I9XCJpbnN0YWdyYW1cIiAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxuXHRjb25zdCBpdGVtcyA9IChcclxuXHRcdDxCb3ggZ2FwPVwibGFyZ2VcIiBkaXJlY3Rpb249XCJyb3dcIj5cclxuXHRcdFx0PE5hdmJhckl0ZW1zIGRpcj1cInJvd1wiIC8+XHJcblx0XHRcdHtzb2NpYWxNZWRpYX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRTaXplOiB7YnJlYWtwb2ludH1cclxuXHRcdFx0PE1haW5Db250ZW50IHdpZHRoPVwieHhsYXJnZVwiIHBhZD17eyBob3Jpem9udGFsOiAnbGFyZ2UnLCB2ZXJ0aWNhbDogJzJlbScgfX0+XHJcblx0XHRcdFx0PEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8Qm94IGZsZXg9e3sgZ3JvdzogMSB9fSBhbGlnbj17c2l6ZSAhPSAnc21hbGwnID8gbnVsbCA6ICdjZW50ZXInfT5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPXtzaXplICE9ICdzbWFsbCcgPyAnMzQwcHgnIDogJzI4MHB4J30gLz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0e3NpemUgIT0gJ3NtYWxsJyAmJiBpdGVtc31cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9NYWluQ29udGVudD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==