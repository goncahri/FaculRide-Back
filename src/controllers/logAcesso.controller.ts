import { ILogAcesso } from "../interfaces/ILogAcesso";
import { logAcessoModel } from "../models/logAcesso.model";

//listar todos os logs de acesso
export const listAll = () : Promise <ILogAcesso[] > =>{
    return logAcessoModel.findAll();
}

//criar log de acesso
export const create = (dados:ILogAcesso):Promise<ILogAcesso> =>{
    return logAcessoModel.create(dados);
}

// Atualizar log de acesso
export const update = (id: number, dados: ILogAcesso): Promise<ILogAcesso | null> => {
  return logAcessoModel.findByPk(id).then(logAcesso => {
    if (!logAcesso) return null;
    return logAcesso.update(dados);
  });
};

//deletar Log de Acesso
export const remove = (id:number):Promise<boolean> => {
  return logAcessoModel.findByPk(id).then(logAcesso => {
    if (!logAcesso) return false;
    return logAcesso.destroy().then(() => true);
  });
};