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

    return items;
  };

  var getLogo = function getLogo(breakpoint) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: {
        grow: 1
      },
      align: size != 'small' ? null : 'center',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "images/logo.png",
      width: size != 'small' ? '340px' : '280px',
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
      lineNumber: 43,
      columnNumber: 6
    }
  }, getLogo('xs')), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, getLogo('xs')), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    at: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, getItems('xs')), __jsx(_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk15TmF2YmFyIiwic2l6ZSIsInNvY2lhbE1lZGlhIiwiaXRlbXMiLCJnZXRJdGVtcyIsImJyZWFrcG9pbnQiLCJnZXRMb2dvIiwiZ3JvdyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQ3hCLE1BQU1DLElBQUksR0FBRyxPQUFiOztBQUVBLE1BQU1DLFdBQVcsR0FDaEIsTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLE9BQUcsRUFBQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFVLFNBQUssRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHVEQUFEO0FBQVcsU0FBSyxFQUFDLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUREOztBQU1BLE1BQU1DLEtBQUssR0FDVixNQUFDLDJDQUFEO0FBQUssT0FBRyxFQUFDLE9BQVQ7QUFBaUIsYUFBUyxFQUFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFEQUFEO0FBQWEsT0FBRyxFQUFDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVFRCxXQUZGLENBREQ7O0FBT0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsVUFBRCxFQUF5QjtBQUN6QyxRQUFJQSxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdkIsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBT0YsS0FBUDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0QsVUFBRCxFQUF5QjtBQUN4QyxXQUNDLE1BQUMsMkNBQUQ7QUFBSyxVQUFJLEVBQUU7QUFBRUUsWUFBSSxFQUFFO0FBQVIsT0FBWDtBQUF3QixXQUFLLEVBQUVOLElBQUksSUFBSSxPQUFSLEdBQWtCLElBQWxCLEdBQXlCLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLDZDQUFEO0FBQU8sU0FBRyxFQUFDLGlCQUFYO0FBQTZCLFdBQUssRUFBRUEsSUFBSSxJQUFJLE9BQVIsR0FBa0IsT0FBbEIsR0FBNEIsT0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBREQ7QUFLQSxHQU5EOztBQVFBLFNBQ0MsTUFBQywyQ0FBRDtBQUFLLGNBQVUsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFhLFNBQUssRUFBQyxTQUFuQjtBQUE2QixPQUFHLEVBQUU7QUFBRU8sZ0JBQVUsRUFBRSxPQUFkO0FBQXVCQyxjQUFRLEVBQUU7QUFBakMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFNBQUssRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0Q0FBRDtBQUFPLE1BQUUsRUFBQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JILE9BQU8sQ0FBQyxJQUFELENBQXZCLENBREQsRUFFQyxNQUFDLDRDQUFEO0FBQU8sZUFBVyxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJBLE9BQU8sQ0FBQyxJQUFELENBQWhDLENBRkQsRUFJQyxNQUFDLDRDQUFEO0FBQU8sTUFBRSxFQUFDLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkYsUUFBUSxDQUFDLElBQUQsQ0FBeEIsQ0FKRCxFQUtDLE1BQUMsNENBQUQ7QUFBTyxlQUFXLEVBQUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QkEsUUFBUSxFQUFqQyxDQUxELENBREQsQ0FERCxDQUREO0FBYUEsQ0E1Q0Q7O0tBQU1KLFE7QUE4Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzYzBmZjY1ZDZmMGIyYmY3NTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBSZXNwb25zaXZlQ29udGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgSW5zdGFncmFtIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYSc7XHJcbmltcG9ydCBOYXZiYXJJdGVtcyBmcm9tICcuL25hdmJhci1pdGVtcyc7XHJcblxyXG5jb25zdCBNeU5hdmJhciA9ICh7fSkgPT4ge1xyXG5cdGNvbnN0IHNpemUgPSAnc21hbGwnO1xyXG5cclxuXHRjb25zdCBzb2NpYWxNZWRpYSA9IChcclxuXHRcdDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwic21hbGxcIj5cclxuXHRcdFx0PEZhY2Vib29rIGNvbG9yPVwiZmFjZWJvb2tcIiAvPlxyXG5cdFx0XHQ8SW5zdGFncmFtIGNvbG9yPVwiaW5zdGFncmFtXCIgLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcblx0Y29uc3QgaXRlbXMgPSAoXHJcblx0XHQ8Qm94IGdhcD1cImxhcmdlXCIgZGlyZWN0aW9uPVwicm93XCI+XHJcblx0XHRcdDxOYXZiYXJJdGVtcyBkaXI9XCJyb3dcIiAvPlxyXG5cdFx0XHR7c29jaWFsTWVkaWF9XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBnZXRJdGVtcyA9IChicmVha3BvaW50Pzogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAoYnJlYWtwb2ludCA9PSAneHMnKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGl0ZW1zO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldExvZ28gPSAoYnJlYWtwb2ludD86IHN0cmluZykgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveCBmbGV4PXt7IGdyb3c6IDEgfX0gYWxpZ249e3NpemUgIT0gJ3NtYWxsJyA/IG51bGwgOiAnY2VudGVyJ30+XHJcblx0XHRcdFx0PEltYWdlIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPXtzaXplICE9ICdzbWFsbCcgPyAnMzQwcHgnIDogJzI4MHB4J30gLz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGJhY2tncm91bmQ9XCJ3aGl0ZVwiPlxyXG5cdFx0XHQ8TWFpbkNvbnRlbnQgd2lkdGg9XCJ4eGxhcmdlXCIgcGFkPXt7IGhvcml6b250YWw6ICdsYXJnZScsIHZlcnRpY2FsOiAnMmVtJyB9fT5cclxuXHRcdFx0XHQ8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGZpbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxNZWRpYSBhdD1cInhzXCI+e2dldExvZ28oJ3hzJyl9PC9NZWRpYT5cclxuXHRcdFx0XHRcdDxNZWRpYSBncmVhdGVyVGhhbj1cInhzXCI+e2dldExvZ28oJ3hzJyl9PC9NZWRpYT5cclxuXHJcblx0XHRcdFx0XHQ8TWVkaWEgYXQ9XCJ4c1wiPntnZXRJdGVtcygneHMnKX08L01lZGlhPlxyXG5cdFx0XHRcdFx0PE1lZGlhIGdyZWF0ZXJUaGFuPVwieHNcIj57Z2V0SXRlbXMoKX08L01lZGlhPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L01haW5Db250ZW50PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9