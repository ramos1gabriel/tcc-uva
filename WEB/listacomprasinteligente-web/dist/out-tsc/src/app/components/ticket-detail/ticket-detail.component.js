import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
var TicketDetailComponent = /** @class */ (function () {
    function TicketDetailComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new Ticket('', 0, '', '', '', '', null, null, '', null);
        this.shared = SharedService.getInstance();
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketDetailComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.changeStatus = function (status) {
        var _this = this;
        this.ticketService.changeStatus(status, this.ticket)
            .subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
            _this.showMessage({
                type: 'success',
                text: 'Status alterado'
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketDetailComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketDetailComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    TicketDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ticket-detail',
            templateUrl: './ticket-detail.component.html',
            styleUrls: ['./ticket-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TicketService,
            ActivatedRoute])
    ], TicketDetailComponent);
    return TicketDetailComponent;
}());
export { TicketDetailComponent };
//# sourceMappingURL=ticket-detail.component.js.map