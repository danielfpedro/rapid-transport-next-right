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

function handleResize(setWindowSize) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsibXlUaGVtZSIsImRlZXBNZXJnZSIsImdyb21tZXQiLCJnbG9iYWwiLCJjb2xvcnMiLCJicmFuZCIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwiZm9udCIsImZhbWlseSIsImFuY2hvciIsImNvbG9yIiwiZGFyayIsImxpZ2h0IiwiaGFuZGxlUmVzaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwid2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLCtEQUFTLENBQUNDLCtDQUFELEVBQVU7QUFDbENDLFFBQU0sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFLFNBREE7QUFFUEMsY0FBUSxFQUFFLFNBRkg7QUFHUEMsZUFBUyxFQUFFO0FBSEosS0FERDtBQU1QQyxRQUFJLEVBQUU7QUFDTEMsWUFBTSxFQUFFO0FBREgsS0FOQztBQVNQQyxVQUFNLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBQ05DLFlBQUksRUFBRSxPQURBO0FBRU5DLGFBQUssRUFBRTtBQUZEO0FBREE7QUFURDtBQUQwQixDQUFWLENBQXpCOztBQW1CQSxTQUFTQyxZQUFULENBQXNCQyxhQUF0QixFQUFxQztBQUNwQztBQUNBQSxlQUFhLENBQUM7QUFDYkMsU0FBSyxFQUFFQyxNQUFNLENBQUNDLFVBREQ7QUFFYkMsVUFBTSxFQUFFRixNQUFNLENBQUNHO0FBRkYsR0FBRCxDQUFiO0FBSUE7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUN4QjtBQUNBO0FBRndCLGtCQUdjQyxzREFBUSxDQUFDO0FBQzlDTixTQUFLLEVBQUVPLFNBRHVDO0FBRTlDSixVQUFNLEVBQUVJO0FBRnNDLEdBQUQsQ0FIdEI7QUFBQSxNQUdoQkMsVUFIZ0I7QUFBQSxNQUdKVCxhQUhJOztBQVF4QlUseURBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQSxjQUFtQztBQUNsQztBQUVBO0FBQ0FSLFlBQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NaLFlBQWxDLEVBSmtDLENBTWxDOztBQUNBQyxtQkFBYSxDQUFDO0FBQ2JDLGFBQUssRUFBRUMsTUFBTSxDQUFDQyxVQUREO0FBRWJDLGNBQU0sRUFBRUYsTUFBTSxDQUFDRztBQUZGLE9BQUQsQ0FBYixDQVBrQyxDQVlsQzs7QUFDQSxhQUFPO0FBQUEsZUFBTUgsTUFBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2IsWUFBckMsQ0FBTjtBQUFBLE9BQVA7QUFDQTtBQUNELEdBakJRLEVBaUJOLEVBakJNLENBQVQsQ0FSd0IsQ0F5QmhCOztBQUNSLFNBQU9VLFVBQVA7QUFDQTs7R0EzQlFILGE7O0lBNkJZTyxLOzs7Ozs7Ozs7Ozs7OzZCQUNYO0FBQUEsd0JBQ3lCLEtBQUtDLEtBRDlCO0FBQUEsVUFDQUMsU0FEQSxlQUNBQSxTQURBO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBRVIsYUFDQyxNQUFDLCtDQUFEO0FBQVMsYUFBSyxFQUFFL0IsT0FBaEI7QUFBeUIsWUFBSSxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxTQUFELHlGQUFlK0IsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREQsQ0FERDtBQUtBOzs7O0VBUmlDQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY4ZDUzYTA2YTc1MDQ3Zjg0NDhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgR3JvbW1ldCwgZ3JvbW1ldCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdncm9tbWV0L3V0aWxzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IG15VGhlbWUgPSBkZWVwTWVyZ2UoZ3JvbW1ldCwge1xyXG5cdGdsb2JhbDoge1xyXG5cdFx0Y29sb3JzOiB7XHJcblx0XHRcdGJyYW5kOiAnI2Q2NDU0MScsXHJcblx0XHRcdGZhY2Vib29rOiAnIzAwN2ZmZicsXHJcblx0XHRcdGluc3RhZ3JhbTogJyNFMDAwODYnXHJcblx0XHR9LFxyXG5cdFx0Zm9udDoge1xyXG5cdFx0XHRmYW1pbHk6ICdKb3N0J1xyXG5cdFx0fSxcclxuXHRcdGFuY2hvcjoge1xyXG5cdFx0XHRjb2xvcjoge1xyXG5cdFx0XHRcdGRhcms6ICdncmVlbicsXHJcblx0XHRcdFx0bGlnaHQ6ICdsaWdodC0xJ1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShzZXRXaW5kb3dTaXplKSB7XHJcblx0Ly8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuXHRzZXRXaW5kb3dTaXplKHtcclxuXHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcblx0Ly8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG5cdC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuXHRjb25zdCBbIHdpbmRvd1NpemUsIHNldFdpbmRvd1NpemUgXSA9IHVzZVN0YXRlKHtcclxuXHRcdHdpZHRoOiB1bmRlZmluZWQsXHJcblx0XHRoZWlnaHQ6IHVuZGVmaW5lZFxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcblxyXG5cdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG5cdFx0XHQvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcblx0XHRcdHNldFdpbmRvd1NpemUoe1xyXG5cdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcblx0XHRcdHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcclxuXHRyZXR1cm4gd2luZG93U2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8R3JvbW1ldCB0aGVtZT17bXlUaGVtZX0gZnVsbD5cclxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdDwvR3JvbW1ldD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=