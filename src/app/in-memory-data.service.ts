import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ChinaLife } from './sy-schemas/chinalife';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const chinalifes = [
      { id:11, type:'visa', title:'How do i get a visa', contents:'At first you must go to embassy.' },
      { id:12, type:'visa', title:'What is visa', contents:'What is visa.'},
      { id:13, type:'buy', title:'How do i buy machandise in a market', contents:'Sams is the best market in beijing.'},
      { id:14, type:'online', title:'Where is the best market?', contents:'Taobao is the best market in beijing.'}
    ];
    return {chinalifes};
  }
  constructor() { }
}
