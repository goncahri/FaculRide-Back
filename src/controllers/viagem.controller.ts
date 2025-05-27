import { Iviagem } from "../interfaces/Iviagem";
import { ViagemModel } from "../models/viagem.model";

// Listar todos os veículos
export const listAll = (): Promise<Iviagem[]> => {
  return ViagemModel.findAll();
};

//criar nova Viagem
export const create = (dados: Iviagem): Promise<Iviagem> => {
  return ViagemModel.create(dados);
};

// Atualizar veículo
export const update = (id: number, dados: Iviagem): Promise<Iviagem | null> => {
  return ViagemModel.findByPk(id).then(viagem => {
    if (!viagem) return null;
    return viagem.update(dados);
  });
};

// Deletar veículo
export const remove = (id: number): Promise<boolean> => {
  return ViagemModel.findByPk(id).then(viagem => {
    if (!viagem) return false;
    return viagem.destroy().then(() => true);
  });
};
