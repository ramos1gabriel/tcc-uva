import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.shared = SharedService.getInstance();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map