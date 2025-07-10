const controller=require('../Controllers/PessoaController');
const express=require('express');
const {PessoaValidator,PessoaIdValidator}=require('../Validators/PessoaValidator');
const {validationResult}=require('express-validator');
const router=express.Router();



router.get("/",controller.getall);
router.post("/",PessoaValidator,controller.inserir);
router.put("/:id",PessoaIdValidator,PessoaValidator,controller.atualizar);
router.delete("/:id",PessoaIdValidator,controller.excluir);

module.exports=router;