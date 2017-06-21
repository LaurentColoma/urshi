"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.selectedTalent = -1;
        this.selectedTier1 = -1;
        this.selectedTier2 = -1;
        this.selectedTier3 = -1;
        this.selectedTier4 = -1;
        this.selectedTier5 = -1;
        this.selectedTier6 = -1;
        this.selectedTier7 = -1;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.heroService.getHero(+params['id']);
        }).
            subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.selectTalent = function (talent) {
        this.selectedTalent = talent;
    };
    HeroDetailComponent.prototype.selectTier1 = function (talent) {
        this.selectedTier1 = talent;
    };
    HeroDetailComponent.prototype.selectTier2 = function (talent) {
        this.selectedTier2 = talent;
    };
    HeroDetailComponent.prototype.selectTier3 = function (talent) {
        this.selectedTier3 = talent;
    };
    HeroDetailComponent.prototype.selectTier4 = function (talent) {
        this.selectedTier4 = talent;
    };
    HeroDetailComponent.prototype.selectTier5 = function (talent) {
        this.selectedTier5 = talent;
    };
    HeroDetailComponent.prototype.selectTier6 = function (talent) {
        this.selectedTier6 = talent;
    };
    HeroDetailComponent.prototype.selectTier7 = function (talent) {
        this.selectedTier7 = talent;
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: "./html/hero-detail.component.html",
        styleUrls: ['./css/hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map