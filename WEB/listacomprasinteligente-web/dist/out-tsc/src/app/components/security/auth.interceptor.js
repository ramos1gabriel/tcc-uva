import * as tslib_1 from "tslib";
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = SharedService.getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map