const faker = require('faker');

function buildReq({ ...overrides } = {}) {
	return { body: {}, params: {}, ...overrides };
}

function buildRes(overrides = {}) {
	// Return `res` inside `jest.fn` to allow nesting
	// example: `res.status(200).json({});`
	const res = {
		json: jest.fn(() => res).mockName('json'),
		status: jest.fn(() => res).mockName('status'),
		locals: { user: buildUser() },
		...overrides,
	};

	return res;
}

function buildNext(impl) {
	return jest.fn(impl).mockName('next');
}

module.exports = {
	buildReq,
	buildRes,
	buildNext,
};
