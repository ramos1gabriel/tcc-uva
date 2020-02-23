import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Confirmar?'));
        });
    };
    DialogService = tslib_1.__decorate([
        Injectable()
    ], DialogService);
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=dialog.service.js.map