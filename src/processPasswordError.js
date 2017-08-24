
import Message from './Message'
import Messages from './Messages'

export function createPasswordMessage(lookupCode, error) {
	const message = Messages[lookupCode];
	if (message) {
		return new Message(message.code, message.message, error);
	} else {
		return new Message(Messages.UnknownErrorCode.code, Messages.UnknownErrorCode.message, error);
	}
}

export default function processPasswordError(error) {

	const PasswordSymbol = /must have symbol characters/gi;
	const PasswordLength = /must have length greater than/gi;
	const PasswordNumeric = /must have numeric characters/gi;
	const PasswordUpperCase = /must have uppercase characters/gi;
	const PasswordLowerCase = /must have lowercase characters/gi;

	const message = error.message;

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