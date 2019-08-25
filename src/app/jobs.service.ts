import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  uri = 'http://localhost:4000/jobs';

  constructor(private http: HttpClient) {}

  addJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription) {
    const obj = {
      JobDateApplied,
      JobPosition,
      JobCompanyName,
      JobLocation,
      JobURL,
      JobDescription
    };

    console.log(obj);

    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getJobs() {
    return this.http.get(`${this.uri}`);
  }

  editJob(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateJob(JobDateApplied, JobPosition, JobCompanyName, JobLocation, JobURL, JobDescription, id) {
    const obj = {
      JobDateApplied,
      JobPosition,
      JobCompanyName,
      JobLocation,
      JobURL,
      JobDescription
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteJob(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
