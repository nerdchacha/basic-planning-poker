"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _http = _interopRequireDefault(require("http"));

var _ws = _interopRequireDefault(require("ws"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 3030;
var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var wss = new _ws["default"].Server({
  server: server
});
app.use(_bodyParser["default"].json());
wss.on('connection', function (ws) {});
app.use('/api', _routes["default"]);
server.listen(PORT, function () {
  return console.log("Server is listening on port ".concat(PORT));
});