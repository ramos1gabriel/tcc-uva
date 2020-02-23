import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showTemplate = false;
        this.shared = SharedService.getInstance();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) { return _this.showTemplate = show; });
    };
    AppComponent.prototype.showContentWrapper = function () {
        return {
            'content-wrapper': this.shared.isLoggedIn()
        };
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map