import * as tslib_1 from "tslib";
import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../model/user.model';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(UserService, route) {
        this.UserService = UserService;
        this.route = route;
        this.user = new User('', '', '', '', '');
        this.shared = SharedService.getInstance();
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    UserNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.UserService.findById(id).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.user.senha = '';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.UserService.createOrUpdate(this.user).subscribe(function (responseApi) {
            _this.user = new User('', '', '', '', '');
            var userRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: userRet.email + " cadastrado com sucesso"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib_1.__decorate([
        ViewChild("form"),
        tslib_1.__metadata("design:type", NgForm)
    ], UserNewComponent.prototype, "form", void 0);
    UserNewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-new',
            templateUrl: './user-new.component.html',
            styleUrls: ['./user-new.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            ActivatedRoute])
    ], UserNewComponent);
    return UserNewComponent;
}());
export { UserNewComponent };
//# sourceMappingURL=user-new.component.js.map