"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 输出一行内容至 stdout
 * @param {string} [text]
 */
exports.default = function (text) {
  process.stdout.write((text || "") + "\n");
};

module.exports = exports["default"];