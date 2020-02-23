import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new EventEmitter();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        return this.user.email != '';
        /*if(sessionStorage.getItem("currentUser") == null){
          return false;
        }
        return true;*/
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.service.js.map