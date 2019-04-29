import { Component, OnInit } from '@angular/core';
import { CHINALIFES } from '../sy-mock/chinalife';
import { SyChinalifeService } from '../services/sy-chinalife.service';
import { ChinaLife } from '../sy-schemas/chinalife';

@Component({
  selector: 'app-sy-chinalife',
  templateUrl: './sy-chinalife.component.html',
  styleUrls: ['./sy-chinalife.component.css']
})
export class SyChinalifeComponent implements OnInit {

  constructor(private chinaLifeService: SyChinalifeService) { }

  chinalifes: ChinaLife[];

  ngOnInit() {
    //below is a way of static.
    //this.chinalifes = this.chinaLifeService.getChinaLifeByStatic();
    
    //below is a way of a subscription.
    this.chinaLifeService.getChinaLife().subscribe(ChinaLifes => this.chinalifes = ChinaLifes);
  }

}