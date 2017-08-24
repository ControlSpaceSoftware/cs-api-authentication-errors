'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = processError;

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _processPasswordError = require('./processPasswordError');

var _processPasswordError2 = _interopRequireDefault(_processPasswordError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('processError version 6');

/**
 * Conform Errors to {code, message[, error]} for consistent processing in UI.
 *
 * @param error can be Object or String
 * @returns {Message}
 */
function processError(error) {

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

	var Password = /password/gi;
	var isPassword = Password.test(error.message);
	if (isPassword) {
		//{"__type":"InvalidPasswordException","message":"Password does not conform to policy: Password not long enough"}
		//{"__type":"InvalidParameterException","message":"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"}
		return (0, _processPasswordError2.default)(error);
	}

	var message = _Messages2.default[error.code];
	if (message) {
		return new _Message2.default(message.code, message.message, error);
	}

	return new _Message2.default(_Messages2.default.UnknownErrorCode.code, _Messages2.default.UnknownErrorCode.message, error);
}