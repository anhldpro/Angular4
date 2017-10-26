import { Component } from "@angular/core";
import { CustomerComponent } from "../Component/CustomerComponent";
import { SuppierComponent } from "../Component/SuppierComponent";
import { WelcomeComponent } from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
    {path: 'Customer', component: CustomerComponent},
    {path: 'Supplier', component: SuppierComponent},
    {path: '', component: WelcomeComponent},
    {path: 'UI', component: WelcomeComponent}
];
