"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AboutMe = (function () {
    function AboutMe() {
    }
    return AboutMe;
}());
AboutMe = __decorate([
    core_1.Component({
        selector: 'about-me',
        templateUrl: "./html/about-me.component.html",
        styleUrls: ['./css/about-me.component.css']
    })
], AboutMe);
exports.AboutMe = AboutMe;
//# sourceMappingURL=about-me.component.js.map