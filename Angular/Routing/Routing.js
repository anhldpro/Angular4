"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerComponent_1 = require("../Component/CustomerComponent");
var SuppierComponent_1 = require("../Component/SuppierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
exports.ApplicationRoutes = [
    { path: 'Customer', component: CustomerComponent_1.CustomerComponent },
    { path: 'Supplier', component: SuppierComponent_1.SuppierComponent },
    { path: '', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'UI', component: WelcomeComponent_1.WelcomeComponent }
];
//# sourceMappingURL=Routing.js.map