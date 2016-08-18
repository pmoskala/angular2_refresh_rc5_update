"use strict";
var core_1 = require('@angular/core');
var mock_heroes_1 = require('./mock-heroes');
core_1.Injectable();
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        });
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map