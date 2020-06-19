import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {IPacienti} from 'src/app/serv/pacienti';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientiService {
  // const base = this.http.post(`${environment.apiUrl}/users/register`, user)  //adr din backend
  private _url: string = `${environment.apiUrl}/users/all`

  constructor(private http: HttpClient) { }

  //cerere get 
  getPacienti(): Observable<IPacienti[]> {
    return this.http.get<IPacienti[]>(this._url);
  }
}
