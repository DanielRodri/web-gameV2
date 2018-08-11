import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private matrix:Array<any>
  constructor() { }

  ngOnInit() {
    this.matrix = [[null,"A","aA",4,5],["b",["B",2,null],"bB",6,7],["c",{c:2},"cC",6,5],[1,2,3,4,5],[1,2,3,4,5]];
  }
  getMatrixSize(){
    return this.matrix.length;
  }
}