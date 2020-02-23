import * as tslib_1 from "tslib";
import { DialogService } from './../../services/dialog.service';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialogService, userService, router) {
        this.dialogService = dialogService;
        this.userService = userService;
        this.router = router;
        this.page = 0;
        this.count = 5;
        this.listUser = [];
        this.shared = SharedService.getInstance();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.userService.findAll(page, count).subscribe(function (responseApi) {
            _this.listUser = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/user-new', id]);
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Tem certeza que deseja excluir?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.userService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Registro deletado'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    UserListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = i;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserListComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    UserListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DialogService,
            UserService,
            Router])
    ], UserListComponent);
    return UserListComponent;
}());
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map