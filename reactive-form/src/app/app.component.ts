import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup;
	
	constructor(private formBuilder: FormBuilder) {
		this.createContractForm();
	}
	
	createContractForm(){
		this.contactForm = this.formBuilder.group({
			fullName: [''], 
			email: [''], 
			message: ['']
	});
	}
	
	onSubmit(){
		console.log("Your form data: ", this.contactForm.value);
	}
}
