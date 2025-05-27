"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.listAll = void 0;
const veiculo_model_1 = require("../models/veiculo.model");
// Listar todos os veículos
const listAll = () => {
    return veiculo_model_1.VeiculoModel.findAll();
};
exports.listAll = listAll;
// Criar novo veículo
const create = (dados) => {
    return veiculo_model_1.VeiculoModel.create(dados);
};
exports.create = create;
// Atualizar veículo
const update = (id, dados) => {
    return veiculo_model_1.VeiculoModel.findByPk(id).then(veiculo => {
        if (!veiculo)
            return null;
        return veiculo.update(dados);
    });
};
exports.update = update;
// Deletar veículo
const remove = (id) => {
    return veiculo_model_1.VeiculoModel.findByPk(id).then(veiculo => {
        if (!veiculo)
            return false;
        return veiculo.destroy().then(() => true);
    });
};
exports.remove = remove;
