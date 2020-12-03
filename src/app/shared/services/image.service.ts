import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private firestore: AngularFirestore) {}

  insertImageDetails(imageDetails): void {
    this.firestore
      .collection('travelerImageDetails')
      .add(imageDetails);
  }
}
