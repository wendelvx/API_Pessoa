📄 API de Gerenciamento de Pessoas

Esta é uma API RESTful simples para gerenciamento de pessoas, desenvolvida com Node.js, Express, MySQL2 e Express Validator.

Ela permite cadastrar, listar, atualizar e excluir registros de pessoas no banco de dados, com validações de CPF e dados obrigatórios.

🚀 Tecnologias Utilizadas

Node.js

Express

MySQL2 (com Pool de conexões)

dotenv (variáveis de ambiente)

express-validator

cpf-cnpj-validator

CORS

📌 Endpoints

Método

Rota

Descrição

GET

/pessoa/

Lista todas as pessoas

POST

/pessoa/

Cadastra uma nova pessoa

PUT

/pessoa/:id

Atualiza uma pessoa existente

DELETE

/pessoa/:id

Exclui uma pessoa existente

✅ Validações

Nome: obrigatório, mínimo de 3 caracteres.

CPF: obrigatório, validado com cpf-cnpj-validator.

Salário: obrigatório, valor numérico maior que zero.

ID: nos endpoints de update e delete, o ID deve ser inteiro e positivo.

⚙️ Como Executar

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

Instale as dependências:

npm install

Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

PORT=3000
DB_HOST=localhost
DB_DATABASE=sua_base
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_CONNECTION_LIMIT=10

Execute o servidor:

npm start

O servidor estará rodando em http://localhost:3000/pessoa

🗂️ Estrutura de Pastas

📦 projeto/
 ├── Config/
 │   └── Connection.js
 ├── Controllers/
 │   └── PessoaController.js
 ├── Models/
 │   └── PessoaModel.js
 ├── Validators/
 │   └── PessoaValidator.js
 ├── Router/
 │   └── Router.js
 ├── index.js
 ├── .env
 ├── package.json

🔒 Observações

Use o Postman ou Insomnia para testar os endpoints.

É necessário ter uma tabela pessoa no banco de dados com os campos: id, nome, cpf, salario.

Lembre-se de proteger suas variáveis de ambiente: nunca suba o .env no GitHub.

✨ Autor

Desenvolvido por [Seu Nome]

