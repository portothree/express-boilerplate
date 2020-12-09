const cases = require('jest-in-case');
const faker = require('faker');

const validateDto = require('../validate-dto');

const validationErrorAssertion = {
	name: 'BadRequestError',
	message: expect.any(String),
};

function setup() {
	const req = {};
	const res = {};
	const next = jest.fn();

	return { req, res, next };
}

describe('validateDto', () => {
	test.todo('');
});
