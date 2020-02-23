import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from 'src/app/model/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
var TicketNewComponent = /** @class */ (function () {
    function TicketNewComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new Ticket('', 0, '', '', '', '', null, null, '', null);
        this.shared = SharedService.getInstance();
    }
    TicketNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.ticketService.createOrUpdate(this.ticket).subscribe(function (responseApi) {
            _this.ticket = new Ticket('', 0, '', '', '', '', null, null, '', null);
            var ticket = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: ticket.title + " cadastrado com sucesso"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    //GRAVAR IMAGEM
    TicketNewComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files[0].size > 2000000) {
            this.showMessage({
                type: 'error',
                text: 'Tamanho máximo da imagem: 2 MB'
            });
        }
        else {
            this.ticket.image = '';
            var reader = new FileReader();
            reader.onloadend = function (e) {
                _this.ticket.image = reader.result; //CAST string
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TicketNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib_1.__decorate([
        ViewChild("form"),
        tslib_1.__metadata("design:type", NgForm)
    ], TicketNewComponent.prototype, "form", void 0);
    TicketNewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ticket-new',
            templateUrl: './ticket-new.component.html',
            styleUrls: ['./ticket-new.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TicketService,
            ActivatedRoute])
    ], TicketNewComponent);
    return TicketNewComponent;
}());
export { TicketNewComponent };
//# sourceMappingURL=ticket-new.component.js.map