import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../../servicios/rules/rules.service'

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
    let size = {size:6}
    this.rulesService.createMatrix(size).subscribe(res=>{
      this.matrix=res.json() as Array<any>;
    })
    //get matriz tiene un lag o un error porq llega tarde
    /*this.rulesService.getMatrix().subscribe(res=>{
      this.matrix=res.json() as Array<any>;
      //console.log("antes de iniciar, la matriz se ve así: "+this.ma)
    });*/
    
  }
  getMatrixSize(){
    return this.matrix.length;
  }
}