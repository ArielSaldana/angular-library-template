import { Component, OnInit } from '@angular/core';

import { LibraryService } from './library.service';

@Component({
	selector: 'library-component',
	template: '{{greeting}}'
})
export class LibraryComponent implements OnInit {

	greeting: string;

	constructor(private service: LibraryService) { }

	ngOnInit() {
		this.greeting = this.service.sayHello();
	}
}