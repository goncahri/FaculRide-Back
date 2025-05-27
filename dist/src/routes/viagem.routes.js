"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viagem_controller_1 = require("../controllers/viagem.controller");
const router = express_1.default.Router();
//get viagem
router.get('/', async (req, res) => {
    try {
        const Viagem = await (0, viagem_controller_1.listAll)();
        res.status(200).json(Viagem);
    }
    catch (error) {
        res.status(501).json({ erro: error.message || "erro ao buscar viagens" });
    }
});
//post viagem
router.post("/", async (req, res) => {
    try {
        const novaViagem = await (0, viagem_controller_1.create)(req.body);
        res.status(201).json(novaViagem);
    }
    catch (error) {
        res.status(400).json({ erro: error.message || "Erro ao cadastrar veículo" });
    }
});
// PUT viagem
router.put("/:id", (req, res) => {
    const { id } = req.params;
    (0, viagem_controller_1.update)(Number(id), req.body)
        .then(viagemAtualizada => {
        if (!viagemAtualizada) {
            return res.status(404).json({ erro: "Viagem não encontrada" });
        }
        res.status(200).json({ mensagem: "Viagem atualizada com sucesso", viagem: viagemAtualizada });
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao atualizar viagem" });
    });
});
// DELETE /veiculo/:id → deletar
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    (0, viagem_controller_1.remove)(Number(id))
        .then(sucesso => {
        if (!sucesso) {
            return res.status(404).json({ erro: "Viagem não encontrada" });
        }
        res.status(200).json({ mensagem: "Viagem deletada com sucesso" });
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao deletar viagem" });
    });
});
exports.default = router;
