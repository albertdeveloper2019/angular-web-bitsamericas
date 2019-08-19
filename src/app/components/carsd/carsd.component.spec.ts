import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsdComponent } from './carsd.component';

describe('CarsdComponent', () => {
  let component: CarsdComponent;
  let fixture: ComponentFixture<CarsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
