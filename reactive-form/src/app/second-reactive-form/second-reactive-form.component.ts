import { Component, OnInit } from '@angular/core';
import { FromGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-second-reactive-form',
  templateUrl: './second-reactive-form.component.html',
  styleUrls: ['./second-reactive-form.component.css']
})
export class SecondReactiveFormComponent implements OnInit {
	form: FormGroup;
	
	firstName = new FormControl('Your first name', Validators.required);
	
  constructor(private fb: FormBuilder) {
		this.form = fb.group({
			"firstName": this.firstName,
			"password": ['', Validators.required]
		});
	}

  onSubmit(){
		console.log('model-based form submitted');
		console.log(this.form);
	}

}
