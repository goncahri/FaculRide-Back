"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// api/index.ts
const app_1 = __importDefault(require("./app")); // Está importando app.ts que está dentro da pasta api
exports.default = app_1.default; // Exporta direto para Vercel
