import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import { Iviagem } from "../interfaces/Iviagem";

type ViagemCreationAttributes = Optional<Iviagem, "idViagem">;

export class ViagemModel extends Model <Iviagem, ViagemCreationAttributes>{
    public idViagem!:number;
    public partidaMotorista!:Date;
    public partidaPassageiro!:Date;
    public pontoDestino!:Date;
    public horarioSaida!:Date;
    public horarioEntrada!:Date;
    public idVeiculo!:number; //chave estrangeira
    public idUsuario!:number; //chave estrangeira
}

ViagemModel.init({
    idViagem:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        field:"idViagem"
    },
    partidaMotorista:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:"partidaMotorista",
    },
    partidaPassageiro:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:"partidaPassageiro",
    },
    pontoDestino:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:"pontoDestino",
    },
     horarioSaida:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:"horarioSaida",
     },
     horarioEntrada:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        field:"horarioEntrada",
     },
     idVeiculo:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"idVeiculo",
     },
     idUsuario:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"idUsuario"
     },
},{
    sequelize,
    tableName: "viagem",
    timestamps: false

});