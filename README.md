# ⚙️ PROJETO ROOT

## 🔗 Sobre
- Este é um projeto backend desenvolvido com Node.js e Express no VScode, utilizando PostgreSQL como banco de dados, possui o objetivo de fazer o gerenciamento de usuários, produtos e categorias. Inclui funcionalidades de autenticação via JWT, permitindo operações CRUD (Criar, Ler, Atualizar e Deletar).

## 🚀 Visualização
Para visualizar o projeto em funcionamento, execute o servidor localmente. O servidor roda na porta padrão (geralmente 3000, 3001 ou conforme configurado no .env).

## ✨ Funcionalidades
- Autenticação de Usuários: Login e registro com JWT
- Gerenciamento de Usuários: CRUD completo
- Gerenciamento de Categorias: CRUD para categorias de produtos
- Gerenciamento de Produtos: CRUD para produtos, incluindo imagens e opções
- Middleware de Autenticação: Proteção de rotas sensíveis de tokens no auth.js

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- PostgreSQL
- Sequelize
- JWT (jsonwebtoken)
- CORS
- Nodemon
- Dotenv
- Bcryptjs

## 📦 Instalação
Para executar este projeto localmente:
- Clone o repositório (se aplicável) ou navegue até a pasta do projeto.
- Instale as dependências:
    npm init -y
    npm install
    npm install express
    npm install dotenv
    npm install sequelize
    npm install jsonwebtoken
    npm install bcryptjs
    npm install cors
    npm install --save-dev nodemon sequelize-cli
- Configure o banco de dados: Certifique-se de ter PostgreSQL instalado e rodando. Depois configure as variáveis de ambiente no arquivo .env (exemplo: DATABASE_URL, JWT_SECRET, etc.):
    PORT=3001
    JWT_SECRET=(sua-chave-secreta)
    JWT_EXPIRES_IN=1d
    DB_HOST=(host-do-banco)
    DB_USER=(usuario-do-banco)
    DB_PASSWORD=(senha-do-banco)
    DB_NAME=(nome-do-banco)
    DB_PORT=5432
    DB_DIALECT=postgres
- Inicie o servidor no terminal: npm run dev (o terminal utilizado no projeto foi o bash no VScode)
- Abra no navegador para visualizar a aplicação com o localhost configurado no VS.

## 👨‍💻 Identificação
- Este Projeto foi desenvolvido por **André Willamy Dos Santos Moraes** - Aluno do Curso Full Stack - Geração Tech 3.0

## ⚖️ Licença
- Este projeto foi desenvolvido em março de 2026, exclusivamente para fins educacionais como parte dos requisitos obrigatórios da **Geração Tech 3.0**.
- A permissão de uso e avaliação é restrita à equipe docente e de monitoria, sob orientação de **Nazaré Almeida**, visando a validação de competências em Back-end para a obtenção do título no curso **Full Stack**.