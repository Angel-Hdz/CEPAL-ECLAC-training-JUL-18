import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PezComponent } from './pez.component';

describe('PezComponent', () => {
  let component: PezComponent;
  let fixture: ComponentFixture<PezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
