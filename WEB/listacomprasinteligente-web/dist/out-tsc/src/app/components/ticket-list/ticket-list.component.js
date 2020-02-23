import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Ticket } from 'src/app/model/ticket.model';
import { DialogService } from 'src/app/services/dialog.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(dialogService, ticketService, router) {
        this.dialogService = dialogService;
        this.ticketService = ticketService;
        this.router = router;
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new Ticket('', null, '', '', '', '', null, null, '', null); //??
        this.shared = SharedService.getInstance();
    }
    TicketListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.ticketService.findAll(page, count).subscribe(function (responseApi) {
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.filter = function () {
        var _this = this;
        console.log(' this.assignedToMe --> ', this.assignedToMe);
        console.log(' number --> ', this.assignedToMe);
        this.page = 0;
        this.count = 5;
        this.ticketService.findByParams(this.page, this.count, this.assignedToMe, this.ticketFilter)
            .subscribe(function (responseApi) {
            _this.ticketFilter.title = _this.ticketFilter.title == 'uninformed' ? '' : _this.ticketFilter.title;
            _this.ticketFilter.number = _this.ticketFilter.number == 0 ? null : _this.ticketFilter.number;
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['content']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.cleanFilter = function () {
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new Ticket('', null, '', '', '', '', null, null, '', null);
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.edit = function (id) {
        this.router.navigate(['/ticket-new', id]);
    };
    TicketListComponent.prototype.detail = function (id) {
        this.router.navigate(['/ticket-detail', id]);
    };
    TicketListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Tem certeza que deseja excluir?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.ticketService.delete(id).subscribe(function (responseApi) {
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
    //PAGINACAO
    TicketListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = i;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketListComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    TicketListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ticket-list',
            templateUrl: './ticket-list.component.html',
            styleUrls: ['./ticket-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DialogService,
            TicketService,
            Router])
    ], TicketListComponent);
    return TicketListComponent;
}());
export { TicketListComponent };
//# sourceMappingURL=ticket-list.component.js.map