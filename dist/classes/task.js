"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Task {
    constructor(title, detail, userId) {
        this.title = title;
        this.detail = detail;
        this.userId = userId;
        this.uid = (0, uuid_1.v4)();
        this.title = title;
        this.detail = detail;
        this.userId = userId;
    }
}
exports.default = Task;
