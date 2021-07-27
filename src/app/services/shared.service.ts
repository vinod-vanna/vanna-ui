import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getSingleJobApplicants(): Observable<any> {
    return this.http.get('assets/json/single-job-applicants.json').pipe();
  }

  getMenuLinks(): Observable<any> {
    return this.http.get('assets/json/menu.json').pipe();
  }
}
