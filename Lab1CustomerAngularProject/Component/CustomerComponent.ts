import {Component} from "@angular/core"
//importing the customer model
import {Customer} from '../Model/Customer'
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
@Component({
    templateUrl: "../UI/Customer.html"
})
export class CustomerComponent {
    //this is binding 
    CurrentCustomer:Customer = new Customer();

}