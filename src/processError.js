
import Message from './Message'
import Messages from './Messages'

const Password = /password/gi;
const PasswordSymbol = /must have symbol characters/gi;
const PasswordLength = /must have length greater than or equal to ([0-9]+)/gi;
const PasswordNumeric = /must have numeric characters/gi;
const PasswordUpperCase = /must have uppercase characters/gi;
const PasswordLowerCase = /must have lowercase characters/gi;

console.log('processError version 3');

/**
 * Conform Errors to {code, message[, error]} for consistent processing in UI.
 *
 * @param error can be Object or String
 * @returns {Message}
 */
export default function processError(error) {

	let lookupCode;
	let lookupMessage;

	if (!(error)) {
		return null;
	}

	if (typeof error === 'string') {
		return new Message('Message', error);
	}

	if (!(error.code)) {
		if (error.message && typeof error.message === 'string') {
			return new Message('UnknownError', error.message, error);
		}
		return new Message('UnknownError', '', error);
	}

	const code = error.code;
	const message = error.message;
	const isPassword = Password.test(message);

	if (isPassword) {
		//{"__type":"InvalidPasswordException","message":"Password does not conform to policy: Password not long enough"}
		//{"__type":"InvalidParameterException","message":"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"}

		console.log('PasswordUpperCase', PasswordUpperCase, 'message', message);

		if (PasswordLength.test(message)) {
			lookupCode = 'PasswordLengthValidation';
		} else
		if (PasswordNumeric.test(message)) {
			lookupCode = 'PasswordNumericValidation';
		} else
		if (PasswordUpperCase.test(message)) {
			lookupCode = 'PasswordUpperCaseValidation';
		} else
		if (PasswordSymbol.test(message)) {
			lookupCode = 'PasswordSymbolValidation';
		} else
		if (PasswordLowerCase.test(message)) {
			lookupCode = 'PasswordLowerCaseValidation';
		}
	}

	console.log('isPassword', isPassword);
	console.log('lookupCode', lookupCode);

	lookupCode = lookupCode || code;

	if (Messages[lookupCode]) {
		lookupMessage = Messages[lookupCode];
	} else {
		lookupMessage = Messages['UnknownErrorCode'];
	}

	console.log(JSON.stringify({error, lookupMessage}, null, 4));

	return new Message(lookupMessage.code, lookupMessage.message, error);

}
