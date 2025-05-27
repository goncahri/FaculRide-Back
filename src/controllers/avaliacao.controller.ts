import { AvaliacaoModel } from "../models/avaliacao.model";
import { IAvaliacao } from "../interfaces/Iavaliacao";

// Listar todas as avaliações
export const listAll = async (): Promise<IAvaliacao[]> => {
  return await AvaliacaoModel.findAll();
};

// Criar nova avaliação
export const create = async (dados: IAvaliacao): Promise<IAvaliacao> => {
  // Validação simples
  if (!dados.Comentario || dados.Comentario.trim().length < 3) {
    throw new Error("O comentário deve conter pelo menos 3 caracteres.");
  }

  if (dados.Estrelas && !["1", "2", "3", "4", "5"].includes(dados.Estrelas)) {
    throw new Error("As estrelas devem estar entre 1 e 5.");
  }

  const nova = await AvaliacaoModel.create(dados);
  return nova;
};

// Atualizar avaliação
export const update = async (id: number, dados: IAvaliacao): Promise<IAvaliacao | null> => {
  const avaliacao = await AvaliacaoModel.findByPk(id);
  if (!avaliacao) return null;

  // Validação mínima
  if (dados.Comentario && dados.Comentario.trim().length < 3) {
    throw new Error("O comentário deve conter pelo menos 3 caracteres.");
  }

  await avaliacao.update(dados);
  return avaliacao;
};

// Remover avaliação
export const remove = async (id: number): Promise<boolean> => {
  const avaliacao = await AvaliacaoModel.findByPk(id);
  if (!avaliacao) return false;

  await avaliacao.destroy();
  return true;
};

