import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUploadImageFormComponent } from './ui-upload-image-form.component';

describe('UiUploadImageFormComponent', () => {
  let component: UiUploadImageFormComponent;
  let fixture: ComponentFixture<UiUploadImageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUploadImageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUploadImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
