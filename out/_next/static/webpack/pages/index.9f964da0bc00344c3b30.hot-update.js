webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-navbar.tsx":
/*!**********************************!*\
  !*** ./components/my-navbar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media */ "./components/media.tsx");
/* harmony import */ var _navbar_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-items */ "./components/navbar-items.tsx");


var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\components\\my-navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var MyNavbar = function MyNavbar(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var size = 'small';

  var socialMedia = __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    gap: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Facebook"], {
    color: "facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }), __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Instagram"], {
    color: "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));

  var items = __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    gap: "large",
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(_navbar_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dir: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }), socialMedia);

  var getItems = function getItems(breakpoint) {
    if (breakpoint == 'xs') {
      return null;
    }

    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 10
      }
    }, items);
  };

  var getLogo = function getLogo(breakpoint) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: {
        grow: 1
      },
      align: breakpoint != 'xs' ? null : 'center',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "images/logo.png",
      width: breakpoint != 'xs' ? '340px' : '280px',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }));
  };

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "xxlarge",
    pad: {
      horizontal: 'large',
      vertical: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    fill: true,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    at: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, getLogo('xs')), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, getLogo()), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    at: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, getItems('xs')), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, getItems()))));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk15TmF2YmFyIiwic2l6ZSIsInNvY2lhbE1lZGlhIiwiaXRlbXMiLCJnZXRJdGVtcyIsImJyZWFrcG9pbnQiLCJnZXRMb2dvIiwiZ3JvdyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQ3hCLE1BQU1DLElBQUksR0FBRyxPQUFiOztBQUVBLE1BQU1DLFdBQVcsR0FDaEIsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFVLFNBQUssRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHVEQUFEO0FBQVcsU0FBSyxFQUFDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUREOztBQU1BLE1BQU1DLEtBQUssR0FDVixNQUFDLDJDQUFEO0FBQUssT0FBRyxFQUFDLE9BQVQ7QUFBaUIsYUFBUyxFQUFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQWEsT0FBRyxFQUFDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVFRCxXQUZGLENBREQ7O0FBT0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsVUFBRCxFQUF5QjtBQUN6QyxRQUFJQSxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdkIsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUYsS0FBTixDQUFQO0FBQ0EsR0FMRDs7QUFPQSxNQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDRCxVQUFELEVBQXlCO0FBQ3hDLFdBQ0MsTUFBQywyQ0FBRDtBQUFLLFVBQUksRUFBRTtBQUFFRSxZQUFJLEVBQUU7QUFBUixPQUFYO0FBQXdCLFdBQUssRUFBRUYsVUFBVSxJQUFJLElBQWQsR0FBcUIsSUFBckIsR0FBNEIsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsNkNBQUQ7QUFBTyxTQUFHLEVBQUMsaUJBQVg7QUFBNkIsV0FBSyxFQUFFQSxVQUFVLElBQUksSUFBZCxHQUFxQixPQUFyQixHQUErQixPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FERDtBQUtBLEdBTkQ7O0FBUUEsU0FDQyxNQUFDLDJDQUFEO0FBQUssY0FBVSxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQWEsU0FBSyxFQUFDLFNBQW5CO0FBQTZCLE9BQUcsRUFBRTtBQUFFRyxnQkFBVSxFQUFFLE9BQWQ7QUFBdUJDLGNBQVEsRUFBRTtBQUFqQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFFBQUksTUFBekI7QUFBMEIsU0FBSyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQyxNQUFDLDRDQUFEO0FBQU8sTUFBRSxFQUFDLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkgsT0FBTyxDQUFDLElBQUQsQ0FBdkIsQ0FGRCxFQUdDLE1BQUMsNENBQUQ7QUFBTyxlQUFXLEVBQUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QkEsT0FBTyxFQUFoQyxDQUhELEVBS0MsTUFBQyw0Q0FBRDtBQUFPLE1BQUUsRUFBQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JGLFFBQVEsQ0FBQyxJQUFELENBQXhCLENBTEQsRUFNQyxNQUFDLDRDQUFEO0FBQU8sZUFBVyxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJBLFFBQVEsRUFBakMsQ0FORCxDQURELENBREQsQ0FERDtBQWNBLENBN0NEOztLQUFNSixRO0FBK0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Zjk2NGRhMGJjMDAzNDRjM2IzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgUmVzcG9uc2l2ZUNvbnRleHQgfSBmcm9tICdncm9tbWV0JztcclxuaW1wb3J0IHsgRmFjZWJvb2ssIEluc3RhZ3JhbSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluLWNvbnRlbnQnO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEnO1xyXG5pbXBvcnQgTmF2YmFySXRlbXMgZnJvbSAnLi9uYXZiYXItaXRlbXMnO1xyXG5cclxuY29uc3QgTXlOYXZiYXIgPSAoe30pID0+IHtcclxuXHRjb25zdCBzaXplID0gJ3NtYWxsJztcclxuXHJcblx0Y29uc3Qgc29jaWFsTWVkaWEgPSAoXHJcblx0XHQ8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cInNtYWxsXCI+XHJcblx0XHRcdDxGYWNlYm9vayBjb2xvcj1cImZhY2Vib29rXCIgLz5cclxuXHRcdFx0PEluc3RhZ3JhbSBjb2xvcj1cImluc3RhZ3JhbVwiIC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG5cdGNvbnN0IGl0ZW1zID0gKFxyXG5cdFx0PEJveCBnYXA9XCJsYXJnZVwiIGRpcmVjdGlvbj1cInJvd1wiPlxyXG5cdFx0XHQ8TmF2YmFySXRlbXMgZGlyPVwicm93XCIgLz5cclxuXHRcdFx0e3NvY2lhbE1lZGlhfVxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgZ2V0SXRlbXMgPSAoYnJlYWtwb2ludD86IHN0cmluZykgPT4ge1xyXG5cdFx0aWYgKGJyZWFrcG9pbnQgPT0gJ3hzJykge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdHJldHVybiA8Qm94PntpdGVtc308L0JveD47XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TG9nbyA9IChicmVha3BvaW50Pzogc3RyaW5nKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Qm94IGZsZXg9e3sgZ3JvdzogMSB9fSBhbGlnbj17YnJlYWtwb2ludCAhPSAneHMnID8gbnVsbCA6ICdjZW50ZXInfT5cclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9e2JyZWFrcG9pbnQgIT0gJ3hzJyA/ICczNDBweCcgOiAnMjgwcHgnfSAvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggYmFja2dyb3VuZD1cIndoaXRlXCI+XHJcblx0XHRcdDxNYWluQ29udGVudCB3aWR0aD1cInh4bGFyZ2VcIiBwYWQ9e3sgaG9yaXpvbnRhbDogJ2xhcmdlJywgdmVydGljYWw6ICcyZW0nIH19PlxyXG5cdFx0XHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0ey8qIExPR08gKi99XHJcblx0XHRcdFx0XHQ8TWVkaWEgYXQ9XCJ4c1wiPntnZXRMb2dvKCd4cycpfTwvTWVkaWE+XHJcblx0XHRcdFx0XHQ8TWVkaWEgZ3JlYXRlclRoYW49XCJ4c1wiPntnZXRMb2dvKCl9PC9NZWRpYT5cclxuXHJcblx0XHRcdFx0XHQ8TWVkaWEgYXQ9XCJ4c1wiPntnZXRJdGVtcygneHMnKX08L01lZGlhPlxyXG5cdFx0XHRcdFx0PE1lZGlhIGdyZWF0ZXJUaGFuPVwieHNcIj57Z2V0SXRlbXMoKX08L01lZGlhPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9