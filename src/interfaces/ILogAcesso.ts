export interface ILogAcesso {
    idUsuario:number;
    dataAcesso:Date;
    tipoUsuario:"passageiro" | "motorista";
};