
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

	const message = error.message;

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
