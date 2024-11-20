import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DefaultLayoutComponent } from '@protean/default-layout';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DefaultLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'protean';
}
