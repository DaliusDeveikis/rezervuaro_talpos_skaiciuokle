import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LietausTalposSkaiciuokleComponent } from './lietaus-talpos-skaiciuokle.component';

describe('LietausTalposSkaiciuokleComponent', () => {
  let component: LietausTalposSkaiciuokleComponent;
  let fixture: ComponentFixture<LietausTalposSkaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LietausTalposSkaiciuokleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LietausTalposSkaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
