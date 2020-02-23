import * as tslib_1 from "tslib";
import { TicketService } from './../../services/ticket.service';
import { Component } from '@angular/core';
import { Summary } from 'src/app/model/summary.model';
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(ticketService) {
        this.ticketService = ticketService;
        this.summary = new Summary();
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.summary()
            .subscribe(function (responseApi) {
            _this.summary = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    // classes default
    SummaryComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    SummaryComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    SummaryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-summary',
            templateUrl: './summary.component.html',
            styleUrls: ['./summary.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TicketService])
    ], SummaryComponent);
    return SummaryComponent;
}());
export { SummaryComponent };
//# sourceMappingURL=summary.component.js.map