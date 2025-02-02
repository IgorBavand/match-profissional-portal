import {Injectable, Injector} from '@angular/core';
import {HttpBaseService} from "./base.service";
import {Observable} from "rxjs";
import {JobResponse} from "../dto/job-response.dto";
import {HttpParams} from "@angular/common/http";
import {JobFilter} from "../dto/job-filter.dto";

@Injectable({
  providedIn: 'root'
})
export class JobService extends HttpBaseService {

  private endpoint = 'jobs';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  public getAllJobs(page: number, limit: number, fiters: JobFilter): Observable<JobResponse> {
    return this.httpGet(`${this.endpoint}`, page, limit, fiters);
  }

  public applyToJob(id: string) {
    return this.httpPost(`${this.endpoint}/${id}/apply`, {});
  }
}
