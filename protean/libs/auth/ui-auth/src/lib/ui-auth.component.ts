import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'protean-ui-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './ui-auth.component.html',
  styleUrl: './ui-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UiAuthComponent {
  readonly loginForm = computed(() => this._controlContainer.control as FormGroup)

  constructor(private readonly _controlContainer: ControlContainer) {}
}
