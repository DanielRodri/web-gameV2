import { Component, OnInit } from '@angular/core';
import { RulesService } from '../rules.service'

//var data = require('../../../../Data.json');

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private matrix:Array<any>
  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.rulesService.getMatrix().subscribe(res=>{
      this.matrix=res.json() as Array<any>;
    });
  }
  getMatrixSize(){
    return this.matrix.length;
  }
}