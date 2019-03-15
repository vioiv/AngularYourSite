import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChinaLife } from '../sy-schemas/chinalife';
import { CHINALIFES } from '../sy-mock/chinalife';

@Injectable({
  providedIn: 'root'
})
export class SyChinalifeService {

  constructor() { }

  getChinaLife(): Observable<ChinaLife[]> {
    return of(CHINALIFES);
  }
  
  getChinaLifeByStatic(): ChinaLife[]{
    return CHINALIFES;
  }
}
