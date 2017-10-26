"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Customer = /** @class */ (function () {
    function Customer() {
        this.CustomerName = "";
        this.CustomerCode = "";
        this.CustomerAmount = 0;
        //create form group
        this.formGroup = null;
        //create form builder
        var _builder = new forms_1.FormBuilder();
        this.formGroup = _builder.group({});
        //add simple validation
        this.formGroup.addControl("CustomerNameControl", new forms_1.FormControl("", forms_1.Validators.required));
        //add combine validations
        var validationCollection = [];
        validationCollection.push(forms_1.Validators.required);
        validationCollection.push(forms_1.Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        this.formGroup.addControl("CustomerCodeControl", new forms_1.FormControl("", forms_1.Validators.compose(validationCollection)));
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map