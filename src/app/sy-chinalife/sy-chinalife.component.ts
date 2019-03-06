import { Component, OnInit } from '@angular/core';
import { CHINALIFES } from '../sy-mock/chinalife';

@Component({
  selector: 'app-sy-chinalife',
  templateUrl: './sy-chinalife.component.html',
  styleUrls: ['./sy-chinalife.component.css']
})
export class SyChinalifeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chinalifes = CHINALIFES;
}
