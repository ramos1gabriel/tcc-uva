import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaingredienteNewComponent } from './receitaingrediente-new.component';

describe('ReceitaingredienteNewComponent', () => {
  let component: ReceitaingredienteNewComponent;
  let fixture: ComponentFixture<ReceitaingredienteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaingredienteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaingredienteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
