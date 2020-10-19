webpackHotUpdate_N_E("pages/index",{

/***/ "./components/media.tsx":
/*!******************************!*\
  !*** ./components/media.tsx ***!
  \******************************/
/*! exports provided: mediaStyles, Media, MediaContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaStyles", function() { return mediaStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaContextProvider", function() { return MediaContextProvider; });
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__);

var ExampleAppMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__["createMedia"])({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 1200
  }
}); // Make styles for injection into the header of the page

var mediaStyles = ExampleAppMedia.createMediaStyle();
var Media = ExampleAppMedia.Media,
    MediaContextProvider = ExampleAppMedia.MediaContextProvider;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWRpYS50c3giXSwibmFtZXMiOlsiRXhhbXBsZUFwcE1lZGlhIiwiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwibWVkaWFTdHlsZXMiLCJjcmVhdGVNZWRpYVN0eWxlIiwiTWVkaWEiLCJNZWRpYUNvbnRleHRQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxrRUFBVyxDQUFDO0FBQ25DQyxhQUFXLEVBQUU7QUFDWkMsTUFBRSxFQUFFLENBRFE7QUFFWkMsTUFBRSxFQUFFLEdBRlE7QUFHWkMsTUFBRSxFQUFFLElBSFE7QUFJWkMsTUFBRSxFQUFFO0FBSlE7QUFEc0IsQ0FBRCxDQUFuQyxDLENBU0E7O0FBQ08sSUFBTUMsV0FBVyxHQUFHUCxlQUFlLENBQUNRLGdCQUFoQixFQUFwQjtJQUVRQyxLLEdBQWdDVCxlLENBQWhDUyxLO0lBQU9DLG9CLEdBQXlCVixlLENBQXpCVSxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YzBlNmIzMWUxMGIyODMxOTViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XHJcblxyXG5jb25zdCBFeGFtcGxlQXBwTWVkaWEgPSBjcmVhdGVNZWRpYSh7XHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdHhzOiAwLFxyXG5cdFx0c206IDc2OCxcclxuXHRcdG1kOiAxMDAwLFxyXG5cdFx0bGc6IDEyMDBcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gTWFrZSBzdHlsZXMgZm9yIGluamVjdGlvbiBpbnRvIHRoZSBoZWFkZXIgb2YgdGhlIHBhZ2VcclxuZXhwb3J0IGNvbnN0IG1lZGlhU3R5bGVzID0gRXhhbXBsZUFwcE1lZGlhLmNyZWF0ZU1lZGlhU3R5bGUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IE1lZGlhLCBNZWRpYUNvbnRleHRQcm92aWRlciB9ID0gRXhhbXBsZUFwcE1lZGlhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9