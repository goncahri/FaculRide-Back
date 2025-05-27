"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const avaliacao_model_1 = require("../models/avaliacao.model");
const router = express_1.default.Router();
// GET /avaliacao → listar todas
router.get("/", (req, res) => {
    avaliacao_model_1.AvaliacaoModel.findAll()
        .then(avaliacoes => res.status(200).json(avaliacoes))
        .catch(error => res.status(500).json({ erro: error.message || "Erro ao buscar avaliações" }));
});
// POST /avaliacao → criar
router.post("/", (req, res) => {
    avaliacao_model_1.AvaliacaoModel.create(req.body)
        .then(nova => res.status(201).json(nova))
        .catch(error => res.status(400).json({ erro: error.message || "Erro ao criar avaliação" }));
});
// PUT /avaliacao/:id → atualizar
router.put("/:id", (req, res) => {
    const { id } = req.params;
    avaliacao_model_1.AvaliacaoModel.findByPk(id)
        .then(avaliacao => {
        if (!avaliacao) {
            return res.status(404).json({ erro: "Avaliação não encontrada" });
        }
        return avaliacao.update(req.body).then(() => res.status(200).json({
            mensagem: "Avaliação atualizada com sucesso",
            avaliacao,
        }));
    })
        .catch(error => res.status(500).json({ erro: error.message || "Erro ao atualizar avaliação" }));
});
// DELETE /avaliacao/:id → remover
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    avaliacao_model_1.AvaliacaoModel.findByPk(id)
        .then(avaliacao => {
        if (!avaliacao) {
            return res.status(404).json({ erro: "Avaliação não encontrada" });
        }
        return avaliacao.destroy().then(() => res.status(200).json({ mensagem: "Avaliação deletada com sucesso" }));
    })
        .catch(error => res.status(500).json({ erro: error.message || "Erro ao deletar avaliação" }));
});
exports.default = router;
