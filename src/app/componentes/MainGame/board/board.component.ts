import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Array<any>;
  constructor(
  ) {}

  ngOnInit() {
    
  }
  piecePosition(i,j){
      console.log("hola: "+j,i)
      this.board[i][j]="a";
  }
}
