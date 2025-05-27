import{ILogAcesso} from "../interfaces/ILogAcesso";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Atributos criacionais
type logAcessoCreationalAttributes = Optional<ILogAcesso, "idUsuario">;

export class logAcessoModel extends Model<ILogAcesso>{
    public idUsuario!: number;
    public dataAcesso! : Date;
    public tipoUsuario!: "passageiro" | "motorista"; 
}

logAcessoModel.init({
    idUsuario:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"idUsuario"
    },
    dataAcesso:{
        allowNull:false,
        type:DataTypes.DATE,
        field:"dataAcesso"
    },
    tipoUsuario:{
        type: DataTypes.ENUM("passageiro", "motorista"),
        allowNull: false,
        field: "tipoUsuario"
    },
},{
    sequelize,
    tableName: "logAcesso",
    timestamps: false})