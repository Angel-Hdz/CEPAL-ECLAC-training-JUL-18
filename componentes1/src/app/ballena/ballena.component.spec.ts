import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallenaComponent } from './ballena.component';

describe('BallenaComponent', () => {
  let component: BallenaComponent;
  let fixture: ComponentFixture<BallenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
