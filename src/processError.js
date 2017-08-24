
import Message from './Message'
import Messages from './Messages'
import processPasswordError from './processPasswordError'

console.log('processError version 6');

/**
 * Conform Errors to {code, message[, error]} for consistent processing in UI.
 *
 * @param error can be Object or String
 * @returns {Message}
 */
export default function processError(error) {

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

	const Password = /password/gi;
	const isPassword = Password.test(error.message);
	if (isPassword) {
		//{"__type":"InvalidPasswordException","message":"Password does not conform to policy: Password not long enough"}
		//{"__type":"InvalidParameterException","message":"1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"}
		return processPasswordError(error);
	}

	const message = Messages[error.code];
	if (message) {
		return new Message(message.code, message.message, error);
	}

	return new Message(Messages.UnknownErrorCode.code, Messages.UnknownErrorCode.message, error);

}
