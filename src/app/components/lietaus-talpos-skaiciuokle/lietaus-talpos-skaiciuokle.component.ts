import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lietaus-talpos-skaiciuokle',
  templateUrl: './lietaus-talpos-skaiciuokle.component.html',
  styleUrls: ['./lietaus-talpos-skaiciuokle.component.css']
})
export class LietausTalposSkaiciuokleComponent implements OnInit {

  public talpa: number|null = null
  public greitis: number|null = null
  public laikas: number|null = null
  public procentai:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti() {
    if (this.talpa != 0 && this.talpa !=null && this.greitis != 0 && this.greitis !=null && this.laikas != 0 && this.laikas !=null) {
      this.procentai = Number((this.greitis * this.laikas) * 100 / this.talpa)
    }
  }

}
