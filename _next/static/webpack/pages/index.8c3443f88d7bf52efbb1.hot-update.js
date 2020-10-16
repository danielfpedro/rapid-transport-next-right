webpackHotUpdate_N_E("pages/index",{

/***/ "./components/my-gallery.jsx":
/*!***********************************!*\
  !*** ./components/my-gallery.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gallery_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-tile */ "./components/gallery-tile.jsx");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-content */ "./components/main-content.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Users\\danie\\Documents\\GitHub\\rapid-transport-next\\components\\my-gallery.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MyGallery = function MyGallery() {
  return __jsx(_main_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    pad: {
      vertical: 'xlarge'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "",
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    color: "light-1",
    level: "1",
    margin: {
      bottom: 'medium',
      top: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Sobre N\xF3s"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    level: "3",
    margin: {
      bottom: 'large',
      top: 'none'
    },
    textAlign: "",
    color: "light-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Rapid Transport \xE9 uma company maneira de confian\xE7a e tal.")), __jsx(_gallery_tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filename: "gal-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })))) // <MainContent>
  //   <Box pad={{ vertical: 'xlarge' }}>
  //     <Box align="">
  //       <Heading
  //         color="light-1"
  //         level="1"
  //         margin={{ bottom: 'medium', top: 'none' }}
  //       >
  //         Sobre Nós
  //       </Heading>
  //       <Heading
  //         level="3"
  //         margin={{ bottom: 'large', top: 'none' }}
  //         textAlign=""
  //         color="light-2"
  //       >
  //         Rapid Transport é uma company maneira de confiança e tal.
  //       </Heading>
  //     </Box>
  //     <Box direction="row" fill gap="medium" margin={{ bottom: 'medium' }}>
  //       <GalleryTile filename="gal-1" />
  //       <GalleryTile filename="gal-2" />
  //       <GalleryTile filename="gal-3" />
  //     </Box>
  //     {/* <Box direction="row" fill gap="medium">
  //     </Box> */}
  //   </Box>
  // </MainContent>
  ;
};

_c = MyGallery;
/* harmony default export */ __webpack_exports__["default"] = (MyGallery);

var _c;

$RefreshReg$(_c, "MyGallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teS1nYWxsZXJ5LmpzeCJdLCJuYW1lcyI6WyJNeUdhbGxlcnkiLCJ2ZXJ0aWNhbCIsImJvdHRvbSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFLLE9BQUcsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLEVBQVg7QUFBYyxhQUFTLEVBQUMsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFNBQUssRUFBQyxHQUZSO0FBR0UsVUFBTSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxRQUFWO0FBQW9CQyxTQUFHLEVBQUU7QUFBekIsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBUUUsTUFBQywrQ0FBRDtBQUNFLFNBQUssRUFBQyxHQURSO0FBRUUsVUFBTSxFQUFFO0FBQUVELFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxTQUFHLEVBQUU7QUFBeEIsS0FGVjtBQUdFLGFBQVMsRUFBQyxFQUhaO0FBSUUsU0FBSyxFQUFDLFNBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFSRixDQURGLEVBa0JFLE1BQUMscURBQUQ7QUFBYSxZQUFRLEVBQUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQURGLENBREYsQ0FERixDQWtDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQS9ERjtBQWlFRCxDQWxFRDs7S0FBTUgsUztBQW9FU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGMzNDQzZjg4ZDdiZjUyZWZiYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ2dyb21tZXQnO1xyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnZ3JvbW1ldC1pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5VGlsZSBmcm9tICcuL2dhbGxlcnktdGlsZSc7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuL21haW4tY29udGVudCc7XHJcblxyXG5jb25zdCBNeUdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGVudD5cclxuICAgICAgPEJveCBwYWQ9e3sgdmVydGljYWw6ICd4bGFyZ2UnIH19PlxyXG4gICAgICAgIDxCb3ggYWxpZ249XCJcIiBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodC0xXCJcclxuICAgICAgICAgICAgICBsZXZlbD1cIjFcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nLCB0b3A6ICdub25lJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU29icmUgTsOzc1xyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgbGV2ZWw9XCIzXCJcclxuICAgICAgICAgICAgICBtYXJnaW49e3sgYm90dG9tOiAnbGFyZ2UnLCB0b3A6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cIlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodC0yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJhcGlkIFRyYW5zcG9ydCDDqSB1bWEgY29tcGFueSBtYW5laXJhIGRlIGNvbmZpYW7Dp2EgZSB0YWwuXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTNcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7LyogPEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGdhcD1cIm1lZGl1bVwiIG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nIH19PlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTFcIiAvPlxyXG4gICAgICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTJcIiAvPlxyXG5cclxuICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgey8qIDxCb3ggZGlyZWN0aW9uPVwicm93XCIgZmlsbCBnYXA9XCJtZWRpdW1cIj5cclxuICAgICAgICBcclxuICAgICAgPC9Cb3g+ICovfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTWFpbkNvbnRlbnQ+XHJcbiAgICAvLyA8TWFpbkNvbnRlbnQ+XHJcbiAgICAvLyAgIDxCb3ggcGFkPXt7IHZlcnRpY2FsOiAneGxhcmdlJyB9fT5cclxuICAgIC8vICAgICA8Qm94IGFsaWduPVwiXCI+XHJcbiAgICAvLyAgICAgICA8SGVhZGluZ1xyXG4gICAgLy8gICAgICAgICBjb2xvcj1cImxpZ2h0LTFcIlxyXG4gICAgLy8gICAgICAgICBsZXZlbD1cIjFcIlxyXG4gICAgLy8gICAgICAgICBtYXJnaW49e3sgYm90dG9tOiAnbWVkaXVtJywgdG9wOiAnbm9uZScgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgU29icmUgTsOzc1xyXG4gICAgLy8gICAgICAgPC9IZWFkaW5nPlxyXG4gICAgLy8gICAgICAgPEhlYWRpbmdcclxuICAgIC8vICAgICAgICAgbGV2ZWw9XCIzXCJcclxuICAgIC8vICAgICAgICAgbWFyZ2luPXt7IGJvdHRvbTogJ2xhcmdlJywgdG9wOiAnbm9uZScgfX1cclxuICAgIC8vICAgICAgICAgdGV4dEFsaWduPVwiXCJcclxuICAgIC8vICAgICAgICAgY29sb3I9XCJsaWdodC0yXCJcclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgUmFwaWQgVHJhbnNwb3J0IMOpIHVtYSBjb21wYW55IG1hbmVpcmEgZGUgY29uZmlhbsOnYSBlIHRhbC5cclxuICAgIC8vICAgICAgIDwvSGVhZGluZz5cclxuICAgIC8vICAgICA8L0JveD5cclxuXHJcbiAgICAvLyAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIiBmaWxsIGdhcD1cIm1lZGl1bVwiIG1hcmdpbj17eyBib3R0b206ICdtZWRpdW0nIH19PlxyXG4gICAgLy8gICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTFcIiAvPlxyXG4gICAgLy8gICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTJcIiAvPlxyXG4gICAgLy8gICAgICAgPEdhbGxlcnlUaWxlIGZpbGVuYW1lPVwiZ2FsLTNcIiAvPlxyXG4gICAgLy8gICAgIDwvQm94PlxyXG4gICAgLy8gICAgIHsvKiA8Qm94IGRpcmVjdGlvbj1cInJvd1wiIGZpbGwgZ2FwPVwibWVkaXVtXCI+XHJcblxyXG4gICAgLy8gICAgIDwvQm94PiAqL31cclxuICAgIC8vICAgPC9Cb3g+XHJcbiAgICAvLyA8L01haW5Db250ZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=