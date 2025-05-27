import express from "express";
import { listAll, create, update, remove } from "../controllers/viagem.controller";

const router = express.Router();

//get viagem
router.get('/', async (req, res ) => {
    try{
        const Viagem = await listAll();
        res.status(200).json(Viagem);
    } catch (error:any){
        res.status(501).json({erro: error.message||"erro ao buscar viagens"})
    }
});

//post viagem
router.post("/", async (req, res) => {
  try {
    const novaViagem = await create(req.body);
    res.status(201).json(novaViagem);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao cadastrar veículo" });
  }
});

// PUT viagem
router.put("/:id", (req, res) => {
  const { id } = req.params;

  update(Number(id), req.body)
    .then(viagemAtualizada => {
      if (!viagemAtualizada) {
        return res.status(404).json({ erro: "Viagem não encontrada" });
      }
      res.status(200).json({ mensagem: "Viagem atualizada com sucesso", viagem: viagemAtualizada });
    })
    .catch(error => {
      res.status(500).json({ erro: error.message || "Erro ao atualizar viagem" });
    });
});

// DELETE /veiculo/:id → deletar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  remove(Number(id))
    .then(sucesso => {
      if (!sucesso) {
        return res.status(404).json({ erro: "Viagem não encontrada" });
      }
      res.status(200).json({ mensagem: "Viagem deletada com sucesso" });
    })
    .catch(error => {
      res.status(500).json({ erro: error.message || "Erro ao deletar viagem" });
    });
});

export default router;