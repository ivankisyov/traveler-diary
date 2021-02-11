import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/core/core.module';
import { UiPlacesFormComponent } from './ui-places-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestScheduler } from 'rxjs/testing';
import { addVisitedPlace } from '@shared/data/state/visited-places/visited.places.actions';

describe('UiPlacesFormComponent', () => {
  let component: UiPlacesFormComponent;
  let fixture: ComponentFixture<UiPlacesFormComponent>;

  let testScheduler: TestScheduler;

  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
      ],
      declarations: [UiPlacesFormComponent],
      providers: [
        provideMockStore(),
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPlacesFormComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addVisitedPlace action when the form is submitted', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;

      const nameEn = 'Rila';
      const nameBg = 'Рила';
      const descriptionEn = 'lorem for Rila';
      const descriptionBg = 'бла бла за Рила';

      const action = addVisitedPlace({
        place: {
          visited: true,
          name: {
            en: nameEn,
            bg: nameBg,
          },
          description: {
            en: descriptionEn,
            bg: descriptionBg,
          },
        },
      });

      component.onSubmit({
        nameEn,
        nameBg,
        descriptionEn,
        descriptionBg,
      });

      expectObservable(mockStore.scannedActions$).toBe('c', {
        c: action,
      });
    });
  });
});
