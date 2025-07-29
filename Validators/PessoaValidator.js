const {body,validationResult}=require('express-validator');
const {cpf}=require('cpf-cnpj-validator');
const {param} = require('express-validator');

const PessoaValidator=[
  body('nome').trim().notEmpty().withMessage("O nome é obrigatório").isLength({min:3}).withMessage("O nome deve ser maior que 3 letras")
  .escape(),
  body('cpf').trim().notEmpty().withMessage("CPF é obrigatório").custom(value => {
      if (!cpf.isValid(value)) {
        throw new Error('CPF inválido.');
      }
      return true;
    }),
  body('salario').notEmpty().withMessage("Salário é obrigatório").isFloat({min: 0}).withMessage("Valor deve ser maior que 0"),
  (req,res,next)=> {
      const erros=validationResult(req);
       if (!erros.isEmpty()) {
      return res.status(422).json({ erros: erros.array() });
    }
    next();
      
  }
]
const PessoaIdValidator=[param('id')
    .notEmpty().withMessage('ID é obrigatório')
    .isInt({ gt: 0 }).withMessage('ID deve ser um número inteiro positivo')
    .toInt(),(req,res,next)=> {
      const erros=validationResult(req);
       if (!erros.isEmpty()) {
      return res.status(422).json({ erros: erros.array() });
    }
    next();
      
  } ]

module.exports={PessoaValidator,PessoaIdValidator};