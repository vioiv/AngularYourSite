import { Component, OnInit, Input } from '@angular/core';
import { ChinaLife } from '../sy-schemas/chinalife';

@Component({
  selector: 'app-sy-addform',
  templateUrl: './sy-addform.component.html',
  styleUrls: ['./sy-addform.component.css']
})
export class SyAddformComponent implements OnInit {

  @Input() chinaLife: ChinaLife;
  constructor() { }

  ngOnInit() {
  }

}
