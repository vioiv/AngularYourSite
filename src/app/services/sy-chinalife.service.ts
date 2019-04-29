import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChinaLife } from '../sy-schemas/chinalife';
import { CHINALIFES } from '../sy-mock/chinalife';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SyChinalifeService {

  private chinaLifeUrl = 'api/chinalifes';

  constructor(
    private http: HttpClient
  ) { }

  getChinaLife(): Observable<ChinaLife[]>{
    return this.http.get<ChinaLife[]>(this.chinaLifeUrl);
  }

  getChinaLifeRx(): Observable<ChinaLife[]> {
    return of(CHINALIFES);
  }
  
  getChinaLifeByStatic(): ChinaLife[]{
    return CHINALIFES;
  }
}
