(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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
  }, "Size: ", size, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk15TmF2YmFyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0Iiwic29jaWFsTWVkaWEiLCJpdGVtcyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImdyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsSUFBSSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyx5REFBakIsQ0FBYjs7QUFFQSxNQUFNQyxXQUFXLEdBQ2hCLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBVSxTQUFLLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyx1REFBRDtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERDs7QUFNQSxNQUFNQyxLQUFLLEdBQ1YsTUFBQywyQ0FBRDtBQUFLLE9BQUcsRUFBQyxPQUFUO0FBQWlCLGFBQVMsRUFBQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFhLE9BQUcsRUFBQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFRUQsV0FGRixDQUREOztBQU9BLFNBQ0MsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ1FKLElBRFIsRUFFQyxNQUFDLHFEQUFEO0FBQWEsU0FBSyxFQUFDLFNBQW5CO0FBQTZCLE9BQUcsRUFBRTtBQUFFTSxnQkFBVSxFQUFFLE9BQWQ7QUFBdUJDLGNBQVEsRUFBRTtBQUFqQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFFBQUksTUFBekI7QUFBMEIsU0FBSyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQUssUUFBSSxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQVg7QUFBd0IsU0FBSyxFQUFFUixJQUFJLElBQUksT0FBUixHQUFrQixJQUFsQixHQUF5QixRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2Q0FBRDtBQUFPLE9BQUcsRUFBQyxpQkFBWDtBQUE2QixTQUFLLEVBQUVBLElBQUksSUFBSSxPQUFSLEdBQWtCLE9BQWxCLEdBQTRCLE9BQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUVBLElBQUksSUFBSSxPQUFSLElBQW1CSyxLQUpyQixDQURELENBRkQsQ0FERDtBQWFBLENBN0JEOztHQUFNTixROztLQUFBQSxRO0FBK0JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBSZXNwb25zaXZlQ29udGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgSW5zdGFncmFtIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcbmltcG9ydCBOYXZiYXJJdGVtcyBmcm9tICcuL25hdmJhci1pdGVtcyc7XHJcbmltcG9ydCB1c2VCcmVha3BvaW50IGZyb20gJ3VzZS1icmVha3BvaW50JztcclxuXHJcblxyXG5cclxuY29uc3QgTXlOYXZiYXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoUmVzcG9uc2l2ZUNvbnRleHQpO1xyXG5cclxuXHRjb25zdCBzb2NpYWxNZWRpYSA9IChcclxuXHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwic21hbGxcIj5cclxuXHRcdFx0PEZhY2Vib29rIGNvbG9yPVwiZmFjZWJvb2tcIiAvPlxyXG5cdFx0XHQ8SW5zdGFncmFtIGNvbG9yPVwiaW5zdGFncmFtXCIgLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcblx0Y29uc3QgaXRlbXMgPSAoXHJcblx0XHQ8Qm94IGdhcD1cImxhcmdlXCIgZGlyZWN0aW9uPVwicm93XCI+XHJcblx0XHRcdDxOYXZiYXJJdGVtcyBkaXI9XCJyb3dcIiAvPlxyXG5cdFx0XHR7c29jaWFsTWVkaWF9XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBiYWNrZ3JvdW5kPVwid2hpdGVcIj5cclxuXHRcdFx0U2l6ZToge3NpemV9XHJcblx0XHRcdDxNYWluQ29udGVudCB3aWR0aD1cInh4bGFyZ2VcIiBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJywgdmVydGljYWw6ICcyZW0nIH19PlxyXG5cdFx0XHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PEJveCBmbGV4PXt7IGdyb3c6IDEgfX0gYWxpZ249e3NpemUgIT0gJ3NtYWxsJyA/IG51bGwgOiAnY2VudGVyJ30+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiB3aWR0aD17c2l6ZSAhPSAnc21hbGwnID8gJzM0MHB4JyA6ICcyODBweCd9IC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdHtzaXplICE9ICdzbWFsbCcgJiYgaXRlbXN9XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvTWFpbkNvbnRlbnQ+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=