import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class FormApiService {
   constructor(private http: HttpClient){}
   postText(value: string): Observable<any> {
       const url = `${environment.apiUrl}/v1/texts`;
       return this.http.post(url, {'value': value });
   }
   
   getVowelCount(): Observable<any> {
    const url = `${environment.apiUrl}/v1/texts`;
    return this.http.get(url);
   }

}