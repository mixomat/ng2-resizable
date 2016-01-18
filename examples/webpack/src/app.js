var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('angular2/bundles/angular2-polyfills');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var ng2_resizable_1 = require('ng2-resizable/ng2-resizable');
var ExampleApp = (function () {
    function ExampleApp() {
        console.log('Example App started...');
    }
    ExampleApp = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [ng2_resizable_1.Resizable],
            styles: ["\n        @import url(\"//fonts.googleapis.com/css?family=Lato:400,300,700\");\n\n        body {\n          color: #ffffff;\n          font-family: 'Lato', sans-serif;\n          text-align: center;\n        }\n\n        #sidebar {\n          display: block;\n          background: #51BBFE;\n          width: 260px;\n          max-width: 500px;\n          min-width: 165px;\n          min-height: 300px;\n          margin-right: 15px;\n          float: left;\n        }\n\n        #main {\n          display: block;\n          background: #757761;\n          width: 500px;\n          height: 300px;\n          float: left;\n        }\n    "],
            template: "\n        <section id=\"sidebar\" [resizable]=\"['right', 'bottom']\">\n            <h2>Sidebar</h2>\n        </section>\n        <section id=\"main\" [resizable]=\"['bottom']\">\n            <h2>Main Content</h2>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ExampleApp);
    return ExampleApp;
})();
exports.ExampleApp = ExampleApp;
browser_1.bootstrap(ExampleApp);
//# sourceMappingURL=app.js.map