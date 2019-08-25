const express = require('express');
const app = express();
const jobRoutes = express.Router();

// Require Job model in our routes module
const Job = require('../models/Job');

// Defined store route
jobRoutes.route('/add').post(function (req, res) {
  const job = new Job(req.body);
  job.save()
    .then(job => {
    res.status(200).json({'Job': 'Job has been added successfully'});
})
  .catch(err => {
    res.status(400).send("unable to save to database");
});
});

// Defined get data(index or listing) route
jobRoutes.route('/').get(function (req, res) {
  Job.find(function (err, jobs){
    if(err){
      console.log(err);
    }
    else {
      res.json(jobs);
    }
  });
});

// Defined edit route
jobRoutes.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Job.findById(id, function (err, job){
    res.json(job);
  });
});

//  Defined update route
jobRoutes.route('/update/:id').post(function (req, res) {
  Job.findById(req.params.id, function(err, job) {
    if (!job)
      res.status(404).send("Record not found");
    else {
      job.JobDateApplied = req.body.JobDateApplied;
      job.JobPosition = req.body.JobPosition;
      job.JobCompanyName = req.body.JobCompanyName;
      job.JobLocation = req.body.JobLocation;
      job.JobURL = req.body.JobURL;
      job.JobDescription = req.body.JobDescription;

      job.save().then(job => {
        res.json('Update complete');
    })
    .catch(err => {
        res.status(400).send("unable to update the database");
    });
    }
  });
});

// Defined delete | remove | destroy route
jobRoutes.route('/delete/:id').get(function (req, res) {
  Job.findByIdAndRemove({_id: req.params.id}, function(err, job){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = jobRoutes;
