/*global describe, it, beforeEach*/

import chai from 'chai'
import sinonChai from 'sinon-chai'
import { validateUserInput, UserInputValidationMessages } from '../src'

chai.should();
chai.use(sinonChai);

const expect = chai.expect;

describe('validateUserInput', () => {
	let userInput;
	beforeEach(() => {
		userInput = {
			name: 'test name',
			email: 'test email',
			code: 'test code',
			password: 'test password',
			newPassword: 'test new password'
		};
	});
	it('exits', () => {
		expect(validateUserInput).to.be.a('function');
	});
	it('throws error when requiredFields param is not an Array', () => {
		expect(validateUserInput.bind(null, null, null)).to.throw(TypeError);
	});
	it('returns required Message for missing "name" field', () => {
		userInput = {};
		const expected = {
			"code": "UserInputValidationMessages",
			"messages": [
				{
					"code": "UserInputMissingName",
					"error": {
						"field": "name"
					},
					"message": "Your name is required."
				}
			]
		};
		expect(validateUserInput(['name'], userInput)).to.eql(expected);
	});
});
