import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { ValidationErrorPipe } from './auth/validation-error.pipe';

@NgModule({
	declarations: [
		AuthComponent,
        // ValidationErrorPipe,
	],
	imports: [
		SharedModule,
		UserRoutingModule,
	]
})
export class UserModule {
}
