"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.listAll = void 0;
const logAcesso_model_1 = require("../models/logAcesso.model");
//listar todos os logs de acesso
const listAll = () => {
    return logAcesso_model_1.logAcessoModel.findAll();
};
exports.listAll = listAll;
//criar log de acesso
const create = (dados) => {
    return logAcesso_model_1.logAcessoModel.create(dados);
};
exports.create = create;
// Atualizar log de acesso
const update = (id, dados) => {
    return logAcesso_model_1.logAcessoModel.findByPk(id).then(logAcesso => {
        if (!logAcesso)
            return null;
        return logAcesso.update(dados);
    });
};
exports.update = update;
//deletar Log de Acesso
const remove = (id) => {
    return logAcesso_model_1.logAcessoModel.findByPk(id).then(logAcesso => {
        if (!logAcesso)
            return false;
        return logAcesso.destroy().then(() => true);
    });
};
exports.remove = remove;
