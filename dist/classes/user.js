"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.uid = (0, uuid_1.v4)();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.default = User;
