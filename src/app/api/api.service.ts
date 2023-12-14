import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  postKorisnik(data : any) {
    return this.http.post<any>("http://localhost:3000/korisnik/", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
