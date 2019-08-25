import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { JobsService } from "../jobs.service";

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {
  ngJobAddForm: FormGroup;
  constructor(private fb: FormBuilder, private js: JobsService) {
    this.createForm();
  }

  createForm() {
    this.ngJobAddForm = this.fb.group({
      JobDateApplied: ['', Validators.required ],
      JobPosition: ['', Validators.required ],
      JobCompanyName: ['', Validators.required ],
      JobLocation: ['', Validators.required ],
      JobURL: ['', Validators.required ],
      JobDescription: ['', Validators.required ]
    });
  }

  addJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription) {
    this.js.addJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription);

    alert("Job Added Successfully!");
  }

  ngOnInit() {
  }
}
