# API de Gestão Comercial e Fiscal

API RESTful desenvolvida para gerenciar entidades de um sistema comercial, como produtos, clientes e notas fiscais. Este projeto está sendo construído com foco em boas práticas de arquitetura e desenvolvimento back-end com Node.js.

**Status do Projeto:** Em Desenvolvimento 🚧

---

## 🚀 Tecnologias Utilizadas

- **Back-end:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **ORM:** Sequelize
- **Autenticação:** (A ser implementado)
- **Testes:** (A ser implementado)

---

## 🏛️ Arquitetura e Padrões

O projeto segue uma arquitetura em camadas para garantir a separação de responsabilidades, facilitando a manutenção e escalabilidade.

- **Service Layer (Camada de Serviço):** A lógica de negócio é isolada em serviços (ex: `ProdutoService`), mantendo os controllers limpos e focados em lidar com requisições e respostas HTTP.
- **ORM Sequelize:** Abstrai a comunicação com o banco de dados PostgreSQL, utilizando *Models* para representar as tabelas e *Migrations* para versionar a estrutura do banco.

---

## ✨ Funcionalidades

### Módulo de Produtos
- [x] Criação de novos produtos (`POST /api/produtos`)
- [x] Listagem de todos os produtos (`GET /api/produtos`)
- [ ] Listagem de um produto por ID (`GET /api/produtos/:id`)
- [ ] Atualização de um produto (`PUT /api/produtos/:id`)
- [ ] Exclusão de um produto (`DELETE /api/produtos/:id`)

### Módulo de Clientes
- [ ] Estrutura inicial do CRUD de Clientes

### Módulo de Notas Fiscais
- [ ] Estrutura a ser definida

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-seu-repositorio>