import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'traveler-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // TODO: unsubscribe
    this.auth.user$.subscribe();
  }
}
