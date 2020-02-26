import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaNewComponent } from './receita-new.component';

describe('ReceitaNewComponent', () => {
  let component: ReceitaNewComponent;
  let fixture: ComponentFixture<ReceitaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
