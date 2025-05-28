"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const avaliacao_routes_1 = __importDefault(require("./routes/avaliacao.routes"));
const veiculo_routes_1 = __importDefault(require("./routes/veiculo.routes"));
const viagem_routes_1 = __importDefault(require("./routes/viagem.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/usuario", usuario_routes_1.default);
app.use("/api/avaliacao", avaliacao_routes_1.default);
app.use("/api/veiculo", veiculo_routes_1.default);
app.use("/api/viagem", viagem_routes_1.default);
// Exporta para uso pelo Vercel ou Render
exports.default = app;
