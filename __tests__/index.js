const http = require('http');
const axios = require('axios');
const faker = require('faker');

const app = require('../app');
const handleRequestFailure = require('../utils/test/async');

let api, server;

beforeAll(async () => {
	server = http.createServer(app);
	server.listen();
	const baseURL = `http://localhost:${server.address().port}`;
	api = axios.create({ baseURL });
	api.interceptors.response.use(null, handleRequestFailure);
});

afterAll(() => server.close());

test('Measurements', async () => {});
