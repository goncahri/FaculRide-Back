"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logAcesso_controller_1 = require("../controllers/logAcesso.controller");
const router = express_1.default.Router();
//get logAcesso
router.get('/', async (req, res) => {
    try {
        const logAcesso = (0, logAcesso_controller_1.listAll)();
        res.status(200).json(logAcesso);
    }
    catch (error) {
        res.status(501).json({ erro: error.message || "erro ao buscar log de Acesso" });
    }
});
//post logAcesso
router.post('/', async (req, res) => {
    try {
        const novoLogAcesso = await (0, logAcesso_controller_1.create)(req.body);
        res.status(201).json(novoLogAcesso);
    }
    catch (error) {
        res.status(501).json({ erro: error.message || "erro ao cadastrar no logo de acesso" });
    }
});
//PUT logAcesso
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    (0, logAcesso_controller_1.update)(Number(id), req.body)
        .then(logAtualizado => {
        if (!logAtualizado) {
            return res.status(404).json({ erro: "log nao encontrado" });
        }
        res.status(201).json({ mensagem: "log atualizado com sucesso", logAcesso: logAtualizado });
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao atualizar log de acesso" });
    });
});
//Delete LogAcesso
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    (0, logAcesso_controller_1.remove)(Number(id))
        .then(sucesso => {
        if (!sucesso) {
            return res.status(404).json({ erro: "Log não encontrado" });
        }
        res.status(200).json({ mensagem: "log Deletado com sucesso" });
    })
        .catch(error => {
        res.status(500).json({ erro: error.mensagem || "Erro ao deletar Log de Acesso" });
    });
});
exports.default = router;
