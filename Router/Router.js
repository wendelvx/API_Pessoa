const controller=require('../Controllers/PessoaController');
const express=require('express');
const {PessoaValidator,PessoaIdValidator}=require('../Validators/PessoaValidator');
const {validationResult}=require('express-validator');
const router=express.Router();

function validar(req,res,next) {
    const erros=validationResult(req);
     if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  next();
    
}

router.get("/",controller.getall);
router.post("/",PessoaValidator,validar,controller.inserir);
router.put("/:id",PessoaIdValidator,PessoaValidator,validar,controller.atualizar);
router.delete("/:id",PessoaIdValidator,validar,controller.excluir);

module.exports=router;