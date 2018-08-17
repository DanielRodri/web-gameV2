import { Component, OnInit } from '@angular/core';
declare var require: any;
var data = require('../../../../Data.json');

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private matrix:Array<any>
  constructor() { }

  ngOnInit() {
    this.matrix = data.matrix;
  }
  getMatrixSize(){
    return this.matrix.length;
  }
}