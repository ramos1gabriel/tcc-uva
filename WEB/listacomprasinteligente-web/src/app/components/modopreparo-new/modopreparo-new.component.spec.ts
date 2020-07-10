import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModopreparoNewComponent } from './modopreparo-new.component';

describe('ModopreparoNewComponent', () => {
  let component: ModopreparoNewComponent;
  let fixture: ComponentFixture<ModopreparoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModopreparoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModopreparoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
