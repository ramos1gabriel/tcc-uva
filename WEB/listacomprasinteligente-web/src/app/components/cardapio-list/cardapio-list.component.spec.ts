import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioListComponent } from './cardapio-list.component';

describe('CardapioListComponent', () => {
  let component: CardapioListComponent;
  let fixture: ComponentFixture<CardapioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
