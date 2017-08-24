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

	var PasswordSymbol = /must have symbol characters/gi;
	var PasswordLength = /must have length greater than/gi;
	var PasswordNumeric = /must have numeric characters/gi;
	var PasswordUpperCase = /must have uppercase characters/gi;
	var PasswordLowerCase = /must have lowercase characters/gi;

	var message = error.message;

	console.log('processPasswordError', PasswordUpperCase, PasswordUpperCase.test(message), 'message', message);

	if (PasswordLength.test(message)) {
		return createPasswordMessage('PasswordLengthValidation', error);
	}

	if (PasswordNumeric.test(message)) {
		return createPasswordMessage('PasswordNumericValidation', error);
	}

	if (PasswordUpperCase.test(message)) {
		return createPasswordMessage('PasswordUpperCaseValidation', error);
	}

	if (PasswordSymbol.test(message)) {
		return createPasswordMessage('PasswordSymbolValidation', error);
	}

	if (PasswordLowerCase.test(message)) {
		return createPasswordMessage('PasswordLowerCaseValidation', error);
	}

	return createPasswordMessage('UnknownPasswordValidation', error);
}