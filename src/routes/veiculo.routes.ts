import express from "express";
import { listAll, create, update, remove } from "../controllers/veiculo.controller";

const router = express.Router();

// GET /veiculo → listar veículos
router.get("/", async (req, res) => {
  try {
    const veiculos = await listAll();
    res.status(200).json(veiculos);
  } catch (error: any) {
    res.status(500).json({ erro: error.message || "Erro ao buscar veículos" });
  }
});

// POST /veiculo → criar veículo
router.post("/", async (req, res) => {
  try {
    const novoVeiculo = await create(req.body);
    res.status(201).json(novoVeiculo);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao cadastrar veículo" });
  }
});

// PUT /veiculo/:id → atualizar
router.put("/:id", (req, res) => {
  const { id } = req.params;

  update(Number(id), req.body)
    .then(veiculoAtualizado => {
      if (!veiculoAtualizado) {
        return res.status(404).json({ erro: "Veículo não encontrado" });
      }
      res.status(200).json({ mensagem: "Veículo atualizado com sucesso", veiculo: veiculoAtualizado });
    })
    .catch(error => {
      res.status(500).json({ erro: error.message || "Erro ao atualizar veículo" });
    });
});

// DELETE /veiculo/:id → deletar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  remove(Number(id))
    .then(sucesso => {
      if (!sucesso) {
        return res.status(404).json({ erro: "Veículo não encontrado" });
      }
      res.status(200).json({ mensagem: "Veículo deletado com sucesso" });
    })
    .catch(error => {
      res.status(500).json({ erro: error.message || "Erro ao deletar veículo" });
    });
});

export default router;

