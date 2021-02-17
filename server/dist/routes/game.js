"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _shortid = _interopRequireDefault(require("shortid"));

var _joi = _interopRequireDefault(require("joi"));

var _lodash = require("lodash");

var _constant = require("../constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var router = _express["default"].Router();

router.post('/create', function (req, res) {
  console.log(_lodash.values.apply(void 0, _toConsumableArray(_constant.Game.System)));

  var schema = _joi["default"].object({
    name: _joi["default"].string().alphanum().min(3).max(100).required().message('Game name is missing'),
    system: _joi["default"].number().valid(_lodash.values.apply(void 0, _toConsumableArray(_constant.Game.System))).required().message('Voting system is missing'),
    show: _joi["default"].number().valid(_lodash.values.apply(void 0, _toConsumableArray(_constant.Game.Show))).required().message('Who can show cards is missing')
  });

  var validation = schema.valid(req.body);
  console.log(validation);

  var gameId = _shortid["default"].generate();

  console.log(gameId);
  res.sendStatus(201);
});
var _default = router;
exports["default"] = _default;