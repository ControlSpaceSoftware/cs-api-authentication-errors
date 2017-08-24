'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = processError;

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Password = /password/gi;
var PasswordSymbol = /must have symbol characters/gi;
var PasswordLength = /must have length greater than or equal to ([0-9]+)/gi;
var PasswordNumeric = /must have numeric characters/gi;
var PasswordUpperCase = /must have uppercase characters/gi;
var PasswordLowerCase = /must have lowercase characters/gi;

console.log('processError version 3');

/**
 * Conform Errors to {code, message[, error]} for consistent processing in UI.
 *
 * @param error can be Object or String
 * @returns {Message}
 */
function processError(error) {

	var lookupCode = void 0;
	var lookupMessage = void 0;

	if (!error) {
		return null;
	}

	if (typeof error === 'string') {
		return new _Message2.default('Message', error);
	}

	if (!error.code) {
		if (error.message && typeof error.message === 'string') {
			return new _Message2.default('UnknownError', error.message, error);
		}
		return new _Message2.default('UnknownError', '', error);
	}

	var code = error.code;
	var message = error.message;
	var isPassword = Password.test(message);

	if (isPassword) {
		//{"__type":"InvalidPasswordException","message":"Password does not conform to policy: Password not long enough"}
		//{"__type":"InvalidParameterException","message":"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"}

		console.log('PasswordUpperCase', PasswordUpperCase, 'message', message);

		if (PasswordLength.test(message)) {
			lookupCode = 'PasswordLengthValidation';
		} else if (PasswordNumeric.test(message)) {
			lookupCode = 'PasswordNumericValidation';
		} else if (PasswordUpperCase.test(message)) {
			lookupCode = 'PasswordUpperCaseValidation';
		} else if (PasswordSymbol.test(message)) {
			lookupCode = 'PasswordSymbolValidation';
		} else if (PasswordLowerCase.test(message)) {
			lookupCode = 'PasswordLowerCaseValidation';
		}
	}

	console.log('isPassword', isPassword);
	console.log('lookupCode', lookupCode);

	lookupCode = lookupCode || code;

	if (_Messages2.default[lookupCode]) {
		lookupMessage = _Messages2.default[lookupCode];
	} else {
		lookupMessage = _Messages2.default['UnknownErrorCode'];
	}

	console.log(JSON.stringify({ error: error, lookupMessage: lookupMessage }, null, 4));

	return new _Message2.default(lookupMessage.code, lookupMessage.message, error);
}