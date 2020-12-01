"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Setting the port of aplication server
app.set('port', 3000);
// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {
    console.log(`Ther server is running on port ${app.get('port')}`);
});
