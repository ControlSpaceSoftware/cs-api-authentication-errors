'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = validateUserInput;

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _UserInputValidationMessages = require('./UserInputValidationMessages');

var _UserInputValidationMessages2 = _interopRequireDefault(_UserInputValidationMessages);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _camelCase = require('lodash/string/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _startCase = require('lodash/string/startCase');

var _startCase2 = _interopRequireDefault(_startCase);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleCase = function titleCase() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	return (0, _startCase2.default)((0, _camelCase2.default)(text)).replace(/\s/g, '');
};

/**
 * Validate required user input and return new Message.
 *
 * NOTE: Only validates fields for which there corresponds a UserInputMissingField message code exists in Messages.js.
 *
 * @param requiredFields array list of field names to validate
 * @param userInput
 * @returns {UserInputValidationMessages}
 * @throws TypeError
 */
function validateUserInput() {
	var requiredFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var userInput = arguments[1];


	if (!(0, _isArray2.default)(requiredFields)) {
		throw new TypeError('validateUserInput(requiredFields = [], userInput) missing parameter requiredFields.');
	}

	var messages = requiredFields.map(function (field) {
		var lookupCode = titleCase('UserInputMissing_' + field);
		var message = _Messages2.default[lookupCode];
		if (message) {
			if ((typeof userInput === 'undefined' ? 'undefined' : _typeof(userInput)) !== 'object') {
				return new _Message2.default(message.code, message.message, { field: field });
			} else if (userInput.hasOwnProperty(field)) {
				return new _Message2.default(message.code, message.message, { field: field });
			} else {
				var value = userInput[field];
				if (!(value && typeof value === 'string')) {
					return new _Message2.default(message.code, message.message, { field: field });
				}
			}
		} else {
			throw new TypeError('unable to find ' + lookupCode + ' in Messages.js file. Add the message key to Messages.js');
		}
		return false;
	}).filter(function (i) {
		return i;
	});

	if (messages.length) {
		return new _UserInputValidationMessages2.default(messages);
	}
}