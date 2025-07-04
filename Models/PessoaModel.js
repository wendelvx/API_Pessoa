const db = require('../Config/Connection');

const Pessoa = {
  async buscar() {
    try {
      const sql = 'SELECT * FROM pessoa';
      const [result] = await db.execute(sql);
      return result;
    } catch (error) {
      console.error(`[PessoaModel.Buscar] Erro ao buscar pessoas:`, error);
      throw new Error('Erro ao buscar pessoas no banco de dados.');
    }
  },

  async inserir(dados) {
    try {
      const sql = 'INSERT INTO pessoa (nome, cpf, salario) VALUES (?,?,?)';
      const [result] = await db.execute(sql, [dados.nome, dados.cpf, dados.salario]);
      return result;
    } catch (error) {
      console.error(`[PessoaModel.inserir] Erro ao inserir pessoa:`, error);
      throw new Error('Erro ao inserir pessoa no banco de dados.');
    }
  },

  async excluir(id) {
    try {
      const sql = 'DELETE FROM pessoa WHERE id=?';
      const [result] = await db.execute(sql, [id]);
      return result;
    } catch (error) {
      console.error(`[PessoaModel.excluir] Erro ao excluir pessoa com id ${id}:`, error);
      throw new Error('Erro ao excluir pessoa no banco de dados.');
    }
  },

  async atualizar(dados) {
    try {
      const sql = 'UPDATE pessoa SET nome=?, salario=? WHERE id=?';
      const [result] = await db.execute(sql, [dados.nome, dados.salario, dados.id]);
      return result;
    } catch (error) {
      console.error(`[PessoaModel.update] Erro ao atualizar pessoa com id ${dados.id}:`, error);
      throw new Error('Erro ao atualizar pessoa no banco de dados.');
    }
  }
};

module.exports=Pessoa;
