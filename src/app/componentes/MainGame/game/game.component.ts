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
   private boardStyle={}
    private pieceStyles={}

  ngOnInit() {
    this.prepareGame();
    
  }
  prepareGame(){
    this.rulesService.getMatrix().subscribe(res=>{
      this.matrix=res.json() as Array<any>
      this.getStyle();

    });
    this.rulesService.getPlayers().subscribe(res=>{
      let object =res.json();
      this.player1=object.player1;
      this.player2=object.player2;
    });
    
  }
  getMatrixSize(){
    return this.matrix.length;
  }
  getStyle(){
    let pixels = (this.getMatrixSize()*50).toString();
            this.rulesService.getBoardStyle().subscribe(res=>{
              let auxBoardStyle = res.json()
              //debo crear un nuevo boardStyle q agarre las conf anteriores porq poner las de un solo falla la imagen
              this.boardStyle= {'display':auxBoardStyle["display"],
                'background':auxBoardStyle["background"],
                'background-size':pixels+'px '+pixels+'px',
                'flex-wrap':auxBoardStyle["flex-wrap"],
                'width':pixels+'px',
                'height':pixels+'px',
                'background-image':auxBoardStyle["background-image"]
              }
              this.rulesService.getPieceStyle().subscribe(res=>{
                this.pieceStyles=res.json()
              })
            })
  }
}