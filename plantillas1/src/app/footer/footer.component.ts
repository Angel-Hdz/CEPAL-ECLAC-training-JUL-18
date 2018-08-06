import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: string;
  constructor() { }

  ngOnInit() {

    let fecha = new Date();
    this.year = fecha.getFullYear().toString();
  }

}
