import * as tslib_1 from "tslib";
import { SharedService } from 'src/app/services/shared.service';
import { Component } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.shared = SharedService.getInstance();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map