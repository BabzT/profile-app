import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenValidator(forbiddenCharacter: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenCharacter.test(control.value);
    return forbidden ? { forbiddenCharacter: { value: control.value } } : null;
  };
}

export function emailFormatValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[a-zA-Z0-9.-]+@gmail\.com$/.test(control.value);

  return valid ? null : { invalidEmailFormat: true };
}

export function passwordValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (
    password?.pristine ||
    confirmPassword?.pristine ||
    confirmPassword?.invalid
  ) {
    return null;
  }

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { misMatch: true }
    : null;
}
