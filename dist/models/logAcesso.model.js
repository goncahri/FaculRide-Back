"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAcessoModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class logAcessoModel extends sequelize_1.Model {
}
exports.logAcessoModel = logAcessoModel;
logAcessoModel.init({
    idUsuario: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: "idUsuario"
    },
    dataAcesso: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: "dataAcesso"
    },
    tipoUsuario: {
        type: sequelize_1.DataTypes.ENUM("passageiro", "motorista"),
        allowNull: false,
        field: "tipoUsuario"
    },
}, {
    sequelize: database_1.default,
    tableName: "logAcesso",
    timestamps: false
});
