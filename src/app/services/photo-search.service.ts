import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'FDf1xVH5xaMuJYtkvxLnj8M5q3kKNHGQsJVcwaGR7FR6uojvdwErA0th'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PhotoSearchService {

  constructor(private http: HttpClient) { }

  getdata(search: any, perPage: any): Observable<any> {
    const url = "https://api.pexels.com/v1/search?query=" + search + "&per_page=" + perPage;
    return this.http.get<any>(url, httpOptions).pipe(catchError(this.handelError));
  }
  handelError(error: any) {
    return throwError(error.message || "Server Error");
  }
}
