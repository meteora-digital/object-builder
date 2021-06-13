"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectBuilder = /*#__PURE__*/function () {
  function ObjectBuilder() {
    _classCallCheck(this, ObjectBuilder);

    // Where we will store the filter parameters
    this.value = {};
  }

  _createClass(ObjectBuilder, [{
    key: "set",
    value: function set() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Loop the new data
      for (var key in data) {
        // Set / reset the parameter in the object
        this.value[key] = []; // Call the add function to add the new data to the object

        this.add(data);
      }
    }
  }, {
    key: "add",
    value: function add() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _loop = function _loop(key) {
        // If we dont have this parameter yet, create it as an array
        if (_this.value[key] == undefined) _this.value[key] = []; // If our value is an array

        if (Array.isArray(data[key])) {
          // Loop the value array
          data[key].forEach(function (value) {
            // If the filter parameter value does not contain this value, then add it
            if (_this.value[key].indexOf(value) == -1) _this.value[key].push(value);
          });
        } else {
          // If the parameter value is not an array
          // Simply push the value to the filter
          if (_this.value[key].indexOf(data[key]) == -1) _this.value[key].push(data[key]);
        }
      };

      // Loop the new data
      for (var key in data) {
        _loop(key);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _loop2 = function _loop2(key) {
        // If we dont have this parameter yet, exit the function, nothing else to do
        if (_this2.value[key] == undefined) return {
          v: void 0
        }; // If our value is an array

        if (Array.isArray(data[key])) {
          // Loop the value array
          data[key].forEach(function (value) {
            // If the filter parameter value contains this value, then remove it
            if (_this2.value[key].indexOf(value) >= 0) _this2.value[key] = _this2.value[key].filter(function (item) {
              return item != value;
            });
          });
        } else {
          // If the parameter value is not an array
          // Simply remove the value from the filter
          if (_this2.value[key].indexOf(data[key]) >= 0) _this2.value[key] = _this2.value[key].filter(function (item) {
            return item != data[key];
          });
        } // If there are no filter values left, delete the parameter


        if (_this2.value[key].length === 0) delete _this2.value[key];
      };

      // Loop the new data
      for (var key in data) {
        var _ret = _loop2(key);

        if (_typeof(_ret) === "object") return _ret.v;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // If we specify a key to remove
      if (key && typeof key == 'string') {
        // Remove that key
        delete this.value[key];
      } else {
        // Otherwise loop all the object and delete them
        for (var _key in this.value) {
          delete this.value[_key];
        }
      }
    }
  }, {
    key: "get",
    value: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Return the requested value
      return key && typeof key == 'string' ? this.value[key] : this.value;
    }
  }]);

  return ObjectBuilder;
}();

exports["default"] = ObjectBuilder;