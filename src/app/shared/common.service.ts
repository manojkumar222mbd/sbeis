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
	  const senddata = new FormData();
      senddata.append('data', JSON.stringify(data));
	  const httpOptions = {headers: new HttpHeaders()};
	  return this.http.post<any>(this.ApiBaseUrl+'/api/mail.php', senddata, httpOptions)
		.pipe(
		);
	}
}