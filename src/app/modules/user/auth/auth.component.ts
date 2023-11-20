import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthMode } from '../types/auth-mode.enum';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAuthData } from '../types/auth-data.interface';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
	public mode: AuthMode = AuthMode.LOGIN;
	public hidePassword: boolean = true;
	public authForm= this._fb.group({
		name: [''],
		email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
		password: ['', [Validators.required, Validators.minLength(8)]]
	});

	public AuthMode: typeof AuthMode = AuthMode;

	constructor(private _fb: FormBuilder) {
	}

	public get nameControl(): FormControl<string | null> | null {
		return this.authForm.controls.name ?? null;
	}

	public get emailControl(): FormControl<string | null> | null {
		return this.authForm.controls.email ?? null;
	}

	public get passwordControl(): FormControl<string | null> | null {
		return this.authForm.controls.password ?? null;
	}

	public changeMode(mode: AuthMode): void {
		this.mode = mode;

		if (mode === AuthMode.SIGN_UP) {
			this.nameControl?.addValidators(Validators.required);
		} else {
			this.nameControl?.removeValidators(Validators.required);
			this.nameControl?.reset();
		}
	}

	public onSubmit(): void {
		if (!this.authForm.valid) return;

		const value: IAuthData = this.authForm.value as IAuthData;

		switch (this.mode) {
			case AuthMode.LOGIN:
				this._login(value);
				break;
			case AuthMode.SIGN_UP:
				this._signUp(value);
				break;
			// no default
		}
	}

	public getErrorMessage(control: AbstractControl): string { // todo: сделать pipe?
		switch (true) {
			case control.hasError('required'):
				return 'You must enter a value';
			case control.hasError('email') || control.hasError('pattern'):
				return 'Not a valid email';
			case control.hasError('minlength'):
				return `You must enter at least ${control.getError('minlength').requiredLength } characters`;
			default:
				return '';
		}
	}

	private _login(data: IAuthData): void {
		console.log(data);
	}

	private _signUp(data: IAuthData): void {
		console.log(data);
	}
}
