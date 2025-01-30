import { Component } from '@angular/core';
import { Job } from "../../dto/job.dto";
import { JobService } from "../../services/job.service";
import { JobResponse } from "../../dto/job-response.dto";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobs: Job[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  limit: number = 5; // Número de vagas por página

  constructor(private service: JobService) {}

  public ngOnInit() {
    this.getAllJobs(this.currentPage);
  }

  public getAllJobs(page: number) {
    this.service.getAllJobs(page, this.limit).subscribe((data: JobResponse) => {
      this.jobs = data.jobs ?? [];
      this.totalPages = data.pagination.totalPages ?? 1;
      this.currentPage = data.pagination.page ?? 1;
    });
  }

  public nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getAllJobs(this.currentPage + 1);
    }
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.getAllJobs(this.currentPage - 1);
    }
  }
}
