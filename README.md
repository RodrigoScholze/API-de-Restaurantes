# API-de-Restaurantes

##### Instale o Banco de dados MongoDB.
##### Crie uma base de dados chamada "DatasetRestaurants" com uma collection chamada "restaurants".
##### Importe o arquivo "restaurants.json" na collection "restaurants".
##### Execute o comando "npm install" para instalar as dependências do projeto.
##### Compile os arquivos TypeScript para JavaScript com o comando "tsc" (por padrão os arquivos ficarão no diretório "/dist").
##### Execute o arquivo "main.js" que se encontra dentro do diretório "/dist".
##### A API estará disponivel no endereço "http://localhost:3000/".

##### Acesse "http://localhost:3000/name/Nome_do_restaurante" para retornar o restaurante solicitado.
##### Acesse "http://localhost:3000/cuisine/Tipo_de_cozinha" para retornar os restaurantes da cozinha solicitada.
##### Acesse "http://localhost:3000/borough/Nome_do_distrito" para retornar os restaurantes do distrito solicitado.
##### Acesse "http://localhost:3000/street/Nome_da_rua" para retornar os restaurantes da rua solicitada.

##### Acesse utilizando o método "DELETE" o endereço "http://localhost:3000/delete/Nome_do_restaurante" para deletar do banco de dados o registro solicitado.

##### Envie o conjunto de dados do exemplo abaixo utilizando o método "POST" através do endereço "http://localhost:3000/register" para cadastrar um novo restaurante no banco de dados.

```
{
    "address": {
        "building": "123",
        "coord": [10, 20],
        "street": "Nome da rua",
        "zipcode": "111222333"
    },
    "borough": "Nome do distrito",
    "cuisine": "Tipo de cozinha",
    "grades":[{
                "date": "2020-01-01",
                "grade": "A",
                "score": 1
             }],
    "name": "Nome do restaurante",
    "restaurant_id": "ID do restaurante"
}
