const cases = require('jest-in-case');
const faker = require('faker');
const MeasurementController = require('../MeasurementController');
const mockedUser = require('../../models/User');
const generate = require('../../utils/generate');

jest.mock('../../models/Measurement', () => {
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

describe('MeasurementController', () => {
	test.todo('getMeasurements');
});
