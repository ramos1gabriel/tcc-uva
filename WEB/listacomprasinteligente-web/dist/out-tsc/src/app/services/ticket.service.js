import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACK_END_API } from './listacomprasinteligente.api';
var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
    }
    TicketService.prototype.createOrUpdate = function (ticket) {
        if (ticket.id != null && ticket.id != '') {
            return this.http.put(BACK_END_API + "/api/ticket", ticket);
        }
        else {
            ticket.id = null;
            ticket.status = 'Novo';
            return this.http.post(BACK_END_API + "/api/ticket", ticket);
        }
    };
    TicketService.prototype.findAll = function (page, count) {
        return this.http.get(BACK_END_API + "/api/ticket/" + page + "/" + count);
    };
    TicketService.prototype.findById = function (id) {
        return this.http.get(BACK_END_API + "/api/ticket/" + id);
    };
    TicketService.prototype.delete = function (id) {
        return this.http.delete(BACK_END_API + "/api/ticket/" + id);
    };
    TicketService.prototype.findByParams = function (page, count, assignedToMe, t) {
        t.number = t.number == null ? 0 : t.number;
        t.title = t.title == '' ? 'uninformed' : t.title;
        t.status = t.status == '' ? 'uninformed' : t.status;
        t.priority = t.priority == '' ? 'uninformed' : t.priority;
        console.log(BACK_END_API + "/api/ticket/" + page + "/" + count + "/" + t.number + "/" + t.title + "/" + t.status + "/" + t.priority + "/" + assignedToMe);
        return this.http.get(BACK_END_API + "/api/ticket/" + page + "/" + count + "/" + t.number + "/" + t.title + "/" + t.status + "/" + t.priority + "/" + assignedToMe);
    };
    TicketService.prototype.changeStatus = function (status, ticket) {
        return this.http.put(BACK_END_API + "/api/ticket/" + ticket.id + "/" + status, ticket);
    };
    TicketService.prototype.summary = function () {
        return this.http.get(BACK_END_API + "/api/ticket/summary");
    };
    TicketService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TicketService);
    return TicketService;
}());
export { TicketService };
//# sourceMappingURL=ticket.service.js.map