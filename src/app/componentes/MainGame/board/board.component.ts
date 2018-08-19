import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PieceComponent } from '../piece/piece.component';
import { RulesService } from '../../../servicios/rules/rules.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: Array<any>;
  constructor( private rulesService: RulesService
  ) {}

  ngOnInit() {
    
  }
  piecePosition(i,j){
      //console.log("hola: "+j,i)
      this.board[i][j]=1;
      let posiciones = {posX:i,posY:j}
      this.rulesService.tryMove(posiciones).subscribe(res=>{
        console.log(res);
      })
  }
}
