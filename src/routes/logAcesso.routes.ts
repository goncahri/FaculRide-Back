import express from "express";
import { create, listAll, remove, update } from "../controllers/logAcesso.controller";
import { error } from "console";



const router = express.Router();

//get logAcesso
router.get('/', async (req, res) => {
    try{
        const logAcesso = listAll();
        res.status(200).json(logAcesso);
    }catch (error:any){
        res.status(501).json({erro: error.message||"erro ao buscar log de Acesso"})
    }
})

//post logAcesso
router.post('/', async (req, res) => {
    try{
        const novoLogAcesso = await create(req.body);
        res.status(201).json(novoLogAcesso)
    } catch (error: any){
        res.status(501).json({erro:error.message || "erro ao cadastrar no logo de acesso"})
    }
})

//PUT logAcesso
router.put('/:id', async (req , res) => {
    const {id} = req.params;

    update(Number(id), req.body)
    .then(logAtualizado => {
        if (!logAtualizado){
            return res.status(404).json({erro:"log nao encontrado"})
    }
    res.status(201).json({mensagem: "log atualizado com sucesso", logAcesso:logAtualizado});
    })
    .catch(error => {
        res.status(500).json({ erro: error.message || "Erro ao atualizar log de acesso" });
    }) ;
});

//Delete LogAcesso
router.delete("/:id",(req, res)=> {
    const {id} = req.params;

    remove(Number(id))
        .then(sucesso => {
            if (!sucesso) {
                return res.status(404).json({erro:"Log não encontrado"});
            }
            res.status(200).json({mensagem:"log Deletado com sucesso"});
        })
        .catch(error => {
            res.status(500).json({erro:error.mensagem || "Erro ao deletar Log de Acesso"})
        })
})

export default router;