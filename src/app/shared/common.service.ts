import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
   ApiBaseUrl="http://prayansh.in";
  constructor(private http:HttpClient) { }
  
	sendMail(data:any): Observable<any> {
	  const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json',})};
	  return this.http.post<any>(this.ApiBaseUrl+'/api/mail.php', data, httpOptions)
		.pipe(
		);
	}
}
