import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
  ],
  imports: [CommonModule, TranslateModule.forChild(), MatIconModule],
  exports: [
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
  ],
})
export class AuthModule {}
