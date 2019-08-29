import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  ngJobEditForm: FormGroup;
  job: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private js: JobsService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.js.editJob(params['id']).subscribe(res => {
        this.job = res;
      });
    });
  }

  createForm() {
    this.ngJobEditForm = this.fb.group({
      JobDateApplied: ['', Validators.required ],
      JobPosition: ['', Validators.required ],
      JobCompanyName: ['', Validators.required ],
      JobLocation: ['', Validators.required ],
      JobURL: ['', Validators.required ],
      JobDescription: ['', Validators.required ]
    });
  }

  updateJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription, id) {
    this.route.params.subscribe(params => {
      this.js.updateJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription, params.id);
      this.router.navigate(['jobs']);
    });
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
}
