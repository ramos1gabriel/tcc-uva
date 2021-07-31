import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacompraDetailComponent } from './listacompra-detail.component';

describe('ListacompraDetailComponent', () => {
  let component: ListacompraDetailComponent;
  let fixture: ComponentFixture<ListacompraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacompraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacompraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
