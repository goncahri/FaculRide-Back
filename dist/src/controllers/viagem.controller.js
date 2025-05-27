"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.listAll = void 0;
const viagem_model_1 = require("../models/viagem.model");
// Listar todos os veículos
const listAll = () => {
    return viagem_model_1.ViagemModel.findAll();
};
exports.listAll = listAll;
//criar nova Viagem
const create = (dados) => {
    return viagem_model_1.ViagemModel.create(dados);
};
exports.create = create;
// Atualizar veículo
const update = (id, dados) => {
    return viagem_model_1.ViagemModel.findByPk(id).then(viagem => {
        if (!viagem)
            return null;
        return viagem.update(dados);
    });
};
exports.update = update;
// Deletar veículo
const remove = (id) => {
    return viagem_model_1.ViagemModel.findByPk(id).then(viagem => {
        if (!viagem)
            return false;
        return viagem.destroy().then(() => true);
    });
};
exports.remove = remove;
