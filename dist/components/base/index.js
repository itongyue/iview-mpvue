"use strict";

/**
 * @file 基础库
 */
function Message(ctx, options) {
  var _options$refs = options.refs,
      refs = _options$refs === void 0 ? 'message' : _options$refs;
  var vm = ctx.$refs[refs];
  vm && vm.handleShow && vm.handleShow(options);
}

function Toast(ctx, options) {
  var _options$refs2 = options.refs,
      refs = _options$refs2 === void 0 ? 'toast' : _options$refs2;
  var vm = ctx.$refs[refs];
  vm && vm.handleShow && vm.handleShow(options);
}

Toast.hide = function (ctx) {
  var refs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'toast';
  var vm = ctx.$refs[refs];
  vm && vm.handleHide && vm.handleHide();
};

module.exports = {
  $Message: Message,
  $Toast: Toast
};