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

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Breakpoints.js":
/*!*********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Breakpoints.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breakpoints = exports.BreakpointConstraint = void 0;

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function breakpointKey(breakpoint) {
  return Array.isArray(breakpoint) ? breakpoint.join("-") : breakpoint;
}

var BreakpointConstraint;
/**
 * Encapsulates all breakpoint data needed by the Media component. The data is
 * generated on initialization so no further runtime work is necessary.
 */

exports.BreakpointConstraint = BreakpointConstraint;

(function (BreakpointConstraint) {
  BreakpointConstraint["at"] = "at";
  BreakpointConstraint["lessThan"] = "lessThan";
  BreakpointConstraint["greaterThan"] = "greaterThan";
  BreakpointConstraint["greaterThanOrEqual"] = "greaterThanOrEqual";
  BreakpointConstraint["between"] = "between";
})(BreakpointConstraint || (exports.BreakpointConstraint = BreakpointConstraint = {}));

var Breakpoints =
/*#__PURE__*/
function () {
  _createClass(Breakpoints, null, [{
    key: "validKeys",
    value: function validKeys() {
      return [BreakpointConstraint.at, BreakpointConstraint.lessThan, BreakpointConstraint.greaterThan, BreakpointConstraint.greaterThanOrEqual, BreakpointConstraint.between];
    }
  }]);

  function Breakpoints(_breakpoints) {
    var _this = this,
        _this$_mediaQueries;

    _classCallCheck(this, Breakpoints);

    _defineProperty(this, "_sortedBreakpoints", void 0);

    _defineProperty(this, "_breakpoints", void 0);

    _defineProperty(this, "_mediaQueries", void 0);

    _defineProperty(this, "findBreakpointsForWidths", function (fromWidth, throughWidth) {
      var fromBreakpoint = _this.findBreakpointAtWidth(fromWidth);

      if (!fromBreakpoint) {
        return undefined;
      }

      var throughBreakpoint = _this.findBreakpointAtWidth(throughWidth);

      if (!throughBreakpoint || fromBreakpoint === throughBreakpoint) {
        return [fromBreakpoint];
      } else {
        return _this._sortedBreakpoints.slice(_this._sortedBreakpoints.indexOf(fromBreakpoint), _this._sortedBreakpoints.indexOf(throughBreakpoint) + 1);
      }
    });

    _defineProperty(this, "findBreakpointAtWidth", function (width) {
      return _this._sortedBreakpoints.find(function (breakpoint, i) {
        var nextBreakpoint = _this._sortedBreakpoints[i + 1];

        if (nextBreakpoint) {
          return width >= _this._breakpoints[breakpoint] && width < _this._breakpoints[nextBreakpoint];
        } else {
          return width >= _this._breakpoints[breakpoint];
        }
      });
    });

    _defineProperty(this, "valuesWithBreakpointProps", function (values) {
      var max = values.length;
      var valueBreakpoints = [];
      var lastTuple;

      _this._sortedBreakpoints.forEach(function (breakpoint, i) {
        var value = values[i];

        if (i < max && (!lastTuple || lastTuple[0] !== value)) {
          lastTuple = [value, [breakpoint]];
          valueBreakpoints.push(lastTuple);
        } else {
          lastTuple[1].push(breakpoint);
        }
      });

      return valueBreakpoints.map(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            breakpoints = _ref2[1];

        var props = {};

        if (i === valueBreakpoints.length - 1) {
          props.greaterThanOrEqual = breakpoints[0];
        } else if (breakpoints.length === 1) {
          props.at = breakpoints[0];
        } else {
          // TODO: This is less than ideal, would be good to have a `through`
          //       prop, which unlike `between` is inclusive.
          props.between = [breakpoints[0], valueBreakpoints[i + 1][1][0]];
        }

        return [value, props];
      });
    });

    this._breakpoints = _breakpoints;
    this._sortedBreakpoints = Object.keys(_breakpoints).map(function (breakpoint) {
      return [breakpoint, _breakpoints[breakpoint]];
    }).sort(function (a, b) {
      return a[1] < b[1] ? -1 : 1;
    }).map(function (breakpointAndValue) {
      return breakpointAndValue[0];
    }); // List of all possible and valid `between` combinations

    var betweenCombinations = this._sortedBreakpoints.slice(0, -1).reduce(function (acc, b1, i) {
      return _toConsumableArray(acc).concat(_toConsumableArray(_this._sortedBreakpoints.slice(i + 1).map(function (b2) {
        return [b1, b2];
      })));
    }, []);

    this._mediaQueries = (_this$_mediaQueries = {}, _defineProperty(_this$_mediaQueries, BreakpointConstraint.at, this._createBreakpointQueries(BreakpointConstraint.at, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.lessThan, this._createBreakpointQueries(BreakpointConstraint.lessThan, this._sortedBreakpoints.slice(1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThan, this._createBreakpointQueries(BreakpointConstraint.greaterThan, this._sortedBreakpoints.slice(0, -1))), _defineProperty(_this$_mediaQueries, BreakpointConstraint.greaterThanOrEqual, this._createBreakpointQueries(BreakpointConstraint.greaterThanOrEqual, this._sortedBreakpoints)), _defineProperty(_this$_mediaQueries, BreakpointConstraint.between, this._createBreakpointQueries(BreakpointConstraint.between, betweenCombinations)), _this$_mediaQueries);
  }

  _createClass(Breakpoints, [{
    key: "toRuleSets",
    value: function toRuleSets() {
      var _this2 = this;

      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Breakpoints.validKeys();
      var selectedMediaQueries = keys.reduce(function (mediaQueries, query) {
        mediaQueries[query] = _this2._mediaQueries[query];
        return mediaQueries;
      }, {});
      return Object.entries(selectedMediaQueries).reduce(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            type = _ref4[0],
            queries = _ref4[1];

        queries.forEach(function (query, breakpoint) {
          // We need to invert the query, such that it matches when we want the
          // element to be hidden.
          acc.push((0, _Utils.createRuleSet)((0, _Utils.createClassName)(type, breakpoint), "not all and ".concat(query)));
        });
        return acc;
      }, []);
    }
  }, {
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(breakpointProps, onlyRenderAt) {
      var _this3 = this;

      breakpointProps = this._normalizeProps(breakpointProps);

      if (breakpointProps.lessThan) {
        var width = this._breakpoints[breakpointProps.lessThan];
        var lowestAllowedWidth = Math.min.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));
        return lowestAllowedWidth < width;
      } else if (breakpointProps.greaterThan) {
        var _width = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];

        var highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));
        return highestAllowedWidth >= _width;
      } else if (breakpointProps.greaterThanOrEqual) {
        var _width2 = this._breakpoints[breakpointProps.greaterThanOrEqual];

        var _highestAllowedWidth = Math.max.apply(Math, _toConsumableArray(onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        })));

        return _highestAllowedWidth >= _width2;
      } else if (breakpointProps.between) {
        // TODO: This is the only useful breakpoint to negate, but we’ll
        //       we’ll see when/if we need it. We could then also decide
        //       to add `oustide`.
        var fromWidth = this._breakpoints[breakpointProps.between[0]];
        var toWidth = this._breakpoints[breakpointProps.between[1]];
        var allowedWidths = onlyRenderAt.map(function (breakpoint) {
          return _this3._breakpoints[breakpoint];
        });
        return !(Math.max.apply(Math, _toConsumableArray(allowedWidths)) < fromWidth || Math.min.apply(Math, _toConsumableArray(allowedWidths)) >= toWidth);
      }

      return false;
    }
  }, {
    key: "_normalizeProps",
    value: function _normalizeProps(breakpointProps) {
      if (breakpointProps.at) {
        var fromIndex = this._sortedBreakpoints.indexOf(breakpointProps.at);

        var to = this._sortedBreakpoints[fromIndex + 1];
        return to ? {
          between: [breakpointProps.at, to]
        } : {
          greaterThanOrEqual: breakpointProps.at
        };
      }

      return breakpointProps;
    }
  }, {
    key: "_createBreakpointQuery",
    value: function _createBreakpointQuery(breakpointProps) {
      breakpointProps = this._normalizeProps(breakpointProps);

      if (breakpointProps.lessThan) {
        var width = this._breakpoints[breakpointProps.lessThan];
        return "(max-width:".concat(width - 1, "px)");
      } else if (breakpointProps.greaterThan) {
        var _width3 = this._breakpoints[this._findNextBreakpoint(breakpointProps.greaterThan)];

        return "(min-width:".concat(_width3, "px)");
      } else if (breakpointProps.greaterThanOrEqual) {
        var _width4 = this._breakpoints[breakpointProps.greaterThanOrEqual];
        return "(min-width:".concat(_width4, "px)");
      } else if (breakpointProps.between) {
        // TODO: This is the only useful breakpoint to negate, but we’ll
        //       we’ll see when/if we need it. We could then also decide
        //       to add `outside`.
        var fromWidth = this._breakpoints[breakpointProps.between[0]];
        var toWidth = this._breakpoints[breakpointProps.between[1]];
        return "(min-width:".concat(fromWidth, "px) and (max-width:").concat(toWidth - 1, "px)");
      }

      throw new Error("Unexpected breakpoint props: ".concat(JSON.stringify(breakpointProps)));
    }
  }, {
    key: "_createBreakpointQueries",
    value: function _createBreakpointQueries(key, forBreakpoints) {
      var _this4 = this;

      return forBreakpoints.reduce(function (map, breakpoint) {
        map.set(breakpointKey(breakpoint), _this4._createBreakpointQuery(_defineProperty({}, key, breakpoint)));
        return map;
      }, new Map());
    }
  }, {
    key: "_findNextBreakpoint",
    value: function _findNextBreakpoint(breakpoint) {
      var nextBreakpoint = this._sortedBreakpoints[this._sortedBreakpoints.indexOf(breakpoint) + 1];

      if (!nextBreakpoint) {
        throw new Error("There is no breakpoint larger than ".concat(breakpoint));
      }

      return nextBreakpoint;
    }
  }, {
    key: "sortedBreakpoints",
    get: function get() {
      return this._sortedBreakpoints;
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return Array.from(this._mediaQueries[BreakpointConstraint.at].entries()).reduce(function (acc, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            v = _ref6[1];

        return _objectSpread({}, acc, _defineProperty({}, k, v));
      }, {});
    }
  }, {
    key: "largestBreakpoint",
    get: function get() {
      return this._sortedBreakpoints[this._sortedBreakpoints.length - 1];
    }
  }]);

  return Breakpoints;
}();

exports.Breakpoints = Breakpoints;
//# sourceMappingURL=Breakpoints.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/DynamicResponsive.js":
/*!***************************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/DynamicResponsive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponsiveComponents = createResponsiveComponents;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shallowEqual = function shallowEqual(a, b) {
  for (var _key in a) {
    if (a[_key] !== b[_key]) return false;
  }

  return true;
};
/** TODO */


function createResponsiveComponents() {
  var ResponsiveContext = _react.default.createContext({});

  ResponsiveContext.displayName = "Media.DynamicContext";
  var ResponsiveConsumer = ResponsiveContext.Consumer;
  return {
    Consumer: ResponsiveConsumer,
    Provider:
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(ResponsiveProvider, _React$Component);

      function ResponsiveProvider(props) {
        var _this;

        _classCallCheck(this, ResponsiveProvider);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveProvider).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSupportedEnvironment", function () {
          return typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupMatchers", function (mediaQueries) {
          return Object.keys(mediaQueries).reduce(function (matchers, key) {
            return _objectSpread({}, matchers, _defineProperty({}, key, window.matchMedia(mediaQueries[key])));
          }, {});
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkMatchers", function (mediaQueryMatchers) {
          return Object.keys(mediaQueryMatchers).reduce(function (matches, key) {
            return _objectSpread({}, matches, _defineProperty({}, key, mediaQueryMatchers[key].matches));
          }, {});
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mediaQueryStatusChangedCallback", function () {
          var mediaQueryMatches = _this.checkMatchers(_this.state.mediaQueryMatchers);

          _this.setState({
            mediaQueryMatches: mediaQueryMatches
          });
        });

        var _mediaQueryMatchers = undefined;

        var _mediaQueryMatches;

        if (_this.isSupportedEnvironment()) {
          _mediaQueryMatchers = _this.setupMatchers(props.mediaQueries);
          _mediaQueryMatches = _this.checkMatchers(_mediaQueryMatchers);
        } else {
          _mediaQueryMatches = Object.keys(props.mediaQueries).reduce(function (matches, key) {
            return _objectSpread({}, matches, _defineProperty({}, key, !!props.initialMatchingMediaQueries && props.initialMatchingMediaQueries.includes(key)));
          }, {});
        }

        _this.state = {
          mediaQueryMatchers: _mediaQueryMatchers,
          mediaQueryMatches: _mediaQueryMatches
        };
        return _this;
      }

      _createClass(ResponsiveProvider, [{
        key: "componentDidMount",
        // Lifecycle methods
        value: function componentDidMount() {
          if (this.state.mediaQueryMatchers) {
            var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
            Object.values(this.state.mediaQueryMatchers).forEach(function (matcher) {
              matcher.addListener(mediaQueryStatusChangedCallback);
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.mediaQueryMatchers) {
            var mediaQueryStatusChangedCallback = this.mediaQueryStatusChangedCallback;
            Object.values(this.state.mediaQueryMatchers).forEach(function (matcher) {
              return matcher.removeListener(mediaQueryStatusChangedCallback);
            });
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (!this.state.mediaQueryMatchers) return false;
          if (nextProps.children !== this.props.children) return true;

          if (shallowEqual(this.state.mediaQueryMatches, nextState.mediaQueryMatches)) {
            return false;
          }

          return true;
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(ResponsiveContext.Provider, {
            value: this.state.mediaQueryMatches
          }, this.props.children);
        }
      }]);

      return ResponsiveProvider;
    }(_react.default.Component)
  };
}
//# sourceMappingURL=DynamicResponsive.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Interactions.js":
/*!**********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Interactions.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interactions = exports.InteractionKey = void 0;

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InteractionKey;
/**
 * Encapsulates all interaction data needed by the Media component. The data is
 * generated on initialization so no further runtime work is necessary.
 */

exports.InteractionKey = InteractionKey;

(function (InteractionKey) {
  InteractionKey["interaction"] = "interaction";
})(InteractionKey || (exports.InteractionKey = InteractionKey = {}));

var Interactions =
/*#__PURE__*/
function () {
  _createClass(Interactions, null, [{
    key: "validKeys",
    value: function validKeys() {
      return [InteractionKey.interaction];
    }
  }]);

  function Interactions(interactions) {
    _classCallCheck(this, Interactions);

    _defineProperty(this, "_interactions", void 0);

    this._interactions = interactions;
  }

  _createClass(Interactions, [{
    key: "toRuleSets",
    value: function toRuleSets() {
      return Object.entries(this._interactions).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            query = _ref2[1];

        return _toConsumableArray(acc).concat([(0, _Utils.createRuleSet)((0, _Utils.createClassName)(InteractionKey.interaction, name), query)]);
      }, []);
    }
  }, {
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(interaction, onlyMatch) {
      return !!(onlyMatch && onlyMatch.includes(interaction));
    }
  }, {
    key: "interactions",
    get: function get() {
      return Object.keys(this._interactions);
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return Object.entries(this._interactions).reduce(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            query = _ref4[1];

        return _objectSpread({}, acc, _defineProperty({}, name, query));
      }, {});
    }
  }]);

  return Interactions;
}();

exports.Interactions = Interactions;
//# sourceMappingURL=Interactions.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Media.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Media.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMedia = createMedia;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DynamicResponsive = __webpack_require__(/*! ./DynamicResponsive */ "./node_modules/@artsy/fresnel/dist/DynamicResponsive.js");

var _MediaQueries = __webpack_require__(/*! ./MediaQueries */ "./node_modules/@artsy/fresnel/dist/MediaQueries.js");

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This is used to generate a Media component, its context provider, and CSS
 * rules based on your application’s breakpoints and interactions.
 *
 * Note that the interaction queries are entirely up to you to define and they
 * should be written in such a way that they match when you want the element to
 * be hidden.
 *
 * @example
 *
   ```tsx
   const MyAppMedia = createMedia({
     breakpoints: {
       xs: 0,
       sm: 768,
       md: 900
       lg: 1024,
       xl: 1192,
     },
     interactions: {
       hover: `not all and (hover:hover)`
     },
   })

   export const Media = MyAppMedia.Media
   export const MediaContextProvider = MyAppMedia.MediaContextProvider
   export const createMediaStyle = MyAppMedia.createMediaStyle
   ```
 *
 */
function createMedia(config) {
  var _class, _temp;

  var mediaQueries = new _MediaQueries.MediaQueries(config.breakpoints, config.interactions || {});
  var DynamicResponsive = (0, _DynamicResponsive.createResponsiveComponents)();

  var MediaContext = _react.default.createContext({});

  MediaContext.displayName = "Media.Context";

  var MediaContextProvider = function MediaContextProvider(_ref) {
    var disableDynamicMediaQueries = _ref.disableDynamicMediaQueries,
        onlyMatch = _ref.onlyMatch,
        children = _ref.children;

    if (disableDynamicMediaQueries) {
      return _react.default.createElement(MediaContext.Provider, {
        value: {
          onlyMatch: onlyMatch
        }
      }, children);
    } else {
      return _react.default.createElement(DynamicResponsive.Provider, {
        mediaQueries: mediaQueries.dynamicResponsiveMediaQueries,
        initialMatchingMediaQueries: (0, _Utils.intersection)(mediaQueries.mediaQueryTypes, onlyMatch)
      }, _react.default.createElement(DynamicResponsive.Consumer, null, function (matches) {
        var matchingMediaQueries = Object.keys(matches).filter(function (key) {
          return matches[key];
        });
        return _react.default.createElement(MediaContext.Provider, {
          value: {
            onlyMatch: (0, _Utils.intersection)(matchingMediaQueries, onlyMatch)
          }
        }, children);
      }));
    }
  };

  var Media = (_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Media, _React$Component);

    function Media(props) {
      var _this;

      _classCallCheck(this, Media);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Media).call(this, props));
      validateProps(props);
      return _this;
    }

    _createClass(Media, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;
        return _react.default.createElement(MediaContext.Consumer, null, function () {
          var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              onlyMatch = _ref2.onlyMatch;

          var className;

          var children = props.children,
              passedClassName = props.className,
              interaction = props.interaction,
              breakpointProps = _objectWithoutProperties(props, ["children", "className", "interaction"]);

          if (props.interaction) {
            className = (0, _Utils.createClassName)("interaction", props.interaction);
          } else {
            if (props.at) {
              var largestBreakpoint = mediaQueries.breakpoints.largestBreakpoint;

              if (props.at === largestBreakpoint) {
                // TODO: We should look into making React’s __DEV__ available
                //       and have webpack completely compile these away.
                var ownerName = null;

                try {
                  var owner = _this2._reactInternalFiber._debugOwner.type;
                  ownerName = owner.displayName || owner.name;
                } catch (err) {// no-op
                }

                console.warn("[@artsy/fresnel] " + "`at` is being used with the largest breakpoint. " + "Consider using `<Media greaterThanOrEqual=" + "\"".concat(largestBreakpoint, "\">` to account for future ") + "breakpoint definitions outside of this range.".concat(ownerName ? " It is being used in the ".concat(ownerName, " component.") : ""));
              }
            }

            var type = (0, _Utils.propKey)(breakpointProps);
            var breakpoint = breakpointProps[type];
            className = (0, _Utils.createClassName)(type, breakpoint);
          }

          var renderChildren = onlyMatch === undefined || mediaQueries.shouldRenderMediaQuery(_objectSpread({}, breakpointProps, {
            interaction: interaction
          }), onlyMatch);

          if (props.children instanceof Function) {
            return props.children(className, renderChildren);
          } else {
            return _react.default.createElement("div", {
              className: "fresnel-container ".concat(className, " ").concat(passedClassName),
              suppressHydrationWarning: !renderChildren
            }, renderChildren ? props.children : null);
          }
        });
      }
    }]);

    return Media;
  }(_react.default.Component), _defineProperty(_class, "defaultProps", {
    className: ""
  }), _temp);
  return {
    Media: Media,
    MediaContextProvider: MediaContextProvider,
    createMediaStyle: mediaQueries.toStyle,
    SortedBreakpoints: _toConsumableArray(mediaQueries.breakpoints.sortedBreakpoints),
    findBreakpointAtWidth: mediaQueries.breakpoints.findBreakpointAtWidth,
    findBreakpointsForWidths: mediaQueries.breakpoints.findBreakpointsForWidths,
    valuesWithBreakpointProps: mediaQueries.breakpoints.valuesWithBreakpointProps
  };
}

var MutuallyExclusiveProps = _MediaQueries.MediaQueries.validKeys();

function validateProps(props) {
  var selectedProps = Object.keys(props).filter(function (prop) {
    return MutuallyExclusiveProps.includes(prop);
  });

  if (selectedProps.length < 1) {
    throw new Error("1 of ".concat(MutuallyExclusiveProps.join(", "), " is required."));
  } else if (selectedProps.length > 1) {
    throw new Error("Only 1 of ".concat(selectedProps.join(", "), " is allowed at a time."));
  }
}
//# sourceMappingURL=Media.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/MediaQueries.js":
/*!**********************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/MediaQueries.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaQueries = void 0;

var _Breakpoints = __webpack_require__(/*! ./Breakpoints */ "./node_modules/@artsy/fresnel/dist/Breakpoints.js");

var _Interactions = __webpack_require__(/*! ./Interactions */ "./node_modules/@artsy/fresnel/dist/Interactions.js");

var _Utils = __webpack_require__(/*! ./Utils */ "./node_modules/@artsy/fresnel/dist/Utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Encapsulates all interaction data (and breakpoint data in the superclass)
 * needed by the Media component. The data is generated on initialization so no
 * further runtime work is necessary.
 */
var MediaQueries =
/*#__PURE__*/
function () {
  _createClass(MediaQueries, null, [{
    key: "validKeys",
    value: function validKeys() {
      return _toConsumableArray(_Breakpoints.Breakpoints.validKeys()).concat(_toConsumableArray(_Interactions.Interactions.validKeys()));
    }
  }]);

  function MediaQueries(breakpoints, interactions) {
    var _this = this;

    _classCallCheck(this, MediaQueries);

    _defineProperty(this, "_breakpoints", void 0);

    _defineProperty(this, "_interactions", void 0);

    _defineProperty(this, "toStyle", function (breakpointKeys) {
      return [// Don’t add any size to the layout
      ".fresnel-container{margin:0;padding:0;}"].concat(_toConsumableArray(_this._breakpoints.toRuleSets(breakpointKeys)), _toConsumableArray(_this._interactions.toRuleSets())).join("\n");
    });

    this._breakpoints = new _Breakpoints.Breakpoints(breakpoints);
    this._interactions = new _Interactions.Interactions(interactions || {});
  }

  _createClass(MediaQueries, [{
    key: "shouldRenderMediaQuery",
    value: function shouldRenderMediaQuery(mediaQueryProps, onlyMatch) {
      var interaction = mediaQueryProps.interaction,
          breakpointProps = _objectWithoutProperties(mediaQueryProps, ["interaction"]);

      if (interaction) {
        return this._interactions.shouldRenderMediaQuery(interaction, onlyMatch);
      } // Remove any interaction possibilities from the list.


      var onlyMatchBreakpoints = (0, _Utils.intersection)(onlyMatch, this._breakpoints.sortedBreakpoints);
      return this._breakpoints.shouldRenderMediaQuery(breakpointProps, onlyMatchBreakpoints);
    }
  }, {
    key: "breakpoints",
    get: function get() {
      return this._breakpoints;
    }
  }, {
    key: "mediaQueryTypes",
    get: function get() {
      return _toConsumableArray(this._breakpoints.sortedBreakpoints).concat(_toConsumableArray(this._interactions.interactions));
    }
  }, {
    key: "dynamicResponsiveMediaQueries",
    get: function get() {
      return _objectSpread({}, this._breakpoints.dynamicResponsiveMediaQueries, this._interactions.dynamicResponsiveMediaQueries);
    }
  }]);

  return MediaQueries;
}();

exports.MediaQueries = MediaQueries;
//# sourceMappingURL=MediaQueries.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/Utils.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/Utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propKey = propKey;
exports.intersection = intersection;
exports.createRuleSet = createRuleSet;
exports.createClassName = createClassName;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Extracts the single breakpoint prop from the props object.
 */
function propKey(breakpointProps) {
  return Object.keys(breakpointProps)[0];
}
/**
 * Returns the intersection of two arrays.
 */


function intersection(a1, a2) {
  return a2 ? a1.filter(function (element) {
    return a2.indexOf(element) >= 0;
  }) : _toConsumableArray(a1);
}
/**
 * Generate a style rule for a given class name that will hide the element
 * when the given query matches.
 */


function createRuleSet(className, query) {
  return "@media ".concat(query, "{.").concat(className, "{display:none!important;}}");
}
/**
 * Given a list of strings, or string tuples, generates a class name.
 */


function createClassName() {
  for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
    components[_key] = arguments[_key];
  }

  return ["fresnel"].concat(_toConsumableArray(components.reduce(function (acc, breakpoint) {
    return Array.isArray(breakpoint) ? _toConsumableArray(acc).concat(_toConsumableArray(breakpoint)) : _toConsumableArray(acc).concat([breakpoint]);
  }, []))).join("-");
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@artsy/fresnel/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@artsy/fresnel/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createMedia", {
  enumerable: true,
  get: function get() {
    return _Media.createMedia;
  }
});
Object.defineProperty(exports, "BreakpointKey", {
  enumerable: true,
  get: function get() {
    return _Breakpoints.BreakpointConstraint;
  }
});

var _Media = __webpack_require__(/*! ./Media */ "./node_modules/@artsy/fresnel/dist/Media.js");

var _Breakpoints = __webpack_require__(/*! ./Breakpoints */ "./node_modules/@artsy/fresnel/dist/Breakpoints.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/media */ "./components/media.tsx");
/* harmony import */ var _components_my_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/my-footer */ "./components/my-footer.tsx");
/* harmony import */ var _components_my_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/my-gallery */ "./components/my-gallery.tsx");
/* harmony import */ var _components_my_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/my-navbar */ "./components/my-navbar.tsx");
/* harmony import */ var _components_our_job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/our-job */ "./components/our-job.tsx");
var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\github\\rapid-transport-next-right\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Index = function Index() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["MediaContextProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, "Rapid Transport USA, LLC")), __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    at: "xs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "Mobile"), __jsx(_components_media__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    greaterThan: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "Other than Mobile"), __jsx(_components_my_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    breakpoint: _components_media__WEBPACK_IMPORTED_MODULE_5__["Media"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(_components_our_job__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx(_components_my_gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx(_components_my_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  })));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWRpYS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXJ0c3kvZnJlc25lbC9kaXN0L0JyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9EeW5hbWljUmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcnRzeS9mcmVzbmVsL2Rpc3QvSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcnRzeS9mcmVzbmVsL2Rpc3QvTWVkaWFRdWVyaWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFydHN5L2ZyZXNuZWwvZGlzdC9VdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcnRzeS9mcmVzbmVsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFeGFtcGxlQXBwTWVkaWEiLCJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwieHMiLCJzbSIsIm1kIiwibGciLCJtZWRpYVN0eWxlcyIsImNyZWF0ZU1lZGlhU3R5bGUiLCJNZWRpYSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msa0VBQVcsQ0FBQztBQUNuQ0MsYUFBVyxFQUFFO0FBQ1pDLE1BQUUsRUFBRSxDQURRO0FBRVpDLE1BQUUsRUFBRSxHQUZRO0FBR1pDLE1BQUUsRUFBRSxJQUhRO0FBSVpDLE1BQUUsRUFBRTtBQUpRO0FB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QTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREQsQ0FERCxFQUtDLE1BQUMsdURBQUQ7QUFBTyxNQUFFLEVBQUMsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsRUFNQyxNQUFDLHVEQUFEO0FBQU8sZUFBVyxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkQsRUFRQyxNQUFDLDZEQUFEO0FBQVUsY0FBVSxFQUFFRix1REFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBVUMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkQsRUFZQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRCxFQWNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRELEVBZ0JDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRCxFQWtCQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkQsQ0FERCxDQUREO0FBd0JBLENBekJEOztLQUFNRSxLO0FBMkJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmQwOWZiMDhiODY5NWUzMmVjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XHJcblxyXG5jb25zdCBFeGFtcGxlQXBwTWVkaWEgPSBjcmVhdGVNZWRpYSh7XHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdHhzOiAwLFxyXG5cdFx0c206IDc2OCxcclxuXHRcdG1kOiAxMDAwLFxyXG5cdFx0bGc6IDEyMDBcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gTWFrZSBzdHlsZXMgZm9yIGluamVjdGlvbiBpbnRvIHRoZSBoZWFkZXIgb2YgdGhlIHBhZ2VcclxuZXhwb3J0IGNvbnN0IG1lZGlhU3R5bGVzID0gRXhhbXBsZUFwcE1lZGlhLmNyZWF0ZU1lZGlhU3R5bGUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IE1lZGlhLCBNZWRpYUNvbnRleHRQcm92aWRlciB9ID0gRXhhbXBsZUFwcE1lZGlhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQnJlYWtwb2ludHMgPSBleHBvcnRzLkJyZWFrcG9pbnRDb25zdHJhaW50ID0gdm9pZCAwO1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gYnJlYWtwb2ludEtleShicmVha3BvaW50KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGJyZWFrcG9pbnQpID8gYnJlYWtwb2ludC5qb2luKFwiLVwiKSA6IGJyZWFrcG9pbnQ7XG59XG5cbnZhciBCcmVha3BvaW50Q29uc3RyYWludDtcbi8qKlxuICogRW5jYXBzdWxhdGVzIGFsbCBicmVha3BvaW50IGRhdGEgbmVlZGVkIGJ5IHRoZSBNZWRpYSBjb21wb25lbnQuIFRoZSBkYXRhIGlzXG4gKiBnZW5lcmF0ZWQgb24gaW5pdGlhbGl6YXRpb24gc28gbm8gZnVydGhlciBydW50aW1lIHdvcmsgaXMgbmVjZXNzYXJ5LlxuICovXG5cbmV4cG9ydHMuQnJlYWtwb2ludENvbnN0cmFpbnQgPSBCcmVha3BvaW50Q29uc3RyYWludDtcblxuKGZ1bmN0aW9uIChCcmVha3BvaW50Q29uc3RyYWludCkge1xuICBCcmVha3BvaW50Q29uc3RyYWludFtcImF0XCJdID0gXCJhdFwiO1xuICBCcmVha3BvaW50Q29uc3RyYWludFtcImxlc3NUaGFuXCJdID0gXCJsZXNzVGhhblwiO1xuICBCcmVha3BvaW50Q29uc3RyYWludFtcImdyZWF0ZXJUaGFuXCJdID0gXCJncmVhdGVyVGhhblwiO1xuICBCcmVha3BvaW50Q29uc3RyYWludFtcImdyZWF0ZXJUaGFuT3JFcXVhbFwiXSA9IFwiZ3JlYXRlclRoYW5PckVxdWFsXCI7XG4gIEJyZWFrcG9pbnRDb25zdHJhaW50W1wiYmV0d2VlblwiXSA9IFwiYmV0d2VlblwiO1xufSkoQnJlYWtwb2ludENvbnN0cmFpbnQgfHwgKGV4cG9ydHMuQnJlYWtwb2ludENvbnN0cmFpbnQgPSBCcmVha3BvaW50Q29uc3RyYWludCA9IHt9KSk7XG5cbnZhciBCcmVha3BvaW50cyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIF9jcmVhdGVDbGFzcyhCcmVha3BvaW50cywgbnVsbCwgW3tcbiAgICBrZXk6IFwidmFsaWRLZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkS2V5cygpIHtcbiAgICAgIHJldHVybiBbQnJlYWtwb2ludENvbnN0cmFpbnQuYXQsIEJyZWFrcG9pbnRDb25zdHJhaW50Lmxlc3NUaGFuLCBCcmVha3BvaW50Q29uc3RyYWludC5ncmVhdGVyVGhhbiwgQnJlYWtwb2ludENvbnN0cmFpbnQuZ3JlYXRlclRoYW5PckVxdWFsLCBCcmVha3BvaW50Q29uc3RyYWludC5iZXR3ZWVuXTtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBCcmVha3BvaW50cyhfYnJlYWtwb2ludHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBfdGhpcyRfbWVkaWFRdWVyaWVzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyZWFrcG9pbnRzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zb3J0ZWRCcmVha3BvaW50c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2JyZWFrcG9pbnRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWVkaWFRdWVyaWVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJmaW5kQnJlYWtwb2ludHNGb3JXaWR0aHNcIiwgZnVuY3Rpb24gKGZyb21XaWR0aCwgdGhyb3VnaFdpZHRoKSB7XG4gICAgICB2YXIgZnJvbUJyZWFrcG9pbnQgPSBfdGhpcy5maW5kQnJlYWtwb2ludEF0V2lkdGgoZnJvbVdpZHRoKTtcblxuICAgICAgaWYgKCFmcm9tQnJlYWtwb2ludCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhyb3VnaEJyZWFrcG9pbnQgPSBfdGhpcy5maW5kQnJlYWtwb2ludEF0V2lkdGgodGhyb3VnaFdpZHRoKTtcblxuICAgICAgaWYgKCF0aHJvdWdoQnJlYWtwb2ludCB8fCBmcm9tQnJlYWtwb2ludCA9PT0gdGhyb3VnaEJyZWFrcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIFtmcm9tQnJlYWtwb2ludF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLnNsaWNlKF90aGlzLl9zb3J0ZWRCcmVha3BvaW50cy5pbmRleE9mKGZyb21CcmVha3BvaW50KSwgX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmluZGV4T2YodGhyb3VnaEJyZWFrcG9pbnQpICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJmaW5kQnJlYWtwb2ludEF0V2lkdGhcIiwgZnVuY3Rpb24gKHdpZHRoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmZpbmQoZnVuY3Rpb24gKGJyZWFrcG9pbnQsIGkpIHtcbiAgICAgICAgdmFyIG5leHRCcmVha3BvaW50ID0gX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzW2kgKyAxXTtcblxuICAgICAgICBpZiAobmV4dEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICByZXR1cm4gd2lkdGggPj0gX3RoaXMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRdICYmIHdpZHRoIDwgX3RoaXMuX2JyZWFrcG9pbnRzW25leHRCcmVha3BvaW50XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gd2lkdGggPj0gX3RoaXMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZhbHVlc1dpdGhCcmVha3BvaW50UHJvcHNcIiwgZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIG1heCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICB2YXIgdmFsdWVCcmVha3BvaW50cyA9IFtdO1xuICAgICAgdmFyIGxhc3RUdXBsZTtcblxuICAgICAgX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQsIGkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuXG4gICAgICAgIGlmIChpIDwgbWF4ICYmICghbGFzdFR1cGxlIHx8IGxhc3RUdXBsZVswXSAhPT0gdmFsdWUpKSB7XG4gICAgICAgICAgbGFzdFR1cGxlID0gW3ZhbHVlLCBbYnJlYWtwb2ludF1dO1xuICAgICAgICAgIHZhbHVlQnJlYWtwb2ludHMucHVzaChsYXN0VHVwbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RUdXBsZVsxXS5wdXNoKGJyZWFrcG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHZhbHVlQnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChfcmVmLCBpKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gX3JlZjJbMV07XG5cbiAgICAgICAgdmFyIHByb3BzID0ge307XG5cbiAgICAgICAgaWYgKGkgPT09IHZhbHVlQnJlYWtwb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHByb3BzLmdyZWF0ZXJUaGFuT3JFcXVhbCA9IGJyZWFrcG9pbnRzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHByb3BzLmF0ID0gYnJlYWtwb2ludHNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBsZXNzIHRoYW4gaWRlYWwsIHdvdWxkIGJlIGdvb2QgdG8gaGF2ZSBhIGB0aHJvdWdoYFxuICAgICAgICAgIC8vICAgICAgIHByb3AsIHdoaWNoIHVubGlrZSBgYmV0d2VlbmAgaXMgaW5jbHVzaXZlLlxuICAgICAgICAgIHByb3BzLmJldHdlZW4gPSBbYnJlYWtwb2ludHNbMF0sIHZhbHVlQnJlYWtwb2ludHNbaSArIDFdWzFdWzBdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbdmFsdWUsIHByb3BzXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYnJlYWtwb2ludHMgPSBfYnJlYWtwb2ludHM7XG4gICAgdGhpcy5fc29ydGVkQnJlYWtwb2ludHMgPSBPYmplY3Qua2V5cyhfYnJlYWtwb2ludHMpLm1hcChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIFticmVha3BvaW50LCBfYnJlYWtwb2ludHNbYnJlYWtwb2ludF1dO1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhWzFdIDwgYlsxXSA/IC0xIDogMTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGJyZWFrcG9pbnRBbmRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGJyZWFrcG9pbnRBbmRWYWx1ZVswXTtcbiAgICB9KTsgLy8gTGlzdCBvZiBhbGwgcG9zc2libGUgYW5kIHZhbGlkIGBiZXR3ZWVuYCBjb21iaW5hdGlvbnNcblxuICAgIHZhciBiZXR3ZWVuQ29tYmluYXRpb25zID0gdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoMCwgLTEpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBiMSwgaSkge1xuICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShhY2MpLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLnNsaWNlKGkgKyAxKS5tYXAoZnVuY3Rpb24gKGIyKSB7XG4gICAgICAgIHJldHVybiBbYjEsIGIyXTtcbiAgICAgIH0pKSk7XG4gICAgfSwgW10pO1xuXG4gICAgdGhpcy5fbWVkaWFRdWVyaWVzID0gKF90aGlzJF9tZWRpYVF1ZXJpZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9tZWRpYVF1ZXJpZXMsIEJyZWFrcG9pbnRDb25zdHJhaW50LmF0LCB0aGlzLl9jcmVhdGVCcmVha3BvaW50UXVlcmllcyhCcmVha3BvaW50Q29uc3RyYWludC5hdCwgdGhpcy5fc29ydGVkQnJlYWtwb2ludHMpKSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9tZWRpYVF1ZXJpZXMsIEJyZWFrcG9pbnRDb25zdHJhaW50Lmxlc3NUaGFuLCB0aGlzLl9jcmVhdGVCcmVha3BvaW50UXVlcmllcyhCcmVha3BvaW50Q29uc3RyYWludC5sZXNzVGhhbiwgdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoMSkpKSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9tZWRpYVF1ZXJpZXMsIEJyZWFrcG9pbnRDb25zdHJhaW50LmdyZWF0ZXJUaGFuLCB0aGlzLl9jcmVhdGVCcmVha3BvaW50UXVlcmllcyhCcmVha3BvaW50Q29uc3RyYWludC5ncmVhdGVyVGhhbiwgdGhpcy5fc29ydGVkQnJlYWtwb2ludHMuc2xpY2UoMCwgLTEpKSksIF9kZWZpbmVQcm9wZXJ0eShfdGhpcyRfbWVkaWFRdWVyaWVzLCBCcmVha3BvaW50Q29uc3RyYWludC5ncmVhdGVyVGhhbk9yRXF1YWwsIHRoaXMuX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzKEJyZWFrcG9pbnRDb25zdHJhaW50LmdyZWF0ZXJUaGFuT3JFcXVhbCwgdGhpcy5fc29ydGVkQnJlYWtwb2ludHMpKSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9tZWRpYVF1ZXJpZXMsIEJyZWFrcG9pbnRDb25zdHJhaW50LmJldHdlZW4sIHRoaXMuX2NyZWF0ZUJyZWFrcG9pbnRRdWVyaWVzKEJyZWFrcG9pbnRDb25zdHJhaW50LmJldHdlZW4sIGJldHdlZW5Db21iaW5hdGlvbnMpKSwgX3RoaXMkX21lZGlhUXVlcmllcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQnJlYWtwb2ludHMsIFt7XG4gICAga2V5OiBcInRvUnVsZVNldHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9SdWxlU2V0cygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIga2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogQnJlYWtwb2ludHMudmFsaWRLZXlzKCk7XG4gICAgICB2YXIgc2VsZWN0ZWRNZWRpYVF1ZXJpZXMgPSBrZXlzLnJlZHVjZShmdW5jdGlvbiAobWVkaWFRdWVyaWVzLCBxdWVyeSkge1xuICAgICAgICBtZWRpYVF1ZXJpZXNbcXVlcnldID0gX3RoaXMyLl9tZWRpYVF1ZXJpZXNbcXVlcnldO1xuICAgICAgICByZXR1cm4gbWVkaWFRdWVyaWVzO1xuICAgICAgfSwge30pO1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHNlbGVjdGVkTWVkaWFRdWVyaWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZjMpIHtcbiAgICAgICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAgICAgICAgdHlwZSA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgcXVlcmllcyA9IF9yZWY0WzFdO1xuXG4gICAgICAgIHF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnksIGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGludmVydCB0aGUgcXVlcnksIHN1Y2ggdGhhdCBpdCBtYXRjaGVzIHdoZW4gd2Ugd2FudCB0aGVcbiAgICAgICAgICAvLyBlbGVtZW50IHRvIGJlIGhpZGRlbi5cbiAgICAgICAgICBhY2MucHVzaCgoMCwgX1V0aWxzLmNyZWF0ZVJ1bGVTZXQpKCgwLCBfVXRpbHMuY3JlYXRlQ2xhc3NOYW1lKSh0eXBlLCBicmVha3BvaW50KSwgXCJub3QgYWxsIGFuZCBcIi5jb25jYXQocXVlcnkpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRSZW5kZXJNZWRpYVF1ZXJ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlck1lZGlhUXVlcnkoYnJlYWtwb2ludFByb3BzLCBvbmx5UmVuZGVyQXQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBicmVha3BvaW50UHJvcHMgPSB0aGlzLl9ub3JtYWxpemVQcm9wcyhicmVha3BvaW50UHJvcHMpO1xuXG4gICAgICBpZiAoYnJlYWtwb2ludFByb3BzLmxlc3NUaGFuKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRQcm9wcy5sZXNzVGhhbl07XG4gICAgICAgIHZhciBsb3dlc3RBbGxvd2VkV2lkdGggPSBNYXRoLm1pbi5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkob25seVJlbmRlckF0Lm1hcChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4gbG93ZXN0QWxsb3dlZFdpZHRoIDwgd2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbikge1xuICAgICAgICB2YXIgX3dpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbdGhpcy5fZmluZE5leHRCcmVha3BvaW50KGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbildO1xuXG4gICAgICAgIHZhciBoaWdoZXN0QWxsb3dlZFdpZHRoID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KG9ubHlSZW5kZXJBdC5tYXAoZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgcmV0dXJuIGhpZ2hlc3RBbGxvd2VkV2lkdGggPj0gX3dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW5PckVxdWFsKSB7XG4gICAgICAgIHZhciBfd2lkdGgyID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuT3JFcXVhbF07XG5cbiAgICAgICAgdmFyIF9oaWdoZXN0QWxsb3dlZFdpZHRoID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KG9ubHlSZW5kZXJBdC5tYXAoZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgfSkpKTtcblxuICAgICAgICByZXR1cm4gX2hpZ2hlc3RBbGxvd2VkV2lkdGggPj0gX3dpZHRoMjtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmJldHdlZW4pIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyB0aGUgb25seSB1c2VmdWwgYnJlYWtwb2ludCB0byBuZWdhdGUsIGJ1dCB3ZeKAmWxsXG4gICAgICAgIC8vICAgICAgIHdl4oCZbGwgc2VlIHdoZW4vaWYgd2UgbmVlZCBpdC4gV2UgY291bGQgdGhlbiBhbHNvIGRlY2lkZVxuICAgICAgICAvLyAgICAgICB0byBhZGQgYG91c3RpZGVgLlxuICAgICAgICB2YXIgZnJvbVdpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmJldHdlZW5bMF1dO1xuICAgICAgICB2YXIgdG9XaWR0aCA9IHRoaXMuX2JyZWFrcG9pbnRzW2JyZWFrcG9pbnRQcm9wcy5iZXR3ZWVuWzFdXTtcbiAgICAgICAgdmFyIGFsbG93ZWRXaWR0aHMgPSBvbmx5UmVuZGVyQXQubWFwKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIShNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoYWxsb3dlZFdpZHRocykpIDwgZnJvbVdpZHRoIHx8IE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShhbGxvd2VkV2lkdGhzKSkgPj0gdG9XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX25vcm1hbGl6ZVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3JtYWxpemVQcm9wcyhicmVha3BvaW50UHJvcHMpIHtcbiAgICAgIGlmIChicmVha3BvaW50UHJvcHMuYXQpIHtcbiAgICAgICAgdmFyIGZyb21JbmRleCA9IHRoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludFByb3BzLmF0KTtcblxuICAgICAgICB2YXIgdG8gPSB0aGlzLl9zb3J0ZWRCcmVha3BvaW50c1tmcm9tSW5kZXggKyAxXTtcbiAgICAgICAgcmV0dXJuIHRvID8ge1xuICAgICAgICAgIGJldHdlZW46IFticmVha3BvaW50UHJvcHMuYXQsIHRvXVxuICAgICAgICB9IDoge1xuICAgICAgICAgIGdyZWF0ZXJUaGFuT3JFcXVhbDogYnJlYWtwb2ludFByb3BzLmF0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBicmVha3BvaW50UHJvcHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jcmVhdGVCcmVha3BvaW50UXVlcnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZUJyZWFrcG9pbnRRdWVyeShicmVha3BvaW50UHJvcHMpIHtcbiAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IHRoaXMuX25vcm1hbGl6ZVByb3BzKGJyZWFrcG9pbnRQcm9wcyk7XG5cbiAgICAgIGlmIChicmVha3BvaW50UHJvcHMubGVzc1RoYW4pIHtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmxlc3NUaGFuXTtcbiAgICAgICAgcmV0dXJuIFwiKG1heC13aWR0aDpcIi5jb25jYXQod2lkdGggLSAxLCBcInB4KVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIHZhciBfd2lkdGgzID0gdGhpcy5fYnJlYWtwb2ludHNbdGhpcy5fZmluZE5leHRCcmVha3BvaW50KGJyZWFrcG9pbnRQcm9wcy5ncmVhdGVyVGhhbildO1xuXG4gICAgICAgIHJldHVybiBcIihtaW4td2lkdGg6XCIuY29uY2F0KF93aWR0aDMsIFwicHgpXCIpO1xuICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50UHJvcHMuZ3JlYXRlclRoYW5PckVxdWFsKSB7XG4gICAgICAgIHZhciBfd2lkdGg0ID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmdyZWF0ZXJUaGFuT3JFcXVhbF07XG4gICAgICAgIHJldHVybiBcIihtaW4td2lkdGg6XCIuY29uY2F0KF93aWR0aDQsIFwicHgpXCIpO1xuICAgICAgfSBlbHNlIGlmIChicmVha3BvaW50UHJvcHMuYmV0d2Vlbikge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIHRoZSBvbmx5IHVzZWZ1bCBicmVha3BvaW50IHRvIG5lZ2F0ZSwgYnV0IHdl4oCZbGxcbiAgICAgICAgLy8gICAgICAgd2XigJlsbCBzZWUgd2hlbi9pZiB3ZSBuZWVkIGl0LiBXZSBjb3VsZCB0aGVuIGFsc28gZGVjaWRlXG4gICAgICAgIC8vICAgICAgIHRvIGFkZCBgb3V0c2lkZWAuXG4gICAgICAgIHZhciBmcm9tV2lkdGggPSB0aGlzLl9icmVha3BvaW50c1ticmVha3BvaW50UHJvcHMuYmV0d2VlblswXV07XG4gICAgICAgIHZhciB0b1dpZHRoID0gdGhpcy5fYnJlYWtwb2ludHNbYnJlYWtwb2ludFByb3BzLmJldHdlZW5bMV1dO1xuICAgICAgICByZXR1cm4gXCIobWluLXdpZHRoOlwiLmNvbmNhdChmcm9tV2lkdGgsIFwicHgpIGFuZCAobWF4LXdpZHRoOlwiKS5jb25jYXQodG9XaWR0aCAtIDEsIFwicHgpXCIpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGJyZWFrcG9pbnQgcHJvcHM6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShicmVha3BvaW50UHJvcHMpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jcmVhdGVCcmVha3BvaW50UXVlcmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlQnJlYWtwb2ludFF1ZXJpZXMoa2V5LCBmb3JCcmVha3BvaW50cykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBmb3JCcmVha3BvaW50cy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgYnJlYWtwb2ludCkge1xuICAgICAgICBtYXAuc2V0KGJyZWFrcG9pbnRLZXkoYnJlYWtwb2ludCksIF90aGlzNC5fY3JlYXRlQnJlYWtwb2ludFF1ZXJ5KF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCBicmVha3BvaW50KSkpO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwgbmV3IE1hcCgpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmROZXh0QnJlYWtwb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZE5leHRCcmVha3BvaW50KGJyZWFrcG9pbnQpIHtcbiAgICAgIHZhciBuZXh0QnJlYWtwb2ludCA9IHRoaXMuX3NvcnRlZEJyZWFrcG9pbnRzW3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCkgKyAxXTtcblxuICAgICAgaWYgKCFuZXh0QnJlYWtwb2ludCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBicmVha3BvaW50IGxhcmdlciB0aGFuIFwiLmNvbmNhdChicmVha3BvaW50KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0QnJlYWtwb2ludDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic29ydGVkQnJlYWtwb2ludHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zb3J0ZWRCcmVha3BvaW50cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHluYW1pY1Jlc3BvbnNpdmVNZWRpYVF1ZXJpZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX21lZGlhUXVlcmllc1tCcmVha3BvaW50Q29uc3RyYWludC5hdF0uZW50cmllcygpKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZjUpIHtcbiAgICAgICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICAgICAgayA9IF9yZWY2WzBdLFxuICAgICAgICAgICAgdiA9IF9yZWY2WzFdO1xuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBhY2MsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgaywgdikpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsYXJnZXN0QnJlYWtwb2ludFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NvcnRlZEJyZWFrcG9pbnRzW3RoaXMuX3NvcnRlZEJyZWFrcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCcmVha3BvaW50cztcbn0oKTtcblxuZXhwb3J0cy5CcmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJlYWtwb2ludHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVJlc3BvbnNpdmVDb21wb25lbnRzID0gY3JlYXRlUmVzcG9uc2l2ZUNvbXBvbmVudHM7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBzaGFsbG93RXF1YWwgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwoYSwgYikge1xuICBmb3IgKHZhciBfa2V5IGluIGEpIHtcbiAgICBpZiAoYVtfa2V5XSAhPT0gYltfa2V5XSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqIFRPRE8gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVSZXNwb25zaXZlQ29tcG9uZW50cygpIHtcbiAgdmFyIFJlc3BvbnNpdmVDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7XG5cbiAgUmVzcG9uc2l2ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk1lZGlhLkR5bmFtaWNDb250ZXh0XCI7XG4gIHZhciBSZXNwb25zaXZlQ29uc3VtZXIgPSBSZXNwb25zaXZlQ29udGV4dC5Db25zdW1lcjtcbiAgcmV0dXJuIHtcbiAgICBDb25zdW1lcjogUmVzcG9uc2l2ZUNvbnN1bWVyLFxuICAgIFByb3ZpZGVyOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFJlc3BvbnNpdmVQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFJlc3BvbnNpdmVQcm92aWRlcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVQcm92aWRlcik7XG5cbiAgICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUmVzcG9uc2l2ZVByb3ZpZGVyKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImlzU3VwcG9ydGVkRW52aXJvbm1lbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInNldHVwTWF0Y2hlcnNcIiwgZnVuY3Rpb24gKG1lZGlhUXVlcmllcykge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtZWRpYVF1ZXJpZXMpLnJlZHVjZShmdW5jdGlvbiAobWF0Y2hlcnMsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG1hdGNoZXJzLCBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyaWVzW2tleV0pKSk7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiY2hlY2tNYXRjaGVyc1wiLCBmdW5jdGlvbiAobWVkaWFRdWVyeU1hdGNoZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lZGlhUXVlcnlNYXRjaGVycykucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVzLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBtYXRjaGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgbWVkaWFRdWVyeU1hdGNoZXJzW2tleV0ubWF0Y2hlcykpO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm1lZGlhUXVlcnlTdGF0dXNDaGFuZ2VkQ2FsbGJhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtZWRpYVF1ZXJ5TWF0Y2hlcyA9IF90aGlzLmNoZWNrTWF0Y2hlcnMoX3RoaXMuc3RhdGUubWVkaWFRdWVyeU1hdGNoZXJzKTtcblxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lZGlhUXVlcnlNYXRjaGVzOiBtZWRpYVF1ZXJ5TWF0Y2hlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgX21lZGlhUXVlcnlNYXRjaGVycyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB2YXIgX21lZGlhUXVlcnlNYXRjaGVzO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc1N1cHBvcnRlZEVudmlyb25tZW50KCkpIHtcbiAgICAgICAgICBfbWVkaWFRdWVyeU1hdGNoZXJzID0gX3RoaXMuc2V0dXBNYXRjaGVycyhwcm9wcy5tZWRpYVF1ZXJpZXMpO1xuICAgICAgICAgIF9tZWRpYVF1ZXJ5TWF0Y2hlcyA9IF90aGlzLmNoZWNrTWF0Y2hlcnMoX21lZGlhUXVlcnlNYXRjaGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX21lZGlhUXVlcnlNYXRjaGVzID0gT2JqZWN0LmtleXMocHJvcHMubWVkaWFRdWVyaWVzKS5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZXMsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG1hdGNoZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCAhIXByb3BzLmluaXRpYWxNYXRjaGluZ01lZGlhUXVlcmllcyAmJiBwcm9wcy5pbml0aWFsTWF0Y2hpbmdNZWRpYVF1ZXJpZXMuaW5jbHVkZXMoa2V5KSkpO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIG1lZGlhUXVlcnlNYXRjaGVyczogX21lZGlhUXVlcnlNYXRjaGVycyxcbiAgICAgICAgICBtZWRpYVF1ZXJ5TWF0Y2hlczogX21lZGlhUXVlcnlNYXRjaGVzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFJlc3BvbnNpdmVQcm92aWRlciwgW3tcbiAgICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICAgIC8vIExpZmVjeWNsZSBtZXRob2RzXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlcnMpIHtcbiAgICAgICAgICAgIHZhciBtZWRpYVF1ZXJ5U3RhdHVzQ2hhbmdlZENhbGxiYWNrID0gdGhpcy5tZWRpYVF1ZXJ5U3RhdHVzQ2hhbmdlZENhbGxiYWNrO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVycykuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2hlcikge1xuICAgICAgICAgICAgICBtYXRjaGVyLmFkZExpc3RlbmVyKG1lZGlhUXVlcnlTdGF0dXNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVkaWFRdWVyeU1hdGNoZXJzKSB7XG4gICAgICAgICAgICB2YXIgbWVkaWFRdWVyeVN0YXR1c0NoYW5nZWRDYWxsYmFjayA9IHRoaXMubWVkaWFRdWVyeVN0YXR1c0NoYW5nZWRDYWxsYmFjaztcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlcnMpLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIucmVtb3ZlTGlzdGVuZXIobWVkaWFRdWVyeVN0YXR1c0NoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVycykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChuZXh0UHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW4pIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgaWYgKHNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLm1lZGlhUXVlcnlNYXRjaGVzLCBuZXh0U3RhdGUubWVkaWFRdWVyeU1hdGNoZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5tZWRpYVF1ZXJ5TWF0Y2hlc1xuICAgICAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBSZXNwb25zaXZlUHJvdmlkZXI7XG4gICAgfShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EeW5hbWljUmVzcG9uc2l2ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSW50ZXJhY3Rpb25zID0gZXhwb3J0cy5JbnRlcmFjdGlvbktleSA9IHZvaWQgMDtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbnRlcmFjdGlvbktleTtcbi8qKlxuICogRW5jYXBzdWxhdGVzIGFsbCBpbnRlcmFjdGlvbiBkYXRhIG5lZWRlZCBieSB0aGUgTWVkaWEgY29tcG9uZW50LiBUaGUgZGF0YSBpc1xuICogZ2VuZXJhdGVkIG9uIGluaXRpYWxpemF0aW9uIHNvIG5vIGZ1cnRoZXIgcnVudGltZSB3b3JrIGlzIG5lY2Vzc2FyeS5cbiAqL1xuXG5leHBvcnRzLkludGVyYWN0aW9uS2V5ID0gSW50ZXJhY3Rpb25LZXk7XG5cbihmdW5jdGlvbiAoSW50ZXJhY3Rpb25LZXkpIHtcbiAgSW50ZXJhY3Rpb25LZXlbXCJpbnRlcmFjdGlvblwiXSA9IFwiaW50ZXJhY3Rpb25cIjtcbn0pKEludGVyYWN0aW9uS2V5IHx8IChleHBvcnRzLkludGVyYWN0aW9uS2V5ID0gSW50ZXJhY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgSW50ZXJhY3Rpb25zID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKEludGVyYWN0aW9ucywgbnVsbCwgW3tcbiAgICBrZXk6IFwidmFsaWRLZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkS2V5cygpIHtcbiAgICAgIHJldHVybiBbSW50ZXJhY3Rpb25LZXkuaW50ZXJhY3Rpb25dO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIEludGVyYWN0aW9ucyhpbnRlcmFjdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJhY3Rpb25zKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnRlcmFjdGlvbnNcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2ludGVyYWN0aW9ucyA9IGludGVyYWN0aW9ucztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbnRlcmFjdGlvbnMsIFt7XG4gICAga2V5OiBcInRvUnVsZVNldHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9SdWxlU2V0cygpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLl9pbnRlcmFjdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgbmFtZSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgcXVlcnkgPSBfcmVmMlsxXTtcblxuICAgICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KGFjYykuY29uY2F0KFsoMCwgX1V0aWxzLmNyZWF0ZVJ1bGVTZXQpKCgwLCBfVXRpbHMuY3JlYXRlQ2xhc3NOYW1lKShJbnRlcmFjdGlvbktleS5pbnRlcmFjdGlvbiwgbmFtZSksIHF1ZXJ5KV0pO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRSZW5kZXJNZWRpYVF1ZXJ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlck1lZGlhUXVlcnkoaW50ZXJhY3Rpb24sIG9ubHlNYXRjaCkge1xuICAgICAgcmV0dXJuICEhKG9ubHlNYXRjaCAmJiBvbmx5TWF0Y2guaW5jbHVkZXMoaW50ZXJhY3Rpb24pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW50ZXJhY3Rpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5faW50ZXJhY3Rpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHluYW1pY1Jlc3BvbnNpdmVNZWRpYVF1ZXJpZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLl9pbnRlcmFjdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmMykge1xuICAgICAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICAgICAgICBuYW1lID0gX3JlZjRbMF0sXG4gICAgICAgICAgICBxdWVyeSA9IF9yZWY0WzFdO1xuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBhY2MsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgcXVlcnkpKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJhY3Rpb25zO1xufSgpO1xuXG5leHBvcnRzLkludGVyYWN0aW9ucyA9IEludGVyYWN0aW9ucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUludGVyYWN0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlTWVkaWEgPSBjcmVhdGVNZWRpYTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9EeW5hbWljUmVzcG9uc2l2ZSA9IHJlcXVpcmUoXCIuL0R5bmFtaWNSZXNwb25zaXZlXCIpO1xuXG52YXIgX01lZGlhUXVlcmllcyA9IHJlcXVpcmUoXCIuL01lZGlhUXVlcmllc1wiKTtcblxudmFyIF9VdGlscyA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIFRoaXMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIE1lZGlhIGNvbXBvbmVudCwgaXRzIGNvbnRleHQgcHJvdmlkZXIsIGFuZCBDU1NcbiAqIHJ1bGVzIGJhc2VkIG9uIHlvdXIgYXBwbGljYXRpb27igJlzIGJyZWFrcG9pbnRzIGFuZCBpbnRlcmFjdGlvbnMuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnRlcmFjdGlvbiBxdWVyaWVzIGFyZSBlbnRpcmVseSB1cCB0byB5b3UgdG8gZGVmaW5lIGFuZCB0aGV5XG4gKiBzaG91bGQgYmUgd3JpdHRlbiBpbiBzdWNoIGEgd2F5IHRoYXQgdGhleSBtYXRjaCB3aGVuIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvXG4gKiBiZSBoaWRkZW4uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gICBgYGB0c3hcbiAgIGNvbnN0IE15QXBwTWVkaWEgPSBjcmVhdGVNZWRpYSh7XG4gICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgeHM6IDAsXG4gICAgICAgc206IDc2OCxcbiAgICAgICBtZDogOTAwXG4gICAgICAgbGc6IDEwMjQsXG4gICAgICAgeGw6IDExOTIsXG4gICAgIH0sXG4gICAgIGludGVyYWN0aW9uczoge1xuICAgICAgIGhvdmVyOiBgbm90IGFsbCBhbmQgKGhvdmVyOmhvdmVyKWBcbiAgICAgfSxcbiAgIH0pXG5cbiAgIGV4cG9ydCBjb25zdCBNZWRpYSA9IE15QXBwTWVkaWEuTWVkaWFcbiAgIGV4cG9ydCBjb25zdCBNZWRpYUNvbnRleHRQcm92aWRlciA9IE15QXBwTWVkaWEuTWVkaWFDb250ZXh0UHJvdmlkZXJcbiAgIGV4cG9ydCBjb25zdCBjcmVhdGVNZWRpYVN0eWxlID0gTXlBcHBNZWRpYS5jcmVhdGVNZWRpYVN0eWxlXG4gICBgYGBcbiAqXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1lZGlhKGNvbmZpZykge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgbWVkaWFRdWVyaWVzID0gbmV3IF9NZWRpYVF1ZXJpZXMuTWVkaWFRdWVyaWVzKGNvbmZpZy5icmVha3BvaW50cywgY29uZmlnLmludGVyYWN0aW9ucyB8fCB7fSk7XG4gIHZhciBEeW5hbWljUmVzcG9uc2l2ZSA9ICgwLCBfRHluYW1pY1Jlc3BvbnNpdmUuY3JlYXRlUmVzcG9uc2l2ZUNvbXBvbmVudHMpKCk7XG5cbiAgdmFyIE1lZGlhQ29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG4gIE1lZGlhQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTWVkaWEuQ29udGV4dFwiO1xuXG4gIHZhciBNZWRpYUNvbnRleHRQcm92aWRlciA9IGZ1bmN0aW9uIE1lZGlhQ29udGV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgICB2YXIgZGlzYWJsZUR5bmFtaWNNZWRpYVF1ZXJpZXMgPSBfcmVmLmRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzLFxuICAgICAgICBvbmx5TWF0Y2ggPSBfcmVmLm9ubHlNYXRjaCxcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gICAgaWYgKGRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZWRpYUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBvbmx5TWF0Y2g6IG9ubHlNYXRjaFxuICAgICAgICB9XG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KER5bmFtaWNSZXNwb25zaXZlLlByb3ZpZGVyLCB7XG4gICAgICAgIG1lZGlhUXVlcmllczogbWVkaWFRdWVyaWVzLmR5bmFtaWNSZXNwb25zaXZlTWVkaWFRdWVyaWVzLFxuICAgICAgICBpbml0aWFsTWF0Y2hpbmdNZWRpYVF1ZXJpZXM6ICgwLCBfVXRpbHMuaW50ZXJzZWN0aW9uKShtZWRpYVF1ZXJpZXMubWVkaWFRdWVyeVR5cGVzLCBvbmx5TWF0Y2gpXG4gICAgICB9LCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KER5bmFtaWNSZXNwb25zaXZlLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAobWF0Y2hlcykge1xuICAgICAgICB2YXIgbWF0Y2hpbmdNZWRpYVF1ZXJpZXMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNZWRpYUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgb25seU1hdGNoOiAoMCwgX1V0aWxzLmludGVyc2VjdGlvbikobWF0Y2hpbmdNZWRpYVF1ZXJpZXMsIG9ubHlNYXRjaClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIE1lZGlhID0gKF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhNZWRpYSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNZWRpYShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWEpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNZWRpYSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhwcm9wcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1lZGlhLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWVkaWFDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICAgICAgb25seU1hdGNoID0gX3JlZjIub25seU1hdGNoO1xuXG4gICAgICAgICAgdmFyIGNsYXNzTmFtZTtcblxuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICBwYXNzZWRDbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aW9uID0gcHJvcHMuaW50ZXJhY3Rpb24sXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJpbnRlcmFjdGlvblwiXSk7XG5cbiAgICAgICAgICBpZiAocHJvcHMuaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9ICgwLCBfVXRpbHMuY3JlYXRlQ2xhc3NOYW1lKShcImludGVyYWN0aW9uXCIsIHByb3BzLmludGVyYWN0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLmF0KSB7XG4gICAgICAgICAgICAgIHZhciBsYXJnZXN0QnJlYWtwb2ludCA9IG1lZGlhUXVlcmllcy5icmVha3BvaW50cy5sYXJnZXN0QnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICBpZiAocHJvcHMuYXQgPT09IGxhcmdlc3RCcmVha3BvaW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogV2Ugc2hvdWxkIGxvb2sgaW50byBtYWtpbmcgUmVhY3TigJlzIF9fREVWX18gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgYW5kIGhhdmUgd2VicGFjayBjb21wbGV0ZWx5IGNvbXBpbGUgdGhlc2UgYXdheS5cbiAgICAgICAgICAgICAgICB2YXIgb3duZXJOYW1lID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YXIgb3duZXIgPSBfdGhpczIuX3JlYWN0SW50ZXJuYWxGaWJlci5fZGVidWdPd25lci50eXBlO1xuICAgICAgICAgICAgICAgICAgb3duZXJOYW1lID0gb3duZXIuZGlzcGxheU5hbWUgfHwgb3duZXIubmFtZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHsvLyBuby1vcFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltAYXJ0c3kvZnJlc25lbF0gXCIgKyBcImBhdGAgaXMgYmVpbmcgdXNlZCB3aXRoIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuIFwiICsgXCJDb25zaWRlciB1c2luZyBgPE1lZGlhIGdyZWF0ZXJUaGFuT3JFcXVhbD1cIiArIFwiXFxcIlwiLmNvbmNhdChsYXJnZXN0QnJlYWtwb2ludCwgXCJcXFwiPmAgdG8gYWNjb3VudCBmb3IgZnV0dXJlIFwiKSArIFwiYnJlYWtwb2ludCBkZWZpbml0aW9ucyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2UuXCIuY29uY2F0KG93bmVyTmFtZSA/IFwiIEl0IGlzIGJlaW5nIHVzZWQgaW4gdGhlIFwiLmNvbmNhdChvd25lck5hbWUsIFwiIGNvbXBvbmVudC5cIikgOiBcIlwiKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHR5cGUgPSAoMCwgX1V0aWxzLnByb3BLZXkpKGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRQcm9wc1t0eXBlXTtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9ICgwLCBfVXRpbHMuY3JlYXRlQ2xhc3NOYW1lKSh0eXBlLCBicmVha3BvaW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBvbmx5TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBtZWRpYVF1ZXJpZXMuc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShfb2JqZWN0U3ByZWFkKHt9LCBicmVha3BvaW50UHJvcHMsIHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uOiBpbnRlcmFjdGlvblxuICAgICAgICAgIH0pLCBvbmx5TWF0Y2gpO1xuXG4gICAgICAgICAgaWYgKHByb3BzLmNoaWxkcmVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbihjbGFzc05hbWUsIHJlbmRlckNoaWxkcmVuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZnJlc25lbC1jb250YWluZXIgXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChwYXNzZWRDbGFzc05hbWUpLFxuICAgICAgICAgICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6ICFyZW5kZXJDaGlsZHJlblxuICAgICAgICAgICAgfSwgcmVuZGVyQ2hpbGRyZW4gPyBwcm9wcy5jaGlsZHJlbiA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1lZGlhO1xuICB9KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCJcbiAgfSksIF90ZW1wKTtcbiAgcmV0dXJuIHtcbiAgICBNZWRpYTogTWVkaWEsXG4gICAgTWVkaWFDb250ZXh0UHJvdmlkZXI6IE1lZGlhQ29udGV4dFByb3ZpZGVyLFxuICAgIGNyZWF0ZU1lZGlhU3R5bGU6IG1lZGlhUXVlcmllcy50b1N0eWxlLFxuICAgIFNvcnRlZEJyZWFrcG9pbnRzOiBfdG9Db25zdW1hYmxlQXJyYXkobWVkaWFRdWVyaWVzLmJyZWFrcG9pbnRzLnNvcnRlZEJyZWFrcG9pbnRzKSxcbiAgICBmaW5kQnJlYWtwb2ludEF0V2lkdGg6IG1lZGlhUXVlcmllcy5icmVha3BvaW50cy5maW5kQnJlYWtwb2ludEF0V2lkdGgsXG4gICAgZmluZEJyZWFrcG9pbnRzRm9yV2lkdGhzOiBtZWRpYVF1ZXJpZXMuYnJlYWtwb2ludHMuZmluZEJyZWFrcG9pbnRzRm9yV2lkdGhzLFxuICAgIHZhbHVlc1dpdGhCcmVha3BvaW50UHJvcHM6IG1lZGlhUXVlcmllcy5icmVha3BvaW50cy52YWx1ZXNXaXRoQnJlYWtwb2ludFByb3BzXG4gIH07XG59XG5cbnZhciBNdXR1YWxseUV4Y2x1c2l2ZVByb3BzID0gX01lZGlhUXVlcmllcy5NZWRpYVF1ZXJpZXMudmFsaWRLZXlzKCk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMocHJvcHMpIHtcbiAgdmFyIHNlbGVjdGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIE11dHVhbGx5RXhjbHVzaXZlUHJvcHMuaW5jbHVkZXMocHJvcCk7XG4gIH0pO1xuXG4gIGlmIChzZWxlY3RlZFByb3BzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCIxIG9mIFwiLmNvbmNhdChNdXR1YWxseUV4Y2x1c2l2ZVByb3BzLmpvaW4oXCIsIFwiKSwgXCIgaXMgcmVxdWlyZWQuXCIpKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IDEgb2YgXCIuY29uY2F0KHNlbGVjdGVkUHJvcHMuam9pbihcIiwgXCIpLCBcIiBpcyBhbGxvd2VkIGF0IGEgdGltZS5cIikpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NZWRpYS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTWVkaWFRdWVyaWVzID0gdm9pZCAwO1xuXG52YXIgX0JyZWFrcG9pbnRzID0gcmVxdWlyZShcIi4vQnJlYWtwb2ludHNcIik7XG5cbnZhciBfSW50ZXJhY3Rpb25zID0gcmVxdWlyZShcIi4vSW50ZXJhY3Rpb25zXCIpO1xuXG52YXIgX1V0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhbGwgaW50ZXJhY3Rpb24gZGF0YSAoYW5kIGJyZWFrcG9pbnQgZGF0YSBpbiB0aGUgc3VwZXJjbGFzcylcbiAqIG5lZWRlZCBieSB0aGUgTWVkaWEgY29tcG9uZW50LiBUaGUgZGF0YSBpcyBnZW5lcmF0ZWQgb24gaW5pdGlhbGl6YXRpb24gc28gbm9cbiAqIGZ1cnRoZXIgcnVudGltZSB3b3JrIGlzIG5lY2Vzc2FyeS5cbiAqL1xudmFyIE1lZGlhUXVlcmllcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIF9jcmVhdGVDbGFzcyhNZWRpYVF1ZXJpZXMsIG51bGwsIFt7XG4gICAga2V5OiBcInZhbGlkS2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZEtleXMoKSB7XG4gICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KF9CcmVha3BvaW50cy5CcmVha3BvaW50cy52YWxpZEtleXMoKSkuY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfSW50ZXJhY3Rpb25zLkludGVyYWN0aW9ucy52YWxpZEtleXMoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIE1lZGlhUXVlcmllcyhicmVha3BvaW50cywgaW50ZXJhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYVF1ZXJpZXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2JyZWFrcG9pbnRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW50ZXJhY3Rpb25zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b1N0eWxlXCIsIGZ1bmN0aW9uIChicmVha3BvaW50S2V5cykge1xuICAgICAgcmV0dXJuIFsvLyBEb27igJl0IGFkZCBhbnkgc2l6ZSB0byB0aGUgbGF5b3V0XG4gICAgICBcIi5mcmVzbmVsLWNvbnRhaW5lcnttYXJnaW46MDtwYWRkaW5nOjA7fVwiXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLl9icmVha3BvaW50cy50b1J1bGVTZXRzKGJyZWFrcG9pbnRLZXlzKSksIF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5faW50ZXJhY3Rpb25zLnRvUnVsZVNldHMoKSkpLmpvaW4oXCJcXG5cIik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9icmVha3BvaW50cyA9IG5ldyBfQnJlYWtwb2ludHMuQnJlYWtwb2ludHMoYnJlYWtwb2ludHMpO1xuICAgIHRoaXMuX2ludGVyYWN0aW9ucyA9IG5ldyBfSW50ZXJhY3Rpb25zLkludGVyYWN0aW9ucyhpbnRlcmFjdGlvbnMgfHwge30pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhUXVlcmllcywgW3tcbiAgICBrZXk6IFwic2hvdWxkUmVuZGVyTWVkaWFRdWVyeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJNZWRpYVF1ZXJ5KG1lZGlhUXVlcnlQcm9wcywgb25seU1hdGNoKSB7XG4gICAgICB2YXIgaW50ZXJhY3Rpb24gPSBtZWRpYVF1ZXJ5UHJvcHMuaW50ZXJhY3Rpb24sXG4gICAgICAgICAgYnJlYWtwb2ludFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG1lZGlhUXVlcnlQcm9wcywgW1wiaW50ZXJhY3Rpb25cIl0pO1xuXG4gICAgICBpZiAoaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aW9ucy5zaG91bGRSZW5kZXJNZWRpYVF1ZXJ5KGludGVyYWN0aW9uLCBvbmx5TWF0Y2gpO1xuICAgICAgfSAvLyBSZW1vdmUgYW55IGludGVyYWN0aW9uIHBvc3NpYmlsaXRpZXMgZnJvbSB0aGUgbGlzdC5cblxuXG4gICAgICB2YXIgb25seU1hdGNoQnJlYWtwb2ludHMgPSAoMCwgX1V0aWxzLmludGVyc2VjdGlvbikob25seU1hdGNoLCB0aGlzLl9icmVha3BvaW50cy5zb3J0ZWRCcmVha3BvaW50cyk7XG4gICAgICByZXR1cm4gdGhpcy5fYnJlYWtwb2ludHMuc2hvdWxkUmVuZGVyTWVkaWFRdWVyeShicmVha3BvaW50UHJvcHMsIG9ubHlNYXRjaEJyZWFrcG9pbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnJlYWtwb2ludHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9icmVha3BvaW50cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVkaWFRdWVyeVR5cGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2JyZWFrcG9pbnRzLnNvcnRlZEJyZWFrcG9pbnRzKS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX2ludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHluYW1pY1Jlc3BvbnNpdmVNZWRpYVF1ZXJpZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLl9icmVha3BvaW50cy5keW5hbWljUmVzcG9uc2l2ZU1lZGlhUXVlcmllcywgdGhpcy5faW50ZXJhY3Rpb25zLmR5bmFtaWNSZXNwb25zaXZlTWVkaWFRdWVyaWVzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVkaWFRdWVyaWVzO1xufSgpO1xuXG5leHBvcnRzLk1lZGlhUXVlcmllcyA9IE1lZGlhUXVlcmllcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lZGlhUXVlcmllcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvcEtleSA9IHByb3BLZXk7XG5leHBvcnRzLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbmV4cG9ydHMuY3JlYXRlUnVsZVNldCA9IGNyZWF0ZVJ1bGVTZXQ7XG5leHBvcnRzLmNyZWF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUNsYXNzTmFtZTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgc2luZ2xlIGJyZWFrcG9pbnQgcHJvcCBmcm9tIHRoZSBwcm9wcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHByb3BLZXkoYnJlYWtwb2ludFByb3BzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhicmVha3BvaW50UHJvcHMpWzBdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGFycmF5cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhMSwgYTIpIHtcbiAgcmV0dXJuIGEyID8gYTEuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGEyLmluZGV4T2YoZWxlbWVudCkgPj0gMDtcbiAgfSkgOiBfdG9Db25zdW1hYmxlQXJyYXkoYTEpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0eWxlIHJ1bGUgZm9yIGEgZ2l2ZW4gY2xhc3MgbmFtZSB0aGF0IHdpbGwgaGlkZSB0aGUgZWxlbWVudFxuICogd2hlbiB0aGUgZ2l2ZW4gcXVlcnkgbWF0Y2hlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGVTZXQoY2xhc3NOYW1lLCBxdWVyeSkge1xuICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KHF1ZXJ5LCBcInsuXCIpLmNvbmNhdChjbGFzc05hbWUsIFwie2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7fX1cIik7XG59XG4vKipcbiAqIEdpdmVuIGEgbGlzdCBvZiBzdHJpbmdzLCBvciBzdHJpbmcgdHVwbGVzLCBnZW5lcmF0ZXMgYSBjbGFzcyBuYW1lLlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NOYW1lKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY29tcG9uZW50cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjb21wb25lbnRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtcImZyZXNuZWxcIl0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBicmVha3BvaW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludCkgPyBfdG9Db25zdW1hYmxlQXJyYXkoYWNjKS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGJyZWFrcG9pbnQpKSA6IF90b0NvbnN1bWFibGVBcnJheShhY2MpLmNvbmNhdChbYnJlYWtwb2ludF0pO1xuICB9LCBbXSkpKS5qb2luKFwiLVwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlTWVkaWFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX01lZGlhLmNyZWF0ZU1lZGlhO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJyZWFrcG9pbnRLZXlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0JyZWFrcG9pbnRzLkJyZWFrcG9pbnRDb25zdHJhaW50O1xuICB9XG59KTtcblxudmFyIF9NZWRpYSA9IHJlcXVpcmUoXCIuL01lZGlhXCIpO1xuXG52YXIgX0JyZWFrcG9pbnRzID0gcmVxdWlyZShcIi4vQnJlYWtwb2ludHNcIik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3RzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVkaWEnO1xyXG5pbXBvcnQgTXlGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9teS1mb290ZXInO1xyXG5pbXBvcnQgTXlHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvbXktZ2FsbGVyeSc7XHJcbmltcG9ydCBNeU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL215LW5hdmJhcic7XHJcbmltcG9ydCBPdXJKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9vdXItam9iJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8dGl0bGU+UmFwaWQgVHJhbnNwb3J0IFVTQSwgTExDPC90aXRsZT5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHRcdDxNZWRpYSBhdD1cInhzXCI+TW9iaWxlPC9NZWRpYT5cclxuXHRcdFx0XHQ8TWVkaWEgZ3JlYXRlclRoYW49XCJzbVwiPk90aGVyIHRoYW4gTW9iaWxlPC9NZWRpYT5cclxuXHJcblx0XHRcdFx0PE15TmF2YmFyIGJyZWFrcG9pbnQ9e01lZGlhfSAvPlxyXG5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHRcdDxPdXJKb2IgLz5cclxuXHJcblx0XHRcdFx0PE15R2FsbGVyeSAvPlxyXG5cclxuXHRcdFx0XHQ8Q29udGFjdHMgLz5cclxuXHJcblx0XHRcdFx0PE15Rm9vdGVyIC8+XHJcblx0XHRcdDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=