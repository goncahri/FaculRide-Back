import { VeiculoModel } from "../models/veiculo.model";
import { IVeiculo } from "../interfaces/Iveiculo";

// Listar todos os veículos
export const listAll = (): Promise<IVeiculo[]> => {
  return VeiculoModel.findAll();
};

// Criar novo veículo
export const create = (dados: IVeiculo): Promise<IVeiculo> => {
  return VeiculoModel.create(dados);
};

// Atualizar veículo
export const update = (id: number, dados: IVeiculo): Promise<IVeiculo | null> => {
  return VeiculoModel.findByPk(id).then(veiculo => {
    if (!veiculo) return null;
    return veiculo.update(dados);
  });
};

// Deletar veículo
export const remove = (id: number): Promise<boolean> => {
  return VeiculoModel.findByPk(id).then(veiculo => {
    if (!veiculo) return false;
    return veiculo.destroy().then(() => true);
  });
};
