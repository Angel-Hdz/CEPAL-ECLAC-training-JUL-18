import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelfinComponent } from './delfin.component';

describe('DelfinComponent', () => {
  let component: DelfinComponent;
  let fixture: ComponentFixture<DelfinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelfinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
