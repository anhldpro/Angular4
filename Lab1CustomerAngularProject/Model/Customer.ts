import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class Customer {
    CustomerName: string = "";
    CustomerCode: string = "";
    CustomerAmount: number = 0;

    //create form group
    formGroup: FormGroup = null;
    constructor() {
       //create form builder
       var _builder = new FormBuilder();
       this.formGroup = _builder.group({});

       //add simple validation
       this.formGroup.addControl("CustomerNameControl", new FormControl("", Validators.required));

       //add combine validations
       var validationCollection = [];
       validationCollection.push(Validators.required);
       validationCollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
       this.formGroup.addControl("CustomerCodeControl", new FormControl("", Validators.compose(validationCollection)));
    }
    
}
