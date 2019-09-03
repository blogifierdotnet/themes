import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService, IContact } from '../blog.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public contact: IContact;

	constructor(private blogService: BlogService) { }

	ngOnInit() {
		this.contact = { name: "", email: "", content: "" };
	}

	onSubmit() {
		if (this.contact.name && this.contact.email && this.contact.content) {
			this.blogService.contact(this.contact).subscribe(
				() => {
					this.contact = { name: "", email: "", content: "" };
					alert('Thank you!');
				}
			);
		}
	}

}