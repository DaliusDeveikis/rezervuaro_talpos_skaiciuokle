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
  public spalva:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti() {
    if (this.talpa != 0 && this.talpa !=null && this.greitis != 0 && this.greitis !=null && this.laikas != 0 && this.laikas !=null) {
      this.procentai = Number((this.greitis * this.laikas) * 100 / this.talpa)
      this.spalvosSkaiciuokle()
    }
  }

  public spalvosSkaiciuokle() {
    if (this.procentai <= 25) {
      this.spalva = 'bg-success'
    } else if ((this.procentai > 25 && this.procentai <= 50)) {
      this.spalva = 'bg-info'
    } else if ((this.procentai > 50 && this.procentai <= 75)) {
      this.spalva = 'bg-warning'
    } else {
      this.spalva = 'bg-danger'
    }
  }

}
