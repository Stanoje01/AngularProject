import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BazaService {

  baseUrl = "http://localhost:3000/korisnik"
  constructor(private http: HttpClient) { }

  getKorisnik() {
    return this.http.get(this.baseUrl).pipe(map((res: any) => { return res; }))
  }

  postKorisnik(data: any) {
    return this.http.post<any>(this.baseUrl, data).pipe(map((res: any) => { return res }))
  }

  updateKorisnik(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + id, data).pipe(map((res: any) => { return res }))
  }

  deleteKorisnik(id: number) {
    return this.http.delete<any>(this.baseUrl + "/"+ id).pipe(map((res: any) => { return res }))
  }
}
