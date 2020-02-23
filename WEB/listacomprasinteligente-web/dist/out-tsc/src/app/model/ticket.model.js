var Ticket = /** @class */ (function () {
    function Ticket(id, number, title, status, priority, image, user, assignedUser, date, changes) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.status = status;
        this.priority = priority;
        this.image = image;
        this.user = user;
        this.assignedUser = assignedUser;
        this.date = date;
        this.changes = changes;
    }
    return Ticket;
}());
export { Ticket };
//# sourceMappingURL=ticket.model.js.map