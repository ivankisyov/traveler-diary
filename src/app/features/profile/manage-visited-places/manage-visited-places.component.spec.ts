import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVisitedPlacesComponent } from './manage-visited-places.component';

describe('ManageVisitedPlacesComponent', () => {
  let component: ManageVisitedPlacesComponent;
  let fixture: ComponentFixture<ManageVisitedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVisitedPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVisitedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
