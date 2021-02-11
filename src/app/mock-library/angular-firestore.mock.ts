import { of } from 'rxjs';

export const deleteObject = {
  delete: jasmine.createSpy().and.returnValue(of('deleted')),
};

export const referenceObject = {
  doc: jasmine.createSpy().and.callFake(() => {
    return deleteObject;
  }),
  add: jasmine.createSpy().and.callFake(() => {
    return of('added');
  }),
};

export const firestoreObject = {
  collection: jasmine.createSpy().and.callFake(() => {
    return referenceObject;
  }),
};
