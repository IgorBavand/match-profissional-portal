import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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

  protected httpGet(endpoint: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(`${this.apiBase}${endpoint}`, {
      headers,
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
