import { Component, OnInit, OnChanges } from '@angular/core';
import { RulesService } from '../../../servicios/rules/rules.service'
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

//var data = require('../../../../Data.json');

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private matrix:Array<any>
  private player1:Object
  private player2:Object
  constructor(private rulesService: RulesService) {
   }

  ngOnInit() {
    this.prepareGame();
    console.log("saliendo de aqui")
  }
  prepareGame(){
    console.log("entro aqui")
    //get matriz tiene un lag o un error porq llega tarde
    this.rulesService.getMatrix().subscribe(res=>{
      this.matrix=res.json() as Array<any>;
      console.log(this.matrix)
      //console.log("antes de iniciar, la matriz se ve así: "+this.ma)
    });
    this.rulesService.getPlayers().subscribe(res=>{
      let object =res.json();
      console.log(object)
      this.player1=object.player1;
      this.player2=object.player2;
      //console.log("antes de iniciar, la matriz se ve así: "+this.ma)
    });
  }
  getMatrixSize(){
    return this.matrix.length;
  }
}