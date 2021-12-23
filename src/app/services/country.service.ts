import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  httpHeaders = new HttpHeaders({
    "Accept": "application/json",
    "Accept-Version": "1.0",
    "Accept-Language": "en",
    "Content-Type": "application/json"
  })

  constructor(private http: HttpClient) { }

  getCountrys(
    sortBy?: string
  ): Observable<Country[]> {
    return this.http.get<Country[]>(`${env.NODE_ENV}/metadata/country?sortBy=${sortBy ?? "asc(name)"}`, { headers: this.httpHeaders });
  }

}

