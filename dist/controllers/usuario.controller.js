"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = exports.filtrarUsuarios = exports.cadastrarUsuario = void 0;
const usuario_model_1 = require("../models/usuario.model");
// Cadastro com validação condicional de CNH
const cadastrarUsuario = async (usuario) => {
    const tiposPermitidos = ["passageiro", "motorista"];
    if (!tiposPermitidos.includes(usuario.tipoUsuario)) {
        throw new Error("Tipo de usuário inválido");
    }
    if (usuario.tipoUsuario === "motorista" && !usuario.cnh) {
        throw new Error("Motoristas precisam informar o número da CNH");
    }
    const novoUsuario = await usuario_model_1.UsuarioModel.create(usuario);
    return { id: novoUsuario.idUsuario };
};
exports.cadastrarUsuario = cadastrarUsuario;
// Filtro opcional
const filtrarUsuarios = async (filtros) => {
    const usuarios = await usuario_model_1.UsuarioModel.findAll({
        where: {
            ...(filtros.nome && { nome: filtros.nome }),
            ...(filtros.email && { email: filtros.email }),
            ...(filtros.tipoUsuario && { tipoUsuario: filtros.tipoUsuario }),
        }
    });
    return usuarios;
};
exports.filtrarUsuarios = filtrarUsuarios;
// Login de usuário
const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ erro: "E-mail e senha são obrigatórios" });
    }
    try {
        const usuario = await usuario_model_1.UsuarioModel.findOne({ where: { email, senha } });
        if (!usuario) {
            return res.status(401).json({ erro: "E-mail ou senha inválidos" });
        }
        // Retorna dados básicos (pode incluir mais conforme necessidade)
        return res.status(200).json({
            id: usuario.idUsuario,
            nome: usuario.nome,
            email: usuario.email,
            tipoUsuario: usuario.tipoUsuario
        });
    }
    catch (error) {
        return res.status(500).json({ erro: error.message || "Erro ao fazer login" });
    }
};
exports.loginUsuario = loginUsuario;
