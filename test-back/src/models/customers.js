const mongoose = require('mongoose');
const { Schema } = mongoose;

const CcustomerSchema = new Schema({
  documentType: { type: String, required: true },
  documentNumber: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true }
});

module.exports = mongoose.model('customers', CcustomerSchema);