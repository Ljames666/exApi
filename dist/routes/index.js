"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.taskRoutes = void 0;
const tasks_routes_1 = __importDefault(require("./tasks/tasks.routes"));
exports.taskRoutes = tasks_routes_1.default;
const users_routes_1 = __importDefault(require("./users/users.routes"));
exports.userRoutes = users_routes_1.default;
