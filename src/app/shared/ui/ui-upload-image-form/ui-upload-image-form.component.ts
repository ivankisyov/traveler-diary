import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  imageUploadedSuccess,
  imageUploading,
} from '@shared/data/state/ui/ui.actions';
import { ImageService } from '@shared/services/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'traveler-ui-upload-image-form',
  templateUrl: './ui-upload-image-form.component.html',
  styleUrls: ['./ui-upload-image-form.component.scss'],
})
export class UiUploadImageFormComponent implements OnInit {
  imageUploadForm = this.formBuilder.group({
    caption: ['', Validators.required],
    imageUrl: ['', Validators.required],
    isCoverPhoto: [false],
  });
  imgSrc: string;
  selectedImg: any = null;
  isImageUploadFormSubmitted = false;

  constructor(
    private storage: AngularFireStorage,
    private store: Store,
    private imageService: ImageService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: string,
    public dialogRef: MatDialogRef<UiUploadImageFormComponent>
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    } else {
      this.imgSrc = 'assets/placeholder.png';
      this.selectedImg = null;
    }
  }

  onSubmit(formValue): void {
    this.isImageUploadFormSubmitted = true;

    if (this.imageUploadForm.valid && this.data) {
      this.store.dispatch(imageUploading({ loading: true }));

      const filePath = `${this.data}/${this.selectedImg.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, this.selectedImg)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url;
              formValue['placeId'] = this.data;
              this.imageService.insertImageDetails(formValue);
              this.resetForm();
            });

            this.dialogRef.close();

            this.store.dispatch(
              imageUploadedSuccess({ loading: false })
            );
          })
        )
        .subscribe();
    }
  }

  resetForm(): void {
    this.imageUploadForm.reset();
    this.imageUploadForm.setValue({
      caption: '',
      imageUrl: '',
      isCoverPhoto: false,
    });
    this.imgSrc = 'assets/placeholder.png';
    this.isImageUploadFormSubmitted = false;
    this.selectedImg = null;
  }

  get formControls(): {
    [key: string]: AbstractControl;
  } {
    return this.imageUploadForm.controls;
  }
}
