"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const veiculo_controller_1 = require("../controllers/veiculo.controller");
const router = express_1.default.Router();
// GET /veiculo → listar veículos
router.get("/", async (req, res) => {
    try {
        const veiculos = await (0, veiculo_controller_1.listAll)();
        res.status(200).json(veiculos);
    }
    catch (error) {
        res.status(500).json({ erro: error.message || "Erro ao buscar veículos" });
    }
});
// POST /veiculo → criar veículo
router.post("/", async (req, res) => {
    try {
        const novoVeiculo = await (0, veiculo_controller_1.create)(req.body);
        res.status(201).json(novoVeiculo);
    }
    catch (error) {
        res.status(400).json({ erro: error.message || "Erro ao cadastrar veículo" });
    }
});
// PUT /veiculo/:id → atualizar
router.put("/:id", (req, res) => {
    const { id } = req.params;
    (0, veiculo_controller_1.update)(Number(id), req.body)
        .then(veiculoAtualizado => {
        if (!veiculoAtualizado) {
            return res.status(404).json({ erro: "Veículo não encontrado" });
        }
        res.status(200).json({ mensagem: "Veículo atualizado com sucesso", veiculo: veiculoAtualizado });
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao atualizar veículo" });
    });
});
// DELETE /veiculo/:id → deletar
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    (0, veiculo_controller_1.remove)(Number(id))
        .then(sucesso => {
        if (!sucesso) {
            return res.status(404).json({ erro: "Veículo não encontrado" });
        }
        res.status(200).json({ mensagem: "Veículo deletado com sucesso" });
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao deletar veículo" });
    });
});
exports.default = router;
