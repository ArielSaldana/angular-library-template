import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryService } from './library.service';
import { LibraryComponent } from './library.component';

export function LibraryServiceFactory() {
	return new LibraryService();
}

@NgModule({
	imports: [CommonModule],
	providers: [
		{ provide: LibraryService, useFactory: LibraryServiceFactory }
	],
	declarations: [LibraryComponent],
	exports: [LibraryComponent]
})
export class LibraryModule { }
