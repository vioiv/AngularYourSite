import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChinaLife } from '../sy-schemas/chinalife';
import { CHINALIFES } from '../sy-mock/chinalife';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SyChinalifeService {

  private chinaLifeUrl = 'api/chinalifes';

  constructor(
    private http: HttpClient
  ) { }

  private log(message: string){
    
  }

  getChinaLife(): Observable<ChinaLife[]>{
    return this.http.get<ChinaLife[]>(this.chinaLifeUrl)
    .pipe(catchError(this.handleError<ChinaLife[]>('getChinaLife', [])));
  }

  getChinaLifeById(id: Number): Observable<ChinaLife>{
    const url = `${this.chinaLifeUrl}/${id}`;
    return this.http.get<ChinaLife>(url).pipe(
      tap(_ => this.log(`fetched chinallife id=${id}`)),
      catchError(this.handleError<ChinaLife>(`getChinaLife id=${id}`))
    );
  }

  getChinaLifeRx(): Observable<ChinaLife[]> {
    return of(CHINALIFES);
  }
  
  getChinaLifeByStatic(): ChinaLife[]{
    return CHINALIFES;
  }

  private handleError<T> (operators = 'operation', result? : T) {
    return (error: any): Observable<T> => {
      console.error(`sy-chinalife.service.ts -> `+error);
      return of(result as T);
    }
  }
}
