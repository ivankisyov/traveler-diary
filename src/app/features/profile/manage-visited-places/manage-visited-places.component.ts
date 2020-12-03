import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { selectVisitedPlaces } from '@shared/data/state/visited-places/visited.places.selectors';
import { deleteVisitedPlace } from '@shared/data/state/visited-places/visited.places.actions';
import { UiPlacesFormComponent } from '@shared/ui/ui-places-form/ui-places-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { IPlace } from '@shared/data/models/place.interface';
import { MatTableDataSource } from '@angular/material/table';
import { UiUploadImageFormComponent } from '@shared/ui/ui-upload-image-form/ui-upload-image-form.component';

@Component({
  selector: 'traveler-manage-visited-places',
  templateUrl: './manage-visited-places.component.html',
  styleUrls: ['./manage-visited-places.component.scss'],
})
export class ManageVisitedPlacesComponent
  implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'name',
    'description',
    'id',
    'uploadImage',
    'delete',
  ];

  visitedPlaces$ = this.store.select(selectVisitedPlaces);

  dataSource: MatTableDataSource<IPlace>;

  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.visitedPlaces$.subscribe((places) => {
      this.dataSource = new MatTableDataSource<IPlace>(places);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openAddNewPlaceDialog(): void {
    // dialogRef
    this.dialog.open(UiPlacesFormComponent);
  }

  delete(id: string, name): void {
    // TODO: set language of the name
    this.store.dispatch(deleteVisitedPlace({ id, name: name.en }));
  }

  // Todo: enable edit mode
  edit(element): void {}

  openUploadImageDialog(placeId: string): void {
    this.dialog.open(UiUploadImageFormComponent, {
      data: placeId,
    });
  }
}
