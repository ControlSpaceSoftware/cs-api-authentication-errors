/*global describe, it, beforeEach*/

import chai from 'chai'
import sinonChai from 'sinon-chai'
import {processError, MESSAGES, Message} from '../src'

chai.should();
chai.use(sinonChai);

const expect = chai.expect;

describe('processError', () => {
	beforeEach(() => {
	});
	it('exits', () => {
		expect(processError).to.be.a('function');
	});
	it('returns null if error does not exist', () => {
		expect(processError('')).to.be.null;
	});
	it('returns Message if error is a String', () => {
		expect(processError('test message')).to.eql(new Message('Message', 'test message'));
	});
	it('returns UnknownError when no code, like {message: "message"}', () => {
		const message = {message: 'test message'};
		expect(processError(message)).to.eql(new Message('UnknownError', 'test message', message));
	});
	it('returns UnknownError when no code or message, like {}', () => {
		const message = {noCode: '', noMessage: ''};
		expect(processError(message)).to.eql(new Message('UnknownError', '', message));
	});
	it('looks message up by code', () => {
		const error = {code: 'UsernameExistsException', message: 'test error message'};
		const expected = MESSAGES['UsernameExistsException'];
		expected.error = error;
		expect(processError(error)).to.eql(new Message(expected.code, expected.message, error));
	});
});
