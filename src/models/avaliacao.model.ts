import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { IAvaliacao } from "../interfaces/Iavaliacao";

// Define quais atributos são opcionais na criação
type AvaliacaoCreationAttributes = Optional<IAvaliacao, "ID_Avaliacao">;

export class AvaliacaoModel extends Model<IAvaliacao, AvaliacaoCreationAttributes> implements IAvaliacao {
  public ID_Avaliacao!: number;
  public Comentario!: string;
  public Estrelas?: string;
}

AvaliacaoModel.init({
  ID_Avaliacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: "ID_Avaliacao"
  },
  Comentario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: "Comentario"
  },
  Estrelas: {
    type: DataTypes.CHAR(5),
    allowNull: true,
    field: "Estrelas"
  }
}, {
  sequelize,
  tableName: "Avaliacao",
  timestamps: false
});
