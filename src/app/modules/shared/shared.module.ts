import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';


const SHARED_MODULES = [
	// Angular Material
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatButtonModule,
	MatToolbarModule,
	MatCheckboxModule,

	CommonModule,
	ReactiveFormsModule,
];

@NgModule({
	declarations: [],
	imports: [
		...SHARED_MODULES
	],
	exports: [
		...SHARED_MODULES
	]
})
export class SharedModule {
}
