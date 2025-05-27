"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class AvaliacaoModel extends sequelize_1.Model {
}
exports.AvaliacaoModel = AvaliacaoModel;
AvaliacaoModel.init({
    ID_Avaliacao: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "ID_Avaliacao"
    },
    Comentario: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        field: "Comentario"
    },
    Estrelas: {
        type: sequelize_1.DataTypes.CHAR(5),
        allowNull: true,
        field: "Estrelas"
    }
}, {
    sequelize: database_1.default,
    tableName: "Avaliacao",
    timestamps: false
});
