import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNewComponent } from './cardapio-new.component';

describe('CardapioNewComponent', () => {
  let component: CardapioNewComponent;
  let fixture: ComponentFixture<CardapioNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
