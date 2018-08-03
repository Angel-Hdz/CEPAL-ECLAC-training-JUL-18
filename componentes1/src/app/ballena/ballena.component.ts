import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ballena',
  templateUrl: './ballena.component.html',
  styleUrls: ['./ballena.component.css']
})

export class BallenaComponent implements OnInit {

  @Input() tipoDeBallena: string;

  public saludo: number;


  constructor()  {
    this.saludo = 5 * 8;

  }

  ngOnInit() {
  }


}
