webpackHotUpdate_N_E("pages/index",{

/***/ "./components/follow-us.tsx":
/*!**********************************!*\
  !*** ./components/follow-us.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _social_networks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-networks */ "./components/social-networks.tsx");
var _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\follow-us.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var items = [{
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["FacebookOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }),
  backgroundColor: 'brand'
}, {
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }),
  backgroundColor: 'brand'
}];
var size = 60;

var FollowUs = function FollowUs() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "2",
    margin: {
      top: 'none',
      bottom: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Follow Us!"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    direction: "row",
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, items.map(function (item) {
    return __jsx(_social_networks__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: size,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    });
  })));
};

_c = FollowUs;
/* harmony default export */ __webpack_exports__["default"] = (FollowUs);

var _c;

$RefreshReg$(_c, "FollowUs");

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

/***/ "./components/social-networks.tsx":
/*!****************************************!*\
  !*** ./components/social-networks.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\social-networks.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SocialNetworks = function SocialNetworks(_ref) {
  var size = _ref.size;

  __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row",
    gap: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, items.map(function (_ref2) {
    var icon = _ref2.icon,
        backgroundColor = _ref2.backgroundColor;
    return __jsx(Anchor, {
      href: "#",
      label: __jsx(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        background: backgroundColor,
        round: "full",
        align: "center",
        justify: "around",
        width: size + 'px',
        height: size + 'px',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    });
  }));
};

_c = SocialNetworks;
/* harmony default export */ __webpack_exports__["default"] = (SocialNetworks);

var _c;

$RefreshReg$(_c, "SocialNetworks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3ctdXMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvY2lhbC1uZXR3b3Jrcy50c3giXSwibmFtZXMiOlsiaXRlbXMiLCJpY29uIiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsIkZvbGxvd1VzIiwidG9wIiwiYm90dG9tIiwibWFwIiwiaXRlbSIsIlNvY2lhbE5ldHdvcmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsTUFBSSxFQUFFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFSO0FBQTRCQyxpQkFBZSxFQUFFO0FBQTdDLENBRFksRUFFWjtBQUFFRCxNQUFJLEVBQUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVI7QUFBdUJDLGlCQUFlLEVBQUU7QUFBeEMsQ0FGWSxDQUFkO0FBS0EsSUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFLE1BQUMsMkNBQUQ7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFTLFNBQUssRUFBQyxHQUFmO0FBQW1CLFVBQU0sRUFBRTtBQUFDQyxTQUFHLEVBQUUsTUFBTjtBQUFjQyxZQUFNLEVBQUU7QUFBdEIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUdFLE1BQUMsMkNBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLHdEQUFEO0FBQWdCLFVBQUksRUFBRUwsSUFBdEI7QUFBNEIsVUFBSSxFQUFFSyxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREgsQ0FIRixDQURGO0FBY0QsQ0FmRDs7S0FBTUosUTtBQWlCU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7O0FBRUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFZO0FBQUEsTUFBVk4sSUFBVSxRQUFWQSxJQUFVOztBQUMvQixRQUFDLDJDQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsT0FBRyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0gsS0FBSyxDQUFDTyxHQUFOLENBQVU7QUFBQSxRQUFHTixJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxlQUFULFNBQVNBLGVBQVQ7QUFBQSxXQUNULE1BQUMsTUFBRDtBQUNFLFVBQUksRUFBQyxHQURQO0FBRUUsV0FBSyxFQUNILE1BQUMsMkNBQUQ7QUFDRSxrQkFBVSxFQUFFQSxlQURkO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsUUFIUjtBQUlFLGVBQU8sRUFBQyxRQUpWO0FBS0UsYUFBSyxFQUFFQyxJQUFJLEdBQUcsSUFMaEI7QUFNRSxjQUFNLEVBQUVBLElBQUksR0FBRyxJQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUdGLElBUkgsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREQ7QUFtQkgsQ0FwQkQ7O0tBQU1RLGM7QUFzQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyNGMxNzM5NjBiNWEzZjNhYTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IsIEJveCwgQnV0dG9uLCBIZWFkaW5nLCBTdGFjayB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tPcHRpb24sIEhvbWUsIEluc3RhZ3JhbSB9IGZyb20gJ2dyb21tZXQtaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU29jaWFsTmV0d29ya3MgZnJvbSAnLi9zb2NpYWwtbmV0d29ya3MnO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgeyBpY29uOiA8RmFjZWJvb2tPcHRpb24gLz4sIGJhY2tncm91bmRDb2xvcjogJ2JyYW5kJyB9LFxyXG4gIHsgaWNvbjogPEluc3RhZ3JhbSAvPiwgYmFja2dyb3VuZENvbG9yOiAnYnJhbmQnIH0sXHJcbl07XHJcblxyXG5jb25zdCBzaXplID0gNjA7XHJcblxyXG5jb25zdCBGb2xsb3dVcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICA8SGVhZGluZyBsZXZlbD1cIjJcIiBtYXJnaW49e3t0b3A6ICdub25lJywgYm90dG9tOiAnbWVkaXVtJ319PkZvbGxvdyBVcyE8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cIm1lZGl1bVwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxTb2NpYWxOZXR3b3JrcyBzaXplPXtzaXplfSBpdGVtPXtpdGVtfSAvPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd1VzO1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiZ3JvbW1ldFwiO1xyXG5cclxuY29uc3QgU29jaWFsTmV0d29ya3MgPSAoe3NpemV9KSA9PiB7XHJcbiAgICA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cIm1lZGl1bVwiPlxyXG4gICAge2l0ZW1zLm1hcCgoeyBpY29uLCBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gKFxyXG4gICAgICA8QW5jaG9yXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYmFja2dyb3VuZD17YmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICByb3VuZD1cImZ1bGxcIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJhcm91bmRcIlxyXG4gICAgICAgICAgICB3aWR0aD17c2l6ZSArICdweCd9XHJcbiAgICAgICAgICAgIGhlaWdodD17c2l6ZSArICdweCd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcbiAgPC9Cb3g+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE5ldHdvcmtzOyJdLCJzb3VyY2VSb290IjoiIn0=