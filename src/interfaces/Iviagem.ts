export interface Iviagem{
    idViagem:number,
    partidaMotorista:Date,
    partidaPassageiro:Date,
    pontoDestino:Date,
    horarioSaida:Date,
    horarioEntrada:Date,
    idVeiculo:number, //chave estrangeira
    idUsuario:number, //chave estrangeira 
}