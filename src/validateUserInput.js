import Message from './Message'
import UserInputValidationMessages from './UserInputValidationMessages'
import MESSAGES from './Messages'
import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'
import isArray from 'lodash.isarray'

const titleCase = (text = '') => startCase(camelCase(text)).replace(/\s/g, '');

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
export default function validateUserInput(requiredFields = [], userInput) {

	if (!isArray(requiredFields)) {
		throw new TypeError('validateUserInput(requiredFields = [], userInput) missing parameter requiredFields.');
	}

	const messages = requiredFields.map((field) => {
		const lookupCode = titleCase('UserInputMissing_' + field);
		const message = MESSAGES[lookupCode];
		if (message) {
			if (typeof userInput !== 'object') {
				return new Message(message.code, message.message, {field});
			} else if (!userInput.hasOwnProperty(field)) {
				return new Message(message.code, message.message, {field});
			} else {
				const value = userInput[field];
				if (!(value && typeof value === 'string')) {
					return new Message(message.code, message.message, {field});
				}
			}
		} else {
			throw new TypeError(`unable to find ${lookupCode} in Messages.js file. Add the message key to Messages.js`);
		}
		return false;
	}).filter((i) => i);

	if (messages.length) {
		return new UserInputValidationMessages(messages);
	}

}
