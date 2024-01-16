import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BazaService {

  baseUrl = "http://localhost:3000/korisnik"
  baseUrl2 = "http://localhost:3000/proizvodi"
  baseUrl3 = "http://localhost:3000/rezervacija"
  constructor(private http: HttpClient) { }

  getKorisnik() {
    return this.http.get(this.baseUrl).pipe(map((res: any) => { return res; }))
  }

  postKorisnik(data: any) {
    return this.http.post<any>(this.baseUrl, data).pipe(map((res: any) => { return res }))
  }

  updateKorisnik(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + "/" + id, data).pipe(map((res: any) => { return res }))
  }

  deleteKorisnik(id: number) {
    return this.http.delete<any>(this.baseUrl + "/" + id).pipe(map((res: any) => { return res }))
  }

  getProizvod() {
    return this.http.get(this.baseUrl2).pipe(map((res: any) => { return res; }))
  }

  getProizvodByTip(tip: string) {
    return this.http.get<any[]>(`${this.baseUrl2}?tip=${tip}`);
  }

  getProizvodById(proizvodId: number): Observable<any> {
    const url = `${this.baseUrl2}/${proizvodId}`;
    return this.http.get<any>(url);
  }

  postRezervacija(data: any) {
    return this.http.post<any>(this.baseUrl3, data).pipe(map((res: any) => { return res }))
  }

  getRezervacija() {
    return this.http.get<any[]>(this.baseUrl3).pipe(map((res: any) => { return res; }))
  }

  deleteRezervacija(id: number) {
    return this.http.delete(this.baseUrl3 + "/" + id).pipe(map((res: any) => { return res }))
  }
}
