"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor() {
        this.listUsers = [];
        this.listTasks = [];
    }
}
const apiStorage = new Storage();
exports.default = apiStorage;
