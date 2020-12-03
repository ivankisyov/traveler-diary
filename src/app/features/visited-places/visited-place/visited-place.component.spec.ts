import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedPlaceComponent } from './visited-place.component';

describe('VisitedPlaceComponent', () => {
  let component: VisitedPlaceComponent;
  let fixture: ComponentFixture<VisitedPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
