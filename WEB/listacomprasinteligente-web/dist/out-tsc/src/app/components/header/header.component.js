import * as tslib_1 from "tslib";
import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.shared = SharedService.getInstance();
        this.shared.user = new User('', '', '', '', '');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.shared.token = null;
        this.shared.user = null;
        window.location.href = '/login';
        window.location.reload();
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map