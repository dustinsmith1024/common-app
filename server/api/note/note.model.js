'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
  _user : { type: String, ref: 'User' },
  note: String,
  labels: [{label: String}],
  favorite: Boolean
});

module.exports = mongoose.model('Note', NoteSchema);