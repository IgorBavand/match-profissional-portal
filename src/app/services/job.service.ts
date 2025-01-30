import {Injectable, Injector} from '@angular/core';
import {HttpBaseService} from "./base.service";
import {Observable} from "rxjs";
import {JobResponse} from "../dto/job-response.dto";

@Injectable({
  providedIn: 'root'
})
export class JobService extends HttpBaseService {

  private endpoint = 'jobs';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  public getAllJobs(page: number, limit: number): Observable<JobResponse> {
    return this.httpGet(`${this.endpoint}?page=${page}&limit=${limit}`);
  }

}
