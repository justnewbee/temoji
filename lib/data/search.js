"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _db2 = require("./_db");

var _db3 = _interopRequireDefault(_db2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tag) {
  return new _promise2.default(function (resolve) {
    return resolve(_db3.default.tagMap[tag] || []);
  });
};

module.exports = exports["default"];