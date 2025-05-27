"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const usuario_model_1 = require("../models/usuario.model");
const router = express_1.default.Router();
// POST /usuario → Cadastrar novo usuário
router.post("/", async (req, res) => {
    const usuario = req.body;
    try {
        const respostaCadastro = await (0, usuario_controller_1.cadastrarUsuario)(usuario);
        res.status(201).json(respostaCadastro);
    }
    catch (error) {
        res.status(400).json({ erro: error.message || "Erro ao cadastrar usuário" });
    }
});
// ✅ POST /usuario/login → Login do usuário
router.post("/login", (req, res) => {
    (0, usuario_controller_1.loginUsuario)(req, res).catch((err) => {
        console.error("Erro no login:", err);
        res.status(500).json({ erro: "Erro interno no login" });
    });
});
// GET /usuario → Listar ou filtrar usuários
router.get("/", async (req, res) => {
    const filtros = req.query;
    try {
        const usuariosFiltrados = await (0, usuario_controller_1.filtrarUsuarios)(filtros);
        res.status(200).json(usuariosFiltrados);
    }
    catch (error) {
        res.status(500).json({ erro: error.message || "Erro ao buscar usuários" });
    }
});
// PUT /usuario/:id → Atualizar usuário
router.put("/:id", (req, res) => {
    const { id } = req.params;
    usuario_model_1.UsuarioModel.findByPk(id)
        .then(usuario => {
        if (!usuario)
            return res.status(404).json({ erro: "Não encontrado" });
        return usuario.update(req.body)
            .then(() => res.json({ mensagem: "Atualizado" }));
    })
        .catch(error => res.status(500).json({ erro: error.message }));
});
// DELETE /usuario/:id → Remover usuário
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    usuario_model_1.UsuarioModel.findByPk(id)
        .then(usuario => {
        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        return usuario.destroy()
            .then(() => res.status(200).json({ mensagem: "Usuário deletado com sucesso" }));
    })
        .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao deletar usuário" });
    });
});
exports.default = router;
