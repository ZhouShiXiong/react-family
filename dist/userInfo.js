webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(41);

var _userInfo = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
    _inherits(UserInfo, _Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$userInfo = this.props.userInfo,
                userInfo = _props$userInfo.userInfo,
                isLoading = _props$userInfo.isLoading,
                errorMsg = _props$userInfo.errorMsg;

            return _react2.default.createElement(
                'div',
                null,
                isLoading ? '请求信息中......' : errorMsg ? errorMsg : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u4FE1\u606F\uFF1A'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u540D\uFF1A',
                        userInfo.name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u4ECB\u7ECD\uFF1A',
                        userInfo.intro
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.getUserInfo();
                        } },
                    '\u8BF7\u6C42\u7528\u6237\u4FE1\u606F'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return UserInfo;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return { userInfo: state.userInfo };
}, { getUserInfo: _userInfo.getUserInfo })(UserInfo);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserInfo, 'UserInfo', '/home/zhoushixiong/react-family/src/pages/UserInfo/UserInfo.js');
    reactHotLoader.register(_default, 'default', '/home/zhoushixiong/react-family/src/pages/UserInfo/UserInfo.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlckluZm8vVXNlckluZm8uanMiXSwibmFtZXMiOlsiVXNlckluZm8iLCJwcm9wcyIsInVzZXJJbmZvIiwiaXNMb2FkaW5nIiwiZXJyb3JNc2ciLCJuYW1lIiwiaW50cm8iLCJnZXRVc2VySW5mbyIsIkNvbXBvbmVudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7aUNBRU87QUFBQTs7QUFBQSxrQ0FDbUMsS0FBS0MsS0FBTCxDQUFXQyxRQUQ5QztBQUFBLGdCQUNFQSxRQURGLG1CQUNFQSxRQURGO0FBQUEsZ0JBQ1lDLFNBRFosbUJBQ1lBLFNBRFo7QUFBQSxnQkFDdUJDLFFBRHZCLG1CQUN1QkEsUUFEdkI7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBO0FBRVFELDRCQUFZLGFBQVosR0FFUUMsV0FBV0EsUUFBWCxHQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFRRixpQ0FBU0c7QUFBakIscUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFPSCxpQ0FBU0k7QUFBaEI7QUFISixpQkFMcEI7QUFZSTtBQUFBO0FBQUEsc0JBQVEsU0FBUztBQUFBLG1DQUFNLE9BQUtMLEtBQUwsQ0FBV00sV0FBWCxFQUFOO0FBQUEseUJBQWpCO0FBQUE7QUFBQTtBQVpKLGFBREo7QUFnQkg7Ozs7Ozs7OztFQXBCa0JDLGdCOztlQXVCUix5QkFBUSxVQUFDQyxLQUFEO0FBQUEsV0FBWSxFQUFDUCxVQUFVTyxNQUFNUCxRQUFqQixFQUFaO0FBQUEsQ0FBUixFQUFpRCxFQUFDSyxrQ0FBRCxFQUFqRCxFQUFnRVAsUUFBaEUsQzs7Ozs7Ozs7Ozs7Ozs7NEJBdkJUQSxRIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Z2V0VXNlckluZm99IGZyb20gXCJhY3Rpb25zL3VzZXJJbmZvXCI7XG5cbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3VzZXJJbmZvLCBpc0xvYWRpbmcsIGVycm9yTXNnfSA9IHRoaXMucHJvcHMudXNlckluZm87XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gJ+ivt+axguS/oeaBr+S4rS4uLi4uLicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTXNnID8gZXJyb3JNc2cgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+55So5oi35L+h5oGv77yaPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+55So5oi35ZCN77yae3VzZXJJbmZvLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LuL57uN77yae3VzZXJJbmZvLmludHJvfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5nZXRVc2VySW5mbygpfT7or7fmsYLnlKjmiLfkv6Hmga88L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gKHt1c2VySW5mbzogc3RhdGUudXNlckluZm99KSwge2dldFVzZXJJbmZvfSkoVXNlckluZm8pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL1VzZXJJbmZvL1VzZXJJbmZvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==