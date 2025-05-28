import { Request, Response } from "express";
import { UsuarioModel } from "../models/usuario.model";
import { VeiculoModel } from "../models/veiculo.model";
import {
  Iusuario,
  IRetornoCadastroUsuario,
  IusuarioFiltros
} from "../interfaces/Iusuario";
import { IVeiculo } from "../interfaces/Iveiculo";

// Cadastro com validação condicional de CNH e criação de veículo
export const cadastrarUsuario = async (usuario: Iusuario): Promise<IRetornoCadastroUsuario> => {
  const tiposPermitidos = ["passageiro", "motorista"];

  if (!tiposPermitidos.includes(usuario.tipoUsuario)) {
    throw new Error("Tipo de usuário inválido");
  }

  if (usuario.tipoUsuario === "motorista" && !usuario.cnh) {
    throw new Error("Motoristas precisam informar o número da CNH");
  }

  const novoUsuario = await UsuarioModel.create(usuario);

  // Criação do veículo caso seja motorista e os dados venham
  const veiculo = (usuario as any).veiculo as IVeiculo;
  if (usuario.tipoUsuario === "motorista" && veiculo) {
    await VeiculoModel.create({
      ...veiculo,
      idUsuario: novoUsuario.idUsuario
    });
  }

  return { id: novoUsuario.idUsuario };
};

// Filtro opcional
export const filtrarUsuarios = async (filtros: IusuarioFiltros): Promise<Iusuario[]> => {
  const usuarios = await UsuarioModel.findAll({
    where: {
      ...(filtros.nome && { nome: filtros.nome }),
      ...(filtros.email && { email: filtros.email }),
      ...(filtros.tipoUsuario && { tipoUsuario: filtros.tipoUsuario })
    }
  });
  return usuarios;
};

// Login de usuário
export const loginUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "E-mail e senha são obrigatórios" });
  }

  try {
    const usuario = await UsuarioModel.findOne({ where: { email, senha } });

    if (!usuario) {
      return res.status(401).json({ erro: "E-mail ou senha inválidos" });
    }

    // Retorna dados básicos
    return res.status(200).json({
      id: usuario.idUsuario,
      nome: usuario.nome,
      email: usuario.email,
      tipoUsuario: usuario.tipoUsuario
    });
  } catch (error: any) {
    return res.status(500).json({ erro: error.message || "Erro ao fazer login" });
  }
};
