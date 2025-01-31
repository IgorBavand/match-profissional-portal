@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobs: Job[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  limit: number = 5;

  filters: JobFilter = {
    companyId: '',
    companyName: '',
    contractType: '',
    seniority: '',
    minSalary: '',
    maxSalary: '',
    isActive: ''
  };

  constructor(private service: JobService) {}

  public ngOnInit() {
    this.getAllJobs();
  }

  public getAllJobs() {
    console.log(this.filters);
    this.service.getAllJobs(this.currentPage, this.limit, this.filters)
      .subscribe((data: JobResponse) => {
        this.jobs = data.jobs ?? [];
        this.totalPages = data.pagination.totalPages ?? 1;
        this.currentPage = data.pagination.page ?? 1;
      });
  }

  public applyFilters() {
    this.currentPage = 1;
    this.getAllJobs();
  }

  public resetFilters() {
    this.filters = {
      companyId: '',
      companyName: '',
      contractType: '',
      seniority: '',
      minSalary: '',
      maxSalary: '',
      isActive: ''
    };
    this.getAllJobs();
  }

  public nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getAllJobs();
    }
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAllJobs();
    }
  }
}
import { Component } from '@angular/core';
import { Job } from "../../dto/job.dto";
import { JobService } from "../../services/job.service";
import { JobResponse } from "../../dto/job-response.dto";

import {JobFilter} from "../../dto/job-filter.dto";
