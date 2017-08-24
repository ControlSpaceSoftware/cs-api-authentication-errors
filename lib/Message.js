"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(code, message, error) {
	_classCallCheck(this, Message);

	this.code = code;
	this.message = message;
	this.error = error;
};

exports.default = Message;