import * as tslib_1 from "tslib";
import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { User } from './../../../model/user.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new User('', '', '', '', '');
        this.shared = SharedService.getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.userService.login(this.user).subscribe(function (userAuthentication) {
            _this.shared.token = userAuthentication.token;
            _this.shared.user = userAuthentication.user;
            //this.shared.user.profile = this.shared.user.profile.substring(5);
            _this.shared.showTemplate.emit(true);
            _this.router.navigate(['/']);
            sessionStorage.setItem("currentUser", userAuthentication.toString()); //TESTE F5
        }, function (err) {
            _this.shared.token = null;
            _this.shared.user = null;
            _this.shared.showTemplate.emit(false);
            _this.message = 'Erro';
        });
    };
    LoginComponent.prototype.cancelLogin = function () {
        this.message = '';
        this.user = new User('', '', '', '', '');
        window.location.href = '/login';
        window.location.reload();
    };
    LoginComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map