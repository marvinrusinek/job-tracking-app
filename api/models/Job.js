const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Job
const Job = new Schema({
  JobDateApplied: {
    type: Date
  },
  JobPosition: {
    type: String
  },
  JobCompanyName: {
    type: String
  },
  JobLocation: {
    type: String
  },
  JobURL: {
    type: String
  },
  JobDescription: {
    type: String
  }
},{
  collection: 'Job'
});

module.exports = mongoose.model('Job', Job);
