import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addVisitedPlace } from '@shared/data/state/visited-places/visited.places.actions';
import { IPlace } from '../../data/models/place.interface';

@Component({
  selector: 'traveler-ui-places-form',
  templateUrl: './ui-places-form.component.html',
  styleUrls: ['./ui-places-form.component.scss'],
})
export class UiPlacesFormComponent implements OnInit {
  managePlacesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    public dialogRef: MatDialogRef<UiPlacesFormComponent>
  ) {}

  ngOnInit(): void {
    this.managePlacesForm = this.formBuilder.group({
      nameEn: [null, Validators.required],
      nameBg: [null, Validators.required],
      descriptionEn: [null, Validators.required],
      descriptionBg: [null, Validators.required],
    });
  }

  onSubmit(value: {
    nameEn: string;
    nameBg: string;
    descriptionEn: string;
    descriptionBg: string;
  }): void {
    const place: Partial<IPlace> = {
      visited: true,
      name: {
        en: value.nameEn,
        bg: value.nameBg,
      },
      description: {
        en: value.descriptionEn,
        bg: value.descriptionEn,
      },
    };

    this.store.dispatch(addVisitedPlace({ place }));
  }
}
