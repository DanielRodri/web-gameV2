import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RulesService } from '../../servicios/rules/rules.service'


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private rulesService: RulesService,private router:Router) { }
  private player1={name:""}
  private player2={name:""}
  private size = 6;
  private matrixView= [[null,null,null,null],[null,1,2,null],[null,2,1,null],[null,null,null,null]];
  ngOnInit() {
  }
  goRoom(){
    let items= ['game'];
    this.router.navigate(items)

  }
  createRoom(){
    this.rulesService.createMatrix({size:this.size,player1:this.player1.name,player2:this.player2.name}).subscribe(res=>{
      this.goRoom()
      console.log(res)
    })
    //this.goRoom();
  }
  putSize(size){
    this.size=size
  }
  getStyle(){
    let pixels = (4*50).toString();
    let a = 'display:flex;'+
            //'background:green;'+
            'background-size:' +pixels+'px '+pixels+'px;'+
            'flex-wrap:wrap;'+
            'width:'+pixels+'px;'+
            'height:'+pixels+'px;'+
            'background-image:'+'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif)'
    //console.log("try")
    return a
  }

}
