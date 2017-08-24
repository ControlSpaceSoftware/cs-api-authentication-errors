'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createPasswordMessage = createPasswordMessage;
exports.default = processPasswordError;

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPasswordMessage(lookupCode, error) {
	var message = _Messages2.default[lookupCode];
	if (message) {
		return new _Message2.default(message.code, message.message, error);
	} else {
		return new _Message2.default(_Messages2.default.UnknownErrorCode.code, _Messages2.default.UnknownErrorCode.message, error);
	}
}

function processPasswordError(error) {

	if (error.code === 'NotAuthorizedException') {
		return createPasswordMessage('NotAuthorizedException', error);
	}

	var message = error.message;

	if (/must\shave\slength\sgreater\sthan/gi.test(message)) {
		return createPasswordMessage('PasswordLengthValidation', error);
	}

	if (/must\shave\snumeric\scharacters/gi.test(message)) {
		return createPasswordMessage('PasswordNumericValidation', error);
	}

	if (/must\shave\suppercase\scharacters/gi.test(message)) {
		return createPasswordMessage('PasswordUpperCaseValidation', error);
	}

	if (/must\shave\ssymbol\scharacters/gi.test(message)) {
		return createPasswordMessage('PasswordSymbolValidation', error);
	}

	if (/must\shave\slowercase\scharacters/gi.test(message)) {
		return createPasswordMessage('PasswordLowerCaseValidation', error);
	}

	return createPasswordMessage('UnknownPasswordValidation', error);
}