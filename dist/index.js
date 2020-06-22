"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionSheet = _interopRequireDefault(require("./components/action-sheet"));

var _alert = _interopRequireDefault(require("./components/alert"));

var _avatar = _interopRequireDefault(require("./components/avatar"));

var _badge = _interopRequireDefault(require("./components/badge"));

var _button = _interopRequireDefault(require("./components/button"));

var _card = _interopRequireDefault(require("./components/card"));

var _cell = _interopRequireDefault(require("./components/cell"));

var _cellGroup = _interopRequireDefault(require("./components/cell-group"));

var _checkboxGroup = _interopRequireDefault(require("./components/checkbox-group"));

var _col = _interopRequireDefault(require("./components/col"));

var _collapse = _interopRequireDefault(require("./components/collapse"));

var _collapseItem = _interopRequireDefault(require("./components/collapse-item"));

var _countDown = _interopRequireDefault(require("./components/countDown"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _drawer = _interopRequireDefault(require("./components/drawer"));

var _grid = _interopRequireDefault(require("./components/grid"));

var _gridIcon = _interopRequireDefault(require("./components/grid-icon"));

var _gridItem = _interopRequireDefault(require("./components/grid-item"));

var _gridLabel = _interopRequireDefault(require("./components/grid-label"));

var _icon = _interopRequireDefault(require("./components/icon"));

var _indexList = _interopRequireDefault(require("./components/index-list"));

var _input = _interopRequireDefault(require("./components/input"));

var _inputNumber = _interopRequireDefault(require("./components/input-number"));

var _loadMore = _interopRequireDefault(require("./components/load-more"));

var _message = _interopRequireDefault(require("./components/message"));

var _modal = _interopRequireDefault(require("./components/modal"));

var _noticeBar = _interopRequireDefault(require("./components/notice-bar"));

var _page = _interopRequireDefault(require("./components/page"));

var _panel = _interopRequireDefault(require("./components/panel"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _radioGroup = _interopRequireDefault(require("./components/radio-group"));

var _rate = _interopRequireDefault(require("./components/rate"));

var _row = _interopRequireDefault(require("./components/row"));

var _spin = _interopRequireDefault(require("./components/spin"));

var _step = _interopRequireDefault(require("./components/step"));

var _steps = _interopRequireDefault(require("./components/steps"));

var _sticky = _interopRequireDefault(require("./components/sticky"));

var _stickyItem = _interopRequireDefault(require("./components/sticky-item"));

var _swipeout = _interopRequireDefault(require("./components/swipeout"));

var _switch = _interopRequireDefault(require("./components/switch"));

var _tab = _interopRequireDefault(require("./components/tab"));

var _tabBar = _interopRequireDefault(require("./components/tab-bar"));

var _tabBarItem = _interopRequireDefault(require("./components/tab-bar-item"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

var _tag = _interopRequireDefault(require("./components/tag"));

var _toast = _interopRequireDefault(require("./components/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var components = {
  'i-action-sheet': _actionSheet["default"],
  'i-alert': _alert["default"],
  'i-avatar': _avatar["default"],
  'i-badge': _badge["default"],
  'i-button': _button["default"],
  'i-card': _card["default"],
  'i-cell': _cell["default"],
  'i-cell-group': _cellGroup["default"],
  'i-checkbox-group': _checkboxGroup["default"],
  'i-col': _col["default"],
  'i-collapse': _collapse["default"],
  'i-collapse-item': _collapseItem["default"],
  'i-count-down': _countDown["default"],
  'i-divider': _divider["default"],
  'i-drawer': _drawer["default"],
  'i-grid': _grid["default"],
  'i-grid-icon': _gridIcon["default"],
  'i-grid-item': _gridItem["default"],
  'i-grid-label': _gridLabel["default"],
  'i-icon': _icon["default"],
  'i-index-list': _indexList["default"],
  'i-input': _input["default"],
  'i-input-number': _inputNumber["default"],
  'i-load-more': _loadMore["default"],
  'i-message': _message["default"],
  'i-modal': _modal["default"],
  'i-notice-bar': _noticeBar["default"],
  'i-page': _page["default"],
  'i-panel': _panel["default"],
  'i-progress': _progress["default"],
  'i-radio-group': _radioGroup["default"],
  'i-rate': _rate["default"],
  'i-row': _row["default"],
  'i-spin': _spin["default"],
  'i-step': _step["default"],
  'i-steps': _steps["default"],
  'i-sticky': _sticky["default"],
  'i-sticky-item': _stickyItem["default"],
  'i-swipeout': _swipeout["default"],
  'i-switch': _switch["default"],
  'i-tab': _tab["default"],
  'i-tab-bar': _tabBar["default"],
  'i-tab-bar-item': _tabBarItem["default"],
  'i-tabs': _tabs["default"],
  'i-tag': _tag["default"],
  'i-toast': _toast["default"]
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  Object.keys(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });
  Vue.prototype.$IVIEW = {
    size: opts.size || '',
    transfer: 'transfer' in opts ? opts.transfer : ''
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var API = _objectSpread({
  version: '1.0.4',
  install: install
}, components);

var _default = API;
exports["default"] = _default;