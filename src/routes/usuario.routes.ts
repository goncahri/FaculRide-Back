import express, { Request, Response } from "express";
import {
  cadastrarUsuario,
  filtrarUsuarios,
  loginUsuario // ✅ Adicionado corretamente
} from "../controllers/usuario.controller";
import { Iusuario, IusuarioFiltros } from "../interfaces/Iusuario";
import { UsuarioModel } from "../models/usuario.model";

const router = express.Router();

// POST /usuario → Cadastrar novo usuário
router.post("/", async (req: Request, res: Response) => {
  const usuario = req.body as Iusuario;

  try {
    const respostaCadastro = await cadastrarUsuario(usuario);
    res.status(201).json(respostaCadastro);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao cadastrar usuário" });
  }
});

// ✅ POST /usuario/login → Login do usuário
router.post("/login", (req: Request, res: Response) => {
  loginUsuario(req, res).catch((err) => {
    console.error("Erro no login:", err);
    res.status(500).json({ erro: "Erro interno no login" });
  });
});

// GET /usuario → Listar ou filtrar usuários
router.get("/", async (req: Request, res: Response) => {
  const filtros = req.query as unknown as IusuarioFiltros;

  try {
    const usuariosFiltrados = await filtrarUsuarios(filtros);
    res.status(200).json(usuariosFiltrados);
  } catch (error: any) {
    res.status(500).json({ erro: error.message || "Erro ao buscar usuários" });
  }
});

// PUT /usuario/:id → Atualizar usuário
router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  UsuarioModel.findByPk(id)
    .then(usuario => {
      if (!usuario) return res.status(404).json({ erro: "Não encontrado" });

      return usuario.update(req.body)
        .then(() => res.json({ mensagem: "Atualizado" }));
    })
    .catch(error => res.status(500).json({ erro: error.message }));
});

// DELETE /usuario/:id → Remover usuário
router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  UsuarioModel.findByPk(id)
    .then(usuario => {
      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      return usuario.destroy()
        .then(() => res.status(200).json({ mensagem: "Usuário deletado com sucesso" }));
    })
    .catch(error => {
      res.status(500).json({ erro: error.message || "Erro ao deletar usuário" });
    });
});

export default router;
