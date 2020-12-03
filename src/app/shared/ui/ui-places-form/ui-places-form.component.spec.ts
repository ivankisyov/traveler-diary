import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPlacesFormComponent } from './ui-places-form.component';

describe('UiPlacesFormComponent', () => {
  let component: UiPlacesFormComponent;
  let fixture: ComponentFixture<UiPlacesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPlacesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPlacesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
