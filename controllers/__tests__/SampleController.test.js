const cases = require('jest-in-case');
const faker = require('faker');
const SampleController = require('../SampleController');
const mockedSample = require('../../models/Sample');
const generate = require('../../utils/generate');

jest.mock('../../models/Sample', () => {
	const impl = {
		findOne: jest.fn(() => impl),
		select: jest.fn(() => impl),
		updateOne: jest.fn(() => impl),
	};

	return impl;
});

beforeEach(() => {
	jest.clearAllMocks();
});

describe('SampleController', () => {
	test.todo('getMeasurements');
});
