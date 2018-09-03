import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../servicios/rules/rules.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  private boardStyle:any
  private pieceStyles:any
  constructor(private rulesService: RulesService,private router:Router) {
   }
  private matrixView= [[null,null,null,null],[null,1,2,null],[null,2,1,null],[null,null,null,null]];
  private size = 6;
  
  private color=""
  private bColor=""
  private image =""

  ngOnInit() {
    //this.configBoard();
    this.setViewStyle();
  }

  configBoard(){
    this.rulesService.configBoard({boardStyle:this.getStyleBoard(),pieceStyle:this.getStylePiece()}).subscribe(res=>{
      this.setViewStyle();
      //this.goMain()
    })
  }
  goMain(){
    this.router.navigate(['/privado'])
  }
  setViewStyle(){
    this.rulesService.getBoardStyle().subscribe(res=>{
      let auxBoardStyle = res.json()//obtiene el style de board
      if(Object.keys(auxBoardStyle).length === 0){//si está vacio, viene un "", entonces configura el board nuevo y la pieza
        this.configBoard()
      }
      else{//sino cambia el nuevo y le añade lo que tenia el viejo
        this.color= auxBoardStyle["background"]
        this.image= auxBoardStyle["background-image"].substring(4)
        this.image= this.image.substring(0, this.image.length - 1);
        this.boardStyle=this.getStyleBoard()
      }
      this.rulesService.getPieceStyle().subscribe(res=>{//devuelve la conf de la pieza
        this.pieceStyles=res.json()
        this.bColor=this.pieceStyles.PiecePlace["border"].substring(10)
      })
    })
  }
  getStyleBoard(){
    let pixels = (4*50).toString();
    let a = {'display':'flex',
            'background':this.color,
            'background-size':pixels+'px '+pixels+'px',
            'flex-wrap':'wrap',
            'width':pixels+'px',
            'height':pixels+'px',
            
            'background-image':'url('+this.image+')'
            
            }
            return a
  }
  getStylePiece(){
    let b = {PiecePlace:{
                        'display':'flex',
                        'flex-wrap':'wrap',
                        'width':'50px',
                        'height':'50px',
                        'border':'2px solid '+this.bColor,
                        'text-aling':'center'
                        },
            Piece:{
                  'width':'100%',
                  'height':'100%',
                  'word-wrap':'break-word',
                  'clear':'both'
            }
          }
        return b;
    }
}
