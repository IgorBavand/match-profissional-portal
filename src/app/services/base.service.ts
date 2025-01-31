import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobFilter} from "../dto/job-filter.dto";

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private readonly httpClient!: HttpClient;

  private apiBase = 'http://localhost:3000/';


  constructor(protected readonly injector: Injector) {
    if (injector == null) {
      throw new Error('Injector cannot be null');
    }

    this.httpClient = injector.get(HttpClient);
  }

  protected httpGet(endpoint: string, page: number, limit: number, filters: JobFilter): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', limit.toString());

    console.log(filters)

    if (filters.companyId && filters.companyId.trim() !== '') {
      params = params.set('companyId', filters.companyId);
    }
    if (filters.companyName && filters.companyName.trim() !== '') {
      params = params.set('companyName', filters.companyName);
    }
    if (filters.contractType && filters.contractType.trim() !== '') {
      params = params.set('contractType', filters.contractType);
    }
    if (filters.seniority && filters.seniority.trim() !== '') {
      params = params.set('seniority', filters.seniority);
    }
    if (filters.minSalary && !isNaN(Number(filters.minSalary))) {
      params = params.set('minSalary', filters.minSalary);
    }
    if (filters.maxSalary && !isNaN(Number(filters.maxSalary))) {
      params = params.set('maxSalary', filters.maxSalary);
    }
    if (filters.isActive && (filters.isActive === 'true' || filters.isActive === 'false')) {
      params = params.set('isActive', filters.isActive);
    }

    console.log(params)

    return this.httpClient.get(`${this.apiBase}${endpoint}`, {
      headers,
      params,
      withCredentials: true,
    });
  }

  protected httpPost(endpoint: string, dados: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiBase}${endpoint}`, dados, {
      headers,
      withCredentials: true,
    });
  }

  protected httpPut(endpoint: string, dados: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.put(`${this.apiBase}${endpoint}`, dados, {
      headers,
      withCredentials: true,
    });
  }

  protected httpDelete(endpoint: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.delete(`${this.apiBase}${endpoint}`, {
      headers,
      withCredentials: true,
    });
  }

}
