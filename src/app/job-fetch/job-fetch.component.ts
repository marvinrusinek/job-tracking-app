import { Component, OnInit } from '@angular/core';
import Job from '../Job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-fetch',
  templateUrl: './job-fetch.component.html',
  styleUrls: ['./job-fetch.component.css']
})
export class JobFetchComponent implements OnInit {
  jobs: Job[];
  constructor(private js: JobsService) {}

  ngOnInit() {
    this.js.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  deleteJob(id) {
    this.js.deleteJob(id).subscribe(res => {
      this.jobs.splice(id, 1);
    });
  }
}
