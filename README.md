# CRUD de Tarefas - Back-End

Este projeto implementa uma API RESTful para o gerenciamento de tarefas (CRUD) utilizando Node.js e Express, com um banco de dados MySQL. A aplicação permite criar, ler, atualizar e deletar tarefas por meio de requisições HTTP.

## Funcionalidades
- **Criar tarefa**: Endpoint para criação de uma nova tarefa.
- **Listar tarefas**: Endpoint para listar todas as tarefas cadastradas no banco de dados.
- **Atualizar tarefa**: Endpoint para editar uma tarefa existente.
- **Deletar tarefa**: Endpoint para excluir uma tarefa.

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MySQL**

---


## Requisitos para Execução
1. **Node.js** instalado (versão 16 ou superior).
2. **MySQL** configurado e rodando.
3. Gerenciador de pacotes npm ou yarn.
4. Ferramenta para testes de API (ex.: Postman, Insomnia ou cURL).

---

## Configuração e Execução da Aplicação

### 1. Clonar o Repositório
```bash
# Clone o repositório para sua máquina local
https://github.com/RodrigoBatis/APITaskManagement.git

# Acesse o diretório do projeto
cd nome-do-repositorio
```

### 2. Instalar Dependências
Instale as dependências necessárias utilizando npm ou yarn:
```bash
npm install
# ou
yarn install
```


### 3. Configure no arquivo db.js as credencias do seu banco de dados Mysql:
```db.js
  host: 'localhost',
  user: 'SEU_USUARIO',
  password: 'SUA_SENHA',
  database: 'taskmanagement',
```

### 4. Iniciar a Aplicação
Execute o seguinte comando para iniciar o servidor:
```bash
npm start
# ou
yarn start
```

A aplicação será iniciada na porta configurada (padrão: 8080). Você pode acessá-la em `http://localhost:8080`.

---

## Rotas da API

### 1. Criar uma Tarefa
**POST** `/tasks`
```json
{
  "title": "Nome da Tarefa",
  "description": "Descrição da Tarefa",
  "status": 1
}
```
- **status**: `1` para concluído e `0` para pendente.

### 2. Listar Tarefas
**GET** `/tasks`
- Retorna todas as tarefas cadastradas.

### 3. Atualizar uma Tarefa
**PUT** `/tasks/:id`
```json
{
  "title": "Nome Atualizado",
  "description": "Descrição Atualizada",
  "status": 0
}
```

### 4. Deletar uma Tarefa
**DELETE** `/tasks/:id`
- Substitua `:id` pelo ID da tarefa a ser excluída.



