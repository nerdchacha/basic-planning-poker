"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _utils = require("./utils");

var Game = {
  System: {
    Febonacci: 0,
    ModifiedFebonacci: 1,
    TshirtSize: 2,
    PowerOfTwo: 3
  },
  Show: {
    Creator: 0,
    Everyone: 1
  }
};
exports.Game = Game;
(0, _utils.deepFreeze)(Game);