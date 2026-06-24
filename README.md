# CATEGORIAS
- GET /categorias
Lista todas as categorias

- POST /categorias
Cria uma nova categoria

- GET /categorias/:id
Busca uma categoria pelo ID

- PUT /categorias/:id
Atualiza uma categoria

- DELETE /categorias/:id
Remove uma categoria

# PRATOS

- GET /pratos
Lista todos os pratos (com categoria)

- GET /pratos?categoria=:id
Filtra pratos por categoria

- POST /pratos
Cria um novo prato

- GET /pratos/:id
Busca um prato pelo ID

- PUT /pratos/:id
Atualiza um prato

- DELETE /pratos/:id
Remove um prato

# banco de dados

## categoria
- id: pk
- nome: varchar
- ativo: boolean
- createAt: datatime

## pratos

- id: pk
- nome: varchar
- preco. decimal(10,2)
- categoria: fk
- createdAt: datetime

## exemplo de categoria e pratos
- entradas(bruschetta ao tomate,bolinho de bacalhau)
- sopas(Caldo Verde,creme de abóbora)
- pratos principais(picanha na brasa, costela assada)
- saladas(seasar salad, salada caprese)