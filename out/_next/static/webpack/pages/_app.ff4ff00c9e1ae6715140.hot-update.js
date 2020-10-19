webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet/utils */ "./node_modules/grommet/utils/index.js");
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_utils__WEBPACK_IMPORTED_MODULE_9__);







var _s = $RefreshSig$(),
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var myTheme = Object(grommet_utils__WEBPACK_IMPORTED_MODULE_9__["deepMerge"])(grommet__WEBPACK_IMPORTED_MODULE_8__["grommet"], {
  global: {
    colors: {
      brand: '#d64541',
      facebook: '#007fff',
      instagram: '#E00086'
    },
    font: {
      family: 'Jost'
    },
    anchor: {
      color: {
        dark: 'green',
        light: 'light-1'
      }
    }
  }
});

function handleResize() {
  // Set window width/height to state
  setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight
  });
}

function useWindowSize() {
  _s();

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    width: undefined,
    height: undefined
  }),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    // only execute all the code below in client side
    if (true) {
      // Handler to call on window resize
      // Add event listener
      window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      }); // Remove event listener on cleanup

      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

_s(useWindowSize, "LiKKyUsmuEn1GUVBiSlgnSfPwBo=");

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(grommet__WEBPACK_IMPORTED_MODULE_8__["Grommet"], {
        theme: myTheme,
        full: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 4
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 5
        }
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsibXlUaGVtZSIsImRlZXBNZXJnZSIsImdyb21tZXQiLCJnbG9iYWwiLCJjb2xvcnMiLCJicmFuZCIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwiZm9udCIsImZhbWlseSIsImFuY2hvciIsImNvbG9yIiwiZGFyayIsImxpZ2h0IiwiaGFuZGxlUmVzaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwid2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLCtEQUFTLENBQUNDLCtDQUFELEVBQVU7QUFDbENDLFFBQU0sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFLFNBREE7QUFFUEMsY0FBUSxFQUFFLFNBRkg7QUFHUEMsZUFBUyxFQUFFO0FBSEosS0FERDtBQU1QQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFO0FBREgsS0FOQztBQVNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBQ05DLFlBQUksRUFBRSxPQURBO0FBRU5DLGFBQUssRUFBRTtBQUZEO0FBREE7QUFURDtBQUQwQixDQUFWLENBQXpCOztBQW1CQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3ZCO0FBQ0FDLGVBQWEsQ0FBQztBQUNiQyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFERDtBQUViQyxVQUFNLEVBQUVGLE1BQU0sQ0FBQ0c7QUFGRixHQUFELENBQWI7QUFJQTs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQ3hCO0FBQ0E7QUFGd0Isa0JBR2NDLHNEQUFRLENBQUM7QUFDOUNOLFNBQUssRUFBRU8sU0FEdUM7QUFFOUNKLFVBQU0sRUFBRUk7QUFGc0MsR0FBRCxDQUh0QjtBQUFBLE1BR2hCQyxVQUhnQjtBQUFBLE1BR0pULGFBSEk7O0FBUXhCVSx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBLGNBQW1DO0FBQ2xDO0FBRUE7QUFDQVIsWUFBTSxDQUFDUyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1osWUFBbEMsRUFKa0MsQ0FNbEM7O0FBQ0FDLG1CQUFhLENBQUM7QUFDYkMsYUFBSyxFQUFFQyxNQUFNLENBQUNDLFVBREQ7QUFFYkMsY0FBTSxFQUFFRixNQUFNLENBQUNHO0FBRkYsT0FBRCxDQUFiLENBUGtDLENBWWxDOztBQUNBLGFBQU87QUFBQSxlQUFNSCxNQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDYixZQUFyQyxDQUFOO0FBQUEsT0FBUDtBQUNBO0FBQ0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVCxDQVJ3QixDQXlCaEI7O0FBQ1IsU0FBT1UsVUFBUDtBQUNBOztHQTNCUUgsYTs7SUE2QllPLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNBQyxTQURBLGVBQ0FBLFNBREE7QUFBQSxVQUNXQyxTQURYLGVBQ1dBLFNBRFg7QUFFUixhQUNDLE1BQUMsK0NBQUQ7QUFBUyxhQUFLLEVBQUUvQixPQUFoQjtBQUF5QixZQUFJLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLFNBQUQseUZBQWUrQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERCxDQUREO0FBS0E7Ozs7RUFSaUNDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmY0ZmYwMGM5ZTFhZTY3MTUxNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBHcm9tbWV0LCBncm9tbWV0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ2dyb21tZXQvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgbXlUaGVtZSA9IGRlZXBNZXJnZShncm9tbWV0LCB7XHJcblx0Z2xvYmFsOiB7XHJcblx0XHRjb2xvcnM6IHtcclxuXHRcdFx0YnJhbmQ6ICcjZDY0NTQxJyxcclxuXHRcdFx0ZmFjZWJvb2s6ICcjMDA3ZmZmJyxcclxuXHRcdFx0aW5zdGFncmFtOiAnI0UwMDA4NidcclxuXHRcdH0sXHJcblx0XHRmb250OiB7XHJcblx0XHRcdGZhbWlseTogJ0pvc3QnXHJcblx0XHR9LFxyXG5cdFx0YW5jaG9yOiB7XHJcblx0XHRcdGNvbG9yOiB7XHJcblx0XHRcdFx0ZGFyazogJ2dyZWVuJyxcclxuXHRcdFx0XHRsaWdodDogJ2xpZ2h0LTEnXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG5cdC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcblx0c2V0V2luZG93U2l6ZSh7XHJcblx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG5cdC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuXHQvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcblx0Y29uc3QgWyB3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplIF0gPSB1c2VTdGF0ZSh7XHJcblx0XHR3aWR0aDogdW5kZWZpbmVkLFxyXG5cdFx0aGVpZ2h0OiB1bmRlZmluZWRcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHQvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG5cclxuXHRcdFx0Ly8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG5cdFx0XHRzZXRXaW5kb3dTaXplKHtcclxuXHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG5cdFx0XHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblx0XHR9XHJcblx0fSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcblx0cmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEdyb21tZXQgdGhlbWU9e215VGhlbWV9IGZ1bGw+XHJcblx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0XHQ8L0dyb21tZXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9