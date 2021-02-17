"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepFreeze = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (prop) {
    if (_typeof(obj[prop]) === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

exports.deepFreeze = deepFreeze;