const pessoa=require('../Models/PessoaModel');
const validar=require('../Validators/PessoaValidator');

const PessoaController={
    async getall(req,res){
        try {
            const resposta=await pessoa.buscar();
        return res.status(200).json(resposta);
        } catch (error) {
            return res.status(500).json({error:`Ocorreu um erro: ${error.message}`});
        }
    },
    async inserir(req,res){
        const {nome,cpf,salario}=req.body;
        const dados={nome,cpf,salario};
        try {
            const resposta=await pessoa.inserir(dados);

            return res.status(201).json({sucesso:"Pessoa criada",id: resposta.insertId});
        } catch (error) {
            return res.status(500).json({error: `Ocorreu um erro ${error.message}`});
            
        }

    },
    async excluir(req,res){
        const id=req.params.id;
        try {
            const resultado=await pessoa.excluir(id);
            if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
            return res.status(200).json({sucesso: `Usuário excluído`});
        } catch (error) {
            return res.status(500).json({error: `Usuário não excluído`});
            
        }
    },
    async atualizar(req,res){
        const {nome,salario}=req.body;
        const id=req.params.id;
        const dados={nome,salario,id};
        try {
            const resultado=await pessoa.atualizar(dados);
            if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });}
            return res.status(200).json({sucesso: `Usuário atualizado com sucesso`});
        } catch (error) {
            return res.status(500).json({error:`Ocorreu um erro: ${error.message}`});
        }
    }
}

module.exports=PessoaController;