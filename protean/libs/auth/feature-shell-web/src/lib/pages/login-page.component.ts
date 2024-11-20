import {Component} from '@angular/core';
import { BaseLoginComponent } from '../components/base-login.component';
import { UiAuthComponent } from '@protean/auth/ui-auth';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'protean-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [
    UiAuthComponent,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  standalone: true
})
export class LoginPageComponent extends BaseLoginComponent{}