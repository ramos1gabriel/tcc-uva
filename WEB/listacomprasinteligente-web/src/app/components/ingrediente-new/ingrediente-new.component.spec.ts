import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteNewComponent } from './ingrediente-new.component';

describe('IngredienteNewComponent', () => {
  let component: IngredienteNewComponent;
  let fixture: ComponentFixture<IngredienteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredienteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
