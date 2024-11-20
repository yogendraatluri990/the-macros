import { Directive, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';

interface Login {
 Email: FormControl<string>;
 Password: FormControl<string>;
 RememberMe: FormControl<boolean>;
}


@Directive()
export abstract class BaseLoginComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  loginForm = this._createForm();


  login(): void {
    console.log('current login info',this.loginForm.value);
  }


  private _createForm(): FormGroup<Login> {
    return this._formBuilder.group<Login>({
      Email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      Password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      RememberMe: new FormControl(true, {nonNullable: true}),
    })
  }

}