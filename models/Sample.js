const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({}, { collection: 'measurement' });

const Sample = new mongoose.model('Sample', SampleSchema);
module.exports = Sample;
