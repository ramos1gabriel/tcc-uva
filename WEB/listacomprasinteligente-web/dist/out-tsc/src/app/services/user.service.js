import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_API } from './listacomprasinteligente.api';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(BACK_END_API + "/api/auth", user);
    };
    UserService.prototype.createOrUpdate = function (user) {
        if (user.id != null && user.id != '') {
            return this.http.put(BACK_END_API + "/api/usuario", user); //UPDATE
        }
        else {
            user.id = null;
            return this.http.post(BACK_END_API + "/api/usuario", user); //CREATE
        }
    };
    UserService.prototype.findAll = function (page, count) {
        return this.http.get(BACK_END_API + "/api/usuario/" + page + "/" + count);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(BACK_END_API + "/api/usuario/" + id);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(BACK_END_API + "/api/usuario/" + id);
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map