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
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    color: "facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    color: "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }));

  var items = __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    gap: "large",
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }), socialMedia);

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "xxlarge",
    pad: {
      horizontal: 'large',
      vertical: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    fill: true,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 6
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: "images/logo.png",
    width: size != 'small' ? '340px' : '280px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk15TmF2YmFyIiwic2l6ZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJlc3BvbnNpdmVDb250ZXh0Iiwic29jaWFsTWVkaWEiLCJpdGVtcyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImdyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsSUFBSSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyx5REFBakIsQ0FBYjs7QUFFQSxNQUFNQyxXQUFXLEdBQ2hCLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQ7QUFBVSxTQUFLLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyx1REFBRDtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERDs7QUFNQSxNQUFNQyxLQUFLLEdBQ1YsTUFBQywyQ0FBRDtBQUFLLE9BQUcsRUFBQyxPQUFUO0FBQWlCLGFBQVMsRUFBQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFhLE9BQUcsRUFBQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFRUQsV0FGRixDQUREOztBQVFBLFNBQ0MsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFhLFNBQUssRUFBQyxTQUFuQjtBQUE2QixPQUFHLEVBQUU7QUFBRUUsZ0JBQVUsRUFBRSxPQUFkO0FBQXVCQyxjQUFRLEVBQUU7QUFBakMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFNBQUssRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFYO0FBQXdCLFNBQUssRUFBRVIsSUFBSSxJQUFJLE9BQVIsR0FBa0IsSUFBbEIsR0FBeUIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkNBQUQ7QUFBTyxPQUFHLEVBQUMsaUJBQVg7QUFBNkIsU0FBSyxFQUFFQSxJQUFJLElBQUksT0FBUixHQUFrQixPQUFsQixHQUE0QixPQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlFQSxJQUFJLElBQUksT0FBUixJQUFtQkssS0FKckIsQ0FERCxDQURELENBREQ7QUFjQSxDQS9CRDs7R0FBTU4sUTs7S0FBQUEsUTtBQWlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU5OGE1YjkyNTNkYjBlNmU1OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFJlc3BvbnNpdmVDb250ZXh0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IEZhY2Vib29rLCBJbnN0YWdyYW0gfSBmcm9tICdncm9tbWV0LWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vbWFpbi1jb250ZW50JztcclxuaW1wb3J0IE5hdmJhckl0ZW1zIGZyb20gJy4vbmF2YmFyLWl0ZW1zJztcclxuXHJcbmNvbnN0IE15TmF2YmFyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNpemUgPSBSZWFjdC51c2VDb250ZXh0KFJlc3BvbnNpdmVDb250ZXh0KTtcclxuXHJcblx0Y29uc3Qgc29jaWFsTWVkaWEgPSAoXHJcblx0XHQ8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cInNtYWxsXCI+XHJcblx0XHRcdDxGYWNlYm9vayBjb2xvcj1cImZhY2Vib29rXCIgLz5cclxuXHRcdFx0PEluc3RhZ3JhbSBjb2xvcj1cImluc3RhZ3JhbVwiIC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG5cdGNvbnN0IGl0ZW1zID0gKFxyXG5cdFx0PEJveCBnYXA9XCJsYXJnZVwiIGRpcmVjdGlvbj1cInJvd1wiPlxyXG5cdFx0XHQ8TmF2YmFySXRlbXMgZGlyPVwicm93XCIgLz5cclxuXHRcdFx0e3NvY2lhbE1lZGlhfVxyXG5cdFx0XHR7LyogPFRleHQ+UGhvZW5peCwgQXJpem9uYSBVU0EgLiAoODgpIDk5NTYtNTU2NjY8L1RleHQ+ICovfVxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggYmFja2dyb3VuZD1cIndoaXRlXCI+XHJcblx0XHRcdDxNYWluQ29udGVudCB3aWR0aD1cInh4bGFyZ2VcIiBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJywgdmVydGljYWw6ICcxZW0nIH19PlxyXG5cdFx0XHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBhbGlnbj1cImNlbnRlclwiID5cclxuXHRcdFx0XHRcdDxCb3ggZmxleD17eyBncm93OiAxIH19IGFsaWduPXtzaXplICE9ICdzbWFsbCcgPyBudWxsIDogJ2NlbnRlcid9PlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9e3NpemUgIT0gJ3NtYWxsJyA/ICczNDBweCcgOiAnMjgwcHgnfSAvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHR7c2l6ZSAhPSAnc21hbGwnICYmIGl0ZW1zfVxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cclxuXHRcdFx0ey8qIDxCb3ggaGVpZ2h0PVwiMnB4XCIgYmFja2dyb3VuZD1cImJyYW5kXCIgZmxleD1cImdyb3dcIj48L0JveD4gKi99XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=