/**
 * Schema Definitions
 *
 */
var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
  id: String,
  text: String,
  count: { type: Number, min: 0 },
  date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Board' collection in the MongoDB database
Board = mongoose.model('Boardi', BoardSchema);

