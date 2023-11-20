import { AuthComponent } from "./auth/auth.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthMode } from './types/auth-mode.enum';

const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component: AuthComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {
}
