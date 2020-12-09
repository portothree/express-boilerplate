const createError = require('http-errors');

const validationSettings = {
	strict: true,
	abortEarly: true,
	stripUnknown: true,
};

function validateDto(schema) {
	return async (req, res, next) => {
		try {
			const validatedBody = await schema.validate(
				req.body,
				validationSettings
			);
			req.body = validatedBody;
			next();
		} catch (error) {
			next(createError(400, error.message));
		}
	};
}

module.exports = validateDto;
