webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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
          lineNumber: 58,
          columnNumber: 4
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsibXlUaGVtZSIsImRlZXBNZXJnZSIsImdyb21tZXQiLCJnbG9iYWwiLCJjb2xvcnMiLCJicmFuZCIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwiZm9udCIsImZhbWlseSIsImFuY2hvciIsImNvbG9yIiwiZGFyayIsImxpZ2h0IiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLCtEQUFTLENBQUNDLCtDQUFELEVBQVU7QUFDbENDLFFBQU0sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFLFNBREE7QUFFUEMsY0FBUSxFQUFFLFNBRkg7QUFHUEMsZUFBUyxFQUFFO0FBSEosS0FERDtBQU1QQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFO0FBREgsS0FOQztBQVNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBQ05DLFlBQUksRUFBRSxPQURBO0FBRU5DLGFBQUssRUFBRTtBQUZEO0FBREE7QUFURDtBQUQwQixDQUFWLENBQXpCOztBQW1CQSxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQ3hCO0FBQ0E7QUFGd0Isa0JBR2NDLHNEQUFRLENBQUM7QUFDOUNDLFNBQUssRUFBRUMsU0FEdUM7QUFFOUNDLFVBQU0sRUFBRUQ7QUFGc0MsR0FBRCxDQUh0QjtBQUFBLE1BR2hCRSxVQUhnQjtBQUFBLE1BR0pDLGFBSEk7O0FBUXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBLGNBQW1DO0FBQ2xDO0FBRUE7QUFDQUMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEMsRUFKa0MsQ0FNbEM7O0FBQ0FKLG1CQUFhLENBQUM7QUFDYkosYUFBSyxFQUFFTSxNQUFNLENBQUNHLFVBREQ7QUFFYlAsY0FBTSxFQUFFSSxNQUFNLENBQUNJO0FBRkYsT0FBRCxDQUFiLENBUGtDLENBWWxDOztBQUNBLGFBQU87QUFBQSxlQUFNSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSCxZQUFyQyxDQUFOO0FBQUEsT0FBUDtBQUNBO0FBQ0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVCxDQVJ3QixDQXlCaEI7O0FBQ1IsU0FBT0wsVUFBUDtBQUNBOztHQTNCUUwsYTs7SUE2QlljLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNBQyxTQURBLGVBQ0FBLFNBREE7QUFBQSxVQUNXQyxTQURYLGVBQ1dBLFNBRFg7QUFFUixhQUNDLE1BQUMsK0NBQUQ7QUFBUyxhQUFLLEVBQUUvQixPQUFoQjtBQUF5QixZQUFJLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLFNBQUQseUZBQWUrQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERCxDQUREO0FBS0E7Ozs7RUFSaUNDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2Y3ZjI2NjAyYzUzMjgwZWQ3NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBHcm9tbWV0LCBncm9tbWV0IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ2dyb21tZXQvdXRpbHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgbXlUaGVtZSA9IGRlZXBNZXJnZShncm9tbWV0LCB7XHJcblx0Z2xvYmFsOiB7XHJcblx0XHRjb2xvcnM6IHtcclxuXHRcdFx0YnJhbmQ6ICcjZDY0NTQxJyxcclxuXHRcdFx0ZmFjZWJvb2s6ICcjMDA3ZmZmJyxcclxuXHRcdFx0aW5zdGFncmFtOiAnI0UwMDA4NidcclxuXHRcdH0sXHJcblx0XHRmb250OiB7XHJcblx0XHRcdGZhbWlseTogJ0pvc3QnXHJcblx0XHR9LFxyXG5cdFx0YW5jaG9yOiB7XHJcblx0XHRcdGNvbG9yOiB7XHJcblx0XHRcdFx0ZGFyazogJ2dyZWVuJyxcclxuXHRcdFx0XHRsaWdodDogJ2xpZ2h0LTEnXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuXHQvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcblx0Ly8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG5cdGNvbnN0IFsgd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZSBdID0gdXNlU3RhdGUoe1xyXG5cdFx0d2lkdGg6IHVuZGVmaW5lZCxcclxuXHRcdGhlaWdodDogdW5kZWZpbmVkXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBvbmx5IGV4ZWN1dGUgYWxsIHRoZSBjb2RlIGJlbG93IGluIGNsaWVudCBzaWRlXHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0Ly8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuXHJcblx0XHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcblx0XHRcdC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcclxuXHRcdFx0c2V0V2luZG93U2l6ZSh7XHJcblx0XHRcdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuXHRcdFx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cdFx0fVxyXG5cdH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG5cdHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxHcm9tbWV0IHRoZW1lPXtteVRoZW1lfSBmdWxsPlxyXG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0PC9Hcm9tbWV0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==