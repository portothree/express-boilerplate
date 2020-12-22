require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const indexRouter = require('./routes/index');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

Sentry.init({
	dsn: process.env.SENTRY_DSN,
	integrations: [
		new Sentry.Integrations.Http({ tracing: true }),
		new Tracing.Integrations.Express({ app }),
	],
	tracesSampleRate: 1.0,
});

app.use(helmet());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

/*
 * Handle Not Found errors
 * An endpoint is not found if a request fall through all
 * middlewares and routes
 */
app.use((req, res, next) => {
	next(createError(404));
});

app.use(Sentry.Handlers.errorHandler());

app.use((err, req, res, next) => {
	const statusCode = err.status || 500;
	const responseBody = { status: statusCode, message: err.message };

	if (res.sentry) responseBody.errorId = res.sentry;

	res.status(statusCode);
	res.json(responseBody);
});

module.exports = app;
