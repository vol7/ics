"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatUTCDateAsUTC;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function formatUTCDateAsUTC() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (args.length > 0) {
    var _args = _slicedToArray(args, 6),
        year = _args[0],
        month = _args[1],
        date = _args[2],
        _args$ = _args[3],
        hours = _args$ === void 0 ? 0 : _args$,
        _args$2 = _args[4],
        minutes = _args$2 === void 0 ? 0 : _args$2,
        _args$3 = _args[5],
        seconds = _args$3 === void 0 ? 0 : _args$3;

    var formattedDate = _moment["default"].utc([year, month - 1, date, hours, minutes, seconds]).format('YYYYMMDDTHHmm00') + 'Z';
    return formattedDate;
  }

  return _moment["default"].utc().format('YYYYMMDDTHHmm00') + 'Z';
}