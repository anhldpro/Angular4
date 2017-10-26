//Import statements
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { WelcomeComponent } from "../Component/WelcomeComponent";
import { CustomerComponent } from "../Component/CustomerComponent";
import { SuppierComponent } from "../Component/SuppierComponent";
import { MasterPageComponent } from "../Component/MasterPageComponent";
import { RouterModule } from "@angular/router";
import { ApplicationRoutes } from "../Routing/Routing";


@NgModule({
    imports: [RouterModule.forRoot(ApplicationRoutes),
        BrowserModule, FormsModule],
    declarations: [WelcomeComponent, CustomerComponent, MasterPageComponent, SuppierComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModuleLibrary{

}