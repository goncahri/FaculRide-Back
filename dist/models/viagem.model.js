"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViagemModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class ViagemModel extends sequelize_1.Model {
}
exports.ViagemModel = ViagemModel;
ViagemModel.init({
    idViagem: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "idViagem"
    },
    partidaMotorista: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        field: "partidaMotorista",
    },
    partidaPassageiro: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        field: "partidaPassageiro",
    },
    pontoDestino: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        field: "pontoDestino",
    },
    horarioSaida: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        field: "horarioSaida",
    },
    horarioEntrada: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        field: "horarioEntrada",
    },
    idVeiculo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: "idVeiculo",
    },
    idUsuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: "idUsuario"
    },
}, {
    sequelize: database_1.default,
    tableName: "viagem",
    timestamps: false
});
