import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from 'events';
import { RulesService } from '../../../servicios/rules/rules.service';


@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Input() piece: any;
  //@Input() pieceStyles:any
  @Input() pieceStyle:{};
  @Input() piecePlaceStyle:{};
  constructor(private rulesService: RulesService) { }

  ngOnInit() {
  }
}
